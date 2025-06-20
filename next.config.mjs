/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration goes here
  experimental: {
    optimizeCss: true,
  },
  
  async redirects() {
    // Use environment variable or default to production URL
    const methodPortalUrl = process.env.NEXT_PUBLIC_METHOD_PORTAL_URL || 'https://oracle-method-portal-production.up.railway.app';
    
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