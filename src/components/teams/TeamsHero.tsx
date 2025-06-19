
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const TeamsHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
        Scale Without
        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Losing Your Soul
        </span>
      </h1>
      
      <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        AI advisors that grow with you from 2 to 20 people
      </p>

      {/* Team Growth Visualization */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2"
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
        </motion.div>
        
        <ArrowRight className="text-gray-400 w-8 h-8" />
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-4 gap-1"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          ))}
        </motion.div>
        
        <span className="text-sm text-gray-600 font-semibold">20</span>
      </div>
    </motion.section>
  );
};
