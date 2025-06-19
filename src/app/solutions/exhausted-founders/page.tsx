'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';
import { FoundersHero } from '@/components/founders/FoundersHero';
import { ProblemSection } from '@/components/founders/ProblemSection';
import { SolutionFeatures } from '@/components/founders/SolutionFeatures';
import { ROISection } from '@/components/founders/ROISection';
import { SuccessStory } from '@/components/founders/SuccessStory';
import { CallToAction } from '@/components/founders/CallToAction';

const ExhaustedFounders = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <FoundersHero />
          <ProblemSection />
          <SolutionFeatures />
          <ROISection />
          <SuccessStory />
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default ExhaustedFounders;
