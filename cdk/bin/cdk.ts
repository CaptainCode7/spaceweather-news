#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import { getConfig } from '../lib/config';

const app = new cdk.App();

// Resolve deployment environment from ENVIRONMENT/NODE_ENV or cdk context
const envFromProcess = process.env.ENVIRONMENT || process.env.NODE_ENV;
const envFromContext = app.node.tryGetContext('environment') || app.node.tryGetContext('env');
const environment = (envFromProcess || envFromContext || 'development').toString();
const config = getConfig(environment);

new CdkStack(app, 'CdkStack', {
  config,
  env: {
    account: config.aws.account,
    region: config.aws.region,
  },
});