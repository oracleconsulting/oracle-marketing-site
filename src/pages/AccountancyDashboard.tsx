
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Shield, Award, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountancyDashboard = () => {
  const opportunities = [
    { stat: "85%", desc: "of SME clients want strategic advice", impact: "Beyond compliance" },
    { stat: "£300", desc: "potential monthly revenue per client", impact: "New income stream" },
    { stat: "10x", desc: "more valuable than bookkeeping", impact: "Service differentiation" },
    { stat: "90%", desc: "client retention with advisory services", impact: "Sticky relationships" }
  ];

  const features = [
    {
      icon: Users,
      title: "Multi-Client Dashboard",
      description: "Manage 100s of clients from one interface",
      benefit: "Scale without hiring"
    },
    {
      icon: BarChart3,
      title: "Bulk Board Generation",
      description: "AI creates personalized boards for all clients",
      benefit: "Instant value creation"
    },
    {
      icon: TrendingUp,
      title: "Client Progress Tracking",
      description: "Monitor business growth across your portfolio",
      benefit: "Prove your impact"
    },
    {
      icon: Award,
      title: "Co-Branded Reports",
      description: "White-label insights with your firm's branding",
      benefit: "Build your authority"
    },
    {
      icon: Shield,
      title: "Training & Certification",
      description: "Become an Oracle Method certified advisor",
      benefit: "Differentiate from competitors"
    },
    {
      icon: DollarSign,
      title: "Revenue Sharing Model",
      description: "Earn ongoing commissions on successful clients",
      benefit: "Passive income stream"
    }
  ];

  const roiMetrics = [
    { 
      calculation: "50 clients × £100/month", 
      result: "£5k MRR", 
      label: "Monthly Recurring Revenue" 
    },
    { 
      calculation: "Zero additional headcount", 
      result: "100%", 
      label: "Margin on new revenue" 
    },
    { 
      calculation: "90% vs 70% industry average", 
      result: "+20%", 
      label: "Client retention boost" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            Empower Your SME Clients
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              at Scale
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            White-label AI advisory for progressive accountants. Transform compliance relationships into strategic partnerships.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Accountancy Revolution</h3>
            <p className="text-gray-600 leading-relaxed">
              Your clients need more than tax returns. They need strategic guidance to grow. 
              Oracle Method lets you provide CFO-level insights without hiring CFOs.
            </p>
          </div>
        </motion.section>

        {/* Opportunity Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The £10 Billion Opportunity
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {opportunity.stat}
                </div>
                <div className="text-gray-700 mb-3">
                  {opportunity.desc}
                </div>
                <div className="text-sm text-blue-600 font-semibold">
                  {opportunity.impact}
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
              Your Partner Portal Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to scale advisory services profitably
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

        {/* ROI Calculator */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                ROI Calculator for Your Firm
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                See how Oracle Method transforms your practice economics
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {roiMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-sm text-blue-200 mb-4">
                    {metric.calculation}
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {metric.result}
                  </div>
                  <div className="text-blue-100 font-semibold">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Conservative Projection</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Even with just 30 clients adopting advisory services at £100/month commission, 
                  you're looking at £36k additional annual revenue with minimal overhead.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partner Success Story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl font-light text-gray-700 mb-8 leading-relaxed">
              "We've added £15k monthly recurring revenue without hiring a single person. Our clients see us as strategic partners, not just compliance providers."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">James Thompson, FCA</div>
            <div className="text-gray-600">Senior Partner, Thompson & Associates</div>
            <div className="text-sm text-gray-500 mt-2">47 clients, 18 months with Oracle Method</div>
          </div>
        </motion.section>

        {/* Partnership Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white rounded-3xl shadow-xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Partner with Oracle Method?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">For Your Practice</h3>
              <ul className="space-y-4">
                {[
                  "New £300/client monthly revenue stream",
                  "90% client retention vs 70% industry average",
                  "Zero additional headcount required",
                  "Complete training and certification program",
                  "Co-branded marketing materials included"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">For Your Clients</h3>
              <ul className="space-y-4">
                {[
                  "C-suite level strategic guidance",
                  "24/7 access to business insights",
                  "Automated business health monitoring",
                  "Personalized growth roadmaps",
                  "Integration with their existing tools"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
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
            Ready to Transform Your Practice?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join progressive accounting firms already earning £15k+ monthly through strategic advisory services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all text-lg"
            >
              Apply for Partnership
              <ArrowRight className="w-6 h-6" />
            </Link>
            <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all">
              Download Partner Guide
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AccountancyDashboard;
