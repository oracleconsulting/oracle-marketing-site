import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, TrendingUp, Zap, DollarSign, ArrowRight, CheckCircle, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicHeader from '@/components/layout/DynamicHeader';

const SideHustlers = () => {
  const realities = [
    { stat: "67%", desc: "of UK side hustles fail in year 1", impact: "Poor strategy" },
    { stat: "5-10h", desc: "hours per week available", impact: "Time constraint" },
    { stat: "£500", desc: "average monthly earnings", impact: "Could be £5k" },
    { stat: "#1", desc: "failure reason: lack of focus", impact: "No clear path" }
  ];

  const features = [
    {
      icon: Clock,
      title: "15-Minute Daily Check-ins",
      description: "Quick strategic guidance that fits your lunch break",
      benefit: "Maximum progress, minimal time"
    },
    {
      icon: Target,
      title: "Micro-Task Optimization",
      description: "Every task sized to your available windows",
      benefit: "Always moving forward"
    },
    {
      icon: Calendar,
      title: "Weekend Warrior Mode",
      description: "Batch planning for your productive weekend sessions",
      benefit: "Make weekends count"
    },
    {
      icon: BarChart3,
      title: "Revenue Milestone Tracking",
      description: "Clear path from £500 to £5,000 monthly",
      benefit: "See your progress clearly"
    },
    {
      icon: Zap,
      title: "Quick Decision Frameworks",
      description: "No more analysis paralysis on small decisions",
      benefit: "Decide fast, execute faster"
    }
  ];

  const progressSteps = [
    { stage: "Month 1-2", revenue: "£500", focus: "Foundation & Focus" },
    { stage: "Month 3-4", revenue: "£1,500", focus: "Systems & Scale" },
    { stage: "Month 5-6", revenue: "£3,000", focus: "Growth & Optimization" },
    { stage: "Month 7-8", revenue: "£5,000", focus: "Transition Planning" }
  ];

  return (
    <>
      <DynamicHeader />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            Build Your Business in
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              5 Hours a Week
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI advisors optimized for time-starved founders
          </p>

          {/* Time Visualization */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-12 h-12 text-red-600" />
              </div>
              <div className="text-sm text-gray-600">40 hours</div>
              <div className="text-xs text-red-600">wasted effort</div>
            </motion.div>
            
            <ArrowRight className="text-gray-400 w-8 h-8" />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Target className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-sm text-gray-900 font-bold">5 hours</div>
              <div className="text-xs text-green-600">focused action</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Reality Check Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The Side Hustle Reality
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realities.map((reality, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {reality.stat}
                </div>
                <div className="text-gray-700 mb-3">
                  {reality.desc}
                </div>
                <div className="text-sm text-green-600 font-semibold">
                  {reality.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solution Features */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI That Respects Your Constraints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic guidance designed for your 5-hour reality
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
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

        {/* Progress Pathway */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your 8-Month Journey to Freedom
            </h2>
            <p className="text-xl text-gray-600">
              From £500 side income to £5k full-time viable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {progressSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-100">
                  <div className="text-sm text-green-600 font-semibold mb-2">
                    {step.stage}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {step.revenue}
                  </div>
                  <div className="text-sm text-gray-600">
                    {step.focus}
                  </div>
                </div>
                
                {idx < progressSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ROI Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 rounded-3xl text-white"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Side Hustle ROI Calculator
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              5 focused hours beats 40 scattered ones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-xl font-semibold text-green-100 mb-2">
                Productivity Increase
              </div>
              <div className="text-green-200 text-sm">
                vs unfocused effort
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <div className="text-4xl font-bold mb-2">8 months</div>
              <div className="text-xl font-semibold text-green-100 mb-2">
                To Full-Time Viable
              </div>
              <div className="text-green-200 text-sm">
                £5k monthly revenue
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-xl font-semibold text-green-100 mb-2">
                Burnout Risk
              </div>
              <div className="text-green-200 text-sm">
                sustainable growth
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Success Story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl font-light text-gray-700 mb-8 leading-relaxed">
              "Quit my job after 8 months, now making 3x more. Oracle Method kept me focused on what actually matters."
            </blockquote>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-gray-900">Julie Martinez</div>
              <div className="text-gray-600">Marketing Consultant • Side → Full-time</div>
              <div className="flex justify-center gap-8 mt-6 text-sm text-gray-600">
                <span>• Started: £500/month</span>
                <span>• Month 8: £8k/month</span>
                <span>• 5 hours/week → Freedom</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Turn 5 Hours Into Freedom?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Start your focused journey from side hustle to sustainable business
          </p>

          <Link
            to="/auth"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all text-lg"
          >
            Start 5-Hour Assessment
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.section>
      </div>
    </>
  );
};

export default SideHustlers;
