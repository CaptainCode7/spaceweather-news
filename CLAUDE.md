# CLAUDE.md

Guidance for AI assistants working in this repository.

## Project overview

**spaceweather-news** is a learning project: a space weather monitoring dashboard built with a
Next.js frontend and AWS serverless infrastructure (Lambda + API Gateway) defined with AWS CDK v2.
The dashboard currently renders **mock data**; live NOAA integration is planned
(see `SPACE-WEATHER-ROADMAP.md`). Authentication (Cognito/NextAuth) was removed from the app —
see `docs/AUTHENTICATION.md`.

The repo owner is new to web development and AWS (background: TypeScript via Playwright testing).
When explaining changes, prefer clear reasoning and "why" comments over terse code — see
[Owner preferences](#owner-preferences).

## Repository layout

pnpm workspace with two packages (`pnpm-workspace.yaml`): `nextjs-app` and `cdk`.

```
.
├── package.json              # Root scripts that proxy into the workspaces (pnpm --filter ...)
├── pnpm-workspace.yaml
├── .github/workflows/
│   ├── ci-cd.yml             # The only real workflow (test → deploy)
│   ├── copilot-instuctions.md  # Owner's AI-assistant preferences (sic: filename typo)
│   ├── instructions/         # Copilot per-glob instruction files (TS, Lambda)
│   └── prompts/              # Copilot prompt files
├── nextjs-app/               # Frontend (Next.js 15.5, React 19, Tailwind v4, lucide-react)
│   ├── app/                  # ACTIVE App Router root
│   │   ├── layout.tsx        # Root layout (metadata only)
│   │   ├── page.tsx          # Home: dashboard preview + API test widgets
│   │   ├── dashboard/page.tsx  # Dashboard; composes cards in <Suspense>
│   │   ├── components/       # Client components hitting NEXT_PUBLIC_API_URL (ApiTest, GetTime)
│   │   └── api/{hello,time,local-echo}/route.ts  # Local Next.js route handlers
│   ├── src/
│   │   ├── components/dashboard/  # Dashboard cards (mock data), imported via "@/components/..."
│   │   ├── components/ui/LoadingSkeleton.tsx
│   │   └── app/              # LEFTOVER create-next-app scaffold — IGNORED by Next.js (see gotchas)
│   ├── types/env.d.ts        # Typing for process.env.NEXT_PUBLIC_API_URL
│   └── .env.example          # Copy to .env.local
├── cdk/                      # Infrastructure (aws-cdk-lib 2.214, TypeScript, Jest)
│   ├── bin/cdk.ts            # App entry: CdkStack always; PipelineStack if -c deploy-pipeline=true
│   ├── lib/config.ts         # getConfig(env): per-environment settings (throttling, origins)
│   ├── lib/cdk-stack.ts      # Lambda (inline Node 18 code) + REST API: /api/hello, /api/time, /api/local-echo
│   ├── lib/auth-stack.ts     # Cognito stack — only used by the CDK Pipeline stages (legacy)
│   ├── lib/pipeline-stack.ts # CodePipeline: Development → Staging (approval) → Production (approval)
│   ├── test/cdk.test.ts      # Placeholder test (commented-out example)
│   └── .env.example
└── docs/                     # AUTHENTICATION, CI-CD, CI-CD-Playbook, GLOSSARY
```

Other top-level docs: `README.md`, `Requirements.md`, `SPACE-WEATHER-ROADMAP.md`.

## Commands

Use **pnpm** (lockfile is `pnpm-lock.yaml`; CI uses pnpm 9 and Node 20). Never add
`package-lock.json` or `yarn.lock` (they are gitignored).

From the repo root:

| Command | What it does |
|---|---|
| `pnpm install` | Install all workspace deps (CI uses `--frozen-lockfile`) |
| `pnpm dev` | Next.js dev server (Turbopack) at http://localhost:3000 |
| `pnpm build` | Build both packages (`next build --turbopack`, `tsc`) |
| `pnpm lint` | ESLint (only `nextjs-app` defines lint) |
| `pnpm test` | Runs tests in both packages (nextjs-app test is a no-op echo; cdk runs Jest) |
| `pnpm validate` | `pnpm test` + `cdk synth` |
| `pnpm cdk:synth` / `pnpm diff` | Synthesize / diff CDK |
| `pnpm cdk:deploy:dev` / `:staging` / `:prod` | Deploy with `ENVIRONMENT` set via cross-env |
| `pnpm cdk:deploy:pipeline` | Deploy `SpaceweatherPipelineStack` |

Inside `cdk/`: `pnpm build` (tsc), `pnpm test` (jest), `pnpm synth`, `pnpm run deploy:stack`
(deploys only `CdkStack`, which is what CI uses).

**Before committing, run:** `pnpm lint`, `pnpm test`, `pnpm --filter nextjs-app build`, and
`cd cdk && npx tsc --noEmit`. All of these pass on the current `main`-derived state.
`cdk synth` needs `CDK_DEFAULT_ACCOUNT` set (any 12-digit value works for a local synth);
actual deploys need AWS credentials — don't attempt them unless asked.

## Environments and configuration

- Environment is chosen by `ENVIRONMENT` (or `NODE_ENV`, or CDK context `-c environment=`),
  default `development`. Accepted aliases: `development|dev`, `staging|stage`, `production|prod`
  (`cdk/lib/config.ts`).
- AWS region defaults to **`us-east-2`** everywhere (config fallback, CI `AWS_REGION`). Keep it
  consistent; don't introduce another region.
- Account comes from `CDK_DEFAULT_ACCOUNT` (CI: `vars.AWS_ACCOUNT_ID`).
- The API Gateway stage name equals the environment name, and the stack outputs `ApiUrl`
  (export `${env}-api-url`).
- Frontend reads `NEXT_PUBLIC_API_URL` and calls `${NEXT_PUBLIC_API_URL}/hello` and `/time`,
  so the value must include the `/api` path, e.g.
  `https://<id>.execute-api.us-east-2.amazonaws.com/development/api`.
- Never commit `.env*` files — only `.env.example` templates.

## CI/CD (`.github/workflows/ci-cd.yml`)

- Triggers: push to `main`/`develop`, PRs to `main`.
- `test` job: install → lint → test → build nextjs-app → cdk test → cdk build + synth.
- `deploy-dev`: on `develop` pushes. `deploy-staging` then `deploy-prod`: on `main` pushes.
  All run `pnpm run deploy:stack` (CdkStack only) with `ENVIRONMENT` set.
- `deploy-pipeline`: on `main` only when the commit message contains **`[deploy-pipeline]`**;
  deploys the CodePipeline stack. Avoid that tag in commit messages unless a pipeline deploy is
  intended.
- The CodePipeline source uses a CodeStar connection if `connection-arn` context /
  `CODESTAR_CONNECTION_ARN` is set, else a GitHub token in Secrets Manager named `github-token`
  (see `docs/CI-CD-Playbook.md`).
- Any change to the CI `test` job's commands must keep working for both packages.

## Code conventions

- **TypeScript strict mode** in both packages. Use explicit interfaces for data shapes
  (e.g. `SolarData`, `ApiResponse`) and avoid `any`.
- **Next.js App Router**. Pages under `nextjs-app/app/`. Mark interactive components with
  `"use client"`. Export `metadata: Metadata` from pages for SEO.
- **Import alias** `@/*` → `nextjs-app/src/*`. Reusable components go in
  `nextjs-app/src/components/{dashboard,ui}/` and are imported as `@/components/...`.
  The older `app/components/` holds the API test widgets.
- **Styling**: Tailwind utility classes with the dark slate/indigo palette
  (`bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6` card pattern).
  Icons from `lucide-react`. The older `ApiTestComponent`/`GetTimeComponent` use inline styles —
  don't copy that pattern into new code.
- **Fetching from API Gateway**: don't set headers (e.g. `Content-Type`) on GET requests —
  it triggers a CORS preflight. Use `cache: "no-store"`. Handle loading/error/data state
  with `err instanceof Error ? err.message : ...`.
- **Route handlers** return `NextResponse.json(...)` and include `timestamp`/`success`/`source`
  fields; add an `OPTIONS` handler with CORS headers where cross-origin access is expected.
- Indentation: 4 spaces in `nextjs-app/app/**` and `cdk/lib/{config,auth-stack,pipeline-stack}.ts`;
  2 spaces in `cdk/bin`, `cdk/lib/cdk-stack.ts` and scaffolded files. Match the file you edit.
- **CDK**: per-environment values belong in `getConfig()` in `cdk/lib/config.ts`, not hard-coded
  in stacks. New stacks take `config: AppConfig` in their props. Add CDK assertion tests
  (`aws-cdk-lib/assertions` `Template`) in `cdk/test/` for new resources.
- **Commits**: conventional-style prefixes are used (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`,
  `test:`).
- The `.gitignore` ignores all `*.js` and `*.d.ts` (tsc output) except a few config files. If
  you add a JS config file that must be committed, add a `!` exception or use `.mjs`/`.ts`.

## Known gotchas / current state

- **Two app directories**: `nextjs-app/app/` wins; `nextjs-app/src/app/` (Geist fonts,
  `globals.css`, default create-next-app page) is ignored by Next.js. Consequently
  **`globals.css` (`@import "tailwindcss"`) is not imported by the active layout**, so Tailwind
  styles may not be applied at runtime. Fixing this means importing the stylesheet in
  `app/layout.tsx` (or consolidating into one directory) — confirm with the owner before
  restructuring.
- Home page links to `/api/space-weather`, which doesn't exist yet.
- Root script `build:nextjs:webpack` references a `build:webpack` script that `nextjs-app`
  doesn't define.
- Dashboard cards use hard-coded mock data (`// Mock data - replace with real API data`).
- The Lambda in `cdk-stack.ts` is inline JS on `NODEJS_18_X`; the `/local-echo` handler echoes
  the full event. The API throttle values in `config.ts` aren't wired into the API yet.
- `AuthStack` and the `auth` config block are legacy (auth removed) but still deployed by the
  CodePipeline stages; `CdkStack` alone (what GitHub Actions deploys) has no auth.
- `cdk/test/cdk.test.ts` is an empty placeholder; `nextjs-app` has no test framework.
- `cdk/synth-output.json` is an empty tracked file; `cdk/.env.example` has stale repo owner/name
  values. `ts-jest` warns about `isolatedModules` — harmless.
- README's "Project Structure" is partially out of date; trust the code over docs.

## Owner preferences

From `.github/workflows/copilot-instuctions.md` and `instructions/*.md` (written for Copilot,
but they apply here too):

- Explain the **why** behind changes, not just the what; the owner wants to learn, not copy.
- Use descriptive names (`userApiResponse`, not `data`), explicit types, JSDoc on new functions,
  and comments that explain reasoning.
- Don't skip error handling "for simplicity"; include loading/error states in UI.
- Break complex functions into smaller pieces; build up to advanced patterns.
- Relating AWS/web concepts to testing (Playwright) analogies is welcome in explanations.
- Docs are written for beginners — keep new docs clear and define jargon (add terms to
  `docs/GLOSSARY.md` when useful).
