import React from 'react';
import { FaStar, FaBullseye, FaUsers, FaBookOpen, FaShieldAlt, FaArrowRight, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accountancy Portal - Oracle AI',
  description: 'Transform your accountancy practice with AI-powered tools, client handover, compliance, and more. Join the future of accountancy today.',
  keywords: 'accountancy, ai, oracle ai, accounting automation, client portal, insights',
};

export default function AccountancyLandingPage() {
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
            <a href="/" className="text-purple-200 hover:text-yellow-400 transition-colors">Main Portal</a>
            <a
              href="https://app.oracleai.co.uk/accountancy/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
            </a>
            <a
              href="https://app.oracleai.co.uk/accountancy/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Take Free Assessment
            </a>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a
                href="https://app.oracleai.co.uk/accountancy/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Take Free Assessment <FaArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
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

      {/* Features Grid */}
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
            {/* Add more features as needed */}
          </div>
        </div>
      </div>
    </div>
  );
} 