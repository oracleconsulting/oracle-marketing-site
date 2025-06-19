
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CallToActionSection = () => {
  const [hoursReclaimed, setHoursReclaimed] = useState(24847);
  const [foundersJoined, setFoundersJoined] = useState(1247);

  useEffect(() => {
    // Simulate live counters
    const interval = setInterval(() => {
      setHoursReclaimed(prev => prev + Math.floor(Math.random() * 10));
      setFoundersJoined(prev => prev + (Math.random() > 0.8 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Animated hexagonal network background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <g className="animate-pulse-slow">
              <path d="M100,100 L300,100 L400,200 L300,300 L100,300 L0,200 Z" 
                    fill="none" stroke="url(#cta-gradient)" strokeWidth="1" />
              <path d="M400,200 L600,200 L700,300 L600,400 L400,400 L300,300 Z" 
                    fill="none" stroke="url(#cta-gradient)" strokeWidth="1" />
              <path d="M700,300 L900,300 L1000,400 L900,500 L700,500 L600,400 Z" 
                    fill="none" stroke="url(#cta-gradient)" strokeWidth="1" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Live stats bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-6 mb-12 backdrop-blur-sm border border-purple-800/30"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-3xl font-bold text-white">{hoursReclaimed.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Hours reclaimed this month</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="w-6 h-6 text-pink-400" />
                <div>
                  <p className="text-3xl font-bold text-white">{foundersJoined.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">UK founders building differently</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-3xl font-bold text-white">£847k</p>
                  <p className="text-sm text-gray-400">Saved in bad decisions this week</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main CTA content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ready to Build a Business
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                That Doesn't Break You?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join {foundersJoined.toLocaleString()} UK founders who've discovered there's another way. 
              One where success includes seeing your family, sleeping 8 hours, and actually enjoying the journey.
            </p>

            {/* Two-option CTA */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* Option 1: Start Free */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-700/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Start Free</h3>
                <p className="text-gray-400 mb-6">
                  Perfect if you're ready to dive in. Complete our life assessment and get your first AI insights in minutes.
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">10-minute life assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Personalized AI insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">No credit card required</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Start Your Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Option 2: Book Demo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-700/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Book a Demo</h3>
                <p className="text-gray-400 mb-6">
                  Prefer to see it in action first? Get a personalized walkthrough from our team.
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">30-minute personalized demo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">See AI board in action</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Get your questions answered</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                >
                  Book Your Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            {/* Final reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm text-gray-500 mb-4">
                Still not sure? Here's what happens next:
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="text-purple-400">1</span> 
                  Complete life assessment (10 min)
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-purple-400">2</span> 
                  Meet your AI board
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-purple-400">3</span> 
                  Get your 90-day roadmap
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-purple-400">4</span> 
                  Start reclaiming your life
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default CallToActionSection;
