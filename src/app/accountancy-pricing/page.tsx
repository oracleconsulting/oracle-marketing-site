'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Calculator, TrendingUp, Clock, Shield, Users, Zap, BarChart3, Briefcase, GraduationCap, Plus } from 'lucide-react';

const AccountancyPricing = () => {
  // Calculator state
  const [annualRevenue, setAnnualRevenue] = useState('500000');
  const [staffCount, setStaffCount] = useState('10');
  const [complianceHours, setComplianceHours] = useState('15');
  const [advisoryPercent, setAdvisoryPercent] = useState('20');

  // Calculated values
  const [calculations, setCalculations] = useState({
    timeSaved: 0,
    timeSavingsValue: 0,
    advisoryIncrease: 0,
    riskReduction: 15000,
    efficiencyGains: 0,
    totalBenefit: 0,
    netROI: 0,
    roiPercent: 0,
    paybackMonths: 0
  });

  // Calculate ROI whenever inputs change
  useEffect(() => {
    const calculateROI = () => {
      const revenue = parseFloat(annualRevenue) || 0;
      const staff = parseFloat(staffCount) || 0;
      const complianceHrs = parseFloat(complianceHours) || 0;
      const advisoryPct = parseFloat(advisoryPercent) || 0;

      // Time savings from automation (60% of compliance hours * 50 weeks * £150/hr)
      const timeSaved = complianceHrs * 0.6 * 50;
      const timeSavingsValue = timeSaved * 150;

      // Advisory revenue growth (move from current % to 35% of revenue)
      const currentAdvisoryRevenue = revenue * (advisoryPct / 100);
      const projectedAdvisoryRevenue = revenue * 0.35;
      const advisoryIncrease = Math.max(0, projectedAdvisoryRevenue - currentAdvisoryRevenue);

      // Risk reduction (avoid 1 major complaint = £15k)
      const riskReduction = 15000;

      // Staff efficiency (10% improvement * avg salary £40k)
      const efficiencyGains = staff * 40000 * 0.1;

      // Total benefit
      const totalBenefit = timeSavingsValue + advisoryIncrease + riskReduction + efficiencyGains;

      // Net ROI
      const annualCost = 99 * 12; // Professional tier
      const netROI = totalBenefit - annualCost;
      const roiPercent = annualCost > 0 ? Math.round((netROI / annualCost) * 100) : 0;
      const paybackMonths = totalBenefit > 0 ? Math.round(annualCost / (totalBenefit / 12)) : 0;

      setCalculations({
        timeSaved: Math.round(timeSaved),
        timeSavingsValue: Math.round(timeSavingsValue),
        advisoryIncrease: Math.round(advisoryIncrease),
        riskReduction,
        efficiencyGains: Math.round(efficiencyGains),
        totalBenefit: Math.round(totalBenefit),
        netROI: Math.round(netROI),
        roiPercent,
        paybackMonths
      });
    };

    calculateROI();
  }, [annualRevenue, staffCount, complianceHours, advisoryPercent]);

  const pricingTiers = [
    {
      name: 'Free',
      title: 'Get Started',
      price: '£0',
      period: 'forever',
      description: 'Perfect for exploring PRAXIS capabilities',
      features: [
        'Up to 3 team members',
        'Basic KPI tracking',
        'Client portal access',
        'Email support',
        'Community access',
        'Basic compliance calendar',
        'Limited advisory templates'
      ],
      buttonText: 'Start Free',
      buttonStyle: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
      popular: false
    },
    {
      name: 'Professional',
      title: 'Scale Your Practice',
      price: '£99',
      period: '/month',
      annualPrice: '£950',
      annualSavings: 'Save £238',
      description: 'Everything you need to transform your practice',
      features: [
        'Everything in Free',
        'Up to 20 team members',
        'Unlimited clients',
        'Advanced KPI analytics',
        'AI Advisory Assistant',
        'Automated compliance tracking',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      buttonText: 'Start 14-Day Trial',
      buttonStyle: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/25',
      popular: true
    },
    {
      name: 'Enterprise',
      title: 'Multi-Practice',
      price: 'Custom',
      period: '',
      description: 'For large firms and groups',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Multi-practice management',
        'Advanced security features',
        'Custom integrations',
        'Dedicated success manager',
        'SLA guarantees',
        'On-premise deployment option',
        'Custom training programs'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border border-yellow-600/50 text-yellow-600 hover:bg-yellow-600/10',
      popular: false
    }
  ];

  const boltOns = [
    {
      icon: <Zap className="w-6 h-6" />,
      name: 'AI Advisory Power Pack',
      description: 'Advanced AI capabilities for complex advisory scenarios',
      price: '£49/month',
      features: ['Unlimited AI consultations', 'Custom model training', 'Priority processing']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: 'Compliance Guardian',
      description: 'Enhanced compliance monitoring and reporting',
      price: '£29/month',
      features: ['Real-time alerts', 'Regulatory updates', 'Audit trail reports']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: 'Advanced Analytics',
      description: 'Deep insights into practice performance',
      price: '£39/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Benchmarking tools']
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: 'Partner Portal',
      description: 'White-label client collaboration platform',
      price: '£59/month',
      features: ['Custom domain', 'Client app', 'Advanced permissions']
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      name: 'Training Academy',
      description: 'Comprehensive team development program',
      price: '£79/month',
      features: ['CPD tracking', 'Custom courses', 'Certification programs']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-yellow-900/20 opacity-50" />
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-[0.02]" />
      
      <div className="relative z-10 container-mobile py-8 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 px-4 py-2 rounded-full mb-4">
            <span className="text-amber-500 font-semibold">PRAXIS</span>
            <span className="text-gray-400">Practice Transformation Platform</span>
          </div>
          <h1 className="text-responsive-3xl font-bold text-white mb-4">
            Start Free, Scale When Ready
          </h1>
          <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto mb-2">
            Join 500+ UK accounting firms building advisory excellence with our freemium model
          </p>
          <div className="inline-flex items-center gap-2 text-amber-500 text-sm">
            <Shield className="w-4 h-4" />
            <span>FCA Regulated • ICAEW Accredited • GDPR Compliant</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 max-w-7xl mx-auto"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className={`relative card-mobile ${tier.popular ? 'border-2 border-amber-500' : ''}`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="text-amber-500 font-semibold text-sm mb-2">{tier.name.toUpperCase()}</div>
                <h3 className="text-responsive-xl font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                  {tier.annualPrice && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">or {tier.annualPrice}/year</p>
                      <p className="text-xs text-green-500">{tier.annualSavings}</p>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full btn-touch rounded-lg transition-all ${tier.buttonStyle}`}>
                  {tier.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bolt-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold text-white mb-4">
              Enhance Your Experience with Bolt-ons
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Add powerful features to your subscription as your practice grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {boltOns.map((boltOn, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-amber-500/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-amber-500 mb-4">{boltOn.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{boltOn.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{boltOn.description}</p>
                <p className="text-amber-500 font-semibold mb-4">{boltOn.price}</p>
                <ul className="space-y-2">
                  {boltOn.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gray-900/80 backdrop-blur border border-amber-500/20 rounded-2xl p-6 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Calculator className="w-8 h-8 text-amber-500" />
                <h2 className="text-responsive-2xl font-bold text-white">
                  Calculate Your ROI
                </h2>
              </div>
              <p className="text-gray-400">
                See how PRAXIS can transform your practice profitability
              </p>
            </div>

            {/* Calculator Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Annual Practice Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(e.target.value)}
                    className="w-full pl-8 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="500,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Professional Staff
                </label>
                <input
                  type="number"
                  value={staffCount}
                  onChange={(e) => setStaffCount(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                  placeholder="10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hours/Week on Compliance & Admin
                </label>
                <input
                  type="number"
                  value={complianceHours}
                  onChange={(e) => setComplianceHours(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                  placeholder="15"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Advisory Revenue %
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={advisoryPercent}
                    onChange={(e) => setAdvisoryPercent(e.target.value)}
                    className="w-full pr-8 pl-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="20"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 rounded-xl p-6 mb-8">
              <h3 className="text-responsive-lg font-semibold text-white mb-6 text-center">
                Your Potential Annual Impact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <p className="text-gray-400 text-sm">Time Saved</p>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-amber-500">{calculations.timeSaved.toLocaleString()} hrs</p>
                  <p className="text-gray-500 text-xs">Worth £{calculations.timeSavingsValue.toLocaleString()}</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <p className="text-gray-400 text-sm">Revenue Growth</p>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-green-500">+£{calculations.advisoryIncrease.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">From {advisoryPercent}% to 35% advisory</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <p className="text-gray-400 text-sm">Annual ROI</p>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white">{calculations.roiPercent}%</p>
                  <p className="text-gray-500 text-xs">Payback in {calculations.paybackMonths} months</p>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Compliance automation savings</span>
                <span className="text-white font-medium">£{calculations.timeSavingsValue.toLocaleString()}/year</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Advisory revenue increase</span>
                <span className="text-white font-medium">£{calculations.advisoryIncrease.toLocaleString()}/year</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Reduced professional standards risk</span>
                <span className="text-white font-medium">£{calculations.riskReduction.toLocaleString()}/year</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Staff efficiency gains</span>
                <span className="text-white font-medium">£{calculations.efficiencyGains.toLocaleString()}/year</span>
              </div>
              
              <div className="border-t border-gray-700 pt-3 flex justify-between items-center">
                <span className="text-gray-300 font-semibold">Total Annual Benefit</span>
                <span className="text-amber-500 font-bold text-lg">£{calculations.totalBenefit.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Less: PRAXIS Investment (Professional)</span>
                <span className="text-gray-400">-£{(99 * 12).toLocaleString()}/year</span>
              </div>
              
              <div className="border-t border-amber-500/50 pt-3 flex justify-between items-center">
                <span className="text-white font-bold">Net Annual ROI</span>
                <span className="text-green-500 font-bold text-xl">£{calculations.netROI.toLocaleString()}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-400 mb-6 text-sm">
                *Based on average results from 500+ UK accounting firms using PRAXIS
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-touch bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg"
              >
                Start Free Today
              </motion.button>
              <p className="text-gray-500 text-xs mt-3">
                No credit card required • Free forever tier • Setup in under 5 minutes
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-gray-400 text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-gray-400 text-sm">500+ UK Firms</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-gray-400 text-sm">ICAEW Accredited</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccountancyPricing;
