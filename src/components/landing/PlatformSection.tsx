
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Zap, ArrowRight } from 'lucide-react';

const PlatformSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "AI Board of Advisors",
      subtitle: "5 C-suite executives for £299/month",
      description: "CFO, CMO, COO and more - each with deep UK business expertise",
      benefits: [
        "24/7 strategic guidance",
        "Remembers every conversation",
        "No invoices for confusion"
      ],
      gradient: "from-purple-600 to-indigo-600",
      demo: "Meet your CFO who just found £10k in tax savings"
    },
    {
      icon: Clock,
      title: "Life-First Approach",
      subtitle: "Business that works around your life",
      description: "Set boundaries, not just goals. Works around school runs, not through them",
      benefits: [
        "Respects your time limits",
        "Family-friendly scheduling",
        "Sustainable growth pace"
      ],
      gradient: "from-pink-600 to-purple-600",
      demo: "See how Sarah built £500k revenue on 35 hours/week"
    },
    {
      icon: Zap,
      title: "Always-On Intelligence",
      subtitle: "Decisions made whilst you sleep",
      description: "Your AI board analyses, decides, and acts - so you can actually rest",
      benefits: [
        "Automated decision flows",
        "Real-time monitoring",
        "Wake up to solutions"
      ],
      gradient: "from-orange-500 to-pink-600",
      demo: "Watch your AI COO prevent a £15k mistake at 2am"
    }
  ];

  return (
    <>
      <section className="relative py-24 px-6 bg-black overflow-hidden">
        {/* Animated hexagon background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Floating hexagons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-hex hex-5" />
          <div className="floating-hex hex-6" />
          <div className="floating-hex hex-7" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Advisors That Actually
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Understand British Business</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Not another generic AI tool. Oracle Method is purpose-built for UK SMEs, 
              with context, memory, and a deep understanding of what building a business here actually means.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative h-full">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-purple-700/50 transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${pillar.gradient} mb-6 self-start`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                      <p className="text-purple-400 font-semibold mb-4">{pillar.subtitle}</p>
                      <p className="text-gray-400 mb-6">{pillar.description}</p>

                      {/* Benefits */}
                      <ul className="space-y-2 mb-6">
                        {pillar.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Demo preview on hover */}
                    <div className="mt-auto">
                      <div className="bg-gray-800/50 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm text-gray-300 mb-2">Live example:</p>
                        <p className="text-sm text-purple-400 italic">{pillar.demo}</p>
                      </div>

                      {/* CTA */}
                      <button className="mt-4 w-full flex items-center justify-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        <span className="text-sm font-semibold">See it in action</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-400 mb-6">
              Join 1,247 UK founders who've already chosen a better way
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Start Your Free Assessment
            </motion.button>
          </motion.div>
        </div>
      </section>

      <style>{`
        .floating-hex {
          position: absolute;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          opacity: 0.05;
        }
        
        .hex-5 {
          width: 200px;
          height: 200px;
          top: 20%;
          right: 5%;
          animation: float-slow 35s ease-in-out infinite;
        }
        
        .hex-6 {
          width: 100px;
          height: 100px;
          bottom: 30%;
          left: 10%;
          opacity: 0.03;
          animation: float-slow 40s ease-in-out infinite reverse;
        }
        
        .hex-7 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 40%;
          opacity: 0.04;
          animation: float-slow 30s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(40px, -20px) rotate(90deg); }
          50% { transform: translate(-30px, 40px) rotate(180deg); }
          75% { transform: translate(20px, 30px) rotate(270deg); }
        }
      `}</style>
    </>
  );
};

export default PlatformSection;
