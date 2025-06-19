
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, UserPlus, Scale, Zap, CheckCircle } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  benefit: string;
}

export const SolutionFeatures = () => {
  const features: Feature[] = [
    {
      icon: Users,
      title: "Multi-User Access",
      description: "Up to 10 team seats with role-based permissions",
      benefit: "Everyone aligned on strategy"
    },
    {
      icon: Target,
      title: "Team Alignment Dashboard",
      description: "Real-time view of goals, progress, and dependencies",
      benefit: "End miscommunication chaos"
    },
    {
      icon: UserPlus,
      title: "Hiring Decision Support",
      description: "AI-powered candidate evaluation and role design",
      benefit: "Prevent costly hiring mistakes"
    },
    {
      icon: Scale,
      title: "Cultural Consistency Tools",
      description: "Maintain your values as you scale rapidly",
      benefit: "Keep your soul while growing"
    },
    {
      icon: Zap,
      title: "Meeting Automation",
      description: "AI summarizes, tracks actions, and follows up",
      benefit: "50% less time in meetings"
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
          Your Shared AI Board of Directors
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          One unified strategy, executed by aligned teams
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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
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
