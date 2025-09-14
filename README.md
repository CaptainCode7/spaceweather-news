# 🌌 Space Weather Monitoring System# 🌌 Space Weather News & Monitoring System

# 🌌 Space Weather Monitoring System

**Real-time Space Weather Data & Alert Platform**

**Real-time Space Weather Data & Alert Platform**

A production-ready Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable cloud architecture.

A production-ready Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable cloud architecture.

[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)

[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)

[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

## 🌟 Features

## 🌟 **Features**

### ✅ Production Infrastructure

- **Authentication**: AWS Cognito + NextAuth v5 for secure user management### ✅ **Production Infrastructure**

- **Multi-Environment**: Separate configs for development, staging, and production- **Authentication**: AWS Cognito + NextAuth v5 for secure user management

- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment- **Multi-Environment**: Separate configs for development, staging, and production

- **CDK Pipeline**: AWS-native infrastructure as code with self-mutating deployments- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment

- **Monitoring**: CloudWatch integration and error tracking- **CDK Pipeline**: AWS-native infrastructure as code with self-mutating deployments

- **Monitoring**: CloudWatch integration and error tracking

### 🔄 Current Space Weather Features

- **Authentication System**: AWS Cognito + NextAuth integration### 🔄 **Current Space Weather Features**

- **User Management**: Protected routes and user dashboard

- **API Infrastructure**: RESTful endpoints ready for space weather data integrationA production-ready Next.js application with AWS infrastructure for monitoring solar activity, geomagnetic conditions, and space weather alerts. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable serverless architecture.

- **Real-time Updates**: WebSocket-ready infrastructure for live data streaming

## 🚀 **Current Features**her News Website

### 🚀 Planned Space Weather FeaturesVS Code + Copilot + Next.js + AWS CDK Starter

- **Real-time Data**: Live solar activity and geomagnetic monitoring via NOAA APIs

- **Interactive Dashboard**: Visual charts and graphs for space weather parametersA minimal, batteries-included starter project.

- **Alert System**: Customizable notifications for space weather eventsYou’ll spin up a Next.js app locally, deploy a tiny serverless API with AWS CDK, and wire the two together—while learning practical Copilot workflows.

- **Historical Analysis**: Long-term trend analysis and solar cycle tracking

- **Multi-Platform**: Web dashboard + mobile notifications## Contents



## 🏗️ Architecture* [`/nextjs-app`](#nextjs-app) — Next.js 15+ (App Route## What's Next



```This project now includes:

┌─────────────────────────────────────────────────────────────┐

│                    Production Architecture                   │### ✅ Authentication ## What's Next

├─────────────────────────────────────────────────────────────┤

│  Frontend: Next.js 15 (App Router) + TypeScript            │* ✅ **COMPLETED**: Auth (Cognito/NextAuth), env-based config, CI/CD (GitHub Actions), and CDK pipeline

│  Authentication: AWS Cognito + NextAuth                    │* **Space Weather Features**: Integrate NOAA APIs for real-time solar activity monitoring

│  Backend: AWS Lambda + API Gateway                         │* **Real-time Dashboard**: Build interactive charts for space weather data visualization

│  Database: DynamoDB (NoSQL)                               │* **Alert System**: Implement customizable notifications for space weather events

│  Infrastructure: AWS CDK v2                               │* **Mobile App**: Create React Native companion app for space weather alerts

│  CI/CD: GitHub Actions + AWS CodePipeline                 │* Replace inline Lambda code with a bundled function (esbuild) and add tests

│  Monitoring: CloudWatch + X-Ray                           │* Use Copilot to scaffold component tests, docs, and small refactors as you growCognito + NextAuth)

└─────────────────────────────────────────────────────────────┘- **User Management**: Protected routes and user dashboard

```- **API Infrastructure**: RESTful endpoints ready for space weather data integration

- **Real-time Updates**: WebSocket-ready infrastructure for live data streaming

## 🚀 Quick Start

### 🔄 **Planned Space Weather Features**

### Prerequisites- **Real-time Data**: Live solar activity and geomagnetic monitoring via NOAA APIs

- **Node.js 20+** and **pnpm**- **Interactive Dashboard**: Visual charts and graphs for space weather parameters

- **AWS CLI v2** configured with credentials- **Alert System**: Customizable notifications for space weather events

- **AWS CDK v2** installed globally- **Historical Analysis**: Long-term trend analysis and solar cycle tracking

- **GitHub account** for CI/CD- **Multi-Platform**: Web dashboard + mobile notifications



### 1. Clone and Install## 🏗️ **Architecture**

```bash

git clone https://github.com/CaptainCode7/spaceweather-news.git```

cd spaceweather-news┌─────────────────────────────────────────────────────────────┐

│                    Production Architecture                   │

# Install dependencies├─────────────────────────────────────────────────────────────┤

cd nextjs-app && pnpm install│  Frontend: Next.js 15 (App Router) + TypeScript            │

cd ../cdk && pnpm install│  Authentication: AWS Cognito + NextAuth                    │

```│  Backend: AWS Lambda + API Gateway                         │

│  Database: DynamoDB (NoSQL)                               │

### 2. Deploy Authentication Stack│  Infrastructure: AWS CDK v2                               │

```bash│  CI/CD: GitHub Actions + AWS CodePipeline                 │

cd cdk│  Monitoring: CloudWatch + X-Ray                           │

export ENVIRONMENT=development  # or staging/production└─────────────────────────────────────────────────────────────┘

```

# Bootstrap CDK (one-time per AWS account/region)

pnpm cdk bootstrap## 🚀 **Quick Start**



# Deploy authentication infrastructure### Prerequisites

pnpm cdk deploy SpaceweatherAuthStack-${ENVIRONMENT}- **Node.js 20+** and **pnpm**

```- **AWS CLI v2** configured with credentials

- **AWS CDK v2** installed globally

### 3. Configure Environment- **GitHub account** for CI/CD

```bash

cd ../nextjs-app### 1. **Clone and Install**

cp .env.example .env.local```bash

# Edit .env.local with your Cognito User Pool details from CDK outputgit clone https://github.com/CaptainCode7/spaceweather-news.git

```cd spaceweather-news



### 4. Run Development Server# Install dependencies

```bashcd nextjs-app && pnpm install

pnpm devcd ../cdk && pnpm install

# Open http://localhost:3000```

```

### 2. **Deploy Authentication Stack**

## Development Workflow```bash

cd cdk

### Phase 1: Current Implementation Status ✅export ENVIRONMENT=development  # or staging/production

- **Authentication**: AWS Cognito + NextAuth.js integration

- **Infrastructure**: Multi-environment CDK deployment pipeline# Bootstrap CDK (one-time per AWS account/region)

- **CI/CD**: GitHub Actions with automated testing and deploymentpnpm cdk bootstrap

- **Frontend**: Next.js 15 with App Router and TypeScript

- **API Foundation**: RESTful endpoints with AWS Lambda functions# Deploy authentication infrastructure

pnpm cdk deploy SpaceweatherAuthStack-${ENVIRONMENT}

### Phase 2: Space Weather Integration (In Progress)```

- **NOAA API Integration**: Solar activity data collection

- **Data Processing**: Real-time space weather event monitoring### 3. **Configure Environment**

- **Visualization Components**: Interactive charts and alerts```bash

- **Notification System**: Critical event alertingcd ../nextjs-app

cp .env.example .env.local

### Phase 3: Advanced Features (Planned)# Edit .env.local with your Cognito User Pool details from CDK output

- **Historical Analysis**: Trend analysis and forecasting```

- **User Personalization**: Custom alert preferences

- **Mobile Experience**: Progressive Web App capabilities### 4. **Run Development Server**

- **Community Features**: Data sharing and discussions```bash

pnpm dev

## Project Structure# Open http://localhost:3000

```

```

spaceweather-news/---

├─ README.md

├─ SPACE-WEATHER-ROADMAP.md          # Development phases and features## Development Workflow

├─ Requirements.md                    # Technical specifications

├─ nextjs-app/                       # Frontend application### Phase 1: Current Implementation Status ✅

│  ├─ app/- **Authentication**: AWS Cognito + NextAuth.js integration

│  │  ├─ api/- **Infrastructure**: Multi-environment CDK deployment pipeline

│  │  │  ├─ space-weather/           # Space weather API endpoints- **CI/CD**: GitHub Actions with automated testing and deployment

│  │  │  └─ auth/                    # Authentication routes- **Frontend**: Next.js 15 with App Router and TypeScript

│  │  ├─ components/                 # Reusable UI components- **API Foundation**: RESTful endpoints with AWS Lambda functions

│  │  ├─ dashboard/                  # Protected dashboard pages

│  │  └─ auth/                       # Authentication pages### Phase 2: Space Weather Integration (In Progress)

│  ├─ src/- **NOAA API Integration**: Solar activity data collection

│  │  ├─ components/- **Data Processing**: Real-time space weather event monitoring

│  │  │  ├─ visualization/           # Charts and data displays- **Visualization Components**: Interactive charts and alerts

│  │  │  └─ layout/                  # Layout components- **Notification System**: Critical event alerting

│  │  ├─ hooks/                      # Custom React hooks

│  │  └─ lib/                        # Utility functions and configs### Phase 3: Advanced Features (Planned)

│  └─ types/                         # TypeScript type definitions- **Historical Analysis**: Trend analysis and forecasting

└─ cdk/                              # AWS Infrastructure- **User Personalization**: Custom alert preferences

   ├─ lib/- **Mobile Experience**: Progressive Web App capabilities

   │  ├─ auth-stack.ts               # Cognito authentication- **Community Features**: Data sharing and discussions

   │  ├─ cdk-stack.ts                # Core infrastructure

   │  └─ pipeline-stack.ts           # CI/CD pipeline## Project Structure

   └─ bin/cdk.ts                     # CDK app entry point

``````

spaceweather-news/

## Contributing├─ README.md

├─ SPACE-WEATHER-ROADMAP.md          # Development phases and features

1. **Fork the repository**├─ Requirements.md                    # Technical specifications

2. **Create a feature branch**: `git checkout -b feature/space-weather-alerts`├─ nextjs-app/                       # Frontend application

3. **Make your changes** following the established patterns│  ├─ app/

4. **Add tests** for new functionality│  │  ├─ api/

5. **Submit a pull request** with detailed description│  │  │  ├─ space-weather/           # Space weather API endpoints

│  │  │  └─ auth/                    # Authentication routes

## Documentation│  │  ├─ components/                 # Reusable UI components

│  │  ├─ dashboard/                  # Protected dashboard pages

- 📋 [**Requirements**](Requirements.md) - Technical specifications and architecture│  │  └─ auth/                       # Authentication pages

- 🚀 [**Space Weather Roadmap**](SPACE-WEATHER-ROADMAP.md) - Development phases and planned features│  ├─ src/

- 🔧 [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage│  │  ├─ components/

│  │  │  ├─ visualization/           # Charts and data displays

## License│  │  │  └─ layout/                  # Layout components

│  │  ├─ hooks/                      # Custom React hooks

MIT License - see LICENSE file for details.│  │  └─ lib/                        # Utility functions and configs

│  └─ types/                         # TypeScript type definitions

---└─ cdk/                              # AWS Infrastructure

   ├─ lib/

**Ready to monitor space weather events? Start with the Quick Start guide above!** 🛰️   │  ├─ auth-stack.ts               # Cognito authentication
   │  ├─ cdk-stack.ts                # Core infrastructure
   │  └─ pipeline-stack.ts           # CI/CD pipeline
   └─ bin/cdk.ts                     # CDK app entry point
```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/space-weather-alerts`
3. **Make your changes** following the established patterns
4. **Add tests** for new functionality
5. **Submit a pull request** with detailed description

## Documentation

- 📋 [**Requirements**](Requirements.md) - Technical specifications and architecture
- 🚀 [**Space Weather Roadmap**](SPACE-WEATHER-ROADMAP.md) - Development phases and planned features
- � [**Authentication Setup**](docs/AUTHENTICATION.md) - AWS Cognito and NextAuth configuration
- 🚀 [**CI/CD Pipeline**](docs/CI-CD.md) - GitHub Actions and deployment workflows
- �🔧 [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage

## License

MIT License - see LICENSE file for details.

---

**Ready to monitor space weather events? Start with the Quick Start guide above!** 🛰️
