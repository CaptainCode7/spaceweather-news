# 🌌 Space Weather Monitoring System# 🌌 Space Weather Monitoring System



**Real-time Space Weather Data & Alert Platform****Real-time Space Weather Data & Alert Platform**



A production-ready Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable cloud architecture.A production-ready Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable cloud architecture.



[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)

[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)

[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)



## 🌟 Features[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)



### ✅ Production Infrastructure## 🌟 Features

- **Authentication**: AWS Cognito + NextAuth v5 for secure user management

- **Multi-Environment**: Separate configs for development, staging, and production## 🌟 **Features**

- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment

- **CDK Pipeline**: AWS-native infrastructure as code with self-mutating deployments### ✅ Production Infrastructure

- **Monitoring**: CloudWatch integration and error tracking

- **Authentication**: AWS Cognito + NextAuth v5 for secure user management### ✅ **Production Infrastructure**

### 🔄 Current Space Weather Features

- **Authentication System**: AWS Cognito + NextAuth integration- **Multi-Environment**: Separate configs for development, staging, and production- **Authentication**: AWS Cognito + NextAuth v5 for secure user management

- **User Management**: Protected routes and user dashboard

- **API Infrastructure**: RESTful endpoints ready for space weather data integration- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment- **Multi-Environment**: Separate configs for development, staging, and production

- **Real-time Updates**: WebSocket-ready infrastructure for live data streaming

- **CDK Pipeline**: AWS-native infrastructure as code with self-mutating deployments- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment

### 🚀 Planned Space Weather Features

- **Real-time Data**: Live solar activity and geomagnetic monitoring via NOAA APIs- **Monitoring**: CloudWatch integration and error tracking- **CDK Pipeline**: AWS-native infrastructure as code with self-mutating deployments

- **Interactive Dashboard**: Visual charts and graphs for space weather parameters

- **Alert System**: Customizable notifications for space weather events- **Monitoring**: CloudWatch integration and error tracking

- **Historical Analysis**: Long-term trend analysis and solar cycle tracking

- **Multi-Platform**: Web dashboard + mobile notifications### 🔄 Current Space Weather Features



## 🏗️ Architecture- **Authentication System**: AWS Cognito + NextAuth integration### 🔄 **Current Space Weather Features**



```- **User Management**: Protected routes and user dashboard

┌─────────────────────────────────────────────────────────────┐

│                    Production Architecture                   │- **API Infrastructure**: RESTful endpoints ready for space weather data integrationA production-ready Next.js application with AWS infrastructure for monitoring solar activity, geomagnetic conditions, and space weather alerts. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable serverless architecture.

├─────────────────────────────────────────────────────────────┤

│  Frontend: Next.js 15 (App Router) + TypeScript            │- **Real-time Updates**: WebSocket-ready infrastructure for live data streaming

│  Authentication: AWS Cognito + NextAuth                    │

│  Backend: AWS Lambda + API Gateway                         │## 🚀 **Current Features**her News Website

│  Database: DynamoDB (NoSQL)                               │

│  Infrastructure: AWS CDK v2                               │### 🚀 Planned Space Weather FeaturesVS Code + Copilot + Next.js + AWS CDK Starter

│  CI/CD: GitHub Actions + AWS CodePipeline                 │

│  Monitoring: CloudWatch + X-Ray                           │- **Real-time Data**: Live solar activity and geomagnetic monitoring via NOAA APIs

└─────────────────────────────────────────────────────────────┘

```- **Interactive Dashboard**: Visual charts and graphs for space weather parametersA minimal, batteries-included starter project.



## 🚀 Quick Start- **Alert System**: Customizable notifications for space weather eventsYou’ll spin up a Next.js app locally, deploy a tiny serverless API with AWS CDK, and wire the two together—while learning practical Copilot workflows.



### Prerequisites- **Historical Analysis**: Long-term trend analysis and solar cycle tracking

- **Node.js 20+** and **pnpm**

- **AWS CLI v2** configured with credentials- **Multi-Platform**: Web dashboard + mobile notifications## Contents

- **AWS CDK v2** installed globally

- **GitHub account** for CI/CD



### 1. Clone and Install## 🏗️ Architecture* [`/nextjs-app`](#nextjs-app) — Next.js 15+ (App Route## What's Next

```bash

git clone https://github.com/CaptainCode7/spaceweather-news.git

cd spaceweather-news

```This project now includes:

# Install dependencies

cd nextjs-app && pnpm install┌─────────────────────────────────────────────────────────────┐

cd ../cdk && pnpm install

```│                    Production Architecture                   │### ✅ Authentication ## What's Next



### 2. Deploy Authentication Stack├─────────────────────────────────────────────────────────────┤

```bash

cd cdk│  Frontend: Next.js 15 (App Router) + TypeScript            │* ✅ **COMPLETED**: Auth (Cognito/NextAuth), env-based config, CI/CD (GitHub Actions), and CDK pipeline

export ENVIRONMENT=development  # or staging/production

│  Authentication: AWS Cognito + NextAuth                    │* **Space Weather Features**: Integrate NOAA APIs for real-time solar activity monitoring

# Bootstrap CDK (one-time per AWS account/region)

pnpm cdk bootstrap│  Backend: AWS Lambda + API Gateway                         │* **Real-time Dashboard**: Build interactive charts for space weather data visualization



# Deploy authentication infrastructure│  Database: DynamoDB (NoSQL)                               │* **Alert System**: Implement customizable notifications for space weather events

pnpm cdk deploy SpaceweatherAuthStack-${ENVIRONMENT}

```│  Infrastructure: AWS CDK v2                               │* **Mobile App**: Create React Native companion app for space weather alerts



### 3. Configure Environment│  CI/CD: GitHub Actions + AWS CodePipeline                 │* Replace inline Lambda code with a bundled function (esbuild) and add tests

```bash

cd ../nextjs-app│  Monitoring: CloudWatch + X-Ray                           │* Use Copilot to scaffold component tests, docs, and small refactors as you growCognito + NextAuth)

cp .env.example .env.local

# Edit .env.local with your Cognito User Pool details from CDK output└─────────────────────────────────────────────────────────────┘- **User Management**: Protected routes and user dashboard

```

```- **API Infrastructure**: RESTful endpoints ready for space weather data integration

### 4. Run Development Server

```bash- **Real-time Updates**: WebSocket-ready infrastructure for live data streaming

pnpm dev

# Open http://localhost:3000## 🚀 Quick Start

```

### 🔄 **Planned Space Weather Features**

## Development Workflow

### Prerequisites- **Real-time Data**: Live solar activity and geomagnetic monitoring via NOAA APIs

### Phase 1: Current Implementation Status ✅

- **Authentication**: AWS Cognito + NextAuth.js integration- **Node.js 20+** and **pnpm**- **Interactive Dashboard**: Visual charts and graphs for space weather parameters

- **Infrastructure**: Multi-environment CDK deployment pipeline

- **CI/CD**: GitHub Actions with automated testing and deployment- **AWS CLI v2** configured with credentials- **Alert System**: Customizable notifications for space weather events

- **Frontend**: Next.js 15 with App Router and TypeScript

- **API Foundation**: RESTful endpoints with AWS Lambda functions- **AWS CDK v2** installed globally- **Historical Analysis**: Long-term trend analysis and solar cycle tracking



### Phase 2: Space Weather Integration (In Progress)- **GitHub account** for CI/CD- **Multi-Platform**: Web dashboard + mobile notifications

- **NOAA API Integration**: Solar activity data collection

- **Data Processing**: Real-time space weather event monitoring

- **Visualization Components**: Interactive charts and alerts

- **Notification System**: Critical event alerting### 1. Clone and Install## 🏗️ **Architecture**



### Phase 3: Advanced Features (Planned)```bash

- **Historical Analysis**: Trend analysis and forecasting

- **User Personalization**: Custom alert preferencesgit clone https://github.com/CaptainCode7/spaceweather-news.git```

- **Mobile Experience**: Progressive Web App capabilities

- **Community Features**: Data sharing and discussionscd spaceweather-news┌─────────────────────────────────────────────────────────────┐



## Project Structure│                    Production Architecture                   │



```# Install dependencies├─────────────────────────────────────────────────────────────┤

spaceweather-news/

├─ README.mdcd nextjs-app && pnpm install│  Frontend: Next.js 15 (App Router) + TypeScript            │

├─ SPACE-WEATHER-ROADMAP.md          # Development phases and features

├─ Requirements.md                    # Technical specificationscd ../cdk && pnpm install│  Authentication: AWS Cognito + NextAuth                    │

├─ nextjs-app/                       # Frontend application

│  ├─ app/```│  Backend: AWS Lambda + API Gateway                         │

│  │  ├─ api/

│  │  │  ├─ space-weather/           # Space weather API endpoints│  Database: DynamoDB (NoSQL)                               │

│  │  │  └─ auth/                    # Authentication routes

│  │  ├─ components/                 # Reusable UI components### 2. Deploy Authentication Stack│  Infrastructure: AWS CDK v2                               │

│  │  ├─ dashboard/                  # Protected dashboard pages

│  │  └─ auth/                       # Authentication pages```bash│  CI/CD: GitHub Actions + AWS CodePipeline                 │

│  ├─ src/

│  │  ├─ components/cd cdk│  Monitoring: CloudWatch + X-Ray                           │

│  │  │  ├─ visualization/           # Charts and data displays

│  │  │  └─ layout/                  # Layout componentsexport ENVIRONMENT=development  # or staging/production└─────────────────────────────────────────────────────────────┘

│  │  ├─ hooks/                      # Custom React hooks

│  │  └─ lib/                        # Utility functions and configs```

│  └─ types/                         # TypeScript type definitions

└─ cdk/                              # AWS Infrastructure# Bootstrap CDK (one-time per AWS account/region)

   ├─ lib/

   │  ├─ auth-stack.ts               # Cognito authenticationpnpm cdk bootstrap## 🚀 **Quick Start**

   │  ├─ cdk-stack.ts                # Core infrastructure

   │  └─ pipeline-stack.ts           # CI/CD pipeline

   └─ bin/cdk.ts                     # CDK app entry point

```# Deploy authentication infrastructure### Prerequisites



## Contributingpnpm cdk deploy SpaceweatherAuthStack-${ENVIRONMENT}- **Node.js 20+** and **pnpm**



1. **Fork the repository**```- **AWS CLI v2** configured with credentials

2. **Create a feature branch**: `git checkout -b feature/space-weather-alerts`

3. **Make your changes** following the established patterns- **AWS CDK v2** installed globally

4. **Add tests** for new functionality

5. **Submit a pull request** with detailed description### 3. Configure Environment- **GitHub account** for CI/CD



## Documentation```bash



- 📋 [**Requirements**](Requirements.md) - Technical specifications and architecturecd ../nextjs-app### 1. **Clone and Install**

- 🚀 [**Space Weather Roadmap**](SPACE-WEATHER-ROADMAP.md) - Development phases and planned features

- 🔐 [**Authentication Setup**](docs/AUTHENTICATION.md) - AWS Cognito and NextAuth configurationcp .env.example .env.local```bash

- 🚀 [**CI/CD Pipeline**](docs/CI-CD.md) - GitHub Actions and deployment workflows

- 🔧 [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage# Edit .env.local with your Cognito User Pool details from CDK outputgit clone https://github.com/CaptainCode7/spaceweather-news.git



## License```cd spaceweather-news



MIT License - see LICENSE file for details.



---### 4. Run Development Server# Install dependencies



**Ready to monitor space weather events? Start with the Quick Start guide above!** 🛰️```bashcd nextjs-app && pnpm install

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
