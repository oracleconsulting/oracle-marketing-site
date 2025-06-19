
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';

const InsightsPreview = () => {
  const featuredArticle = {
    id: 1,
    title: "The Rise of AI in Small Business Operations",
    author: "TechCrunch",
    readTime: "5 min read",
    category: "Technology",
    image: "/lovable-uploads/94b9115e-a5a7-424c-910a-34701a9b8e97.png",
    excerpt: "How AI is transforming operations for UK SMEs, from automation to decision-making support."
  };

  const articles = [
    {
      id: 2,
      title: "5 Financial Metrics Every UK Founder Should Track",
      author: "Founders' Weekly",
      readTime: "7 min read",
      category: "Finance",
      image: "/lovable-uploads/453ef170-6f2f-4f56-8c89-3756de001c7f.png"
    },
    {
      id: 3,
      title: "Why Your 70-Hour Weeks Are Killing Your Business",
      author: "Oracle Method",
      readTime: "4 min read",
      category: "Life Balance",
      image: "/lovable-uploads/5e3531f8-fc74-44df-9cea-41b7deb88d11.png"
    },
    {
      id: 4,
      title: "The True Cost of Bad Hires for UK SMEs",
      author: "People Management",
      readTime: "6 min read",
      category: "Operations",
      image: "/lovable-uploads/6aac8462-49da-47af-874c-f055cf64a5b7.png"
    },
    {
      id: 5,
      title: "From Burnout to Breakthrough: A Founder's Journey",
      author: "Sarah Chen, Founder",
      readTime: "8 min read",
      category: "Growth",
      image: "/lovable-uploads/274e42a0-1c51-4ef0-9128-ddf58270b7ba.png"
    },
    {
      id: 6,
      title: "Building Systems That Scale Without You",
      author: "Operations Weekly",
      readTime: "5 min read",
      category: "Operations",
      image: "/lovable-uploads/a32c6266-3eca-40bf-8181-9553db189e9c.png"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technology': 'from-blue-600 to-cyan-600',
      'Finance': 'from-green-600 to-emerald-600',
      'Life Balance': 'from-purple-600 to-pink-600',
      'Operations': 'from-orange-600 to-amber-600',
      'Growth': 'from-indigo-600 to-purple-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-600 to-gray-700';
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
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
            Insights for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Sustainable Growth</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead with curated insights from industry leaders and successful founders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="group relative bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(featuredArticle.category)} text-white`}>
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredArticle.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">FEATURED</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-purple-400 font-medium">{featuredArticle.author}</span>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="text-purple-400">{article.author}</span>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            View All Insights
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsPreview;
