'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaStar, FaBullseye, FaUsers, FaBookOpen, FaShieldAlt, FaArrowRight, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { getAccountancyAuthUrl, getAccountancyDashboardUrl } from '../../config/urls';
import { supabase } from '@/lib/supabase/client';
import { toast } from 'sonner';

export default function AccountancyLandingPage() {
  // Get URLs from config
  const accountancyAuthUrl = getAccountancyAuthUrl();
  const accountancyDashboardUrl = getAccountancyDashboardUrl();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current user
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleGoToDashboard = async () => {
    // Check if user is logged in
    if (!user) {
      // Not logged in - go to auth page
      window.location.href = accountancyAuthUrl;
      return;
    }
    
    // Check if user is a client
    if (user.user_metadata?.is_client) {
      // This is a client - show error message
      toast.error('This area is for accountants only. Please use your client portal link.');
      return;
    }
    
    // User is an accountant - proceed to dashboard
    window.location.href = accountancyDashboardUrl;
  };

  const handleTakeAssessment = async () => {
    // Check if user is logged in and is a client
    if (user && user.user_metadata?.is_client) {
      toast.error('This assessment is for accountancy practices only.');
      return;
    }
    
    window.location.href = accountancyAuthUrl;
  };

  const isClient = user?.user_metadata?.is_client;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 bg-slate-900/80 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-xl flex items-center justify-center text-2xl animate-pulse">
              <FaStar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Oracle Method</h1>
              <p className="text-yellow-400 text-xs">Accountancy Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-purple-200 hover:text-yellow-400 transition-colors">Main Portal</Link>
            {!isClient && (
              <>
                <button
                  onClick={handleGoToDashboard}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={handleTakeAssessment}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Take Free Assessment
                </button>
              </>
            )}
            {isClient && (
              <div className="px-6 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm">
                Accountants Only Area
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-8">
              <FaStar className="w-4 h-4" />
              Trusted by 500+ Accountancy Practices
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your<br />
              <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                Accountancy Practice
              </span>
            </h1>
            <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline operations, enhance client relationships, and drive growth with our comprehensive suite of AI-powered tools designed specifically for modern accountancy practices.
            </p>
            
            {!isClient ? (
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <button
                  onClick={handleTakeAssessment}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Your Free Assessment <FaArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#demo"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            ) : (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-red-400 font-medium mb-2">Access Restricted</p>
                <p className="text-purple-200">
                  This portal is exclusively for accountancy practices. As a client, please use your dedicated client portal link to access your documents and information.
                </p>
              </div>
            )}
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-purple-200 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-green-400" />
                <span>FCA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-blue-400" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <FaChartLine className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid - Only show for non-clients */}
      {!isClient && (
        <div className="px-6 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Everything You Need to Excel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaBullseye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Practice Health Monitoring</h3>
                <p className="text-purple-200 leading-relaxed">
                  Real-time insights into your practice performance, client satisfaction, and operational efficiency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Client Handover Management</h3>
                <p className="text-purple-200 leading-relaxed">
                  Streamlined client transitions with automated workflows and comprehensive tracking systems.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaBookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">CPD & Compliance Tracking</h3>
                <p className="text-purple-200 leading-relaxed">
                  Automated CPD monitoring and regulatory compliance management for your entire team.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaShieldAlt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cyber Security Assessment</h3>
                <p className="text-purple-200 leading-relaxed">
                  Comprehensive security evaluation and recommendations to protect your practice and client data.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}