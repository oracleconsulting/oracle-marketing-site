'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Target, Clock, CheckCircle, FileText, Mountain, Compass, Rocket, Heart, Coffee, Sun, Moon, Star, Download, Play, Pause, Layers
} from 'lucide-react';

const Method365Page = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('5years');
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  // Tabs for different sections
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'framework', label: 'The Framework', icon: Layers },
    { id: 'rhythm', label: 'The Rhythm', icon: Clock },
    { id: 'examples', label: 'Real Examples', icon: FileText },
    { id: 'start', label: 'Start Now', icon: Rocket }
  ];
  
  // Framework components
  const FrameworkVisual = () => {
    const timeframes = [
      { id: '3months', label: '3 Months', color: 'purple', size: 150, orbit: 200 },
      { id: '6months', label: '6 Months', color: 'pink', size: 200, orbit: 300 },
      { id: '5years', label: '5 Years', color: 'orange', size: 250, orbit: 400 }
    ];
    
    return (
      <div className="relative h-96 flex items-center justify-center">
        {/* Central "Your Life" circle */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl z-10"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          <div className="text-white text-center">
            <Heart className="w-8 h-8 mx-auto mb-1" />
            <p className="text-xs font-bold">Your Life</p>
          </div>
        </motion.div>
        
        {/* Orbiting timeframes */}
        {timeframes.map((timeframe, index) => {
          const isSelected = selectedTimeframe === timeframe.id;
          return (
            <motion.div
              key={timeframe.id}
              className="absolute"
              animate={{
                rotate: isPlaying ? 360 : 0,
              }}
              transition={{
                duration: 20 + index * 10,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear"
              }}
              style={{
                width: timeframe.orbit,
                height: timeframe.orbit,
              }}
            >
              <motion.button
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg transition-all ${
                  isSelected 
                    ? `bg-gradient-to-br from-${timeframe.color}-400 to-${timeframe.color}-500 scale-110` 
                    : 'bg-white/80 backdrop-blur-sm hover:scale-105'
                }`}
                style={{
                  width: timeframe.size / 2,
                  height: timeframe.size / 2,
                }}
                onClick={() => setSelectedTimeframe(timeframe.id)}
                whileHover={{ scale: isSelected ? 1.1 : 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`flex flex-col items-center justify-center h-full ${
                  isSelected ? 'text-white' : 'text-gray-700'
                }`}>
                  <Calendar className="w-6 h-6 mb-1" />
                  <p className="text-sm font-bold">{timeframe.label}</p>
                </div>
              </motion.button>
            </motion.div>
          );
        })}
        
        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:scale-105 transition-all"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    );
  };
  
  // Content for selected timeframe
  const timeframeContent: Record<string, any> = {
    '5years': {
      title: '5-Year Compass',
      questions: [
        'What does your ideal Tuesday look like?',
        'How many hours are you working?',
        'What are you doing for fun?',
        'Who are you becoming?'
      ],
      focus: 'Life Vision',
      icon: Compass
    },
    '6months': {
      title: '6-Month Shifts',
      questions: [
        'What systems need fixing?',
        'Which people need moving?',
        'What habits need breaking?',
        'What capabilities need building?'
      ],
      focus: 'Structural Changes',
      icon: Mountain
    },
    '3months': {
      title: '3-Month Sprints',
      questions: [
        'What are your top 3-5 priorities?',
        'Who owns each one?',
        'What does "done" look like?',
        'How does this connect to your vision?'
      ],
      focus: 'Actionable Tasks',
      icon: Rocket
    }
  };
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden"
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
      
      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[Calendar, Target, Clock, Star, Heart].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Icon className="w-6 h-6 text-purple-200/30" />
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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="font-bold text-gray-800">The 365 Method™</h1>
                <p className="text-xs text-gray-500">Nothing revolutionary. Everything helpful.</p>
              </div>
            </div>
            
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 inline mr-2" />
              Download Template
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
              Why simple beats{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                sophisticated
              </span>{' '}
              every time
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Most planning systems are designed by consultants who bill by complexity. 
              The 365 Method fits on a beer mat because that's where the best plans are made.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                      : 'bg-white/60 text-gray-600 hover:bg-white/80'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Problem with More */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">The Problem with 'More'</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Traditional Planning</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 mt-0.5" />
                          <span className="text-gray-700">73 objectives across 12 categories</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 mt-0.5" />
                          <span className="text-gray-700">Quarterly reviews nobody reads</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 mt-0.5" />
                          <span className="text-gray-700">Annual strategies that die by February</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 mt-0.5" />
                          <span className="text-gray-700">You: Exhausted and lost</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">The 365 Method</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">One clear life vision</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">3-5 priorities max per quarter</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">Monthly sanity checks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">You: Clear and energized</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Visual comparison */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-5xl font-bold text-purple-600 mb-2">365</p>
                        <p className="text-gray-600">Days to transform</p>
                      </div>
                      <div>
                        <p className="text-5xl font-bold text-pink-600 mb-2">3</p>
                        <p className="text-gray-600">Simple questions</p>
                      </div>
                      <div>
                        <p className="text-5xl font-bold text-orange-600 mb-2">1</p>
                        <p className="text-gray-600">Clear vision</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Beer Mat Promise */}
                <motion.div
                  className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Coffee className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    The Beer Mat Promise
                  </h3>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    "If your business plan can't fit on a beer mat, it's too complicated. 
                    The 365 Method is simple enough to sketch over a pint, powerful enough to change your life."
                  </p>
                </motion.div>
              </motion.div>
            )}
            
            {/* Framework Tab */}
            {activeTab === 'framework' && (
              <motion.div
                key="framework"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Three Circles. One Life. Zero Complexity.
                  </h2>
                  
                  {/* Interactive Framework Visual */}
                  <FrameworkVisual />
                  
                  {/* Selected timeframe details */}
                  <motion.div
                    key={selectedTimeframe}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {timeframeContent[selectedTimeframe].title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        Focus: {timeframeContent[selectedTimeframe].focus}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {timeframeContent[selectedTimeframe].questions.map((question: string, index: number) => (
                        <motion.div
                          key={question}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-purple-600 font-bold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700">{question}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {/* Rhythm Tab */}
            {activeTab === 'rhythm' && (
              <motion.div
                key="rhythm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    This isn't a document. It's a practice.
                  </h2>
                  
                  {/* Rhythm visualization */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {[
                      {
                        frequency: 'Daily',
                        duration: '5 minutes',
                        action: 'Am I on track?',
                        icon: Sun,
                        color: 'yellow'
                      },
                      {
                        frequency: 'Weekly',
                        duration: '30 minutes',
                        action: 'What needs adjusting?',
                        icon: Calendar,
                        color: 'purple'
                      },
                      {
                        frequency: 'Monthly',
                        duration: '2 hours',
                        action: 'What\'s working?',
                        icon: Moon,
                        color: 'pink'
                      },
                      {
                        frequency: 'Quarterly',
                        duration: 'Half day',
                        action: 'What\'s next?',
                        icon: Mountain,
                        color: 'orange'
                      }
                    ].map((rhythm, index) => {
                      const Icon = rhythm.icon;
                      return (
                        <motion.div
                          key={rhythm.frequency}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center"
                          whileHover={{ y: -5 }}
                        >
                          <div className={`w-20 h-20 bg-${rhythm.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <Icon className={`w-10 h-10 text-${rhythm.color}-600`} />
                          </div>
                          <h3 className="font-bold text-gray-800 mb-1">{rhythm.frequency}</h3>
                          <p className="text-sm text-gray-600 mb-2">{rhythm.duration}</p>
                          <p className="text-gray-700 italic">"{rhythm.action}"</p>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Calendar integration preview */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Integrate with Your Life</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/80 rounded-xl p-4 text-center">
                        <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-700">Sync with your calendar</p>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 text-center">
                        <Bell className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-700">Gentle reminders</p>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-orange-600 mx-auto mb-2 rounded">📊</div>
                        <p className="text-sm text-gray-700">Track progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Examples Tab */}
            {activeTab === 'examples' && (
              <motion.div
                key="examples"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-8">
                  {/* Real founder examples */}
                  {[
                    {
                      name: 'Sarah, Tech Founder',
                      before: 'Working 80 hours, missing bedtimes',
                      after: 'Home by 6pm, revenue up 30%',
                      vision: 'Work from anywhere, 4-day weeks',
                      shifts: 'Hired ops manager, automated invoicing',
                      sprints: 'Delegate sales, systemize onboarding',
                      color: 'purple'
                    },
                    {
                      name: 'Marcus, Agency Owner',
                      before: 'Doing everything, constant fires',
                      after: 'Strategic focus only, team handles ops',
                      vision: 'Semi-retire by 45, mentor others',
                      shifts: 'Built leadership team, clear SOPs',
                      sprints: 'Document processes, train team leads',
                      color: 'pink'
                    },
                    {
                      name: 'Elena, E-commerce',
                      before: 'Always on, no holidays in 3 years',
                      after: 'Just took a month in Spain',
                      vision: 'Location independent, passive income',
                      shifts: 'Outsourced fulfillment, VAs for support',
                      sprints: 'Launch subscription model, hire GM',
                      color: 'orange'
                    }
                  ].map((example, index) => (
                    <motion.div
                      key={example.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">{example.name}</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Before 365 Method:</p>
                              <p className="text-gray-700 font-medium">{example.before}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">After 365 Method:</p>
                              <p className="text-green-600 font-medium">{example.after}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className={`bg-${example.color}-50 rounded-xl p-4`}>
                            <p className="text-sm font-bold text-gray-700 mb-1">5-Year Vision:</p>
                            <p className="text-gray-600">{example.vision}</p>
                          </div>
                          <div className={`bg-${example.color}-50 rounded-xl p-4`}>
                            <p className="text-sm font-bold text-gray-700 mb-1">6-Month Shifts:</p>
                            <p className="text-gray-600">{example.shifts}</p>
                          </div>
                          <div className={`bg-${example.color}-50 rounded-xl p-4`}>
                            <p className="text-sm font-bold text-gray-700 mb-1">Current Sprint:</p>
                            <p className="text-gray-600">{example.sprints}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Start Tab */}
            {activeTab === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Start Your 365 Journey Today
                  </h2>
                  
                  {/* Quick start questions */}
                  <div className="max-w-3xl mx-auto space-y-6 mb-8">
                    <motion.div
                      className="bg-purple-50 rounded-2xl p-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-700 font-bold">1</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-2">Your 5-Year Vision</h3>
                          <p className="text-gray-600 mb-4">
                            If money wasn't the issue, what would your ideal Tuesday look like in 5 years?
                          </p>
                          <textarea
                            className="w-full p-4 bg-white/80 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none resize-none"
                            rows={3}
                            placeholder="Describe your perfect Tuesday..."
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-pink-50 rounded-2xl p-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-700 font-bold">2</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-2">Your 6-Month Shift</h3>
                          <p className="text-gray-600 mb-4">
                            What one thing in your business needs to fundamentally change in the next 6 months?
                          </p>
                          <textarea
                            className="w-full p-4 bg-white/80 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none resize-none"
                            rows={3}
                            placeholder="The biggest change needed..."
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-orange-50 rounded-2xl p-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-700 font-bold">3</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-2">Your 3-Month Sprint</h3>
                          <p className="text-gray-600 mb-4">
                            What are the 3 most important things you need to accomplish this quarter?
                          </p>
                          <div className="space-y-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-white/80 rounded-lg border border-orange-200 focus:border-orange-400 focus:outline-none"
                              placeholder="Priority 1..."
                            />
                            <input
                              type="text"
                              className="w-full p-3 bg-white/80 rounded-lg border border-orange-200 focus:border-orange-400 focus:outline-none"
                              placeholder="Priority 2..."
                            />
                            <input
                              type="text"
                              className="w-full p-3 bg-white/80 rounded-lg border border-orange-200 focus:border-orange-400 focus:outline-none"
                              placeholder="Priority 3..."
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Remember: Perfect is the enemy of done. A plan scribbled on a napkin that you actually follow beats a beautiful strategy document gathering dust.
                    </p>
                    <motion.button
                      className="px-12 py-4 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-xl text-white font-bold text-lg shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Your Free 90-Day Roadmap
                    </motion.button>
                    <p className="text-sm text-gray-500 mt-2">
                      Takes 10 minutes. No credit card required. No spam.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Bottom CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              See the 365 Method in action - personalized for YOUR business
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We'll analyze where you are, where you want to be, and create a clear 90-day sprint to get you moving. 
              No fluff. No 47-step processes. Just 3-5 focused priorities that actually matter.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="font-bold text-gray-800 mb-4">What you get:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Personalized 90-day action plan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Introduction to your Virtual Board</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">One month free access to Tier 1</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">The Beanstalk Test results</span>
                </div>
              </div>
              
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get My Free 90-Day Roadmap
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Quote footer */}
      <div className="py-12 px-6 text-center bg-gray-900 text-white">
        <blockquote className="text-xl italic max-w-3xl mx-auto">
          "The best time to plant a tree was 20 years ago. The second best time is now. 
          The best time to start planning your actual life? Also now."
        </blockquote>
      </div>
    </div>
  );
};

// Fix for dynamic className issue
const X = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Bell = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export default Method365Page;
