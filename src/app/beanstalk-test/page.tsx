use client
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  ArrowRight, 
  ChevronLeft,
  Target, 
  CheckCircle, 
  Rocket, 
  Mountain,
  Building2, 
  TreePine, 
  Coins, 
  Cloud, 
  Sprout, 
  Axe
} from 'lucide-react';

const BeanstalkTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<any>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  // Test questions
  const questions = [
    {
      id: 'shadow',
      title: 'The Shadow Test',
      question: 'Is your business growth blocking out other parts of your life?',
      icon: Cloud,
      options: [
        { value: 1, label: "Yes, I haven't seen daylight in months", points: 3 },
        { value: 2, label: "Sometimes I miss important things", points: 2 },
        { value: 3, label: "I'm managing a decent balance", points: 1 },
        { value: 4, label: "My growth enhances my life", points: 0 }
      ]
    },
    {
      id: 'momentum',
      title: 'The Momentum Trap',
      question: 'Are you climbing higher because you want to or because you can\'t stop?',
      icon: Mountain,
      options: [
        { value: 1, label: "I literally don't know how to stop", points: 3 },
        { value: 2, label: "Stopping feels like failure", points: 2 },
        { value: 3, label: "I could stop but choose not to", points: 1 },
        { value: 4, label: "I climb at my own pace", points: 0 }
      ]
    },
    {
      id: 'goose',
      title: 'The Golden Goose',
      question: 'Do you know what your sustainable core value is?',
      icon: Coins,
      options: [
        { value: 1, label: "I chase every shiny opportunity", points: 3 },
        { value: 2, label: "I have ideas but no clear focus", points: 2 },
        { value: 3, label: "I know it but don't protect it", points: 1 },
        { value: 4, label: "Crystal clear and well-nurtured", points: 0 }
      ]
    },
    {
      id: 'giant',
      title: 'The Giant',
      question: 'What\'s demanding more and more from you?',
      icon: Building2,
      options: [
        { value: 1, label: "Everything. I'm being consumed.", points: 3 },
        { value: 2, label: "Investors/growth expectations", points: 2 },
        { value: 3, label: "Customer demands", points: 1 },
        { value: 4, label: "Nothing - I set boundaries", points: 0 }
      ]
    },
    {
      id: 'cutdown',
      title: 'The Cut Down',
      question: 'Do you have an exit strategy or "enough" point?',
      icon: Axe,
      options: [
        { value: 1, label: "Exit? This IS my life now", points: 3 },
        { value: 2, label: "Vague ideas, nothing concrete", points: 2 },
        { value: 3, label: "Yes, but years away", points: 1 },
        { value: 4, label: "Clear plan with timeline", points: 0 }
      ]
    }
  ];
  
  const handleAnswer = (questionId: string, points: number) => {
    const newAnswers = { ...answers, [questionId]: points };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };
  
  const calculateResults = (finalAnswers: Record<string, number>) => {
    const totalPoints = Object.values(finalAnswers).reduce((sum, points) => sum + points, 0);
    const maxPoints = questions.length * 3;
    const percentage = (totalPoints / maxPoints) * 100;
    
    setShowResults({
      score: totalPoints,
      percentage: percentage,
      type: getResultType(percentage)
    });
  };
  
  const getResultType = (percentage: number) => {
    if (percentage >= 75) return 'beanstalk';
    if (percentage >= 50) return 'climbing';
    if (percentage >= 25) return 'balanced';
    return 'garden';
  };
  
  const resultTypes = {
    beanstalk: {
      title: "Full Beanstalk Mode",
      emoji: "🌱",
      color: "red",
      description: "Your business has become a giant beanstalk, growing out of control and blocking out everything else in your life.",
      advice: "It's time to get the axe. You need immediate intervention to reclaim your life before it's too late.",
      cta: "Get Emergency Help"
    },
    climbing: {
      title: "Climbing Dangerously",
      emoji: "⛰️",
      color: "orange",
      description: "You're climbing higher and higher, but losing sight of why you started in the first place.",
      advice: "You need to pause and reassess before you reach a point of no return. There's still time to change course.",
      cta: "Plan Your Descent"
    },
    balanced: {
      title: "Conscious Climber",
      emoji: "⚖️",
      color: "yellow",
      description: "You're managing growth while maintaining perspective, but vigilance is needed to keep it that way.",
      advice: "You're doing well, but don't get complacent. Small adjustments now prevent big problems later.",
      cta: "Optimize Your Balance"
    },
    garden: {
      title: "Garden Grower",
      emoji: "🌻",
      color: "green",
      description: "Congratulations! You're building a sustainable business that enhances rather than consumes your life.",
      advice: "Keep nurturing your garden. You're proof that success doesn't require sacrifice.",
      cta: "Share Your Wisdom"
    }
  };
  
  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };
  
  const currentQ = questions[currentQuestion];
  const QuestionIcon = currentQ ? currentQ.icon : TreePine;
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Floating leaves animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: -50,
              rotate: 0
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          >
            <Sprout className="w-6 h-6 text-green-400/30" />
          </motion.div>
        ))}
      </div>
      
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <TreePine className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="font-bold text-gray-800">The Beanstalk Test™</h1>
                <p className="text-xs text-gray-500">Oracle AI Assessment</p>
              </div>
            </div>
            
            {!showResults && currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
        </div>
      </motion.header>
      
      <div className="pt-24 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
              
              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12"
                >
                  <div className="text-center mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <QuestionIcon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {currentQ.title}
                    </h2>
                    <p className="text-xl text-gray-700">
                      {currentQ.question}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {currentQ.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(currentQ.id, option.points)}
                        className="w-full p-4 bg-gray-50 hover:bg-green-50 rounded-xl text-left transition-all hover:shadow-lg group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 group-hover:text-gray-900">
                            {option.label}
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Result card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-8">
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.5
                    }}
                  >
                    {resultTypes[showResults.type as keyof typeof resultTypes].emoji}
                  </motion.div>
                  
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {resultTypes[showResults.type as keyof typeof resultTypes].title}
                  </h2>
                  
                  {/* Score visualization */}
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <svg className="transform -rotate-90 w-48 h-48">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 88}`}
                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - showResults.percentage / 100)}`}
                        className={
                          showResults.type === 'beanstalk' ? 'text-red-500' :
                          showResults.type === 'climbing' ? 'text-orange-500' :
                          showResults.type === 'balanced' ? 'text-yellow-500' :
                          'text-green-500'
                        }
                        initial={{ strokeDashoffset: `${2 * Math.PI * 88}` }}
                        animate={{ strokeDashoffset: `${2 * Math.PI * 88 * (1 - showResults.percentage / 100)}` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div>
                        <p className="text-3xl font-bold text-gray-800">{Math.round(showResults.percentage)}%</p>
                        <p className="text-sm text-gray-600">Beanstalk</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                    {resultTypes[showResults.type as keyof typeof resultTypes].description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                    <h3 className="font-bold text-gray-800 mb-2">What This Means:</h3>
                    <p className="text-gray-700">
                      {resultTypes[showResults.type as keyof typeof resultTypes].advice}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="/auth"
                      className={`px-8 py-4 rounded-xl text-white font-medium shadow-lg ${
                        showResults.type === 'beanstalk' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                        showResults.type === 'climbing' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                        showResults.type === 'balanced' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                        'bg-gradient-to-r from-green-400 to-green-500'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {resultTypes[showResults.type as keyof typeof resultTypes].cta}
                    </motion.a>
                    <motion.button
                      onClick={resetTest}
                      className="px-8 py-4 bg-gray-200 hover:bg-gray-300 rounded-xl text-gray-700 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Retake Test
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Next steps */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Your Personalized Next Steps
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Get Your AI Board</h4>
                    <p className="text-sm text-gray-600">
                      8 C-suite advisors who understand that Tuesday matters more than IPO.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-pink-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">365 Method Plan</h4>
                    <p className="text-sm text-gray-600">
                      A simple planning system that starts with your life, not your business.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <Rocket className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">90-Day Roadmap</h4>
                    <p className="text-sm text-gray-600">
                      Your personalized action plan to transform from beanstalk to garden.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeanstalkTestPage; 