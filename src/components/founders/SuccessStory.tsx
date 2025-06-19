
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
          "I saw my kids' bedtime for the first time in 2 years. Oracle didn't just save my business – it saved my family."
        </blockquote>
        <div className="text-lg font-semibold text-gray-900">Sarah Chen</div>
        <div className="text-gray-600">Founder, Creative Agency • Mother of 2</div>
      </div>
    </motion.section>
  );
};
