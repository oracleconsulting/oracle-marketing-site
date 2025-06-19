# Oracle Marketing Site - Railway Deployment Guide

## Prerequisites
- Railway account
- Git repository with the marketing site code

## Deployment Steps

### 1. Create New Railway Project
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Select the `oracle-marketing-site` directory as the source

### 2. Configure Environment Variables
Add these environment variables in Railway:
- `NODE_ENV=production`
- `PORT=3000` (Railway will set this automatically)

### 3. Build Configuration
Railway will automatically:
- Install dependencies with `npm install`
- Build the project with `npm run build`
- Start the server with `npm start`

### 4. Domain Configuration
1. Go to your Railway project settings
2. Add a custom domain (e.g., `marketing.oracleai.com`)
3. Configure DNS records as instructed by Railway

## Build Process
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Health Check**: `/` (root path)

## Monitoring
- Check Railway logs for build and runtime errors
- Monitor the health check endpoint
- Set up alerts for deployment failures

## Troubleshooting
- If build fails, check Railway logs for dependency issues
- Ensure all environment variables are set correctly
- Verify the Node.js version is compatible (Railway uses latest LTS)

## Rollback
- Railway automatically creates deployment snapshots
- Use the Railway dashboard to rollback to previous versions if needed 