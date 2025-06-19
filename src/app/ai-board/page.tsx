use client
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Users, 
  MessageSquare, 
  Shield, 
  Target, 
  Clock, 
  CheckCircle,
  ArrowRight, 
  Star, 
  Trophy, 
  Rocket,
  Building2, 
  Settings, 
  Heart, 
  Sparkles,
  PlayCircle, 
  Quote, 
  AlertCircle,
  Send
} from 'lucide-react';

const AIBoardPage = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [chatMessage, setChatMessage] = useState('');
  const [boardMood, setBoardMood] = useState('collaborative');
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  // Board members data
  const boardMembers = [
    {
      id: 'ceo',
      role: 'CEO',
      name: 'Victoria Sterling',
      emoji: '👔',
      personality: 'Visionary & Strategic',
      riskProfile: 'Balanced',
      specialty: 'Vision, Strategy & Leadership',
      background: '20+ years scaling SMEs to exit',
      currentMood: 'inspired',
      color: 'purple',
      insights: [
        'Your vision needs more clarity around the 5-year exit strategy',
        'Consider strategic partnerships to accelerate growth',
        'Leadership development should be your Q2 priority'
      ]
    },
    {
      id: 'cfo',
      role: 'CFO',
      name: 'Sarah Chen',
      emoji: '🧮',
      personality: 'Analytical & Prudent',
      riskProfile: 'Conservative',
      specialty: 'Financial Health & Planning',
      background: 'Ex-Big 4, specializes in SME finance',
      currentMood: 'cautious',
      color: 'blue',
      insights: [
        'Cash flow projections need updating for Q3',
        'Consider invoice factoring to improve working capital',
        'Your gross margins are 5% below industry average'
      ]
    },
    {
      id: 'cmo',
      role: 'CMO',
      name: 'Marcus Johnson',
      emoji: '🎯',
      personality: 'Creative & Data-Driven',
      riskProfile: 'Aggressive',
      specialty: 'Growth & Brand Strategy',
      background: 'Built 3 brands from £0 to £10M',
      currentMood: 'excited',
      color: 'pink',
      insights: [
        'Your brand message isn\'t resonating with the 35-45 demographic',
        'LinkedIn could drive 3x more leads with consistent posting',
        'Customer retention needs immediate attention'
      ]
    },
    {
      id: 'coo',
      role: 'COO',
      name: 'Elena Rodriguez',
      emoji: '⚙️',
      personality: 'Systematic & Efficient',
      riskProfile: 'Moderate',
      specialty: 'Operations & Systems',
      background: 'Lean Six Sigma, process optimization expert',
      currentMood: 'focused',
      color: 'green',
      insights: [
        'Your order fulfillment process has 3 unnecessary steps',
        'Automation could save 15 hours per week',
        'Team productivity metrics need standardization'
      ]
    },
    {
      id: 'cto',
      role: 'CTO',
      name: 'Alex Kumar',
      emoji: '💻',
      personality: 'Innovative & Practical',
      riskProfile: 'Progressive',
      specialty: 'Technology & Innovation',
      background: 'Built tech stacks for 50+ SMEs',
      currentMood: 'analytical',
      color: 'indigo',
      insights: [
        'Your tech stack is costing 40% more than necessary',
        'API integrations could eliminate manual data entry',
        'Cybersecurity audit overdue by 6 months'
      ]
    },
    {
      id: 'chro',
      role: 'CHRO',
      name: 'Jamie Williams',
      emoji: '🤝',
      personality: 'Empathetic & Strategic',
      riskProfile: 'Balanced',
      specialty: 'People & Culture',
      background: 'Transformed cultures at 20+ companies',
      currentMood: 'supportive',
      color: 'yellow',
      insights: [
        'Team morale scores dropped 15% last quarter',
        'Your hiring process is losing top talent',
        'Remote work policy needs updating'
      ]
    },
    {
      id: 'cso',
      role: 'CSO',
      name: 'David Park',
      emoji: '🛡️',
      personality: 'Persistent & Relationship-Focused',
      riskProfile: 'Aggressive',
      specialty: 'Sales & Revenue',
      background: 'Closed £100M+ in SME deals',
      currentMood: 'determined',
      color: 'orange',
      insights: [
        'Your sales cycle could be 30% shorter',
        'Upsell opportunities worth £200k untapped',
        'Sales team needs advanced negotiation training'
      ]
    },
    {
      id: 'cpo',
      role: 'CPO',
      name: 'Lisa Thompson',
      emoji: '📦',
      personality: 'User-Centric & Innovative',
      riskProfile: 'Progressive',
      specialty: 'Product & Experience',
      background: 'Launched 15 successful products',
      currentMood: 'creative',
      color: 'teal',
      insights: [
        'Customer feedback shows 3 critical feature gaps',
        'Your product roadmap needs Q4 prioritization',
        'User onboarding has a 40% drop-off rate'
      ]
    }
  ];
  
  // Board consensus calculation
  const getBoardConsensus = () => {
    const consensusTopics = [
      {
        topic: 'Immediate Priority',
        agreement: 'Process automation to reclaim time',
        supporters: ['coo', 'cto', 'cfo'],
        confidence: 85
      },
      {
        topic: 'Growth Strategy',
        agreement: 'Focus on retention before acquisition',
        supporters: ['cmo', 'cso', 'cpo'],
        confidence: 78
      },
      {
        topic: 'Team Development',
        agreement: 'Invest in leadership training for managers',
        supporters: ['chro', 'ceo', 'coo'],
        confidence: 92
      }
    ];
    return consensusTopics;
  };
  
  // Helper function to get color classes
  const getColorClasses = (color: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
      purple: {
        bg: 'bg-purple-100',
        bgLight: 'bg-purple-50',
        text: 'text-purple-700',
        textDark: 'text-purple-600',
        gradient: 'bg-gradient-to-r from-purple-400 to-purple-500'
      },
      blue: {
        bg: 'bg-blue-100',
        bgLight: 'bg-blue-50',
        text: 'text-blue-700',
        textDark: 'text-blue-600',
        gradient: 'bg-gradient-to-r from-blue-400 to-blue-500'
      },
      pink: {
        bg: 'bg-pink-100',
        bgLight: 'bg-pink-50',
        text: 'text-pink-700',
        textDark: 'text-pink-600',
        gradient: 'bg-gradient-to-r from-pink-400 to-pink-500'
      },
      green: {
        bg: 'bg-green-100',
        bgLight: 'bg-green-50',
        text: 'text-green-700',
        textDark: 'text-green-600',
        gradient: 'bg-gradient-to-r from-green-400 to-green-500'
      },
      indigo: {
        bg: 'bg-indigo-100',
        bgLight: 'bg-indigo-50',
        text: 'text-indigo-700',
        textDark: 'text-indigo-600',
        gradient: 'bg-gradient-to-r from-indigo-400 to-indigo-500'
      },
      yellow: {
        bg: 'bg-yellow-100',
        bgLight: 'bg-yellow-50',
        text: 'text-yellow-700',
        textDark: 'text-yellow-600',
        gradient: 'bg-gradient-to-r from-yellow-400 to-yellow-500'
      },
      orange: {
        bg: 'bg-orange-100',
        bgLight: 'bg-orange-50',
        text: 'text-orange-700',
        textDark: 'text-orange-600',
        gradient: 'bg-gradient-to-r from-orange-400 to-orange-500'
      },
      teal: {
        bg: 'bg-teal-100',
        bgLight: 'bg-teal-50',
        text: 'text-teal-700',
        textDark: 'text-teal-600',
        gradient: 'bg-gradient-to-r from-teal-400 to-teal-500'
      }
    };
    
    return colorMap[color] ? colorMap[color][type] : colorMap.purple[type];
  };
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Floating board member avatars */}
      <div className="fixed inset-0 pointer-events-none">
        {boardMembers.slice(0, 5).map((member, i) => (
          <motion.div
            key={member.id}
            className="absolute text-2xl"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ opacity: 0.1 }}
          >
            {member.emoji}
          </motion.div>
        ))}
      </div>
      
      {/* Header */}
      <motion.header 
        className="relative z-50 bg-white/80 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="font-bold text-gray-800">AI Board of Advisors</h1>
                <p className="text-xs text-gray-500">8 perspectives. 24/7 availability. Zero ego.</p>
              </div>
            </div>
            
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-md flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-4 h-4" />
              Start Board Meeting
            </motion.button>
          </div>
        </div>
      </motion.header>
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              £1,250/day insights for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                less than your coffee budget
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eight C-suite perspectives, personalized to your business, available 24/7. 
              No hallucinations. No generic advice. Just honest insights from advisors who remember everything.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Board Overview */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedAdvisor(member)}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                  selectedAdvisor?.id === member.id ? 'ring-2 ring-purple-400' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Mood indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${
                    member.currentMood === 'inspired' ? 'bg-green-400' :
                    member.currentMood === 'excited' ? 'bg-yellow-400' :
                    member.currentMood === 'cautious' ? 'bg-orange-400' :
                    member.currentMood === 'analytical' ? 'bg-blue-400' :
                    'bg-purple-400'
                  } animate-pulse`} />
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-3">{member.emoji}</div>
                  <h3 className="font-bold text-gray-800 text-lg">{member.role}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.name}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.specialty}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${getColorClasses(member.color, 'bg')} ${getColorClasses(member.color, 'text')}`}>
                      {member.personality.split(' & ')[0]}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {member.riskProfile}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 italic">
                    "{member.insights[0]}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Advisor Deep Dive */}
      <AnimatePresence>
        {selectedAdvisor && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="px-6 pb-12"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedAdvisor.emoji}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedAdvisor.name}, {selectedAdvisor.role}
                      </h2>
                      <p className="text-gray-600">{selectedAdvisor.background}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAdvisor(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                
                {/* Advisor insights */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4">Current Insights</h3>
                    <div className="space-y-3">
                      {selectedAdvisor.insights.map((insight: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${getColorClasses(selectedAdvisor.color, 'bg')}`}>
                            <span className={`text-xs font-bold ${getColorClasses(selectedAdvisor.color, 'textDark')}`}>{i + 1}</span>
                          </div>
                          <p className="text-gray-700">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4">Quick Chat</h3>
                    <div className="bg-gray-50 rounded-xl p-4 h-48 overflow-y-auto mb-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-xs">You</span>
                          </div>
                          <div className="bg-white rounded-lg p-3 flex-1">
                            <p className="text-sm text-gray-700">How can I improve cash flow this quarter?</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{selectedAdvisor.emoji}</div>
                          <div className={`rounded-lg p-3 flex-1 ${getColorClasses(selectedAdvisor.color, 'bgLight')}`}>
                            <p className="text-sm text-gray-700">
                              Based on your current metrics, I'd recommend three immediate actions...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder={`Ask ${selectedAdvisor.name} anything...`}
                        className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                      />
                      <motion.button
                        className={`px-4 py-2 rounded-lg text-white ${getColorClasses(selectedAdvisor.color, 'gradient')}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-700 font-medium">
                    Schedule Deep Dive
                  </button>
                  <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium">
                    View Historical Advice
                  </button>
                  <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium">
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      
      {/* Board Consensus Section */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Current Board Consensus
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {getBoardConsensus().map((consensus, index) => (
                <motion.div
                  key={consensus.topic}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6"
                >
                  <h3 className="font-bold text-gray-800 mb-2">{consensus.topic}</h3>
                  <p className="text-gray-700 mb-3">{consensus.agreement}</p>
                  
                  {/* Confidence meter */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Board Confidence</span>
                      <span>{consensus.confidence}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${consensus.confidence}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                  
                  {/* Supporting advisors */}
                  <div className="flex -space-x-2">
                    {consensus.supporters.map((supporterId) => {
                      const supporter = boardMembers.find(m => m.id === supporterId);
                      return supporter ? (
                        <div
                          key={supporterId}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg border-2 border-white"
                          title={supporter.name}
                        >
                          {supporter.emoji}
                        </div>
                      ) : null;
                    })}
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-600 border-2 border-white">
                      +{boardMembers.length - consensus.supporters.length}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Board Meeting Options */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Board Meeting Options
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Full Board Meeting</h3>
              <p className="text-gray-600 mb-4">
                Get all 8 perspectives on your current challenge. See where they agree and disagree.
              </p>
              <button className="w-full px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-700 font-medium">
                Start Meeting
              </button>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Strategic Planning</h3>
              <p className="text-gray-600 mb-4">
                Work with your board to create quarterly objectives and key results (OKRs).
              </p>
              <button className="w-full px-4 py-2 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-700 font-medium">
                Plan Quarter
              </button>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Crisis Mode</h3>
              <p className="text-gray-600 mb-4">
                Urgent situation? Get rapid-fire advice from all advisors on critical decisions.
              </p>
              <button className="w-full px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg text-orange-700 font-medium">
                Emergency Session
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-12 text-center shadow-xl"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to meet your board?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start with a free consultation. See how 8 expert perspectives could transform your business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Your Board Free
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-purple-300/30 text-white rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-300/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5 inline mr-2" />
                Watch Demo
              </motion.button>
            </div>
            
            <p className="text-white/80 mt-6 text-sm">
              No credit card required. Your first board meeting is completely free.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Custom X icon component
const X = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default AIBoardPage;
