import { Environment } from 'aws-cdk-lib';

export interface AppConfig {
    environment: string;
    aws: {
        account: string;
        region: string;
    };
    domain?: {
        domainName: string;
        certificateArn: string;
    };
    auth: {
        userPoolName: string;
        userPoolClientName: string;
        allowedOrigins: string[];
    };
    api: {
        throttleRateLimit: number;
        throttleBurstLimit: number;
    };
}

export const getConfig = (env: string): AppConfig => {
    const baseConfig: AppConfig = {
        environment: env,
        aws: {
            account: process.env.CDK_DEFAULT_ACCOUNT || '',
            region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
        },
        auth: {
            userPoolName: `spaceweather-users-${env}`,
            userPoolClientName: `spaceweather-client-${env}`,
            allowedOrigins: [],
        },
        api: {
            throttleRateLimit: 100,
            throttleBurstLimit: 200,
        },
    };

    switch (env) {
        case 'development':
        case 'dev':
            return {
                ...baseConfig,
                auth: {
                    ...baseConfig.auth,
                    allowedOrigins: ['http://localhost:3000'],
                },
                api: {
                    throttleRateLimit: 50,
                    throttleBurstLimit: 100,
                },
            };

        case 'staging':
        case 'stage':
            return {
                ...baseConfig,
                auth: {
                    ...baseConfig.auth,
                    allowedOrigins: ['https://staging.spaceweather.example.com'],
                },
                api: {
                    throttleRateLimit: 200,
                    throttleBurstLimit: 400,
                },
            };

        case 'production':
        case 'prod':
            return {
                ...baseConfig,
                auth: {
                    ...baseConfig.auth,
                    allowedOrigins: ['https://spaceweather.example.com'],
                },
                api: {
                    throttleRateLimit: 500,
                    throttleBurstLimit: 1000,
                },
            };

        default:
            return baseConfig;
    }
};

export const getCurrentEnvironment = (): string => {
    return process.env.ENVIRONMENT || process.env.NODE_ENV || 'development';
};

export const getAwsEnvironment = (): Environment => {
    const config = getConfig(getCurrentEnvironment());
    return {
        account: config.aws.account,
        region: config.aws.region,
    };
};