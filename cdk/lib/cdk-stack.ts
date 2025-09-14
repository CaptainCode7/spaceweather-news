import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AppConfig } from './config';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export interface CdkStackProps extends cdk.StackProps {
  config: AppConfig;
  userPool?: cognito.UserPool;
  stackName?: string;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Access config via props.config
    // Access userPool via props.userPool

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
