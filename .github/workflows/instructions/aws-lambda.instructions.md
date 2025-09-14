---
applyTo: "**/lambda/**/*.ts"
description: "AWS Lambda learning guidelines"
---

# AWS Lambda Development Guidelines

## Learning Serverless Concepts
- Explain serverless like explaining test execution environments
- Show how Lambda functions are like isolated test functions that respond to events
- Connect to my testing background: "Like test setup/teardown but for handling requests"
- Explain cold starts and warm starts in simple terms

## Lambda Function Structure
- Always show proper TypeScript interfaces for event and context
- Include error handling patterns specific to Lambda
- Show logging patterns for debugging deployed functions
- Explain environment variable usage and local vs deployed differences

## AWS SDK Integration
- Show proper SDK initialization patterns in TypeScript
- Explain service client setup and reuse strategies
- Include proper error handling for AWS service calls
- Show how to mock AWS services for local testing (connect to my testing experience)

## Development Workflow
- Include local development setup instructions
- Show how to test Lambda functions locally before deployment
- Explain deployment strategies and rollback procedures
- Include monitoring and debugging deployed functions

## Connection to Web Frontend
- Show how Lambda functions connect to frontend applications
- Explain API Gateway integration patterns
- Include CORS handling for web applications
- Show proper request/response typing between frontend and Lambda
