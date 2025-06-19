'use client'

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, Target, Users, BarChart3, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const HowItWorks = () => {
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  const parallaxY = useTransform(scrollY, [0, 1000], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Life Design Assessment",
      duration: "10 minutes",
      description: "Define success on your terms",
      detail: "10 questions, 10 minutes, lifetime of clarity",
      icon: Target,
      gradient: "from-blue-400 to-purple-500",
      bg: "bg-gradient-to-br from-blue-50 to-purple-50"
    },
    {
      id: 2,
      title: "Business Reality Check", 
      duration: "20 minutes",
      description: "72 data points across 12 business dimensions",
      detail: "Questions adapt based on your business type",
      icon: BarChart3,
      gradient: "from-purple-400 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      id: 3,
      title: "AI Board Generation",
      duration: "Instant",
      description: "5 C-suite advisors from 20 possible experts, perfectly matched",
      detail: "Your answers determine board composition",
      icon: Users,
      gradient: "from-pink-400 to-orange-500",
      bg: "bg-gradient-to-br from-pink-50 to-orange-50"
    },
    {
      id: 4,
      title: "First Board Meeting",
      duration: "30 minutes",
      description: "Save £950/month vs traditional advisors",
      detail: "Virtual boardroom with real-time synthesis",
      icon: CheckCircle,
      gradient: "from-orange-400 to-red-500",
      bg: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      id: 5,
      title: "90-Day Roadmap Creation",
      duration: "15 minutes",
      description: "12 weeks, 36 milestones, sized to your 5-15 hours/week",
      detail: "Priority-based sequencing for maximum impact",
      icon: Clock,
      gradient: "from-red-400 to-yellow-500",
      bg: "bg-gradient-to-br from-red-50 to-yellow-50"
    },
    {
      id: 6,
      title: "Daily Execution",
      duration: "5 minutes/day",
      description: "5 minute daily check-ins, 10 hours/week saved",
      detail: "Dashboard integration and daily insights",
      icon: Zap,
      gradient: "from-yellow-400 to-green-500",
      bg: "bg-gradient-to-br from-yellow-50 to-green-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Progress Bar */}
      <div className="fixed top-20 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: headerOpacity }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      >
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-6"
          >
            Your Journey from
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Exhausted to Empowered
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 leading-relaxed"
          >
            See how Oracle Method transforms your business in 90 days
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/auth"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Start Your Journey
            </Link>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Steps Timeline */}
      <div className="relative">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.section
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`min-h-screen flex items-center ${step.bg}`}
            >
              <div className="max-w-7xl mx-auto px-6 py-20">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Content */}
                  <motion.div 
                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={isEven ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          Step {step.id}
                        </div>
                        <div className="text-lg font-bold text-purple-600">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <p className="text-lg text-gray-500 mb-8">
                      {step.detail}
                    </p>

                    <div className="flex items-center gap-3 text-purple-600 font-semibold">
                      <span>Learn more</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>

                  {/* Visual */}
                  <motion.div
                    initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={isEven ? 'lg:pl-12' : 'lg:pr-12 lg:col-start-1 lg:row-start-1'}
                  >
                    <div className="relative">
                      <div className="aspect-square bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.gradient} opacity-10`} />
                        <div className="absolute inset-8 flex items-center justify-center">
                          <IconComponent className={`w-24 h-24 text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`} />
                        </div>
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full animate-bounce animation-delay-1000" />
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-200 rounded-full animate-bounce animation-delay-2000" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            The Results Speak for Themselves
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { metric: "63%", label: "Report Revenue Growth" },
              { metric: "10hrs", label: "Saved Per Week" },
              { metric: "£950", label: "Monthly Savings vs Advisors" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <Link
              href="/auth"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all text-lg"
            >
              Ready to transform your business?
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks;
