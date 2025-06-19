import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { FaAward, FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog - Oracle AI',
  description: 'Insights, strategies, and stories from UK founders who are building life-first businesses.',
  keywords: 'business blog, founder insights, life-first business, oracle ai blog',
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Why Your Business Should Fund Your Life, Not Eat It",
      excerpt: "The difference between being rich and being wealthy isn't about money—it's about time and freedom.",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Philosophy",
      slug: "business-should-fund-your-life"
    },
    {
      title: "The Beanstalk Test: Are You Climbing Because You Can't Stop?",
      excerpt: "Jack's real wisdom wasn't climbing up. It was cutting it down. Here's how to know if you should cut yours.",
      date: "2024-06-10",
      readTime: "7 min read",
      category: "Assessment",
      slug: "beanstalk-test-climbing"
    },
    {
      title: "127 UK Founders Transformed: The Numbers Behind Life-First Business",
      excerpt: "Real data from real founders who've discovered what it means to build a business that serves their life.",
      date: "2024-06-05",
      readTime: "4 min read",
      category: "Case Studies",
      slug: "127-founders-transformed"
    },
    {
      title: "Tuesday Afternoons: The True Measure of Business Success",
      excerpt: "What does your ideal Tuesday afternoon look like? This might be the most important question you ask yourself.",
      date: "2024-05-30",
      readTime: "6 min read",
      category: "Lifestyle",
      slug: "tuesday-afternoons-success"
    },
    {
      title: "From 60-Hour Weeks to Sports Day: Sarah's Transformation",
      excerpt: "How one founder went from missing her kids' sports day to being there for every game.",
      date: "2024-05-25",
      readTime: "8 min read",
      category: "Case Studies",
      slug: "sarah-transformation"
    },
    {
      title: "The 365 Method: Building Sustainable Growth",
      excerpt: "Why sustainable growth beats rapid scaling every time, and how to build it into your business DNA.",
      date: "2024-05-20",
      readTime: "9 min read",
      category: "Strategy",
      slug: "365-method-sustainable-growth"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <FaAward className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-800">Oracle AI</h1>
                <p className="text-xs text-gray-500">Life-First Business Design</p>
              </div>
            </div>
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              The Oracle Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Insights, strategies, and stories from UK founders who are building life-first businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  Read more
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get Weekly Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 2,000+ founders getting weekly insights on building life-first businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <FaAward className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Oracle AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Life-First Business Design for UK founders who want more than just success.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/beanstalk-test" className="hover:text-white transition-colors">The Beanstalk Test</a></li>
                <li><a href="/365-method" className="hover:text-white transition-colors">365 Method</a></li>
                <li><a href="/ai-board" className="hover:text-white transition-colors">AI Board</a></li>
                <li><a href="/accountancy" className="hover:text-white transition-colors">Accountancy Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Oracle AI. All rights reserved. Life-First Business Design.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 