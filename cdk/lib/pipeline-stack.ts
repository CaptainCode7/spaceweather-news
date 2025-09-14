import { Stack, StackProps, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as pipelines from "aws-cdk-lib/pipelines";
import * as iam from "aws-cdk-lib/aws-iam";
import { AuthStack } from "./auth-stack";
import { CdkStack } from "./cdk-stack";
import { AppConfig, getConfig } from "./config";

export interface PipelineStackProps extends StackProps {
    repoOwner: string;
    repoName: string;
    branch?: string;
}

export class SpaceweatherStage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps & { config: AppConfig }) {
        super(scope, id, props);

        const { config } = props;

        // Deploy Auth Stack
        const authStack = new AuthStack(this, "AuthStack", {
            config,
            stackName: `spaceweather-auth-${config.environment}`,
        });

        // Deploy API Stack with auth integration
        new CdkStack(this, "ApiStack", {
            config,
            userPool: authStack.userPool,
            stackName: `spaceweather-api-${config.environment}`,
        });
    }
}

export class PipelineStack extends Stack {
    constructor(scope: Construct, id: string, props: PipelineStackProps) {
        super(scope, id, props);

        const { repoOwner, repoName, branch = "main" } = props;

        // Create the pipeline
        const pipeline = new pipelines.CodePipeline(this, "Pipeline", {
            pipelineName: "SpaceweatherPipeline",
            synth: new pipelines.ShellStep("Synth", {
                input: pipelines.CodePipelineSource.gitHub(`${repoOwner}/${repoName}`, branch),
                commands: [
                    "npm install -g pnpm",
                    "pnpm install",
                    "cd cdk",
                    "pnpm install",
                    "pnpm build",
                    "pnpm test",
                    "pnpm cdk synth",
                ],
                primaryOutputDirectory: "cdk/cdk.out",
            }),
            dockerEnabledForSynth: true,
            dockerEnabledForSelfMutation: true,
        });

        // Add development stage
        const devConfig = getConfig("development");
        pipeline.addStage(
            new SpaceweatherStage(this, "Development", {
                config: devConfig,
                env: {
                    account: devConfig.aws.account,
                    region: devConfig.aws.region,
                },
            }),
            {
                pre: [
                    new pipelines.ShellStep("PreDev", {
                        commands: [
                            "echo 'Deploying to Development environment'",
                            "cd nextjs-app && pnpm install && pnpm build:webpack",
                        ],
                    }),
                ],
                post: [
                    new pipelines.ShellStep("PostDev", {
                        commands: [
                            "echo 'Development deployment completed'",
                            "cd nextjs-app && pnpm test",
                        ],
                    }),
                ],
            }
        );

        // Add staging stage with manual approval
        const stagingConfig = getConfig("staging");
        pipeline.addStage(
            new SpaceweatherStage(this, "Staging", {
                config: stagingConfig,
                env: {
                    account: stagingConfig.aws.account,
                    region: stagingConfig.aws.region,
                },
            }),
            {
                pre: [
                    new pipelines.ManualApprovalStep("ApproveStaging", {
                        comment: "Please review and approve deployment to staging",
                    }),
                ],
                post: [
                    new pipelines.ShellStep("PostStaging", {
                        commands: [
                            "echo 'Staging deployment completed'",
                            "echo 'Running integration tests'",
                            "cd nextjs-app && pnpm test",
                        ],
                    }),
                ],
            }
        );

        // Add production stage with manual approval
        const prodConfig = getConfig("production");
        pipeline.addStage(
            new SpaceweatherStage(this, "Production", {
                config: prodConfig,
                env: {
                    account: prodConfig.aws.account,
                    region: prodConfig.aws.region,
                },
            }),
            {
                pre: [
                    new pipelines.ManualApprovalStep("ApproveProduction", {
                        comment: "Please review and approve deployment to production",
                    }),
                ],
                post: [
                    new pipelines.ShellStep("PostProduction", {
                        commands: [
                            "echo 'Production deployment completed'",
                            "echo 'Running smoke tests'",
                        ],
                    }),
                ],
            }
        );

        // Grant necessary permissions to the pipeline
        const pipelineRole = pipeline.synthProject.role;
        if (pipelineRole) {
            pipelineRole.addManagedPolicy(
                iam.ManagedPolicy.fromAwsManagedPolicyName("PowerUserAccess")
            );
        }
    }
}