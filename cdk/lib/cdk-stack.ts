import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { AppConfig } from './config';

export interface CdkStackProps extends cdk.StackProps {
  config: AppConfig;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkStackProps) {
    super(scope, id, props);

    // Create Lambda function for API backend
    const apiLambda = new lambda.Function(this, 'SpaceWeatherApiFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event, context) {
          console.log('Event: ', JSON.stringify(event, null, 2));
          
          const path = event.path || '';
          
          // Handle different endpoints
          if (path.includes('/hello')) {
            return {
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify({ message: 'Hello from Space Weather API!' })
            };
          } else if (path.includes('/time')) {
            return {
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify({ 
                message: 'Current time response', 
                time: new Date().toISOString() 
              })
            };
          } else if (path.includes('/local-echo')) {
            return {
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify({ 
                message: 'Echo from API Gateway', 
                timestamp: new Date().toISOString(),
                event: event
              })
            };
          }
          
          // Default response
          return {
            statusCode: 404,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ message: 'Endpoint not found' })
          };
        }
      `),
    });

    // Create API Gateway
    const api = new apigateway.RestApi(this, 'SpaceWeatherApi', {
      restApiName: 'Space Weather API',
      description: 'API for Space Weather monitoring application',
      deployOptions: {
        stageName: props.config.environment,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
    });

    // Add routes to the API
    const apiResource = api.root.addResource('api');

    // Add /hello endpoint
    const helloResource = apiResource.addResource('hello');
    helloResource.addMethod('GET', new apigateway.LambdaIntegration(apiLambda));

    // Add /time endpoint
    const timeResource = apiResource.addResource('time');
    timeResource.addMethod('GET', new apigateway.LambdaIntegration(apiLambda));

    // Add /local-echo endpoint
    const echoResource = apiResource.addResource('local-echo');
    echoResource.addMethod('GET', new apigateway.LambdaIntegration(apiLambda));
    echoResource.addMethod('POST', new apigateway.LambdaIntegration(apiLambda));

    // Output the API URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'The URL of the API Gateway',
      exportName: `${props.config.environment}-api-url`,
    });
  }
}
