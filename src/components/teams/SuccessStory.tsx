
import React from 'react';
import { motion } from 'framer-motion';

export const SuccessStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl font-light text-gray-700 mb-8 leading-relaxed">
          "We grew from 3 to 15 people without losing our way. Oracle Method kept us aligned while scaling fast."
        </blockquote>
        <div className="space-y-2">
          <div className="text-lg font-semibold text-gray-900">Mark Thompson</div>
          <div className="text-gray-600">SaaS Founder • 300% revenue growth</div>
          <div className="flex justify-center gap-8 mt-6 text-sm text-gray-600">
            <span>• 90% team retention</span>
            <span>• 40% less founder involvement</span>
            <span>• 15 person team</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
