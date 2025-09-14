#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import { getConfig } from '../lib/config';

const app = new cdk.App();

// Get the environment from context or default to development
const environment = app.node.tryGetContext('environment') || 'development';
const config = getConfig(environment);

new CdkStack(app, 'CdkStack', {
  config,
  env: {
    account: config.aws.account,
    region: config.aws.region,
  },
});