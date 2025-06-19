
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Rocket, Building } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: "Explorer",
      icon: Sparkles,
      price: 0,
      description: "Perfect for trying before committing",
      features: [
        "Life assessment (Part 1)",
        "AI-generated fit analysis",
        "1 AI board consultation/month",
        "Community access",
        "Basic resources library"
      ],
      notIncluded: [
        "Full business assessment",
        "Complete AI board",
        "90-day roadmap",
        "Integrations"
      ],
      cta: "Start Free",
      ctaStyle: "bg-gray-800 hover:bg-gray-700",
      popular: false
    },
    {
      name: "Starter",
      icon: Zap,
      price: 99,
      description: "For solo founders ready to transform",
      features: [
        "Everything in Explorer",
        "Full business assessment (Part 2)",
        "Complete AI board (5 advisors)",
        "Monthly regenerating roadmap",
        "1 integration (Xero or QuickBooks)",
        "Email support",
        "5 automation templates"
      ],
      notIncluded: [
        "Team features",
        "Multiple integrations",
        "Advanced automations"
      ],
      cta: "Get Started",
      ctaStyle: "bg-purple-600 hover:bg-purple-700",
      popular: false
    },
    {
      name: "Growth",
      icon: Rocket,
      price: 299,
      description: "For ambitious teams building differently",
      features: [
        "Everything in Starter",
        "5 integrations (any combination)",
        "Team portal (up to 3 members)",
        "Weekly AI board meetings",
        "25 automation workflows",
        "Priority support",
        "Custom roadmap templates",
        "API access (read-only)"
      ],
      notIncluded: [
        "Unlimited team members",
        "Custom AI agents"
      ],
      cta: "Scale Now",
      ctaStyle: "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      description: "For organizations ready to lead",
      features: [
        "Everything in Growth",
        "Unlimited integrations",
        "Unlimited team members",
        "Daily AI board access",
        "Custom AI agents",
        "White-label options",
        "Dedicated success manager",
        "Full API access",
        "Custom automation development",
        "Priority feature requests"
      ],
      cta: "Contact Sales",
      ctaStyle: "bg-gray-800 hover:bg-gray-700",
      popular: false
    }
  ];

  const calculatePrice = (basePrice: number | string, isAnnual: boolean) => {
    if (typeof basePrice === 'string') return basePrice;
    if (basePrice === 0) return 0;
    return isAnnual ? Math.floor(basePrice * 0.8) : basePrice;
  };

  const calculateSavings = (basePrice: number | string) => {
    if (typeof basePrice === 'string' || basePrice === 0) return 0;
    return Math.floor(basePrice * 12 * 0.2);
  };

  return (
    <>
      <section className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Hexagonal mesh background */}
        <div className="absolute inset-0 opacity-5">
          <div className="hex-mesh" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Start free, upgrade when ready. No hidden fees, no surprises.
            </p>

            {/* Annual toggle */}
            <div className="inline-flex items-center gap-4 bg-gray-800/50 rounded-full p-2">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  !isAnnual ? 'bg-white text-gray-900' : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  isAnnual ? 'bg-white text-gray-900' : 'text-gray-400'
                }`}
              >
                Annual
                <span className="ml-2 text-green-400 text-sm">Save 20%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      {tier.badge}
                    </div>
                  </div>
                )}

                <div className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}>
                  <div className={`bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border ${
                    tier.popular ? 'border-purple-500' : 'border-gray-800'
                  } h-full flex flex-col`}>
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-3 rounded-xl mb-4 ${
                        tier.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-800'
                      }`}>
                        <tier.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                      
                      {/* Price */}
                      <div className="mb-2">
                        {typeof tier.price === 'number' ? (
                          <>
                            <span className="text-5xl font-bold text-white">
                              £{calculatePrice(tier.price, isAnnual)}
                            </span>
                            {tier.price > 0 && (
                              <span className="text-gray-400 text-lg">/month</span>
                            )}
                          </>
                        ) : (
                          <span className="text-4xl font-bold text-white">{tier.price}</span>
                        )}
                      </div>
                      
                      {/* Annual savings */}
                      {isAnnual && typeof tier.price === 'number' && tier.price > 0 && (
                        <p className="text-green-400 text-sm">
                          Save £{calculateSavings(tier.price)}/year
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex-grow">
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Not included */}
                      {tier.notIncluded && tier.notIncluded.length > 0 && (
                        <ul className="space-y-2 mb-6 opacity-50">
                          {tier.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-gray-600 text-sm line-through">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${tier.ctaStyle}`}
                    >
                      {tier.cta}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-8">
              All plans include: SSL encryption • GDPR compliance • UK-based support • 
              No setup fees • Cancel anytime
            </p>
            
            <div className="inline-flex items-center gap-2 text-purple-400">
              <Check className="w-5 h-5" />
              <span>30-day money-back guarantee on all paid plans</span>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hex-mesh {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(30deg, transparent 0%, transparent 46%, rgba(139, 92, 246, 0.1) 46%, rgba(139, 92, 246, 0.1) 54%, transparent 54%, transparent 100%),
            linear-gradient(-30deg, transparent 0%, transparent 46%, rgba(236, 72, 153, 0.1) 46%, rgba(236, 72, 153, 0.1) 54%, transparent 54%, transparent 100%);
          background-size: 30px 52px;
        }
      `}</style>
    </>
  );
};

export default PricingSection;
