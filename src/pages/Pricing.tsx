import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Users, Target, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          {tiers.map((tier, index) => (
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
                  to={tier.href}
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

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="card-mobile text-center">
            <Crown className="w-12 h-12 md:w-16 md:h-16 text-amber-500 mx-auto mb-6" />
            <h3 className="text-responsive-2xl font-bold text-white mb-4">
              Enterprise Solutions
            </h3>
            <p className="text-responsive-base text-gray-400 mb-8 max-w-2xl mx-auto">
              Need custom solutions, dedicated support, or volume pricing? 
              Our enterprise team will craft the perfect solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-touch bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold">
                Contact Sales
              </button>
              <button className="btn-touch bg-gray-800 text-white rounded-lg font-medium border border-gray-700 hover:border-gray-600">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-400 mb-4">Questions about pricing?</p>
          <Link 
            to="/faq" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            View our FAQ →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
