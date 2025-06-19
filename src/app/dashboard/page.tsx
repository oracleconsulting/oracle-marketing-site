'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaBrain, 
  FaChartLine, 
  FaCalendar, 
  FaTasks,
  FaCog,
  FaBell,
  FaSignOutAlt
} from 'react-icons/fa'
import Link from 'next/link'

export default function DashboardPage() {
  // const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <FaBrain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-gray-800">Oracle AI</h1>
                  <p className="text-xs text-gray-500">Dashboard</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <FaBell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <FaCog className="w-5 h-5" />
              </button>
              <Link href="/auth" className="p-2 text-gray-400 hover:text-gray-500">
                <FaSignOutAlt className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6 mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Your Dashboard</h2>
            <p className="text-gray-600">
              Get started by completing your business assessment or scheduling your first AI board meeting.
            </p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white cursor-pointer"
            >
              <FaChartLine className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Assessment</h3>
              <p className="text-sm opacity-90">Complete your assessment to get personalized insights</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-6 text-white cursor-pointer"
            >
              <FaCalendar className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Schedule Meeting</h3>
              <p className="text-sm opacity-90">Book your next AI board meeting</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white cursor-pointer"
            >
              <FaTasks className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Action Items</h3>
              <p className="text-sm opacity-90">View and manage your action items</p>
            </motion.div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Business Assessment</span>
                  <span>0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-purple-500 rounded-full w-0"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Team Setup</span>
                  <span>0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-purple-500 rounded-full w-0"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>AI Board Meetings</span>
                  <span>0/4</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-purple-500 rounded-full w-0"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 