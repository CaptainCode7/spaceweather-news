# Glossary of Terms

This document explains common terms used in this project. Use it as a reference when you encounter unfamiliar concepts.

## Web Development Terms

### Frontend
- **Next.js**: A React framework for building web applications with features like server-side rendering and static site generation
- **React**: A JavaScript library for building user interfaces with reusable components
- **TypeScript**: A programming language that adds static types to JavaScript to catch errors earlier
- **Tailwind CSS**: A utility-first CSS framework that helps build designs directly in your markup
- **App Router**: Next.js routing system that enables more advanced page organization and features

### Backend
- **API (Application Programming Interface)**: A set of rules that allows different software to communicate
- **REST API**: A style of API that uses standard HTTP methods (GET, POST, etc.) to perform operations
- **API Gateway**: AWS service that creates and manages APIs (provides an entry point for your backend)
- **Lambda**: AWS serverless computing service that runs your code without managing servers
- **Serverless**: A cloud computing model where the cloud provider manages the infrastructure

### Infrastructure & Deployment
- **AWS (Amazon Web Services)**: Cloud computing services platform
- **CDK (Cloud Development Kit)**: Infrastructure as Code tool for defining cloud resources using programming languages
- **Infrastructure as Code (IaC)**: Managing infrastructure using code and automation instead of manual processes
- **CI/CD (Continuous Integration/Continuous Deployment)**: Automated process for testing and deploying code
- **GitHub Actions**: Automation tool built into GitHub for CI/CD workflows

### Data Storage
- **DynamoDB**: Amazon's NoSQL database service that provides fast, consistent performance
- **NoSQL**: Database type that provides flexible schemas for storing data (unlike traditional SQL databases)

## Space Weather Terms

### Solar Activity
- **Solar Flare**: Sudden, intense brightening of the Sun's surface, classified as A, B, C, M, or X (increasing in strength)
- **Coronal Mass Ejection (CME)**: Large release of plasma and magnetic field from the Sun
- **Sunspot**: Temporary dark spot on the Sun's surface indicating intense magnetic activity
- **Solar Wind**: Stream of charged particles flowing from the Sun throughout the solar system

### Geomagnetic Activity
- **Kp-Index**: Global geomagnetic activity index, scale from 0-9 (9 being the most severe storm)
- **Geomagnetic Storm**: Disturbance in Earth's magnetosphere caused by changes in solar wind
- **Aurora**: Natural light display in Earth's sky caused by solar particles interacting with the atmosphere
- **Magnetosphere**: Region around Earth affected by its magnetic field

### Space Weather Effects
- **HF Radio Blackout**: Disruption of high-frequency radio communications due to solar activity
- **GPS/GNSS Disruption**: Degradation of GPS accuracy due to ionospheric disturbances
- **Geomagnetically Induced Currents (GICs)**: Electrical currents induced in power grids during geomagnetic storms
- **Satellite Anomalies**: Operational issues with satellites caused by radiation or charging events

## Project-Specific Terms

### Environments
- **Development**: Testing environment for developers (least restrictive, used for daily work)
- **Staging**: Pre-production environment that mimics production for final testing
- **Production**: Live environment that users interact with (most restrictive, requires approval for changes)

### Authentication (Removed Feature)
- **Cognito**: AWS service for user authentication and management
- **NextAuth**: Authentication library for Next.js applications
- **Protected Route**: Web page that requires authentication to access

### Project Organization
- **Workspace**: The overall project directory structure
- **Monorepo**: Repository containing multiple related projects (like frontend and infrastructure code)
- **pnpm**: Package manager used in this project (alternative to npm or yarn)