
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        Ready to Scale With Purpose?
      </h2>
      
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Join growing teams who've cracked the code on sustainable expansion
      </p>

      <Link
        to="/auth"
        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all text-lg"
      >
        Start Team Assessment
        <ArrowRight className="w-6 h-6" />
      </Link>
    </motion.section>
  );
};
