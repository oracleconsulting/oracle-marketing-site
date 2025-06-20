/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration goes here
  experimental: {
    optimizeCss: true,
  },
  
  // Note: Server-side redirects don't work with static export (output: 'export')
  // All cross-domain navigation is handled via direct links in the components
  // using the configuration in src/config/urls.ts
};

export default nextConfig; 