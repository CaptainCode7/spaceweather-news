#  Space Weather Monitoring System

**Real-time Space Weather Data & Alert Platform**

A production-ready Next.js application with AWS serverless infrastructure for monitoring solar activity, geomagnetic conditions, and space weather events. Built with enterprise-grade authentication, multi-environment CI/CD, and scalable cloud architecture.

[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange.svg)](https://github.com/CaptainCode7/spaceweather-news)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)
[![AWS CDK](https://img.shields.io/badge/AWS-CDK%20v2-FF9900.svg)](https://aws.amazon.com/cdk/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

##  Features

###  Production Infrastructure
- **Authentication**: AWS Cognito + NextAuth v5 for secure user management
- **Multi-Environment**: Separate configs for development, staging, and production
- **CI/CD Pipeline**: GitHub Actions with automated testing and deployment
- **CDK Pipeline**: AWS-native infrastructure as code with self-mutating deployments
- **Monitoring**: CloudWatch integration and error tracking

###  Current Space Weather Features
- **Authentication System**: AWS Cognito + NextAuth integration
- **User Management**: Protected routes and user dashboard
- **API Infrastructure**: RESTful endpoints ready for space weather data integration
- **Real-time Updates**: WebSocket-ready infrastructure for live data streaming

###  Planned Space Weather Features
- **Real-time Data**: Live solar activity and geomagnetic monitoring via NOAA APIs
- **Interactive Dashboard**: Visual charts and graphs for space weather parameters
- **Alert System**: Customizable notifications for space weather events
- **Historical Analysis**: Long-term trend analysis and solar cycle tracking
- **Multi-Platform**: Web dashboard + mobile notifications

##  Architecture

```

                    Production Architecture                   
──
  Frontend: Next.js 15 (App Router) + TypeScript            
  Authentication: AWS Cognito + NextAuth                    
  Backend: AWS Lambda + API Gateway                         
│  Database: DynamoDB (NoSQL)                               
  Infrastructure: AWS CDK v2                               
  CI/CD: GitHub Actions + AWS CodePipeline                 
  Monitoring: CloudWatch + X-Ray                           
─
```

##  Quick Start

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

### 2. Deploy Authentication Stack
```bash
cd cdk
export ENVIRONMENT=development  # or staging/production

# Bootstrap CDK (one-time per AWS account/region)
pnpm cdk bootstrap

# Deploy authentication infrastructure
pnpm cdk deploy SpaceweatherAuthStack-${ENVIRONMENT}
```

### 3. Configure Environment
```bash
cd ../nextjs-app
cp .env.example .env.local
# Edit .env.local with your Cognito User Pool details from CDK output
```

### 4. Run Development Server
```bash
pnpm dev
# Open http://localhost:3000
```

## Development Workflow

### Phase 1: Current Implementation Status 
- **Authentication**: AWS Cognito + NextAuth.js integration
- **Infrastructure**: Multi-environment CDK deployment pipeline
- **CI/CD**: GitHub Actions with automated testing and deployment
- **Frontend**: Next.js 15 with App Router and TypeScript
- **API Foundation**: RESTful endpoints with AWS Lambda functions

### Phase 2: Space Weather Integration (In Progress)
- **NOAA API Integration**: Solar activity data collection
- **Data Processing**: Real-time space weather event monitoring
- **Visualization Components**: Interactive charts and alerts
- **Notification System**: Critical event alerting

### Phase 3: Advanced Features (Planned)
- **Historical Analysis**: Trend analysis and forecasting
- **User Personalization**: Custom alert preferences
- **Mobile Experience**: Progressive Web App capabilities
- **Community Features**: Data sharing and discussions

## Project Structure

```
spaceweather-news/
 README.md
 SPACE-WEATHER-ROADMAP.md          # Development phases and features
 Requirements.md                    # Technical specifications
 nextjs-app/                       # Frontend application
   app/
     api/
       space-weather/           # Space weather API endpoints
       auth/                    # Authentication routes
     components/                 # Reusable UI components
     dashboard/                  # Protected dashboard pages
     auth/                       # Authentication pages
   src/
     components/
       visualization/           # Charts and data displays
       layout/                  # Layout components
     hooks/                      # Custom React hooks
     lib/                        # Utility functions and configs
   types/                         # TypeScript type definitions
 cdk/                              # AWS Infrastructure
    lib/
      auth-stack.ts               # Cognito authentication
      cdk-stack.ts                # Core infrastructure
      pipeline-stack.ts           # CI/CD pipeline
    bin/cdk.ts                     # CDK app entry point
```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/space-weather-alerts`
3. **Make your changes** following the established patterns
4. **Add tests** for new functionality
5. **Submit a pull request** with detailed description

## Documentation

-  [**Requirements**](Requirements.md) - Technical specifications and architecture
-  [**Space Weather Roadmap**](SPACE-WEATHER-ROADMAP.md) - Development phases and planned features
-  [**Authentication Setup**](docs/AUTHENTICATION.md) - AWS Cognito and NextAuth configuration
-  [**CI/CD Pipeline**](docs/CI-CD.md) - GitHub Actions and deployment workflows
-  [**API Documentation**](nextjs-app/app/api/) - Available endpoints and usage

## License

MIT License - see LICENSE file for details.

---

**Ready to monitor space weather events? Start with the Quick Start guide above!** 
