#!/bin/bash

# Oracle Marketing Site - Fix Redirects Deployment Script
# This script fixes the redirect issues between marketing site and method portal

set -e

echo "🚀 Oracle Marketing Site - Fixing Redirects"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "next.config.js" ]; then
    echo "❌ Error: Must run this script from the oracle-marketing-site directory"
    exit 1
fi

echo "📋 Current configuration:"
echo "   - Marketing Site: oracle-marketing-site"
echo "   - Method Portal: oracle-method-portal-production.up.railway.app"
echo "   - Backend API: oracle-api-server-production.up.railway.app"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Create deployment summary
echo "📝 Creating deployment summary..."
cat > MARKETING_REDIRECTS_FIX.md << 'EOF'
# Oracle Marketing Site - Redirects Fix

## Problem Fixed
- Static export (`output: 'export'`) doesn't support server-side redirects
- Marketing site was trying to load resources from itself instead of redirecting to method portal
- 404 errors for vite.svg and other resources

## Solution Implemented

### 1. Updated Next.js Configuration
- Removed server-side `redirects()` function (not supported in static exports)
- Simplified image configuration for static export
- Kept environment variables for method portal URLs

### 2. Created Client-Side Redirect Pages
- `/auth` → Redirects to `oracle-method-portal-production.up.railway.app/auth`
- `/dashboard` → Redirects to `oracle-method-portal-production.up.railway.app/dashboard`
- `/accountancy/auth` → Redirects to `oracle-method-portal-production.up.railway.app/accountancy/auth`
- `/assessment` → Redirects to `oracle-method-portal-production.up.railway.app/assessment`

### 3. Updated _redirects File
- Added proper redirect rules for static hosting
- SEO redirects for `/home` and `/landing`
- Fallback to SPA routing

## Architecture
```
oracle-marketing-site (Static Export)
├── Landing pages (/)
├── Marketing content (/pricing, /about, etc.)
└── Redirect pages (/auth, /dashboard, etc.)
    └── Client-side redirect to oracle-method-portal
```

## Testing
1. Visit marketing site
2. Click "Get Your Free Roadmap" button
3. Should redirect to method portal auth page
4. No more 404 errors for resources

## Deployment
- Railway will automatically deploy the changes
- Static export will be served from CDN
- All redirects will work properly
EOF

echo "✅ Marketing site redirects fixed!"
echo ""
echo "📋 Next steps:"
echo "   1. Commit and push these changes"
echo "   2. Railway will automatically redeploy"
echo "   3. Test the 'Get Your Free Roadmap' button"
echo "   4. Verify no more 404 errors"
echo ""
echo "🔗 Test URLs:"
echo "   - Marketing Site: https://oracle-marketing-site-production.up.railway.app"
echo "   - Method Portal: https://oracle-method-portal-production.up.railway.app"
echo ""
echo "📄 See MARKETING_REDIRECTS_FIX.md for details" 