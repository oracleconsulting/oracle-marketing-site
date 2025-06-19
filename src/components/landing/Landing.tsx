import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Oracle Method</div>
          <div className="space-x-4">
            {user ? (
              <Link
                to="/dashboard"
                className="px-6 py-2 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/auth"
                className="px-6 py-2 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Practice
              <br />
              <span className="text-purple-300">with AI-Powered Insights</span>
            </h1>
            <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto">
              Oracle Method combines AI technology with industry expertise to help accountancy practices
              scale efficiently and deliver exceptional value to clients.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to={user ? "/dashboard" : "/auth"}
                className="px-8 py-4 bg-white text-purple-900 rounded-xl font-semibold hover:bg-purple-50 transition flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
            <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
            <p className="text-purple-200">Get deep insights into your practice with advanced AI analytics.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
            <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Automation</h3>
            <p className="text-purple-200">Automate routine tasks and focus on high-value activities.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
            <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Growth Insights</h3>
            <p className="text-purple-200">Data-driven recommendations for practice growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 