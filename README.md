# Spaceweather News Website
VS Code + Copilot + Next.js + AWS CDK Starter

A minimal, batteries-included starter project.
You’ll spin up a Next.js app locally, deploy a tiny serverless API with AWS CDK, and wire the two together—while learning practical Copilot workflows.

## Contents

* [`/nextjs-app`](#nextjs-app) — Next.js 15+ (App Route## What's Next

This project now includes:

### ✅ Authentication (AWS Cognito + NextAuth)
- User registration and login via AWS Cognito
- Protected routes and pages
- Session management with NextAuth
- Environment-based configuration

### ✅ Environment-based Configuration
- Separate configs for development, staging, and production
- Environment variables for different deployment targets
- Configurable API throttling and CORS settings

### ✅ CI/CD Pipeline (GitHub Actions)
- Automated testing and linting
- Multi-environment deployments
- Manual approval gates for production
- Dependency caching for faster builds

### ✅ CDK Pipeline (Optional)
- AWS-native CI/CD solution
- Self-mutating pipeline
- Advanced deployment strategies
- Integration with AWS CodePipeline

### Getting Started with New Features

1. **Set up Authentication**:
   ```bash
   # Deploy auth stack
   cd cdk
   export ENVIRONMENT=development
   pnpm cdk deploy SpaceweatherAuthStack-development
   
   # Configure environment variables
   cd ../nextjs-app
   cp .env.example .env.local
   # Edit .env.local with your Cognito values
   ```

2. **Configure CI/CD**:
   ```bash
   # Add GitHub secrets: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
   # Add GitHub variables: AWS_REGION, AWS_ACCOUNT_ID
   # Push to develop branch to trigger dev deployment
   ```

3. **Deploy CDK Pipeline** (optional):
   ```bash
   cd cdk
   pnpm cdk deploy SpaceweatherPipelineStack \
     -c deploy-pipeline=true \
     -c repo-owner=your-username \
     -c repo-name=tutorial-1
   ```

### Documentation

- [Authentication Setup Guide](docs/AUTHENTICATION.md)
- [CI/CD Pipeline Documentation](docs/CI-CD.md)

### Next Steps

- Add custom domain and SSL certificates
- Implement email templates for Cognito
- Set up monitoring and alerting
- Add more sophisticated space weather features
- Implement user preferences and notificationseleton
* [`/cdk`](#cdk) — AWS CDK v2 (TypeScript) skeleton deploying API Gateway + Lambda
* [Prereqs](#prerequisites)
* [Install AWS CLI](#install-aws-cli)
* [VS Code + Copilot](#vs-code--copilot)
* [Run Next.js](#run-nextjs)
* [Bootstrap & Deploy with CDK](#bootstrap--deploy-with-cdk)
* [Wire Next.js → Deployed API](#wire-nextjs--deployed-api)
* [Copilot Generating Instructions](#copilot-generating-instructions)
* [Troubleshooting & Tips](#troubleshooting--tips)

---

## Repository Structure

```
.
├─ README.md
├─ nextjs-app/
│  ├─ app/
│  │  ├─ page.tsx
│  │  └─ api/
│  │     └─ local-echo/route.ts      # dev-only local API route
│  ├─ public/
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ next.config.ts
│  ├─ .eslintrc.json
│  ├─ .npmrc
│  └─ .gitignore
└─ cdk/
   ├─ bin/
   │  └─ app.ts
   ├─ lib/
   │  └─ service-stack.ts            # API Gateway + Lambda
   ├─ test/
   │  └─ service-stack.test.ts
   ├─ package.json
   ├─ tsconfig.json
   ├─ cdk.json
   └─ .gitignore
```

### Minimal skeletons

**`nextjs-app/app/page.tsx`**

```tsx
export default function HomePage() {
  const api = process.env.NEXT_PUBLIC_API_URL; // set after CDK deploy
  return (
    <main style={{ padding: 24 }}>
      <h1>Next.js + CDK Starter</h1>
      <p>API URL: {api ?? "(not set yet)"}</p>
      <button
        onClick={async () => {
          const url = api ? `${api}/hello` : "/api/local-echo";
          const res = await fetch(url + (api ? "" : ""), { cache: "no-store" });
          const data = await res.json();
          alert(JSON.stringify(data, null, 2));
        }}
      >
        Call API
      </button>
      <p style={{ marginTop: 12 }}>
        Tip: set <code>NEXT_PUBLIC_API_URL</code> after deploying CDK to call your real endpoint.
      </p>
    </main>
  );
}
```

**`nextjs-app/app/api/local-echo/route.ts`** (handy for local dev before CDK)

```ts
export async function GET() {
  return Response.json({ message: "Hello from local Next.js route!" });
}
```

**`cdk/lib/service-stack.ts`** (hello-world Lambda behind API Gateway)

```ts
import { Stack, StackProps, CfnOutput, Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class ServiceStack extends Stack {
  public readonly apiUrl: CfnOutput;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, "HelloFn", {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: "Hello from Lambda!" }) };
        };
      `),
      handler: "index.handler",
      timeout: Duration.seconds(5),
    });

    const api = new apigw.LambdaRestApi(this, "HttpApi", {
      handler,
      proxy: false,
    });

    api.root.addResource("hello").addMethod("GET"); // GET /hello

    this.apiUrl = new CfnOutput(this, "ApiUrl", { value: api.url ?? "N/A" });
  }
}
```

**`cdk/bin/app.ts`**

```ts
#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { ServiceStack } from "../lib/service-stack";

const app = new App();
new ServiceStack(app, "ServiceStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```

---

## Prerequisites

* **VS Code** (latest)
* **Node.js 18+** (recommend 20 LTS) and **pnpm** or **npm**
* **Git** + GitHub account
* **AWS account** with permissions to create basic resources
* **AWS CLI v2** and **AWS CDK v2**

> Optional: **GitHub Copilot** (requires subscription) + **Copilot Chat** extension.

---

## Install AWS CLI

### macOS

```bash
# Using Homebrew
brew install awscli
aws --version
```

### Windows

* Download MSI from AWS: *AWS CLI v2 for Windows*
* After install, check:

```powershell
aws --version
```

### Linux (x86\_64)

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o awscliv2.zip
unzip awscliv2.zip
sudo ./aws/install
aws --version
```

### Configure credentials

```bash
aws configure
# AWS Access Key ID: ****
# AWS Secret Access Key: ****
# Default region name: us-east-1 (or your choice)
# Default output format: json
```

> If you use SSO/IAM Identity Center:

```bash
aws configure sso
aws sso login --profile <your-profile>
export AWS_PROFILE=<your-profile>   # or set via PowerShell: $env:AWS_PROFILE="<your-profile>"
```

---

## VS Code + Copilot

1. Install extensions:

   * **GitHub Copilot**
   * **GitHub Copilot Chat**
   * ESLint (optional)
2. Sign in to GitHub in VS Code and enable Copilot.
3. Helpful VS Code settings (`Preferences → Settings`):

   * Format on Save: `editor.formatOnSave: true`
   * TypeScript prefs: enable inlay hints, etc.

---

## Run Next.js

From repo root:

```bash
cd nextjs-app
pnpm install   # or: npm install
pnpm dev       # or: npm run dev
# open http://localhost:3000
```

---

## Bootstrap & Deploy with CDK

> One-time per AWS account/region: **bootstrap** (creates the CDK toolkit stack).

```bash
cd cdk
pnpm install   # or: npm install
pnpm cdk --version

# Synthesize CloudFormation
pnpm cdk synth

# Bootstrap the account/region (once)
pnpm cdk bootstrap

# Deploy the stack
pnpm cdk deploy
# Note the ApiUrl output, e.g. https://abc123.execute-api.us-east-1.amazonaws.com/prod/
# CdkStack.ApiUrl = https://y9v4y0rm39.execute-api.us-east-2.amazonaws.com/prod/
# CdkStack.HttpApiEndpoint9EC6E18F = https://y9v4y0rm39.execute-api.us-east-2.amazonaws.com/prod/
```

**Suggested `package.json` scripts (cdk/package.json):**

```json
{
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "watch": "tsc -w -p tsconfig.json",
    "cdk": "cdk",
    "synth": "cdk synth",
    "deploy": "cdk deploy",
    "destroy": "cdk destroy"
  },
  "devDependencies": {
    "aws-cdk": "^2.151.0",
    "typescript": "^5.6.0"
  },
  "dependencies": {
    "aws-cdk-lib": "^2.151.0",
    "constructs": "^10.3.0",
    "source-map-support": "^0.5.21"
  }
}
```

---

## Wire Next.js → Deployed API

1. After `cdk deploy`, copy the `ApiUrl` output.
2. In **`nextjs-app`**:

   ```bash
   # macOS/Linux
   echo "NEXT_PUBLIC_API_URL=<paste ApiUrl without trailing slash>" > .env.local
   # Windows PowerShell
   sc .env.local "NEXT_PUBLIC_API_URL=<paste ApiUrl without trailing slash>"
   ```
3. Restart `pnpm dev`. The **Call API** button on the home page will now hit your deployed Lambda:

   * Calls `GET $NEXT_PUBLIC_API_URL/hello`
   * For local dev without deploying CDK yet, it falls back to `/api/local-echo`.

---

## Copilot Generating Instructions

### Prompt pattern (works in code comments, Copilot Chat, or inline)

> **Intent** → **Constraints** → **Example(s)** → **Target**

**Example (Next.js client component)**

```ts
// Copilot: Create a typed React client component with a button that calls
// fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`) and renders the JSON.
// Constraints: no external libs, TypeScript, handle network errors,
// show loading state, export default.
```

**Example (CDK extension)**

```ts
// Copilot: In this stack, add a /time route that returns the current ISO timestamp.
// Constraints: reuse the existing Lambda or create a new one, short timeout,
// and output the new route path as a CfnOutput.
```

**Example (tests)**

```ts
// Copilot: Generate a minimal Jest test for service-stack.ts ensuring the stack
// synthesizes and includes an API Gateway with a /hello GET method.
```

### Where to talk to Copilot

* **Inline code**: write a comment, pause typing → accept suggestion.
* **Copilot Chat (Panel)**: ask “explain this file,” “suggest refactors,” or “convert to TS”.
* **Quick actions**: highlight code → “/tests”, “/fix”, “/doc”, “/optimize”.

### Effective prompts

* Be explicit about **runtime**, **types**, **constraints**, and **file names**.
* Provide **examples** (a sample JSON response, a signature).
* Ask for **one thing at a time**; then iterate (“shorter”, “use fetch”, “no external deps”).

---

## Troubleshooting & Tips

* **CORS**: If calling API Gateway from the browser, enable CORS on the API or handle via Next.js Route Handlers/Server Actions as a proxy.
* **Region/account mismatch**: Confirm `AWS_PROFILE`, `CDK_DEFAULT_ACCOUNT`, `CDK_DEFAULT_REGION`.
* **Permissions**: Bootstrapping fixes many missing-role issues. Re-run `cdk bootstrap` if needed.
* **Env vars in Next.js**: Only `NEXT_PUBLIC_*` are exposed to the client.
* **Cold starts**: Small Lambda, `NODEJS_20_X`, tight timeouts help.
* **Cleanup**: `pnpm cdk destroy` to avoid charges.

---

## What’s Next

* Add auth (Cognito/NextAuth), env-based config, CI/CD (GitHub Actions), and a CDK pipeline.
* Replace inline Lambda code with a bundled function (esbuild) and add tests.
* Use Copilot to scaffold component tests, docs, and small refactors as you grow.

---

Happy building! 🎯
