import { Stack, StackProps, CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as iam from "aws-cdk-lib/aws-iam";
import { AppConfig } from "./config";

export interface AuthStackProps extends StackProps {
    config: AppConfig;
}

export class AuthStack extends Stack {
    public readonly userPool: cognito.UserPool;
    public readonly userPoolClient: cognito.UserPoolClient;
    public readonly identityPool: cognito.CfnIdentityPool;

    constructor(scope: Construct, id: string, props: AuthStackProps) {
        super(scope, id, props);

        const { config } = props;

        // Create Cognito User Pool
        this.userPool = new cognito.UserPool(this, "UserPool", {
            userPoolName: config.auth.userPoolName,
            selfSignUpEnabled: true,
            userVerification: {
                emailSubject: "Verify your email for Spaceweather News",
                emailBody: "Hello {username}, Thanks for signing up to Spaceweather News! Your verification code is {####}",
                emailStyle: cognito.VerificationEmailStyle.CODE,
            },
            signInAliases: {
                email: true,
                username: false,
            },
            autoVerify: {
                email: true,
            },
            standardAttributes: {
                email: {
                    required: true,
                    mutable: true,
                },
                givenName: {
                    required: false,
                    mutable: true,
                },
                familyName: {
                    required: false,
                    mutable: true,
                },
            },
            passwordPolicy: {
                minLength: 8,
                requireLowercase: true,
                requireUppercase: true,
                requireDigits: true,
                requireSymbols: false,
            },
            accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
            removalPolicy: config.environment === 'production'
                ? RemovalPolicy.RETAIN
                : RemovalPolicy.DESTROY,
        });

        // Create User Pool Client
        this.userPoolClient = new cognito.UserPoolClient(this, "UserPoolClient", {
            userPool: this.userPool,
            userPoolClientName: config.auth.userPoolClientName,
            generateSecret: false, // For web applications
            authFlows: {
                userPassword: true,
                userSrp: true,
                custom: true,
            },
            supportedIdentityProviders: [
                cognito.UserPoolClientIdentityProvider.COGNITO,
            ],
            oAuth: {
                flows: {
                    authorizationCodeGrant: true,
                    implicitCodeGrant: false,
                },
                scopes: [
                    cognito.OAuthScope.EMAIL,
                    cognito.OAuthScope.OPENID,
                    cognito.OAuthScope.PROFILE,
                ],
                callbackUrls: config.auth.allowedOrigins.map(origin => `${origin}/api/auth/callback/cognito`),
                logoutUrls: config.auth.allowedOrigins,
            },
            preventUserExistenceErrors: true,
        });

        // Create Identity Pool for authenticated users
        this.identityPool = new cognito.CfnIdentityPool(this, "IdentityPool", {
            identityPoolName: `spaceweather_identity_pool_${config.environment}`,
            allowUnauthenticatedIdentities: false,
            cognitoIdentityProviders: [
                {
                    clientId: this.userPoolClient.userPoolClientId,
                    providerName: this.userPool.userPoolProviderName,
                },
            ],
        });

        // Create IAM roles for authenticated users
        const authenticatedRole = new iam.Role(this, "AuthenticatedRole", {
            assumedBy: new iam.FederatedPrincipal(
                "cognito-identity.amazonaws.com",
                {
                    StringEquals: {
                        "cognito-identity.amazonaws.com:aud": this.identityPool.ref,
                    },
                    "ForAnyValue:StringLike": {
                        "cognito-identity.amazonaws.com:amr": "authenticated",
                    },
                },
                "sts:AssumeRoleWithWebIdentity"
            ),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole"),
            ],
        });

        // Attach roles to identity pool
        new cognito.CfnIdentityPoolRoleAttachment(this, "IdentityPoolRoleAttachment", {
            identityPoolId: this.identityPool.ref,
            roles: {
                authenticated: authenticatedRole.roleArn,
            },
        });

        // Outputs
        new CfnOutput(this, "UserPoolId", {
            value: this.userPool.userPoolId,
            description: "Cognito User Pool ID",
        });

        new CfnOutput(this, "UserPoolClientId", {
            value: this.userPoolClient.userPoolClientId,
            description: "Cognito User Pool Client ID",
        });

        new CfnOutput(this, "IdentityPoolId", {
            value: this.identityPool.ref,
            description: "Cognito Identity Pool ID",
        });

        new CfnOutput(this, "UserPoolDomain", {
            value: `https://${this.userPool.userPoolId}.auth.${Stack.of(this).region}.amazoncognito.com`,
            description: "Cognito User Pool Domain",
        });
    }
}