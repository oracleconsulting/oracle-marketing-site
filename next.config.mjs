/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration goes here
  experimental: {
    optimizeCss: true,
  },
  
  async redirects() {
    // In production on Railway, we'll use the production URL
    // In development, we'll use localhost
    const isDevelopment = process.env.NODE_ENV === 'development';
    const methodPortalUrl = isDevelopment 
      ? 'http://localhost:5173'
      : 'https://oracle-method-portal-production.up.railway.app';
    
    return [
      {
        source: '/auth',
        destination: `${methodPortalUrl}/auth`,
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: `${methodPortalUrl}/dashboard`,
        permanent: false,
      },
      {
        source: '/accountancy/auth',
        destination: `${methodPortalUrl}/accountancy/auth`,
        permanent: false,
      },
      {
        source: '/accountancy/dashboard',
        destination: `${methodPortalUrl}/accountancy/dashboard`,
        permanent: false,
      },
    ]
  },
};

export default nextConfig; 