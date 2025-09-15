# CI/CD Pipeline Documentation

This document describes the CI/CD (Continuous Integration/Continuous Deployment) pipeline for the Spaceweather News application.
A CI/CD pipeline automates the process of testing and deploying your code whenever changes are made. This saves time and reduces errors compared to manual deployments.

The CI/CD pipeline is implemented using GitHub Actions and provides:
- **Automated testing and linting** - Checks code quality automatically
- **Multi-environment deployments** (dev, staging, production) - Deploys to different environments based on which branch you push to
- **Manual approval gates for production** - Requires human approval before deploying to production
- **CDK Pipeline option for advanced workflows** - More powerful AWS-native pipeline option

## Pipeline Structure
### Workflow Triggers

The pipeline is triggered by different Git actions:
- **Push to `develop` branch**: Automatically deploys to development environment
  - Example: When you run `git push origin develop`
- **Push to `main` branch**: Automatically deploys to staging, then waits for approval before deploying to production
  - Example: After a pull request is merged to main
- **Pull requests to `main`**: Only runs tests to verify code quality, doesn't deploy
  - Example: When you create a PR from develop to main
- **Commit message contains `[deploy-pipeline]`**: Special trigger to deploy the AWS CDK Pipeline
  - Example: `git commit -m "Update infrastructure [deploy-pipeline]"`

### Jobs (Pipeline Steps)
#### 1. Test and Lint (`test`)
This job verifies your code quality and runs on every push and PR:
- **Code checkout** - Gets the latest code from GitHub
- **Node.js and pnpm setup** - Prepares the environment
- **Dependencies installation with caching** - Gets all required packages (faster with cache)
- **Linting (ESLint)** - Checks for code style and common errors
- **Unit tests (Jest)** - Runs automated tests to verify functionality
- **Next.js build** - Makes sure the frontend builds correctly
- **CDK synthesis** - Validates the AWS infrastructure code
#### 2. Deploy to Development (`deploy-dev`)
This job deploys your code to a development environment when you push to the `develop` branch:
- Deploys to AWS development environment
- No manual approval required (happens automatically)
- Uses development configuration (less restrictive settings)

#### 3. Deploy to Staging (`deploy-staging`)
#### 4. Deploy to Production (`deploy-prod`)
This job deploys your code to the production environment after staging is deployed:
- **Requires manual approval** - Someone must approve the deployment
- Deploys to AWS production environment
- Uses production configuration (strict settings)

#### 5. Deploy CDK Pipeline (`deploy-pipeline`)
## Environment Configuration

### Authentication Note

> **Important**: As described in the AUTHENTICATION.md document, authentication features have been removed from the project to simplify the architecture. While the configuration still references auth components, they are currently inactive and will not be deployed.
### GitHub Secrets Required

Add these to your repository settings:

```
AWS_ACCESS_KEY_ID          # AWS access key for deployment
AWS_SECRET_ACCESS_KEY      # AWS secret access key
```

### GitHub Variables Required
Add these to your repository settings:

```
AWS_REGION                 # AWS region (e.g., us-east-1)
AWS_ACCOUNT_ID            # 12-digit AWS account ID
```

### Environment-Specific Configuration
Each environment uses different configurations defined in `cdk/lib/config.ts`:

#### Development
...
### Manual Deployment

You can deploy manually using these commands:

```bash
# Deploy to development
pnpm cdk:deploy:dev

# Deploy to staging
pnpm cdk:deploy:staging

# Deploy to production (with confirmation)
pnpm cdk:deploy:prod

# Deploy CDK Pipeline
pnpm cdk:deploy:pipeline
```

### Bootstrap (One-time setup)

```bash
# Bootstrap CDK in your AWS account/region
pnpm bootstrap
```

## Approval Process

### Production Deployments
Production deployments require manual approval:

1. Staging deployment completes successfully
2. GitHub creates a pending approval request
3. Authorized team members can review and approve
4. Production deployment proceeds after approval

### Approval Configuration
## CDK Pipeline (Advanced)

The CDK Pipeline provides a more sophisticated AWS-native CI/CD solution:

### Features
...
## Monitoring and Alerting

### GitHub Actions Monitoring

- View workflow runs in the Actions tab
- Configure notifications for failed deployments
- Monitor deployment frequency and success rates

### AWS Monitoring
...
## Troubleshooting

### Common Issues

#### 1. AWS Credentials
```
Error: AWS credentials not configured
```
**Solution**: Check GitHub secrets are properly set

#### 2. CDK Bootstrap
```
Error: Bootstrap stack not found
```
**Solution**: Run `pnpm bootstrap` first

#### 3. Permission Denied
```
Error: Access denied for operation
```
**Solution**: Check IAM permissions for deployment role

#### 4. Environment Variables
```
Error: Required environment variable not set
```
**Solution**: Check GitHub variables configuration

### Debug Steps
...
### Getting Help

- Check deployment logs in GitHub Actions
- Review AWS CloudFormation stack events
- Enable CDK debug mode: `CDK_DEBUG=true`
- Use AWS CLI to verify resource states
- Check the [Glossary](GLOSSARY.md) for definitions
- If you get stuck, open an issue on GitHub or ask in project discussions
# CI/CD Pipeline Documentation

This document describes the CI/CD (Continuous Integration/Continuous Deployment) pipeline for the Spaceweather News application.

## Overview

A CI/CD pipeline automates the process of testing and deploying your code whenever changes are made. This saves time and reduces errors compared to manual deployments.

The CI/CD pipeline is implemented using GitHub Actions and provides:

- **Automated testing and linting** - Checks code quality automatically
- **Multi-environment deployments** (dev, staging, production) - Deploys to different environments based on which branch you push to
- **Manual approval gates for production** - Requires human approval before deploying to production
- **CDK Pipeline option for advanced workflows** - More powerful AWS-native pipeline option

## Pipeline Structure

### Workflow Triggers

The pipeline is triggered by different Git actions:

- **Push to `develop` branch**: Automatically deploys to development environment
  - Example: When you run `git push origin develop`
- **Push to `main` branch**: Automatically deploys to staging, then waits for approval before deploying to production
  - Example: After a pull request is merged to main
- **Pull requests to `main`**: Only runs tests to verify code quality, doesn't deploy
  - Example: When you create a PR from develop to main
- **Commit message contains `[deploy-pipeline]`**: Special trigger to deploy the AWS CDK Pipeline
  - Example: `git commit -m "Update infrastructure [deploy-pipeline]"`

### Jobs (Pipeline Steps)

#### 1. Test and Lint (`test`)
This job verifies your code quality and runs on every push and PR:
- **Code checkout** - Gets the latest code from GitHub
- **Node.js and pnpm setup** - Prepares the environment
- **Dependencies installation with caching** - Gets all required packages (faster with cache)
- **Linting (ESLint)** - Checks for code style and common errors
- **Unit tests (Jest)** - Runs automated tests to verify functionality
- **Next.js build** - Makes sure the frontend builds correctly
- **CDK synthesis** - Validates the AWS infrastructure code

#### 2. Deploy to Development (`deploy-dev`)
This job deploys your code to a development environment when you push to the `develop` branch:
- Deploys to AWS development environment
- No manual approval required (happens automatically)
- Uses development configuration (less restrictive settings)

#### 3. Deploy to Staging (`deploy-staging`)
This job deploys your code to a staging environment when you push to the `main` branch:
- Deploys to AWS staging environment
- No manual approval required (happens automatically)
- Uses staging configuration (similar to production)

#### 4. Deploy to Production (`deploy-prod`)
This job deploys your code to the production environment after staging is deployed:
- **Requires manual approval** - Someone must approve the deployment
- Deploys to AWS production environment
- Uses production configuration (strict settings)

#### 5. Deploy CDK Pipeline (`deploy-pipeline`)
This special job deploys an AWS-native pipeline when you include `[deploy-pipeline]` in your commit message:
- Deploys the CDK Pipeline stack
- Creates automated AWS CodePipeline (AWS's pipeline service)
- One-time setup for advanced workflows

## Environment Configuration

### Authentication Note

> **Important**: As described in the AUTHENTICATION.md document, authentication features have been removed from the project to simplify the architecture. While the configuration still references auth components, they are currently inactive and will not be deployed.

### GitHub Secrets Required

Add these to your repository settings:

```
AWS_ACCESS_KEY_ID          # AWS access key for deployment
AWS_SECRET_ACCESS_KEY      # AWS secret access key
```

### GitHub Variables Required

Add these to your repository settings:

```
AWS_REGION                 # AWS region (e.g., us-east-1)
AWS_ACCOUNT_ID            # 12-digit AWS account ID
```

### Environment-Specific Configuration

Each environment uses different configurations defined in `cdk/lib/config.ts`:

#### Development
- Environment: `development`
- Auto-deployment from `develop` branch
- Relaxed throttling limits
- Local development CORS origins

#### Staging  
- Environment: `staging`
- Auto-deployment from `main` branch
- Production-like configuration
- Staging domain CORS origins

#### Production
- Environment: `production` 
- Manual approval required
- Strict throttling limits
- Production domain CORS origins
- Resource retention policies

## Deployment Commands

### Manual Deployment

You can deploy manually using these commands:

```bash
# Deploy to development
pnpm cdk:deploy:dev

# Deploy to staging
pnpm cdk:deploy:staging

# Deploy to production (with confirmation)
pnpm cdk:deploy:prod

# Deploy CDK Pipeline
pnpm cdk:deploy:pipeline
```

### Bootstrap (One-time setup)

```bash
# Bootstrap CDK in your AWS account/region
pnpm bootstrap
```

## Approval Process

### Production Deployments

Production deployments require manual approval:

1. Staging deployment completes successfully
2. GitHub creates a pending approval request
3. Authorized team members can review and approve
4. Production deployment proceeds after approval

### Approval Configuration

Configure approvers in your repository:

1. Go to Settings → Environments
2. Add "production" environment
3. Configure required reviewers
4. Set approval timeout

## CDK Pipeline (Advanced)

The CDK Pipeline provides a more sophisticated AWS-native CI/CD solution:

### Features
- Multi-stage deployment with approval gates
- Self-mutating pipeline
- Integration with AWS CodePipeline
- Advanced deployment strategies
- Better cost optimization

### Deployment

Deploy the pipeline with:

```bash
cd cdk
pnpm cdk deploy SpaceweatherPipelineStack \
  --require-approval never \
  -c deploy-pipeline=true \
  -c repo-owner=your-github-username \
  -c repo-name=tutorial-1
```

### Pipeline Stages

1. **Source**: GitHub repository monitoring
2. **Build & Test**: Synthesis and testing
3. **Development**: Auto-deploy to dev environment
4. **Staging**: Deploy to staging with pre/post hooks
5. **Production**: Deploy to production with manual approval

## Monitoring and Alerting

### GitHub Actions Monitoring

- View workflow runs in the Actions tab
- Configure notifications for failed deployments
- Monitor deployment frequency and success rates

### AWS Monitoring

- CloudWatch logs for deployment details
- CDK deployment events
- Resource-level monitoring

### Notifications

Configure Slack/email notifications:

```yaml
# Add to workflow
- name: Notify on failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## Security Best Practices

### Secrets Management
- Use GitHub secrets for sensitive data
- Rotate AWS credentials regularly
- Use least-privilege IAM policies
- Enable AWS CloudTrail logging

### Branch Protection
- Require PR reviews for main branch
- Require status checks to pass
- Restrict direct pushes to main
- Enable branch deletion protection

### Environment Isolation
- Separate AWS accounts for production
- Use different IAM roles per environment
- Implement network segmentation
- Enable AWS Config for compliance

## Troubleshooting

### Common Issues

#### 1. AWS Credentials
```
Error: AWS credentials not configured
```
**Solution**: Check GitHub secrets are properly set

#### 2. CDK Bootstrap
```
Error: Bootstrap stack not found
```
**Solution**: Run `pnpm bootstrap` first

#### 3. Permission Denied
```
Error: Access denied for operation
```
**Solution**: Check IAM permissions for deployment role

#### 4. Environment Variables
```
Error: Required environment variable not set
```
**Solution**: Check GitHub variables configuration

### Debug Steps

1. Check GitHub Actions logs
2. Verify AWS credentials and permissions
3. Test deployment locally
4. Check CDK synthesis output
5. Review CloudFormation events

### Getting Help

- Check deployment logs in GitHub Actions
- Review AWS CloudFormation stack events
- Enable CDK debug mode: `CDK_DEBUG=true`
- Use AWS CLI to verify resource states

## Cost Optimization

### GitHub Actions
- Use dependency caching
- Optimize test suites for speed
- Use appropriate runner sizes
- Monitor usage in billing

### AWS Resources
- Use appropriate instance sizes
- Enable auto-scaling where applicable
- Monitor costs with AWS Cost Explorer
- Set up billing alerts

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review and rotate secrets quarterly
- Monitor deployment success rates
- Update documentation as needed

### Updates
- GitHub Actions versions
- Node.js and pnpm versions
- AWS CDK versions
- Security patches