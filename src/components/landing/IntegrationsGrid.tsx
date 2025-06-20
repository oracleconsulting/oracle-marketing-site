import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Plus, Clock } from 'lucide-react';

const IntegrationsGrid = () => {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);
  
  const integrations = {
    live: [
      {
        name: "Xero",
        category: "Accounting",
        logo: "🟦",
        description: "Real-time cash flow insights & VAT tracking",
        flow: "Xero → Oracle AI → Tax savings found",
        stats: "£8.2k average tax savings found",
        connections: 1200
      },
      {
        name: "QuickBooks",
        category: "Accounting", 
        logo: "🟩",
        description: "Automated expense categorization & reporting",
        flow: "QuickBooks → Oracle AI → Cost optimizations",
        stats: "23% reduction in expenses",
        connections: 850
      },
      {
        name: "Slack",
        category: "Communication",
        logo: "🟪", 
        description: "AI insights delivered where you work",
        flow: "Question in Slack → Oracle AI → Instant answer",
        stats: "5 min average response time",
        connections: 2100
      },
      {
        name: "Google Calendar",
        category: "Productivity",
        logo: "🟨",
        description: "Time analysis & meeting optimization", 
        flow: "Calendar → Oracle AI → Time reclaimed",
        stats: "8 hours/week saved on average",
        connections: 1650
      }
    ],
    coming: [
      {
        name: "Stripe",
        category: "Payments",
        logo: "🟣",
        description: "Revenue insights & churn prediction",
        eta: "Q3 2025",
        votes: 234
      },
      {
        name: "HubSpot", 
        category: "CRM",
        logo: "🟠",
        description: "Sales pipeline intelligence",
        eta: "Q3 2025",
        votes: 189
      },
      {
        name: "Notion",
        category: "Workspace",
        logo: "⚫",
        description: "Knowledge base & task sync",
        eta: "Q4 2025", 
        votes: 156
      },
      {
        name: "Asana",
        category: "Project Management", 
        logo: "🔴",
        description: "Project health monitoring",
        eta: "Q4 2025",
        votes: 143
      }
    ]
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Tools, Now With
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Intelligence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Connect the tools you already use. Oracle AI transforms disconnected data into unified intelligence 
            that actually helps you make decisions.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>4 integrations live</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5,800+ connections made</span>
            </div>
          </div>
        </motion.div>

        {/* Live integrations */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">Live Now</h3>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">All systems operational</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.live.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIntegration(integration.name)}
                onMouseLeave={() => setHoveredIntegration(null)}
                className="relative group cursor-pointer"
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-purple-700/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {integration.logo}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-white mb-1">{integration.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{integration.category}</p>
                      <div className="flex items-center gap-2 text-xs text-green-400">
                        <Zap className="w-3 h-3" />
                        <span>{integration.connections.toLocaleString()} connections</span>
                      </div>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-4">{integration.description}</p>

                  {/* Enhanced flow visualization */}
                  <AnimatePresence>
                    {hoveredIntegration === integration.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-4"
                      >
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-700">
                          <p className="text-sm text-purple-400 font-mono mb-3 flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 animate-pulse" />
                            {integration.flow}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <p className="text-sm text-green-400 font-medium">{integration.stats}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/btn font-medium">
                    <span className="text-sm">Connect now</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming soon integrations */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">Coming Soon</h3>
            <p className="text-sm text-gray-400">Vote for your favorites</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {integrations.coming.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-gray-600 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                    {integration.logo}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-white font-medium text-sm">{integration.name}</h4>
                    <p className="text-xs text-gray-500">{integration.category}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{integration.description}</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-purple-400 font-medium">{integration.eta}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{integration.votes}</span>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      👍
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't see your tool?
            </h3>
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              Request an integration and we'll build it. Our team typically delivers new integrations within 2-4 weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Start Connecting
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all border border-gray-600"
              >
                Request Integration
              </motion.button>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">5,800+</div>
              <div className="text-sm text-gray-500">Active connections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">&lt; 2min</div>
              <div className="text-sm text-gray-500">Setup time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;
