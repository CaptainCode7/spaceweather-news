#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import { PipelineStack } from '../lib/pipeline-stack';
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

// Optionally deploy the CDK Pipeline if requested via context
const deployPipeline = app.node.tryGetContext('deploy-pipeline');
if (deployPipeline && `${deployPipeline}`.toLowerCase() === 'true') {
  const repoOwner = app.node.tryGetContext('repo-owner') || process.env.GITHUB_REPOSITORY?.split('/')[0] || 'CaptainCode7';
  const repoName = app.node.tryGetContext('repo-name') || process.env.GITHUB_REPOSITORY?.split('/')[1] || 'spaceweather-news';

  new PipelineStack(app, 'SpaceweatherPipelineStack', {
    repoOwner,
    repoName,
    env: {
      account: config.aws.account,
      region: config.aws.region,
    },
  });
}