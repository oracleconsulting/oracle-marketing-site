
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FoundersHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
        From 70-Hour Weeks to
        <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          Family Dinners
        </span>
      </h1>
      
      <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        AI advisors that work while you sleep, so you can finally live while you're awake
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-red-100 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-red-900 mb-4">Before Oracle</h3>
          <ul className="text-red-800 space-y-2">
            <li>• Working until 11pm</li>
            <li>• Missing bedtime stories</li>
            <li>• Stress eating decisions</li>
            <li>• Partner feels like a single parent</li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-green-100 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-green-900 mb-4">After Oracle</h3>
          <ul className="text-green-800 space-y-2">
            <li>• Home by 6pm consistently</li>
            <li>• Present for family moments</li>
            <li>• Clear, rested decisions</li>
            <li>• Thriving partnership</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
