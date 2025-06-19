
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, TrendingUp, Zap, Shield, CheckCircle } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  benefit: string;
}

export const SolutionFeatures = () => {
  const features: Feature[] = [
    {
      icon: Clock,
      title: "5-Minute Morning Briefings",
      description: "Get strategic insights before your first coffee",
      benefit: "Start each day with clarity, not chaos"
    },
    {
      icon: Shield,
      title: "Weekend Mode",
      description: "AI handles everything while you truly disconnect",
      benefit: "Guilt-free family time"
    },
    {
      icon: TrendingUp,
      title: "Delegation Recommendations", 
      description: "AI identifies what only you can do vs what to delegate",
      benefit: "Focus on your genius zone"
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Schedule recommendations based on your energy patterns",
      benefit: "Work when you're most effective"
    },
    {
      icon: Heart,
      title: "Burnout Prevention Alerts",
      description: "Early warning system for stress and overwork",
      benefit: "Prevent crashes before they happen"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          How Oracle Gives You Your Life Back
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI board handles strategic thinking so you can handle what matters most
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                {feature.benefit}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
