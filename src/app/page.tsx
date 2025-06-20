'use client'

import { motion } from 'framer-motion'
import { 
  FaBrain, FaShieldAlt, FaArrowRight,
  FaClock, FaUsers, FaStar,
  FaCalendar, FaChartBar, FaTrophy, FaPlayCircle
} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAuthUrl } from '../config/urls'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Get the auth URL from config
  const authUrl = getAuthUrl();
  
  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }
  
  // Navigation items - Updated to use internal link for Accountancy Portal
  const navItems = [
    { label: 'The Beanstalk Test', href: '/beanstalk-test', isExternal: false },
    { label: '365 Method', href: '/365-method', isExternal: false },
    { label: 'AI Board', href: '/ai-board', isExternal: false },
    { label: 'Accountancy Portal', href: '/accountancy', isExternal: false },
    { label: 'Pricing', href: '/pricing', isExternal: false }
  ]

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>
      
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
                <FaBrain className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="font-bold text-gray-800">Oracle AI</h1>
                <p className="text-xs text-gray-500">Life-First Business Design</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a href={authUrl}>
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Free Roadmap
                </motion.button>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href={authUrl}>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-white font-medium">
                  Get Your Free Roadmap
                </button>
              </a>
            </div>
          </div>
        )}
      </motion.nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Your business should{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                fund your life
              </span>
              ,<br />not eat it.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get £1,250/day board-level insights for less than your monthly coffee budget. 
              No buzzwords. No 4am hustle. Just clear answers to what actually matters.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={authUrl}>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-xl text-white font-medium shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See if Oracle fits
                  <FaArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
              <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-purple-400 rounded-xl text-purple-600 font-medium shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlayCircle className="w-5 h-5" />
                Watch 2-min demo
              </motion.button>
            </div>
            
            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaUsers className="w-4 h-4" />
                <span>127 UK founders transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="w-4 h-4" />
                <span>4.9/5 satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4" />
                <span>30-day money back</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Let&apos;s be honest about what&apos;s happening
            </h2>
            <p className="text-xl text-gray-600">
              You&apos;re drowning. Not failing - drowning. There&apos;s a difference.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaClock,
                title: "Working 60+ hours",
                description: "But can't afford a proper holiday"
              },
              {
                icon: FaChartBar,
                title: "Dashboard's green",
                description: "But your mirror shows exhaustion"
              },
              {
                icon: FaCalendar,
                title: "Missing sports days",
                description: "To chase targets that won't matter at your funeral"
              },
              {
                icon: FaTrophy,
                title: "Successful on paper",
                description: "Miserable in reality"
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic">
              &ldquo;Rich is having money. Wealthy is having Tuesday afternoons free. 
              <span className="text-purple-600"> Which are you building?&rdquo;</span>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Three steps to a life-first business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop climbing someone else&apos;s beanstalk. Build your own path with our proven framework.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beanstalk Test */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Beanstalk Test™</h3>
              <p className="text-gray-600 mb-6">
                Jack&apos;s real wisdom wasn&apos;t climbing up. It was cutting it down. 
                Find out if you&apos;re building wealth or just climbing higher.
              </p>
              <Link href="/beanstalk-test">
                <motion.button
                  className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Take the free test <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            {/* 365 Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The 365 Method™</h3>
              <p className="text-gray-600 mb-6">
                Nothing revolutionary. Everything helpful. A planning system that starts 
                with your life, not your business. Simple enough to sketch on a beer mat.
              </p>
              <Link href="/365-method">
                <motion.button
                  className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Learn the method <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            {/* AI Board */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <FaBrain className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your AI Board</h3>
              <p className="text-gray-600 mb-6">
                8 C-suite advisors who understand that Tuesday matters more than IPO. 
                Available 24/7, no hallucinations, remembers everything.
              </p>
              <Link href="/ai-board">
                <motion.button
                  className="text-pink-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Meet your board <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Real founders. Real results. Real lives back.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "First time in 3 years I made it to sports day. Worth every penny.",
                author: "Sarah, E-commerce Founder",
                metric: "£500k revenue on 35 hours/week"
              },
              {
                quote: "My AI CFO found £10k in tax savings I'd missed for 2 years.",
                author: "James, Agency Owner",
                metric: "20% profit increase in 90 days"
              },
              {
                quote: "Finally sleeping through the night. AI board handles the 2am panics.",
                author: "Emma, SaaS Founder",
                metric: "Prevented 3 critical mistakes"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-purple-600">{testimonial.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build a business that funds your life?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Start with our free assessment. Get your personalized roadmap in 15 minutes.
            </p>
            <a href={authUrl}>
              <motion.button
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Assessment
              </motion.button>
            </a>
            <p className="mt-6 text-sm text-purple-200">
              No credit card required • 30-day money-back guarantee • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <FaBrain className="w-5 h-5 text-white" />
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
