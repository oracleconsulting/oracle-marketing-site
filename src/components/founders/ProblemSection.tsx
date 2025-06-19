
import React from 'react';
import { motion } from 'framer-motion';

interface Problem {
  stat: string;
  desc: string;
  impact: string;
}

export const ProblemSection = () => {
  const problems: Problem[] = [
    { stat: "73%", desc: "of founders work 60+ hours/week", impact: "Burnout risk" },
    { stat: "49%", desc: "report mental health challenges", impact: "Personal cost" },
    { stat: "1 in 5", desc: "haven't taken a week off in a year", impact: "Family impact" },
    { stat: "100%", desc: "productivity loss from burnout", impact: "Business cost" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        The Hidden Cost of Founder Exhaustion
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="text-4xl font-bold text-red-600 mb-2">
              {problem.stat}
            </div>
            <div className="text-gray-700 mb-3">
              {problem.desc}
            </div>
            <div className="text-sm text-red-600 font-semibold">
              {problem.impact}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
