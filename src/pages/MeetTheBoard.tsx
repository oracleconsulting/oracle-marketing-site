
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Briefcase, Target, Shield, Brain, Users, Scale, Lightbulb, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const MeetTheBoard = () => {
  const advisors = [
    {
      id: 'ceo',
      name: 'Alex Sterling',
      title: 'Chief Executive Officer',
      icon: TrendingUp,
      color: 'from-purple-600 to-indigo-600',
      expertise: [
        'Strategic vision and leadership',
        'Business model optimization',
        'Stakeholder management',
        'Growth strategy'
      ]
    },
    {
      id: 'cfo',
      name: 'Victoria Chen',
      title: 'Chief Financial Officer',
      icon: PieChart,
      color: 'from-blue-600 to-cyan-600',
      expertise: [
        'Financial planning and analysis',
        'Cash flow optimization',
        'Investment decisions',
        'Risk management'
      ]
    },
    {
      id: 'cmo',
      name: 'Marcus Thompson',
      title: 'Chief Marketing Officer',
      icon: Target,
      color: 'from-pink-600 to-rose-600',
      expertise: [
        'Brand positioning',
        'Customer acquisition',
        'Digital marketing strategy',
        'Market analysis'
      ]
    },
    {
      id: 'coo',
      name: 'Rachel Martinez',
      title: 'Chief Operating Officer',
      icon: Briefcase,
      color: 'from-green-600 to-emerald-600',
      expertise: [
        'Operational efficiency',
        'Process optimization',
        'Supply chain management',
        'Quality control'
      ]
    },
    {
      id: 'cto',
      name: 'David Kumar',
      title: 'Chief Technology Officer',
      icon: Brain,
      color: 'from-orange-600 to-amber-600',
      expertise: [
        'Technology strategy',
        'Digital transformation',
        'Cybersecurity',
        'Innovation roadmap'
      ]
    },
    {
      id: 'cso',
      name: 'Elena Rodriguez',
      title: 'Chief Synthesizing Officer',
      icon: Filter,
      color: 'from-violet-600 to-purple-600',
      expertise: [
        'Integrates all perspectives',
        'Identifies blind spots',
        'Creates unified strategy',
        'Conflict resolution'
      ]
    },
    {
      id: 'chro',
      name: 'James Wilson',
      title: 'Chief Human Resources Officer',
      icon: Users,
      color: 'from-teal-600 to-cyan-600',
      expertise: [
        'Talent acquisition',
        'Culture development',
        'Performance management',
        'Employee wellbeing'
      ]
    },
    {
      id: 'clo',
      name: 'Sophie Taylor',
      title: 'Chief Legal Officer',
      icon: Scale,
      color: 'from-indigo-600 to-blue-600',
      expertise: [
        'Regulatory compliance',
        'Contract negotiations',
        'Risk mitigation',
        'Intellectual property'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Meet Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Board of Advisors</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            C-suite executives with deep UK business expertise, available 24/7. 
            They remember everything, learn continuously, and never send invoices.
          </p>
        </motion.div>

        {/* Advisors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advisors.map((advisor, index) => {
            const IconComponent = advisor.icon;
            return (
              <motion.div
                key={advisor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-full">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${advisor.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-lg text-purple-400 mb-6">
                    {advisor.title}
                  </p>

                  {/* Expertise */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Key Expertise
                    </h4>
                    <ul className="space-y-2">
                      {advisor.expertise.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center pb-20"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Custom Board?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Select the advisors that match your business needs and start getting insights that transform your decision-making.
            </p>
            <Link
              to="/build-your-board"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all text-lg"
            >
              Build Your Custom Board
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeetTheBoard;
