'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Target, Briefcase, Brain, Shield, Users, Scale, Calculator, ArrowRight } from 'lucide-react';

const BuildYourBoard = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedAdvisors, setSelectedAdvisors] = useState<string[]>([]);

  const advisors = [
    { id: 'ceo', name: 'Alex Sterling', title: 'CEO', icon: TrendingUp, hoursSaved: 15, monthlySavings: 2000 },
    { id: 'cfo', name: 'Victoria Chen', title: 'CFO', icon: PieChart, hoursSaved: 12, monthlySavings: 1500 },
    { id: 'cmo', name: 'Marcus Thompson', title: 'CMO', icon: Target, hoursSaved: 10, monthlySavings: 500 },
    { id: 'coo', name: 'Rachel Martinez', title: 'COO', icon: Briefcase, hoursSaved: 20, monthlySavings: 1200 },
    { id: 'cto', name: 'David Kumar', title: 'CTO', icon: Brain, hoursSaved: 18, monthlySavings: 2000 }
  ];

  const industries = [
    { value: 'agency', label: 'Creative Agency', recommended: ['coo', 'cfo', 'cmo'] },
    { value: 'ecommerce', label: 'E-commerce', recommended: ['cmo', 'coo', 'cto'] },
    { value: 'consultancy', label: 'Consultancy', recommended: ['ceo', 'cfo', 'cmo'] },
    { value: 'saas', label: 'SaaS', recommended: ['cto', 'ceo', 'cmo'] },
    { value: 'retail', label: 'Retail', recommended: ['coo', 'cfo', 'cmo'] }
  ];

  const toggleAdvisor = (advisorId: string) => {
    if (selectedAdvisors.includes(advisorId)) {
      setSelectedAdvisors(selectedAdvisors.filter(id => id !== advisorId));
    } else if (selectedAdvisors.length < 5) {
      setSelectedAdvisors([...selectedAdvisors, advisorId]);
    }
  };

  const calculateROI = () => {
    const selectedAdvisorData = advisors.filter(a => selectedAdvisors.includes(a.id));
    const totalHoursSaved = selectedAdvisorData.reduce((sum, a) => sum + a.hoursSaved, 0);
    const totalMonthlySavings = selectedAdvisorData.reduce((sum, a) => sum + a.monthlySavings, 0);
    return { totalHoursSaved, totalMonthlySavings };
  };

  const { totalHoursSaved, totalMonthlySavings } = calculateROI();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Design Your Perfect
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Advisory Board
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See your potential ROI before you start. Select up to 5 advisors and watch your savings calculate in real-time.
          </p>
        </motion.div>

        {/* Industry Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's your industry?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.value}
                onClick={() => {
                  setSelectedIndustry(industry.value);
                  setSelectedAdvisors(industry.recommended);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedIndustry === industry.value
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-500'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Board Builder */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Advisors (Max 5)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advisors.map((advisor) => {
                const IconComponent = advisor.icon;
                const isSelected = selectedAdvisors.includes(advisor.id);
                const isRecommended = selectedIndustry && 
                  industries.find(i => i.value === selectedIndustry)?.recommended.includes(advisor.id);

                return (
                  <motion.div
                    key={advisor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => toggleAdvisor(advisor.id)}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        Recommended
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-purple-600' : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{advisor.name}</h3>
                        <p className="text-sm text-gray-600">{advisor.title}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hours saved/week:</span>
                        <span className="font-semibold">{advisor.hoursSaved}h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly savings:</span>
                        <span className="font-semibold">£{advisor.monthlySavings.toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Your ROI Calculator</h3>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {totalHoursSaved}h
                    </div>
                    <div className="text-sm text-gray-600">Saved per week</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      £{totalMonthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Saved per month</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {Math.round(totalHoursSaved * 4.33 * 12)}h
                    </div>
                    <div className="text-sm text-gray-600">Saved per year</div>
                  </div>

                  {selectedAdvisors.length > 0 && (
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Your Board:</h4>
                      <div className="space-y-2">
                        {selectedAdvisors.map(id => {
                          const advisor = advisors.find(a => a.id === id);
                          return advisor ? (
                            <div key={id} className="flex justify-between text-sm">
                              <span className="text-gray-600">{advisor.title}</span>
                              <span className="font-semibold">{advisor.name}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  <button
                    disabled={selectedAdvisors.length === 0}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      selectedAdvisors.length > 0
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Start Building This Board
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Industry Templates */}
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why This Board Works for {industries.find(i => i.value === selectedIndustry)?.label}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Based on analysis of 1000+ similar businesses, this combination provides the optimal balance of strategic guidance, operational efficiency, and growth acceleration for your industry.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuildYourBoard;
