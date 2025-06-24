// oracle-marketing-site/config/urls.ts
// Configuration for external URLs

export const urls = {
  methodPortal: 'https://oracle-method-portal-production.up.railway.app',
  apiServer: 'https://oracle-api-server-production.up.railway.app',
  marketingSite: 'https://oracle-marketing-site-production.up.railway.app'
};

// Helper function to get auth URL for Oracle (main product)
export const getAuthUrl = () => `${urls.methodPortal}/auth`;

// Helper function to get accountancy auth URL with portal parameter
export const getAccountancyAuthUrl = () => `${urls.methodPortal}/auth?portal=accountancy`;

// Helper function to get accountancy dashboard URL
export const getAccountancyDashboardUrl = () => `${urls.methodPortal}/accountancy/dashboard`;

// Helper function to get main dashboard URL
export const getDashboardUrl = () => `${urls.methodPortal}/dashboard`;

// Helper function to get assessment URL
export const getAssessmentUrl = () => `${urls.methodPortal}/assessment/part1`;

// Helper function to get admin URL
export const getAdminUrl = () => `${urls.methodPortal}/admin`;

// Helper function to get client portal login URL
export const getClientPortalLoginUrl = (portalId?: string) => 
  portalId ? `${urls.methodPortal}/client-portal/${portalId}/login` : `${urls.methodPortal}/client-portal/login`;

// Helper function to get client portal invite URL
export const getClientPortalInviteUrl = (token: string) => 
  `${urls.methodPortal}/client-portal/accept-invite?token=${token}`;