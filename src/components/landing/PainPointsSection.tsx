
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, PoundSterling, TrendingDown } from 'lucide-react';

const PainPointsSection = () => {
  const [hoursWasted, setHoursWasted] = useState(0);
  const [moneyLost, setMoneyLost] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Animate counters
      const interval = setInterval(() => {
        setHoursWasted(prev => Math.min(prev + 37, 2847));
        setMoneyLost(prev => Math.min(prev + 1250, 126000));
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const painPoints = [
    {
      icon: Clock,
      stat: "73%",
      title: "of UK founders work 60+ hours per week",
      subtext: "Missing bedtimes, skipping dinners, living at the office",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: PoundSterling,
      stat: "£15k",
      title: "average cost of a bad hire",
      subtext: "That's 3 months of runway for most SMEs",
      color: "from-pink-600 to-red-600"
    },
    {
      icon: TrendingDown,
      stat: "£12.6bn",
      title: "wasted on ineffective consultants yearly",
      subtext: "Paying for confusion, not clarity",
      color: "from-red-600 to-orange-600"
    }
  ];

  return (
    <>
      <section ref={ref} className="relative py-24 px-6 bg-black overflow-hidden">
        {/* Hexagonal connectors */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hex-connector hex-1" />
          <div className="hex-connector hex-2" />
          <div className="hex-connector hex-3" />
          <div className="hex-connector hex-4" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Real Cost of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Founder Life</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whilst you're reading this, UK founders have collectively lost:
            </p>
          </motion.div>

          {/* Live counters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {hoursWasted.toLocaleString()}
              </div>
              <div className="text-gray-300">Hours with family this week</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 rounded-2xl p-8 border border-pink-800/30 backdrop-blur-sm">
              <div className="text-5xl font-bold text-pink-400 mb-2">
                £{moneyLost.toLocaleString()}
              </div>
              <div className="text-gray-300">Lost to bad decisions today</div>
            </div>
          </motion.div>

          {/* Pain point cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }}
                />
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-purple-700/50 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${point.color} mb-6`}>
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{point.stat}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-gray-400">{point.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-400">
              But what if there was another way?
            </p>
          </motion.div>
        </div>
      </section>
      
      <style>{`
        .hex-connector {
          position: absolute;
          width: 120px;
          height: 120px;
          opacity: 0.05;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        
        .hex-1 {
          top: 10%;
          left: 5%;
          animation: float 20s ease-in-out infinite;
        }
        
        .hex-2 {
          top: 50%;
          right: 10%;
          width: 80px;
          height: 80px;
          animation: float 25s ease-in-out infinite reverse;
        }
        
        .hex-3 {
          bottom: 20%;
          left: 15%;
          width: 150px;
          height: 150px;
          opacity: 0.03;
          animation: float 30s ease-in-out infinite;
        }
        
        .hex-4 {
          top: 30%;
          left: 50%;
          width: 60px;
          height: 60px;
          animation: float 22s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>
    </>
  );
};

export default PainPointsSection;
