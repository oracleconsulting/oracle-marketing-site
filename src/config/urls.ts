// Configuration for external URLs
export const urls = {
  methodPortal: 'https://oracle-method-portal-production.up.railway.app',
  apiServer: 'https://oracle-api-server-production.up.railway.app',
  marketingSite: 'https://oracle-marketing-site-production.up.railway.app'
};

// Helper function to get auth URL
export const getAuthUrl = () => `${urls.methodPortal}/auth`;

// Helper function to get accountancy auth URL
export const getAccountancyAuthUrl = () => `${urls.methodPortal}/accountancy/auth`;

// Helper function to get accountancy dashboard URL
export const getAccountancyDashboardUrl = () => `${urls.methodPortal}/accountancy/dashboard`;

// Helper function to get main dashboard URL
export const getDashboardUrl = () => `${urls.methodPortal}/dashboard`; 