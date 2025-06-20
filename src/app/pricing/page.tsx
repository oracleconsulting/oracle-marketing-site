'use client'
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { FaCheck, FaTimes, FaStar, FaArrowRight, FaBrain } from 'react-icons/fa';
import { getAuthUrl } from '../../config/urls';

const PricingPage = () => {
  const tiers = [
    {
      name: 'Explorer',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for getting started with AI board insights',
      features: [
        'Life Assessment',
        '1 AI Board Meeting/month',
        'Community Access',
        'Basic Resources',
        'Email Support'
      ],
      limitations: ['Limited to 1 meeting', 'Basic integrations only'],
      cta: 'Start Free',
      href: '/auth',
      popular: false,
      gradient: 'from-gray-700 to-gray-800',
      borderColor: 'border-gray-700'
    },
    {
      name: 'Starter',
      price: '£99',
      period: 'per month',
      description: 'Full AI board access for growing businesses',
      features: [
        'Everything in Free',
        'Full AI Board Access',
        'Monthly Roadmap',
        '1 Integration',
        'Priority Email Support',
        'Meeting History',
        'Basic Analytics'
      ],
      limitations: [],
      cta: 'Start 14-day Trial',
      href: '/auth',
      popular: false,
      gradient: 'from-purple-600 to-purple-700',
      borderColor: 'border-purple-500'
    },
    {
      name: 'Growth',
      price: '£299',
      period: 'per month',
      description: 'Most popular for scaling teams',
      features: [
        'Everything in Starter',
        '5 Integrations',
        'Team Access (3 seats)',
        'Weekly Board Meetings',
        'Advanced Analytics',
        'Custom Roadmaps',
        'Priority Support',
        'API Access'
      ],
      limitations: [],
      cta: 'Start Trial',
      href: '/auth',
      popular: true,
      gradient: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400'
    },
    {
      name: 'Scale',
      price: '£599',
      period: 'per month',
      description: 'Everything you need for enterprise growth',
      features: [
        'Everything in Growth',
        'Unlimited Integrations',
        'Unlimited Team Seats',
        'Custom AI Agents',
        'White-label Options',
        'Dedicated Success Manager',
        'SLA Guarantees',
        'Advanced Security'
      ],
      limitations: [],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
      gradient: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const authUrl = getAuthUrl();

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-[0.02]" />
      
      <div className="relative z-10 container-mobile py-8 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-responsive-3xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={`relative card-mobile ${tier.popular ? 'ring-2 ring-purple-500/50' : ''}`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Tier Name & Price */}
                <div className="mb-6">
                  <h3 className="text-responsive-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period !== 'Forever' && (
                      <span className="text-responsive-sm text-gray-400">/{tier.period.split(' ')[1]}</span>
                    )}
                  </div>
                  <p className="text-responsive-sm text-gray-400">{tier.description}</p>
                </div>

                {/* Features */}
                <div className="space-mobile mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-responsive-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {tier.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start gap-3 opacity-60">
                      <div className="w-4 h-4 md:w-5 md:h-5 border border-gray-600 rounded-full mt-0.5 flex-shrink-0" />
                      <span className="text-responsive-sm text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={tier.href}
                  className={`w-full btn-touch rounded-lg font-semibold transition-all text-center block ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-400">Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">What's included in the free trial?</h3>
              <p className="text-gray-400">The 14-day free trial includes full access to all features of your chosen plan. No credit card required to start.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-gray-400">We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-400">Yes, you can change your plan at any time. Changes take effect immediately and are prorated.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready to transform your business?</h2>
          <p className="text-gray-400 mb-8">Join thousands of founders who've already discovered the power of AI-driven insights.</p>
          <a
            href={authUrl}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            Start Your Free Trial
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage; 