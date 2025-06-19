import type { Metadata } from 'next'
import { FaAward, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - Oracle AI',
  description: 'Get £1,250/day board-level insights for less than your monthly coffee budget. Choose the plan that fits your business stage.',
  keywords: 'oracle ai pricing, business coaching cost, ai advisor pricing, board-level insights pricing',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '£97',
      period: '/month',
      description: 'Perfect for founders just starting their journey',
      features: [
        'The Beanstalk Test™',
        'Monthly AI insights report',
        'Email support',
        'Basic roadmap template',
        'Community access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '£297',
      period: '/month',
      description: 'For growing businesses ready to scale sustainably',
      features: [
        'Everything in Starter',
        'Weekly AI board meetings',
        'Priority support',
        'Custom roadmap generation',
        '1:1 monthly check-in',
        'Advanced analytics',
        'Team wellness monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '£997',
      period: '/month',
      description: 'For established businesses wanting board-level strategy',
      features: [
        'Everything in Professional',
        'Daily AI insights',
        'Dedicated success manager',
        'Custom integrations',
        'Board-level strategy sessions',
        'Exit planning',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <FaAward className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-800">Oracle AI</h1>
                <p className="text-xs text-gray-500">Life-First Business Design</p>
              </div>
            </div>
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Pricing That Makes Sense
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Get £1,250/day board-level insights for less than your monthly coffee budget.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-12">
              <div className="flex items-center gap-2">
                <span role="img" aria-label="trophy">🏆</span>
                <span>127 UK founders transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="star">⭐</span>
                <span>4.9/5 satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="shield">🛡️</span>
                <span>30-day money back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <button
                    className={`w-full px-6 py-3 rounded-xl font-medium shadow-lg flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {plan.cta}
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">What&apos;s included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <span role="img" aria-label="check">✅</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees."
              },
              {
                question: "What if I'm not satisfied?",
                answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment."
              },
              {
                question: "Do you offer custom plans?",
                answer: "Yes, for enterprise customers we can create custom plans tailored to your specific needs."
              },
              {
                question: "How quickly will I see results?",
                answer: "Most founders see immediate clarity from the Beanstalk Test, with measurable improvements within 30 days."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 127 UK founders who&apos;ve already discovered what life-first business design feels like.
            </p>
            <button
              className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-xl text-white font-medium shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              Start Your Free Trial
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <FaAward className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Oracle AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Life-First Business Design for UK founders who want more than just success.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/beanstalk-test" className="hover:text-white transition-colors">The Beanstalk Test</a></li>
                <li><a href="/365-method" className="hover:text-white transition-colors">365 Method</a></li>
                <li><a href="/ai-board" className="hover:text-white transition-colors">AI Board</a></li>
                <li><a href="/accountancy" className="hover:text-white transition-colors">Accountancy Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Oracle AI. All rights reserved. Life-First Business Design.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 