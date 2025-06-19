
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechStart Solutions",
    industry: "SaaS",
    avatar: "/lovable-uploads/274e42a0-1c51-4ef0-9128-ddf58270b7ba.png",
    quote: "Oracle's AI insights helped us identify a £200k revenue leak in our subscription model. The CFO perspective caught what our team missed for months.",
    rating: 5,
    metric: "£200k Revenue Recovery",
    timeframe: "3 months",
    featured: true
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Managing Director",
    company: "Thompson Manufacturing",
    industry: "Manufacturing",
    avatar: "/lovable-uploads/acdc85ae-ffe6-495a-8639-1704c4766425.png",
    quote: "The operational insights were game-changing. We reduced waste by 30% and improved efficiency across three production lines.",
    rating: 5,
    metric: "30% Waste Reduction",
    timeframe: "6 weeks",
    featured: false
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Founder",
    company: "HealthTech Innovations",
    industry: "HealthTech",
    avatar: "/lovable-uploads/c02addaa-8b2c-43a2-9204-cf9414a7b28e.png",
    quote: "Oracle helped us navigate complex regulatory requirements while scaling. The strategic guidance prevented costly compliance mistakes.",
    rating: 5,
    metric: "£500k Compliance Savings",
    timeframe: "4 months",
    featured: false
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Co-Founder",
    company: "Wilson & Associates",
    industry: "Professional Services",
    avatar: "/lovable-uploads/ccc26a33-5b8e-417c-965e-4923402692df.png",
    quote: "The human connection feature was brilliant. Oracle identified exactly the right advisor for our growth stage - saved us months of searching.",
    rating: 5,
    metric: "Perfect Advisor Match",
    timeframe: "2 weeks",
    featured: false
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "CEO",
    company: "EcoLogistics Ltd",
    industry: "Logistics",
    avatar: "/lovable-uploads/e0d3d692-41ce-4d1f-94bd-0791953b0a75.png",
    quote: "Oracle's insights on market timing helped us delay a major expansion by 6 months - avoiding a £2M mistake during market uncertainty.",
    rating: 5,
    metric: "£2M Risk Avoided",
    timeframe: "1 month",
    featured: false
  },
  {
    id: 6,
    name: "David Kumar",
    role: "Founder",
    company: "FinFlow Analytics",
    industry: "FinTech",
    avatar: "/lovable-uploads/64aaf498-0709-4a30-8de1-15996bda07f4.png",
    quote: "The multi-perspective analysis revealed blind spots in our customer acquisition strategy. ROI improved by 250% within 8 weeks.",
    rating: 5,
    metric: "250% ROI Improvement",
    timeframe: "8 weeks",
    featured: false
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Forward-Thinking
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Founders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how Oracle's AI insights have helped UK founders make better decisions and avoid costly mistakes
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {currentTestimonial.featured ? (
                // Featured testimonial layout
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center mb-6">
                        <Quote className="w-8 h-8 text-purple-400 mr-3" />
                        <div className="flex">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                        "{currentTestimonial.quote}"
                      </blockquote>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-1">
                            {currentTestimonial.metric}
                          </div>
                          <div className="text-sm text-gray-400">Impact</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">
                            {currentTestimonial.timeframe}
                          </div>
                          <div className="text-sm text-gray-400">Timeframe</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-0.5 mr-4">
                          <img
                            src={currentTestimonial.avatar}
                            alt={currentTestimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                          <div className="text-purple-400">{currentTestimonial.role}</div>
                          <div className="text-sm text-gray-400">{currentTestimonial.company} • {currentTestimonial.industry}</div>
                        </div>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2 text-center">
                      <div className="relative inline-block">
                        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full p-2">
                          <img
                            src={currentTestimonial.avatar}
                            alt={currentTestimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Featured Success
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Standard testimonial layout
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                      <Quote className="w-8 h-8 text-purple-400" />
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                      "{currentTestimonial.quote}"
                    </blockquote>

                    <div className="flex justify-center gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">
                          {currentTestimonial.metric}
                        </div>
                        <div className="text-sm text-gray-400">Result</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          {currentTestimonial.timeframe}
                        </div>
                        <div className="text-sm text-gray-400">Timeline</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-0.5 mr-4">
                        <img
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                        <div className="text-purple-400">{currentTestimonial.role}</div>
                        <div className="text-sm text-gray-400">{currentTestimonial.company} • {currentTestimonial.industry}</div>
                      </div>
                      <div className="ml-6 flex">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-purple-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">£12M+</div>
              <div className="text-sm text-gray-400">Value Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-sm text-gray-400">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">72hrs</div>
              <div className="text-sm text-gray-400">Avg. Time to Impact</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
