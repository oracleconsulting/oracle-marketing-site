'use client'

import { useEffect } from 'react'

export default function AuthPage() {
  useEffect(() => {
    // Redirect to the method portal auth page
    const methodPortalUrl = process.env.NODE_ENV === 'production'
      ? 'https://oracle-method-portal-production.up.railway.app/auth'
      : 'http://localhost:5173/auth'
    
    window.location.href = methodPortalUrl
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center p-6">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Oracle Method Portal...</p>
      </div>
    </div>
  )
} 