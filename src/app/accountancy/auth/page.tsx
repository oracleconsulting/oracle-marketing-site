'use client'

import { useEffect } from 'react'

export default function AccountancyAuthPage() {
  useEffect(() => {
    // Redirect to the method portal accountancy auth page
    const methodPortalUrl = process.env.NODE_ENV === 'production'
      ? 'https://oracle-method-portal-production.up.railway.app/accountancy/auth'
      : 'http://localhost:5173/accountancy/auth'
    
    window.location.href = methodPortalUrl
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
        <p className="text-yellow-400">Redirecting to Oracle Method Portal...</p>
      </div>
    </div>
  )
} 