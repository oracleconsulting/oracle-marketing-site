
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PainPointsCarousel = () => {
  const [activeSet, setActiveSet] = useState(0);

  const dataSets = [
    {
      title: "Time & Family Impact",
      subtitle: "The hidden cost of founder life",
      metrics: [
        {
          number: "2,847",
          label: "Hours with family lost this week",
          color: "from-red-500 to-orange-500"
        },
        {
          number: "73%",
          label: "of UK founders work 60+ hours per week",
          color: "from-orange-500 to-yellow-500"
        },
        {
          number: "1 in 5",
          label: "haven't taken a week off in over a year",
          color: "from-yellow-500 to-red-500"
        }
      ]
    },
    {
      title: "Financial Impact",
      subtitle: "The cost of going it alone",
      metrics: [
        {
          number: "£126,000",
          label: "Lost to bad decisions today",
          color: "from-purple-500 to-pink-500"
        },
        {
          number: "£15k",
          label: "average cost of a bad hire",
          color: "from-pink-500 to-purple-500"
        },
        {
          number: "£12.6bn",
          label: "wasted on ineffective consultants yearly",
          color: "from-blue-500 to-purple-500"
        }
      ]
    },
    {
      title: "Productivity Crisis",
      subtitle: "Working harder, not smarter",
      metrics: [
        {
          number: "55h/week",
          label: "Working more yields no extra output",
          color: "from-green-500 to-blue-500"
        },
        {
          number: "60%",
          label: "time spent on operations vs 13% strategy",
          color: "from-blue-500 to-indigo-500"
        },
        {
          number: "£39/hour",
          label: "average UK SME productivity",
          color: "from-indigo-500 to-purple-500"
        }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % dataSets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentData = dataSets[activeSet];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Going It Alone</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every hour you spend on tasks that could be automated or delegated is an hour stolen from what truly matters.
          </p>
        </motion.div>

        {/* Data carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSet}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{currentData.title}</h3>
              <p className="text-lg text-gray-400 mb-12">{currentData.subtitle}</p>

              <div className="grid md:grid-cols-3 gap-8">
                {currentData.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
                  >
                    <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-4`}>
                      {metric.number}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {dataSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSet(index)}
                className={`w-12 h-2 rounded-full transition-all ${
                  index === activeSet 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-6">
            There's a better way. One that puts your life first.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            Discover the Oracle Method
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsCarousel;
