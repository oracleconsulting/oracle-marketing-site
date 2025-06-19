
import React from 'react';
import { motion } from 'framer-motion';

interface ROIMetric {
  value: string;
  label: string;
  sublabel: string;
}

export const ROISection = () => {
  const roiMetrics: ROIMetric[] = [
    { value: "£30k", label: "Saved from Bad Hires", sublabel: "Prevent 2 wrong hires" },
    { value: "30%", label: "Faster Decisions", sublabel: "team-wide clarity" },
    { value: "2x", label: "Revenue Scale", sublabel: "with unified strategy" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          ROI of Unified Growth
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          When everyone's aligned, everything accelerates
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
            <div className="text-xl font-semibold text-blue-100 mb-2">
              {metric.label}
            </div>
            <div className="text-blue-200 text-sm">
              {metric.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
