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

const nextConfig = {
  // Enable static exports for better performance
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['oracleconsulting.ai'],
    formats: ['image/webp', 'image/avif'],
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
  
  // Redirects for SEO and app routing
  async redirects() {
    return [
      // SEO redirects
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/landing',
        destination: '/',
        permanent: true,
      },
      
      // App redirects to method portal
      {
        source: '/auth',
        destination: process.env.NODE_ENV === 'production' 
          ? 'https://app.oracleconsulting.ai/auth'
          : 'http://localhost:5173/auth',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: process.env.NODE_ENV === 'production'
          ? 'https://app.oracleconsulting.ai/dashboard'
          : 'http://localhost:5173/dashboard',
        permanent: false,
      },
      {
        source: '/accountancy/:path*',
        destination: process.env.NODE_ENV === 'production'
          ? 'https://app.oracleconsulting.ai/accountancy/:path*'
          : 'http://localhost:5173/accountancy/:path*',
        permanent: false,
      },
      {
        source: '/assessment/:path*',
        destination: process.env.NODE_ENV === 'production'
          ? 'https://app.oracleconsulting.ai/assessment/:path*'
          : 'http://localhost:5173/assessment/:path*',
        permanent: false,
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