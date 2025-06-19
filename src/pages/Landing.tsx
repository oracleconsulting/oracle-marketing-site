import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Heart, Shield, Zap, TrendingUp, ArrowRight, ChevronRight,
  Activity, Sparkles, Clock, Users, Target, CheckCircle,
  Calendar, BarChart3, Gift, Star, Trophy, Rocket, Mountain,
  Building2, GraduationCap, Menu, X, PlayCircle, Quote,
  ArrowUpRight, Briefcase, FileText, Link, MessageSquare
} from 'lucide-react';

const OracleLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  // Navigation items
  const navItems = [
    { label: 'The Beanstalk Test', href: '/beanstalk-test' },
    { label: '365 Method', href: '/365-method' },
    { label: 'AI Board', href: '/ai-board' },
    { label: 'Accountancy Portal', href: '/accountancy' },
    { label: 'Pricing', href: '/pricing' }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "First time in 3 years I made it to sports day. Worth every penny.",
      author: "Sarah Chen",
      role: "Founder, Bristol Tech Solutions",
      metric: "+15h/week family time"
    },
    {
      quote: "My stress is down 60% and revenue is up 30%. That's the Oracle difference.",
      author: "Marcus Williams",
      role: "CEO, Manchester Digital",
      metric: "£450k exit value"
    },
    {
      quote: "Finally, advice that respects I have a life outside my business.",
      author: "Elena Rodriguez",
      role: "Director, London Creative",
      metric: "-20h work week"
    }
  ];
  
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
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
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
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-xl text-white font-medium shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See if Oracle fits
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-purple-400 rounded-xl text-purple-600 font-medium shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                Watch 2-min demo
              </motion.button>
            </div>
            
            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>127 UK founders transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.9/5 satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
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
              Let's be honest about what's happening
            </h2>
            <p className="text-xl text-gray-600">
              You're drowning. Not failing - drowning. There's a difference.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "Working 60+ hours",
                description: "But can't afford a proper holiday"
              },
              {
                icon: BarChart3,
                title: "Dashboard's green",
                description: "But your mirror shows exhaustion"
              },
              {
                icon: Calendar,
                title: "Missing sports days",
                description: "To chase targets that won't matter at your funeral"
              },
              {
                icon: Trophy,
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
              "Rich is having money. Wealthy is having Tuesday afternoons free. 
              <span className="text-purple-600"> Which are you building?"</span>
            </blockquote>
          </motion.div>
        </div>
      </section>
      
      {/* The Beanstalk Test Section */}
      <section id="beanstalk" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Beanstalk Test™
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jack's real wisdom wasn't climbing up. It was cutting it down.
            </p>
          </motion.div>
          
          {/* Beanstalk Visualization */}
          <div className="relative h-96 mb-12">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Central Beanstalk */}
              <div className="relative">
                <motion.div
                  className="w-24 h-80 bg-gradient-to-t from-green-600 to-green-400 rounded-full"
                  animate={{
                    scaleY: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                />
                
                {/* Questions orbiting */}
                {[
                  { question: "Is your growth blocking out life?", angle: 0 },
                  { question: "Are you climbing because you can't stop?", angle: 72 },
                  { question: "What's your golden goose?", angle: 144 },
                  { question: "Who's your giant?", angle: 216 },
                  { question: "When will you cut it down?", angle: 288 }
                ].map((item, index) => {
                  const radians = (item.angle * Math.PI) / 180;
                  const x = Math.cos(radians) * 150;
                  const y = Math.sin(radians) * 150;
                  
                  return (
                    <motion.div
                      key={item.question}
                      className="absolute w-48 text-center"
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <p className="text-sm text-gray-700">{item.question}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 rounded-xl text-white font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take the Free Beanstalk Test
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* 365 Method Section */}
      <section id="method" className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The 365 Method™
            </h2>
            <p className="text-xl text-gray-600">
              Nothing revolutionary. Everything helpful.
            </p>
          </motion.div>
          
          {/* Timeline Visualization */}
          <div className="relative mb-12">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {[
                { label: '3 Months', focus: 'What can you realistically do?', color: 'purple' },
                { label: '6 Months', focus: 'What actually moves the needle?', color: 'pink' },
                { label: '5 Years', focus: 'Where do you want to be?', color: 'orange' }
              ].map((phase, index) => (
                <motion.div
                  key={phase.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex-1 text-center"
                >
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-${phase.color}-400 to-${phase.color}-500 flex items-center justify-center text-white font-bold text-xl`}>
                    {phase.label.split(' ')[0]}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{phase.label}</h3>
                  <p className="text-sm text-gray-600">{phase.focus}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Connecting lines */}
            <div className="absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400" />
          </div>
          
          {/* Method Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: FileText,
                title: "Fits on a napkin",
                description: "Because the best plans are simple enough to remember"
              },
              {
                icon: Target,
                title: "Life-first planning",
                description: "Start with where YOU want to be, not your business"
              },
              {
                icon: CheckCircle,
                title: "Actually doable",
                description: "3-5 priorities max. Because you're human."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Board Section */}
      <section id="board" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your AI Board of Advisors
            </h2>
            <p className="text-xl text-gray-600">
              Eight C-suite perspectives. Available 24/7. No hallucinations.
            </p>
          </motion.div>
          
          {/* Board Members Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { role: 'CEO', emoji: '👔', specialty: 'Vision & Strategy' },
              { role: 'CFO', emoji: '🧮', specialty: 'Financial Health' },
              { role: 'CMO', emoji: '🎯', specialty: 'Growth & Marketing' },
              { role: 'COO', emoji: '⚙️', specialty: 'Operations & Systems' },
              { role: 'CTO', emoji: '💻', specialty: 'Technology & Innovation' },
              { role: 'CHRO', emoji: '🤝', specialty: 'People & Culture' },
              { role: 'CSO', emoji: '🛡️', specialty: 'Sales & Revenue' },
              { role: 'CPO', emoji: '📦', specialty: 'Product & Experience' }
            ].map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{member.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-1">{member.role}</h3>
                <p className="text-sm text-gray-600">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Comparison */}
          <div className="bg-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Traditional Consultants</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5" />
                    <span className="text-gray-700">£2,500-5,000/month minimum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5" />
                    <span className="text-gray-700">Limited availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5" />
                    <span className="text-gray-700">One perspective</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Oracle AI Board</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">From £150/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Available 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Eight expert perspectives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Real Founders. Real Results.
            </h2>
          </motion.div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
              >
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{testimonials[activeTestimonial].author}</p>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">{testimonials[activeTestimonial].metric}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Testimonial navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'w-8 bg-purple-400' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pricing that doesn't require a remortgage
            </h2>
            <p className="text-xl text-gray-600">
              Start free. Upgrade when ready. Cancel anytime.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Foundation',
                price: '£150',
                description: 'Perfect for getting started',
                features: [
                  'Full AI board access',
                  'Quarterly roadmap refresh',
                  'Monthly insights report',
                  'Basic integrations',
                  'Email support'
                ],
                cta: 'Start Free Month',
                highlighted: false
              },
              {
                name: 'Growth',
                price: '£299',
                description: 'Most popular for serious founders',
                features: [
                  'Everything in Foundation',
                  'Weekly board meetings',
                  '5 key integrations',
                  'Team access (up to 3)',
                  'Priority support',
                  'Custom board tuning'
                ],
                cta: 'Start Free Month',
                highlighted: true
              },
              {
                name: 'Scale',
                price: '£599',
                description: 'For rapid transformation',
                features: [
                  'Everything in Growth',
                  'Unlimited integrations',
                  'Custom board config',
                  'API access',
                  'Quarterly strategy review',
                  'White-glove onboarding'
                ],
                cta: 'Contact Sales',
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-xl scale-105' 
                    : 'bg-white/80 backdrop-blur-sm shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-800 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                    /month
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 ${plan.highlighted ? 'text-white' : 'text-green-500'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.highlighted
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:from-purple-500 hover:to-pink-500'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          {/* Money-back guarantee */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              <Shield className="w-5 h-5 inline mr-2 text-green-500" />
              30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why I Built This
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Because I've been you.
              </p>
              <p className="mb-4">
                I charge £1,250/day for traditional consulting. It works. But it helps maybe 20 people a year.
              </p>
              <p className="mb-4">
                That's not enough.
              </p>
              <p className="mb-4">
                In 10 years, I want to look back and see 12,000 businesses that became vehicles for life, not prisons. 
                I want to be measured by impact, not income.
              </p>
              <p className="mb-4">
                Oracle exists because every drowning founder deserves board-level thinking. 
                Even if they can't afford board-level prices.
              </p>
              <p className="font-bold">
                - James<br />
                <span className="text-sm font-normal text-gray-600">Founder, Oracle Method</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Two questions to see if we're a fit
            </h2>
            <div className="text-2xl text-white/90 mb-8">
              <p className="mb-2">1. Are you building a business or a prison?</p>
              <p>2. Ready to fix that?</p>
            </div>
            <motion.button
              className="px-12 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start with the 5-Year Compass →
            </motion.button>
            <p className="text-white/80 mt-4 text-sm">
              Free exercise. No credit card. Just clarity.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">Oracle AI</span>
              </div>
              <p className="text-sm">
                Where business meets being human.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">The 365 Method</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beanstalk Test</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Virtual Board</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About James</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Get Started</h4>
              <p className="text-sm mb-4">Join 127 UK founders building wealth, not just revenue.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-white font-medium text-sm hover:from-purple-500 hover:to-pink-500 transition-all">
                Free Assessment →
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Oracle Method. All rights reserved. "Nothing revolutionary. Everything that matters."</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OracleLandingPage;