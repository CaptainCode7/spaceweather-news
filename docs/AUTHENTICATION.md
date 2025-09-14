# Authentication Setup Guide

This guide walks you through setting up authentication for the Spaceweather News application using AWS Cognito and NextAuth.

## Prerequisites

- AWS CLI configured with appropriate permissions
- CDK v2 installed and bootstrapped
- pnpm installed

## Deployment Steps

### 1. Deploy the Authentication Stack

```bash
# Set your environment
export ENVIRONMENT=development  # or staging, production

# Deploy the auth stack
cd cdk
pnpm install
pnpm build
pnpm cdk deploy SpaceweatherAuthStack-development --require-approval never
```

### 2. Configure Environment Variables

After deployment, you'll see outputs with your Cognito configuration. Copy these to your `.env.local` file:

```bash
cd ../nextjs-app
cp .env.example .env.local
```

Edit `.env.local` with the values from your CDK deployment:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-here
COGNITO_CLIENT_ID=your-client-id-from-cdk-output
COGNITO_CLIENT_SECRET=your-client-secret-from-cognito-console
COGNITO_ISSUER=https://cognito-idp.us-east-1.amazonaws.com/your-user-pool-id
NEXT_PUBLIC_API_URL=https://your-api-gateway-url
```

### 3. Get Cognito Client Secret

The CDK doesn't output the client secret (for security). Get it from the AWS Console:

1. Go to AWS Cognito Console
2. Find your User Pool (`spaceweather-users-development`)
3. Go to "App integration" tab
4. Click on your app client
5. Copy the client secret and add it to your `.env.local`

### 4. Deploy the API Stack

```bash
cd ../cdk
pnpm cdk deploy SpaceweatherApiStack-development --require-approval never
```

Copy the API URL output to your `.env.local` file.

### 5. Start the Development Server

```bash
cd ../nextjs-app
pnpm dev
```

## Testing Authentication

1. Visit `http://localhost:3000`
2. Click "Sign In" 
3. You'll be redirected to Cognito's hosted UI
4. Sign up for a new account or sign in
5. After authentication, you'll be redirected back to the app
6. Visit `/protected/dashboard` to see authenticated content

## User Management

### Creating Test Users

You can create test users through the AWS Cognito console or AWS CLI:

```bash
aws cognito-idp admin-create-user \
  --user-pool-id your-user-pool-id \
  --username testuser \
  --user-attributes Name=email,Value=test@example.com \
  --temporary-password TempPass123! \
  --message-action SUPPRESS
```

### Reset Password

```bash
aws cognito-idp admin-set-user-password \
  --user-pool-id your-user-pool-id \
  --username testuser \
  --password NewPassword123! \
  --permanent
```

## Environment-Specific Deployment

### Development
```bash
export ENVIRONMENT=development
pnpm cdk:deploy:dev
```

### Staging
```bash
export ENVIRONMENT=staging
pnpm cdk:deploy:staging
```

### Production
```bash
export ENVIRONMENT=production
pnpm cdk:deploy:prod
```

## CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Runs tests on every push
2. Deploys to development on pushes to `develop` branch
3. Deploys to staging and production on pushes to `main` branch
4. Requires manual approval for production deployments

### Setting up GitHub Secrets

Add these secrets to your GitHub repository:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Add these variables:

- `AWS_REGION` (e.g., us-east-1)
- `AWS_ACCOUNT_ID` (your 12-digit AWS account ID)

## CDK Pipeline (Optional)

For a more advanced setup, deploy the CDK Pipeline:

```bash
cd cdk
pnpm cdk deploy SpaceweatherPipelineStack --require-approval never -c deploy-pipeline=true -c repo-owner=your-github-username -c repo-name=tutorial-1
```

This creates a CodePipeline that:
- Automatically deploys on GitHub pushes
- Includes approval steps for staging and production
- Provides better visibility into deployment status

## Troubleshooting

### Common Issues

1. **Authentication redirect loops**
   - Check that `NEXTAUTH_URL` matches your actual URL
   - Verify callback URLs in Cognito match your app URLs

2. **403 errors from API**
   - Ensure your Cognito authorizer is properly configured
   - Check that the JWT token is being sent in requests

3. **Environment variables not loading**
   - Make sure `.env.local` is in the root of your Next.js app
   - Restart your development server after changing env vars

### Debugging

Enable NextAuth debug logging:

```env
NEXTAUTH_DEBUG=true
```

Check AWS CloudWatch logs for Lambda function errors.

## Security Best Practices

1. **Use different User Pools for each environment**
2. **Set appropriate password policies**
3. **Enable MFA for production**
4. **Use short-lived tokens**
5. **Regularly rotate secrets**
6. **Monitor authentication logs**

## Production Considerations

- Set up custom domain for Cognito
- Configure email templates
- Set up proper backup and disaster recovery
- Monitor costs and usage
- Implement proper logging and alerting