'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, Users, MessageSquare, Calendar, Hash, Lock, ExternalLink, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Community() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  
  // Navigation items
  const navItems = [
    { label: 'The Beanstalk Test', href: '/beanstalk-test' },
    { label: '365 Method', href: '/365-method' },
    { label: 'AI Board', href: '/ai-board' },
    { label: 'Accountancy Portal', href: '/accountancy' },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="font-bold text-gray-800">Oracle AI</h1>
                <p className="text-xs text-gray-500">Life-First Business Design</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Roadmap
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-white font-medium">
                  Get Your Free Roadmap
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="min-h-screen bg-gray-900 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Your Founder Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 75+ UK founders building life-first businesses with peer support and AI insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg">
                  Join Free
                </button>
                <button className="px-8 py-3 border border-purple-400 text-purple-300 hover:bg-purple-900/20 rounded-lg">
                  See Member Benefits
                </button>
              </div>

              {/* Community Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">75+</div>
                  <div className="text-gray-400">Active Founders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">12</div>
                  <div className="text-gray-400">Expert Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-400">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Community Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-purple-400 text-xl font-semibold mb-2">Slack Community</h3>
                <p className="text-gray-400">Connect with founders in real-time through our dedicated Slack workspace</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-pink-400 text-xl font-semibold mb-2">Monthly Meetups</h3>
                <p className="text-gray-400">Join virtual and in-person events with industry experts</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 text-xl font-semibold mb-2">Growth Insights</h3>
                <p className="text-gray-400">Access exclusive reports and benchmarks from successful founders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Free Resources for Founders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer p-6 rounded-lg">
                <h3 className="text-purple-400 text-xl font-semibold mb-2">Founder Wellness Assessment</h3>
                <p className="text-gray-400 mb-4">Discover your burnout risk and get a personalized action plan</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
                  Get Free Assessment
                </button>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 hover:border-pink-500 transition-colors cursor-pointer p-6 rounded-lg">
                <h3 className="text-pink-400 text-xl font-semibold mb-2">90-Day Roadmap Template</h3>
                <p className="text-gray-400 mb-4">The exact template successful founders use to scale sustainably</p>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg">
                  Download Template
                </button>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer p-6 rounded-lg">
                <h3 className="text-blue-400 text-xl font-semibold mb-2">UK SME Benchmark Report 2025</h3>
                <p className="text-gray-400 mb-4">Quarterly insights and benchmarks from UK's fastest-growing SMEs</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Get Report
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
