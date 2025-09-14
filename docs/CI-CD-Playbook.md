# CI/CD Playbook (GitHub Actions) – spaceweather-news

A practical, step-by-step guide to how your CI/CD pipeline works, how to run it, and how to troubleshoot it.

---

## Overview

This repository uses GitHub Actions to automatically:
- Install dependencies with pnpm
- Lint, test, and build the Next.js app (`nextjs-app/`)
- Build and deploy AWS infrastructure via AWS CDK (`cdk/`)

The workflow file lives at:
- `.github/workflows/ci-cd.yml`

Primary CDK stack:
- Stack name: `CdkStack`
- Region: `us-east-2` (set at workflow top-level `env.AWS_REGION`)

---

## Branches, jobs, and environments

### Branch strategy → deployments

| Branch | What runs | AWS Environment | Notes |
|-------:|-----------|-----------------|-------|
| `develop` | Test and Lint → Deploy to Development | `development` | For pre-integration testing |
| `main` | Test and Lint → Deploy to Staging → Deploy to Production | `staging`, then `production` | Production only runs after staging succeeds |
| `main` with `[deploy-pipeline]` in commit message | Deploy CDK Pipeline | `production` | Used to (re)deploy the CDK pipeline stack |

### Jobs in the workflow

| Job | Purpose | Key steps |
|-----|---------|-----------|
| Test and Lint | CI checks for app + infra | pnpm install, lint, test, build (Next.js) and build, test (CDK) |
| Deploy to Development | CDK deploy for `development` | Builds CDK and deploys `CdkStack` |
| Deploy to Staging | CDK deploy for `staging` | Builds CDK and deploys `CdkStack` |
| Deploy to Production | CDK deploy for `production` | Runs after staging succeeds |
| Deploy CDK Pipeline | Deploys the pipeline stack | Requires `[deploy-pipeline]` token in commit message |

---

## Required GitHub configuration

1. Environments (GitHub → Settings → Environments)
   - `development`
   - `staging`
   - `production`
   - Optional: add required reviewers for protected deployments

2. Secrets (GitHub → Settings → Secrets and variables → Actions → Secrets)
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_ACCOUNT_ID` (12-digit AWS account number)

3. Region used by the workflow
   - The workflow sets `AWS_REGION: us-east-2` at the top-level `env:`

---

## How to use it (step-by-step)

### A) Deploy to Development
1. Make a code change.
2. Push to `develop`:

```powershell
# from the repo root
git checkout develop
# if branch doesn’t exist locally
# git checkout -b develop

# make your changes
# ...

git add .
git commit -m "Feature: change X"
git push origin develop
```

3. Go to GitHub → Actions to watch the run. The `Deploy to Development` job will execute after `Test and Lint` passes.

### B) Deploy to Staging then Production
1. Merge changes into `main` (or push directly if you’re testing):

```powershell
git checkout main
git merge develop
git push origin main
```

2. Watch the Actions run. It will:
   - Run `Test and Lint`
   - Deploy to `staging`
   - Then deploy to `production` (after staging succeeds)

### C) Deploy the CDK Pipeline (when needed)
- Only runs on `main` when the commit message contains `[deploy-pipeline]`:

```powershell
git commit --allow-empty -m "[deploy-pipeline] Update pipeline"
git push origin main
```

---

## Where key things live

- Next.js app: `nextjs-app/`
  - Scripts: `dev`, `build`, `start`, `lint`, `test`
- CDK app: `cdk/`
  - Entry: `bin/cdk.ts`
  - Stack name: `CdkStack`
  - Scripts:
    - `build`: TypeScript compile
    - `synth`: `cdk synth`
    - `deploy:stack`: `cdk deploy CdkStack --require-approval never`
    - `deploy`: `cdk deploy --require-approval never`

---

## How the workflow deploys

- The workflow sets `ENVIRONMENT` before deploying (development, staging, production).
- CDK uses `ENVIRONMENT` to resolve configuration in `cdk/lib/config.ts` and reads:
  - `CDK_DEFAULT_ACCOUNT` from `AWS_ACCOUNT_ID` secret
  - `CDK_DEFAULT_REGION` from the top-level `AWS_REGION` env (`us-east-2`)
- For staging/production, the jobs explicitly deploy the stack name `CdkStack`.

---

## Troubleshooting (common errors you may see)

| Symptom | Likely cause | Fix |
|--------|---------------|-----|
| `ERROR Unknown option: 'watchAll'` | Package test script used Jest option you’re not using | Use a simple `test` script (e.g., `echo 'No tests' && exit 0`) or add Jest |
| `Unable to parse environment specification "aws://..."` | Missing `CDK_DEFAULT_ACCOUNT`/`CDK_DEFAULT_REGION` | Ensure secrets are set and the workflow exports them for synth/deploy |
| `ERR_PNPM_NOTHING_TO_DEPLOY` | CDK stack not selected | Deploy with explicit stack name: `cdk deploy CdkStack` (done in workflow) |
| `Unknown option: 'require-approval'` | Passing CDK flags directly to `pnpm` | Use script or `pnpm run <script> -- ...` to forward flags to CDK |
| Permission denied / Access issues | AWS user/role lacks permissions | Attach required IAM policies for CloudFormation, S3, IAM, etc. |
| Deployment blocked | Environment requires approval | Approve the deployment in GitHub Environments UI |

---

## Handy commands

### Keep `develop` updated with `main`
```powershell
git checkout develop
git merge main
git push origin develop
```

### Trigger a staging/production release
```powershell
git checkout main
git merge develop
git push origin main
```

### (Advanced) Re-deploy the pipeline stack
```powershell
git commit --allow-empty -m "[deploy-pipeline] Redeploy pipeline"
git push origin main
```

---

## Quick checklist

- [ ] `development`, `staging`, `production` environments exist (GitHub → Settings → Environments)
- [ ] Secrets set: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID`
- [ ] Region confirmed: `us-east-2`
- [ ] Push to `develop` → dev deploy; push to `main` → staging then production
- [ ] Use `[deploy-pipeline]` token to deploy the pipeline stack

---

If anything fails, open the Actions run, click the failing job, and scan the last ~50 lines of the step’s log. Paste that output into an issue/PR or share it—debugging is much faster with the exact error text.
