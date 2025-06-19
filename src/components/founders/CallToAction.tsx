import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        Ready to Reclaim Your Life?
      </h2>
      
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Start your journey from exhausted to empowered. Your family is waiting.
      </p>

      <Link
        href="/auth"
        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all text-lg"
      >
        Start Your 10-Minute Assessment
        <ArrowRight className="w-6 h-6" />
      </Link>
    </motion.section>
  );
};
