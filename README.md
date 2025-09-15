# 🌌 Space Weather Monitoring System

**Real-time Space Weather Data & Alert Platform**

A modern Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with scalable cloud architecture and automated CI/CD deployment.

[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)
[![Next.js](https://img.shields.io/badge/Next.js-Latest-black.svg)](https://nextjs.org/)
[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue.svg)](https://www.typescriptlang.org/)

## 🌟 Features

### ✅ Current Implementation
- **Interactive Dashboard**: Real-time space weather monitoring interface
- **Space Weather Data**: Solar activity cards, geomagnetic monitoring, and alerts
- **API Integration**: Ready-to-use endpoints for space weather data
- **Multi-Environment**: Separate configurations for development, staging, and production
- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment
- **AWS Infrastructure**: CDK-based infrastructure as code
- **Responsive Design**: Modern UI with Tailwind CSS and Lucide icons

### 🔄 Current Space Weather Features
- **Dashboard**: Interactive space weather monitoring interface
- **Solar Activity**: Real-time solar flare and solar wind monitoring
- **Geomagnetic Activity**: K-index tracking and storm warnings
- **Space Weather Alerts**: Active alerts and warning system
- **Activity Charts**: Historical trend visualization
- **API Testing**: Built-in API testing interface

### 🚀 Planned Enhancements
- **Real-time Data**: Live integration with NOAA space weather APIs
- **Advanced Alerts**: Email/SMS notifications for critical events
- **Historical Analysis**: Long-term trend analysis and solar cycle tracking
- **Mobile App**: Progressive Web App capabilities
- **User Customization**: Personalized dashboard and alert preferences
- **Historical Analysis**: Long-term trend analysis and solar cycle tracking
- **Multi-Platform**: Web dashboard + mobile notifications

## 🏗️ Architecture

```
                    Current Architecture                   
┌──────────────────────────────────────────────────────┐
│  Frontend: Next.js (App Router) + TypeScript        │
│  Styling: Tailwind CSS + Lucide Icons               │
│  Backend: AWS Lambda + API Gateway                   │
│  Infrastructure: AWS CDK v2                         │
│  CI/CD: GitHub Actions                              │
│  Monitoring: CloudWatch                             │
│  Auth: Removed (see AUTHENTICATION.md)              │
└──────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+** and **pnpm** (package manager, similar to npm but faster)
- **AWS CLI v2** configured with credentials (needed to deploy to AWS)
- **AWS CDK v2** installed globally (infrastructure as code tool)
- **GitHub account** for CI/CD (continuous integration/deployment)

### 1. Clone and Install
```bash
# Clone the repository to your local machine
git clone https://github.com/CaptainCode7/spaceweather-news.git
cd spaceweather-news

# Install dependencies for both frontend and infrastructure
cd nextjs-app && pnpm install
cd ../cdk && pnpm install
```

### 2. Deploy Infrastructure
```bash
cd cdk
# Set which environment you're deploying to
export ENVIRONMENT=development  # or staging/production

# Bootstrap CDK (one-time setup per AWS account/region)
# This creates the resources AWS CDK needs to deploy your app
pnpm cdk bootstrap

# Deploy the infrastructure to AWS
pnpm cdk deploy
```
```bash
cd cdk
# Set which environment you're deploying to
# On Mac/Linux (bash):
export ENVIRONMENT=development  # or staging/production
# On Windows CMD:
set ENVIRONMENT=development
# On Windows PowerShell:
$env:ENVIRONMENT = 'development'

# Bootstrap CDK (one-time setup per AWS account/region)
# This creates the resources AWS CDK needs to deploy your app
pnpm cdk bootstrap

# Deploy the infrastructure to AWS
pnpm cdk deploy
```

### 3. Configure Environment
```bash
cd ../nextjs-app
# Create a local environment file from the example
cp .env.example .env.local
# Edit .env.local with your API Gateway URL from CDK output
# The API Gateway URL will be shown in the terminal after deployment
```

### 4. Run Development Server
```bash
# Start the Next.js development server
pnpm dev
# Open your browser to http://localhost:3000 to see the app
```

## Development Workflow

### Phase 1: Current Implementation Status ✅
- **Frontend**: Next.js 15 with App Router and TypeScript
- **Dashboard**: Interactive space weather monitoring interface
- **Components**: Reusable UI components for space weather data
- **Infrastructure**: CDK-based AWS deployment
- **CI/CD**: GitHub Actions with automated testing and deployment

### Phase 2: Live Data Integration (In Progress)
- **NOAA API Integration**: Real-time space weather data collection
- **Data Processing**: Live space weather event monitoring
- **Enhanced Visualizations**: More detailed charts and historical data
- **Alert Enhancements**: Real-time notification system

### Phase 3: Advanced Features (Planned)
- **Historical Analysis**: Trend analysis and forecasting
- **User Customization**: Personal dashboard preferences
- **Mobile Experience**: Progressive Web App capabilities
- **API Extensions**: More comprehensive space weather endpoints

## Project Structure

This is how the project files are organized:

```
spaceweather-news/
├── README.md                          # This file - project overview
├── SPACE-WEATHER-ROADMAP.md           # Development phases and features
├── Requirements.md                    # Technical specifications
├── nextjs-app/                        # Frontend application (what users see)
│   ├── app/
│   │   ├── api/                       # Backend API endpoints
│   │   │   └── local-echo/            # Example API endpoints
│   │   ├── components/                # Reusable UI components
│   │   ├── dashboard/                 # Space weather dashboard
│   │   └── page.tsx                   # Home page
│   ├── src/
│   │   └── components/
│   │       ├── dashboard/             # Dashboard components
│   │       └── ui/                    # UI components
│   └── types/                         # TypeScript type definitions
├── docs/                              # Documentation
│   ├── AUTHENTICATION.md              # Authentication information
│   ├── CI-CD.md                       # Deployment pipeline details 
│   └── GLOSSARY.md                    # Dictionary of terms used
└── cdk/                               # AWS Infrastructure (cloud setup)
    ├── lib/
    │   ├── cdk-stack.ts               # Core infrastructure
    │   ├── pipeline-stack.ts          # CI/CD pipeline
    │   └── config.ts                  # Environment configuration
    └── bin/cdk.ts                     # CDK app entry point
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
- 🔐 [**Authentication Status**](docs/AUTHENTICATION.md) - Current authentication approach (simplified)
- 🚀 [**CI/CD Pipeline**](docs/CI-CD.md) - GitHub Actions and deployment workflows
- 📘 [**Glossary**](docs/GLOSSARY.md) - Dictionary of terms used in this project
- 🔧 [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage

## Getting Help

- If you get stuck, check the [Glossary](docs/GLOSSARY.md) for definitions.
- For troubleshooting, see the "Troubleshooting" section in [CI-CD.md](docs/CI-CD.md).
- You can also open an issue on GitHub or ask for help in the project discussions.
- �🔧 [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage

## License

MIT License - see LICENSE file for details.

---

**Ready to monitor space weather events? Start with the Quick Start guide above!** 🛰️
