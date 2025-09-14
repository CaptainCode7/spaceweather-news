# 🌌 Space Weather Monitoring System

**Real-time Space Weather Data & Alert Platform**

A modern Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with scalable cloud architecture and automated CI/CD deployment.

[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)
[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

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
│  Frontend: Next.js 15 (App Router) + TypeScript      │
│  Styling: Tailwind CSS + Lucide Icons               │
│  Backend: AWS Lambda + API Gateway                   │
│  Infrastructure: AWS CDK v2                         │
│  CI/CD: GitHub Actions                              │
│  Monitoring: CloudWatch                             │
└──────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+** and **pnpm**
- **AWS CLI v2** configured with credentials
- **AWS CDK v2** installed globally
- **GitHub account** for CI/CD

### 1. Clone and Install
```bash
git clone https://github.com/CaptainCode7/spaceweather-news.git
cd spaceweather-news

# Install dependencies
cd nextjs-app && pnpm install
cd ../cdk && pnpm install
```

### 2. Deploy Infrastructure
```bash
cd cdk
export ENVIRONMENT=development  # or staging/production

# Bootstrap CDK (one-time per AWS account/region)
pnpm cdk bootstrap

# Deploy the infrastructure
pnpm cdk deploy
```

### 3. Configure Environment
```bash
cd ../nextjs-app
cp .env.example .env.local
# Edit .env.local with your API Gateway URL from CDK output
```

### 4. Run Development Server
```bash
pnpm dev
# Open http://localhost:3000
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

```
spaceweather-news/
├── README.md
├── SPACE-WEATHER-ROADMAP.md          # Development phases and features
├── Requirements.md                    # Technical specifications
├── nextjs-app/                       # Frontend application
│   ├── app/
│   │   ├── api/
│   │   │   └── local-echo/           # Example API endpoints
│   │   ├── components/               # Reusable UI components
│   │   ├── dashboard/                # Space weather dashboard
│   │   └── page.tsx                  # Home page
│   ├── src/
│   │   └── components/
│   │       ├── dashboard/            # Dashboard components
│   │       └── ui/                   # UI components
│   └── types/                        # TypeScript type definitions
└── cdk/                              # AWS Infrastructure
    ├── lib/
    │   ├── cdk-stack.ts              # Core infrastructure
    │   ├── pipeline-stack.ts         # CI/CD pipeline
    │   └── config.ts                 # Environment configuration
    └── bin/cdk.ts                    # CDK app entry point
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
- 🔧 [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage

## License

MIT License - see LICENSE file for details.

---

**Ready to monitor space weather events? Start with the Quick Start guide above!** 🛰️ 


