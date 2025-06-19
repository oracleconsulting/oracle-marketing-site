
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Briefcase, Target, Shield } from 'lucide-react';

const AdvisorsPreview = () => {
  const [activeAdvisor, setActiveAdvisor] = useState(0);

  const advisors = [
    {
      role: "CFO",
      name: "Chief Financial Officer",
      icon: PieChart,
      expertise: "Cash flow optimization & financial strategy",
      color: "from-blue-600 to-indigo-600",
      achievements: [
        "Found £10k in R&D tax credits",
        "Reduced payment terms by 15 days",
        "Identified 23% cost savings"
      ],
      quote: "Looking at your QuickBooks data, you're eligible for HMRC's Annual Investment Allowance on that equipment purchase...",
      savings: "£127k saved for clients this month"
    },
    {
      role: "CMO",
      name: "Chief Marketing Officer",
      icon: Target,
      expertise: "Growth strategy & customer acquisition",
      color: "from-pink-600 to-purple-600",
      achievements: [
        "3x ROAS on LinkedIn campaigns",
        "47% reduction in CAC",
        "2.4x organic traffic growth"
      ],
      quote: "Your conversion rate is 40% below UK SME average. Let's fix your landing page copy first...",
      savings: "892 leads generated this week"
    },
    {
      role: "COO",
      name: "Chief Operating Officer",
      icon: Briefcase,
      expertise: "Process optimization & team efficiency",
      color: "from-green-600 to-teal-600",
      achievements: [
        "Automated 67% of admin tasks",
        "Reduced ops time by 15h/week",
        "Improved team velocity 2.3x"
      ],
      quote: "Your fulfillment process has 3 unnecessary steps. Removing them saves 2 hours per order...",
      savings: "156 hours reclaimed this month"
    },
    {
      role: "CEO",
      name: "Chief Executive Officer",
      icon: TrendingUp,
      expertise: "Strategic vision & leadership",
      color: "from-purple-600 to-pink-600",
      achievements: [
        "Guided 3 successful pivots",
        "Prevented 2 market timing errors",
        "Aligned teams to 2x growth"
      ],
      quote: "Based on your market position, now's the time to expand that product line we discussed...",
      savings: "£2.3M in prevented mistakes"
    },
    {
      role: "CSO",
      name: "Chief Security Officer",
      icon: Shield,
      expertise: "Risk management & compliance",
      color: "from-orange-600 to-red-600",
      achievements: [
        "GDPR compliance achieved",
        "Cyber insurance 30% reduction",
        "Zero security incidents"
      ],
      quote: "Your customer data handling needs updating before the ICO's new guidelines in March...",
      savings: "£45k in avoided penalties"
    }
  ];

  const currentAdvisor = advisors[activeAdvisor];
  const IconComponent = currentAdvisor.icon;

  return (
    <>
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Hexagonal connectors */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="advisor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M200,200 L600,400 L1000,200 L1000,600 L600,400 L200,600 Z" 
                  fill="none" 
                  stroke="url(#advisor-gradient)" 
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-dash" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Board of Advisors</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Five C-suite executives with deep UK business expertise, available 24/7. 
              They remember everything, learn continuously, and never send invoices.
            </p>
          </motion.div>

          {/* Advisor selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {advisors.map((advisor, index) => {
              const AdvisorIcon = advisor.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveAdvisor(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeAdvisor === index
                      ? `bg-gradient-to-r ${advisor.color} text-white shadow-lg`
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <AdvisorIcon className="inline-block w-5 h-5 mr-2" />
                  {advisor.role}
                </motion.button>
              );
            })}
          </div>

          {/* Active advisor display */}
          <motion.div
            key={activeAdvisor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left side - Advisor details */}
            <div>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentAdvisor.color} mb-6`}>
                <IconComponent className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">
                Your AI {currentAdvisor.name}
              </h3>
              <p className="text-xl text-purple-400 mb-6">
                {currentAdvisor.expertise}
              </p>

              {/* Quote */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
                <p className="text-gray-300 italic mb-4">
                  "{currentAdvisor.quote}"
                </p>
                <p className="text-sm text-gray-500">
                  — Your AI {currentAdvisor.role}, last Tuesday at 3:47pm
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Recent wins for founders like you:</h4>
                <ul className="space-y-3">
                  {currentAdvisor.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Savings indicator */}
              <div className="mt-8 inline-flex items-center gap-3 text-green-400">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">{currentAdvisor.savings}</span>
              </div>
            </div>

            {/* Right side - Visual representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                {/* Hexagonal avatar placeholder */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentAdvisor.color} opacity-20 blur-3xl`} />
                  <div className="relative w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden"
                       style={{
                         clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                       }}>
                    <IconComponent className="w-24 h-24 text-white opacity-50 relative z-10" />
                  </div>
                </div>

                {/* Sample interaction */}
                <div className="space-y-3">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-sm">
                    <p className="text-gray-400 mb-1">You asked:</p>
                    <p className="text-white">"Should I hire a sales person or invest in marketing automation?"</p>
                  </div>
                  <div className={`bg-gradient-to-r ${currentAdvisor.color} bg-opacity-10 rounded-lg p-3 text-sm border border-purple-700/30`}>
                    <p className="text-gray-400 mb-1">AI {currentAdvisor.role} analyzing...</p>
                    <p className="text-white">Based on your £{activeAdvisor * 50 + 200}k revenue and 15% growth rate...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-400 mb-6">
              Your entire C-suite for less than one hour of traditional consulting
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Meet Your AI Board
            </motion.button>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dash {
            to {
              stroke-dashoffset: -10;
            }
          }
          
          .animate-dash {
            animation: dash 20s linear infinite;
          }
        `
      }} />
    </>
  );
};

export default AdvisorsPreview;
