import type { Metadata } from 'next'
import { FaAward, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'The Beanstalk Test™ - Oracle AI',
  description: 'Jack\'s real wisdom wasn\'t climbing up. It was cutting it down. Take the free Beanstalk Test to see if your growth is blocking out life.',
  keywords: 'beanstalk test, business growth, life balance, founder assessment, oracle ai',
}

export default function BeanstalkTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
                <FaAward className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-800">Oracle AI</h1>
                <p className="text-xs text-gray-500">Life-First Business Design</p>
              </div>
            </div>
            <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
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
              The Beanstalk Test™
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Jack&apos;s real wisdom wasn&apos;t climbing up. It was cutting it down.
            </p>
            {/* Beanstalk Visualization */}
            <div className="relative h-96 mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-80 bg-gradient-to-t from-green-600 to-green-400 rounded-full" />
                  {/* Questions orbiting */}
                  {[
                    { question: "Is your growth blocking out life?", angle: 0 },
                    { question: "Are you climbing because you can't stop?", angle: 72 },
                    { question: "What's your golden goose?", angle: 144 },
                    { question: "Who's your giant?", angle: 216 },
                    { question: "When will you cut it down?", angle: 288 }
                  ].map((item) => {
                    const radians = (item.angle * Math.PI) / 180;
                    const x = Math.cos(radians) * 150;
                    const y = Math.sin(radians) * 150;
                    return (
                      <div
                        key={item.question}
                        className="absolute w-48 text-center"
                        style={{
                          transform: `translate(${x}px, ${y}px)`
                        }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                          <p className="text-sm text-gray-700">{item.question}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* CTA */}
            <button
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 rounded-xl text-white font-medium shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              Take the Free Beanstalk Test
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What the test reveals */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What the Beanstalk Test Reveals
            </h2>
            <p className="text-xl text-gray-600">
              In 5 minutes, discover if your business is serving you or enslaving you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Time Audit",
                description: "How many hours are you really working vs. living?"
              },
              {
                title: "Growth vs. Life",
                description: "Is your success measured in revenue or freedom?"
              },
              {
                title: "Future Vision",
                description: "What does your ideal Tuesday afternoon look like?"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
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