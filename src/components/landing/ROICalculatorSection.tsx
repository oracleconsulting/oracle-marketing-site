
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, AlertCircle } from 'lucide-react';

const ROICalculatorSection = () => {
  const [currentHours, setCurrentHours] = useState(60);
  const [teamSize, setTeamSize] = useState(2);
  const [revenue, setRevenue] = useState(250000);
  
  // Calculations based on research
  const hourlyValue = 39; // £39 per hour UK SME productivity
  const badHireCost = 15000; // £15k per bad hire
  const oracleCostMonthly = 299; // Growth tier
  const oracleCostYearly = oracleCostMonthly * 12 * 0.8; // 20% annual discount
  
  // Calculate savings
  const hoursReclaimed = Math.max(0, currentHours - 45) * 0.7; // Reclaim 70% of overtime
  const weeklyHoursSaved = hoursReclaimed;
  const yearlyHoursSaved = weeklyHoursSaved * 48; // Working weeks
  const hoursSavedValue = yearlyHoursSaved * hourlyValue;
  
  const badHiresAvoided = teamSize > 5 ? 1 : 0.5; // Probability of avoiding bad hire
  const badHireSavings = badHiresAvoided * badHireCost;
  
  const consultantSavings = revenue * 0.045; // 4.5% typically spent on bad advice
  
  const totalSavings = hoursSavedValue + badHireSavings + consultantSavings;
  const netROI = totalSavings - oracleCostYearly;
  const roiPercentage = (netROI / oracleCostYearly * 100).toFixed(0);

  return (
    <>
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Hexagonal network background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="hexagons" width="150" height="173.2" patternUnits="userSpaceOnUse">
                <polygon points="75,0 150,43.3 150,129.9 75,173.2 0,129.9 0,43.3" fill="none" stroke="url(#gradient)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Calculate Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Life Back</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See exactly how Oracle Method pays for itself whilst giving you back what matters most
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6">Your Current Situation</h3>
                
                {/* Hours slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Hours worked per week
                    </label>
                    <span className="text-2xl font-bold text-purple-400">{currentHours}h</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="80"
                    value={currentHours}
                    onChange={(e) => setCurrentHours(Number(e.target.value))}
                    className="w-full slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>40h</span>
                    <span>80h</span>
                  </div>
                </div>

                {/* Team size slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-gray-300">Team size</label>
                    <span className="text-2xl font-bold text-purple-400">{teamSize}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Just me</span>
                    <span>20+</span>
                  </div>
                </div>

                {/* Revenue slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-gray-300">Annual revenue</label>
                    <span className="text-2xl font-bold text-purple-400">£{(revenue/1000).toFixed(0)}k</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="50000"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>£100k</span>
                    <span>£1M</span>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">How we calculate</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400">Time saved valued at £39/hour (UK SME average)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400">Bad hires cost £15k each (30% of salary)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400">UK SMEs waste 4.5% revenue on ineffective advice</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Main ROI card */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <p className="text-gray-300 mb-2">Your Annual ROI with Oracle</p>
                  <div className="text-6xl font-bold text-white mb-2">
                    £{netROI.toLocaleString()}
                  </div>
                  <div className="inline-flex items-center gap-2 text-green-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">{roiPercentage}% return</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Time reclaimed</span>
                    <span className="text-xl font-semibold text-white">{weeklyHoursSaved.toFixed(0)}h/week</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Value of time saved</span>
                    <span className="text-xl font-semibold text-green-400">+£{hoursSavedValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Bad hires avoided</span>
                    <span className="text-xl font-semibold text-green-400">+£{badHireSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Better decisions</span>
                    <span className="text-xl font-semibold text-green-400">+£{consultantSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Oracle investment</span>
                    <span className="text-xl font-semibold text-red-400">-£{oracleCostYearly.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to reclaim {weeklyHoursSaved.toFixed(0)} hours every week?
                </h3>
                <p className="text-gray-400 mb-6">
                  Start with our free assessment and see your personalized roadmap
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    Start Free Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all"
                  >
                    Book a Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          background: #374151;
          outline: none;
          border-radius: 3px;
        }
        
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </>
  );
};

export default ROICalculatorSection;
