
import React from 'react';
import { motion } from 'framer-motion';

interface Challenge {
  stat: string;
  desc: string;
  impact: string;
}

export const ChallengeSection = () => {
  const challenges: Challenge[] = [
    { stat: "70%", desc: "of scaling startups fail due to poor execution", impact: "Execution breakdown" },
    { stat: "£15k", desc: "average cost of a bad hire", impact: "Hiring mistakes" },
    { stat: "40%", desc: "drop in team alignment after 10 people", impact: "Culture drift" },
    { stat: "5+", desc: "employees when founders become bottlenecks", impact: "Growth ceiling" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        The Growing Pains Are Real
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {challenges.map((challenge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {challenge.stat}
            </div>
            <div className="text-gray-700 mb-3">
              {challenge.desc}
            </div>
            <div className="text-sm text-blue-600 font-semibold">
              {challenge.impact}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
