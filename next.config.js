/** @type {import('next').NextConfig} */

/**
 * ORACLE CONSULTING AI - ARCHITECTURE OVERVIEW
 * 
 * This project has a two-app architecture:
 * 
 * 1. oracle-marketing-site (Next.js) - Marketing/landing pages
 *    - Public-facing content
 *    - Lead generation
 *    - Routes: /, /pricing, /about, etc.
 * 
 * 2. oracle-method-portal (Vite/React) - Main application
 *    - Authentication
 *    - Dashboard functionality
 *    - Accountancy portal
 *    - Routes: /auth, /dashboard, /accountancy/*
 * 
 * REDIRECTS:
 * - /auth -> http://localhost:5173/auth (method portal)
 * - /dashboard -> http://localhost:5173/dashboard (method portal)
 * - /accountancy/* -> http://localhost:5173/accountancy/* (method portal)
 * 
 * DEPLOYMENT:
 * - Marketing site: Static export to CDN
 * - Method portal: Vercel/Netlify with API routes
 * - Backend: oracle_api_server (Python/FastAPI)
 */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  

  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  

  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    METHOD_PORTAL_URL: process.env.NODE_ENV === 'production'
      ? 'https://app.oracleconsulting.ai'
      : 'http://localhost:5173',
  },
}

module.exports = nextConfig 