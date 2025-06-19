
import React from 'react';
import { motion } from 'framer-motion';

interface ROIMetric {
  value: string;
  label: string;
  sublabel: string;
}

export const ROISection = () => {
  const roiMetrics: ROIMetric[] = [
    { value: "10h/week", label: "Time Reclaimed", sublabel: "= £20k/year value" },
    { value: "30%", label: "Better Decisions", sublabel: "when well-rested" },
    { value: "Priceless", label: "Family Time", sublabel: "life changed" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-orange-900 to-red-900 rounded-3xl text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          The ROI of Getting Your Life Back
        </h2>
        <p className="text-xl text-orange-100 max-w-3xl mx-auto">
          When you're rested and focused, everything improves
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {roiMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
          >
            <div className="text-4xl font-bold mb-2">
              {metric.value}
            </div>
            <div className="text-xl font-semibold text-orange-100 mb-2">
              {metric.label}
            </div>
            <div className="text-orange-200 text-sm">
              {metric.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
