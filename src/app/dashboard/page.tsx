'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Wallet, Award, ChevronRight, ChevronLeft, Scroll, CheckCircle, Clock } from 'lucide-react'

const markets = [
  { id: 1, name: "Ethereum Price Prediction", status: "active", stake: 100 },
  { id: 2, name: "Next Hogwarts Headmaster", status: "resolved", outcome: "win", profit: 50 },
  { id: 3, name: "Dragon Egg Hatching Date", status: "pending", stake: 75 },
]

const activities = [
  { id: 1, action: "Staked 100 tokens on Ethereum Price Prediction", timestamp: "2 hours ago" },
  { id: 2, action: "Won 50 tokens from Next Hogwarts Headmaster", timestamp: "1 day ago" },
  { id: 3, action: "Created new market: Dragon Egg Hatching Date", timestamp: "3 days ago" },
]

const badges = [
  { id: 1, name: "Novice Seer", description: "Participated in 5 markets", icon: "🔮" },
  { id: 2, name: "Fortune Teller", description: "Won 3 consecutive predictions", icon: "🎭" },
  { id: 3, name: "Market Maker", description: "Created your first market", icon: "⚖️" },
]

export default function UserDashboard() {
  const [walletBalance, setWalletBalance] = useState(1000)
  const [activeTab, setActiveTab] = useState('active')

  useEffect(() => {
    // Simulating wallet balance update
    const interval = setInterval(() => {
      setWalletBalance(prev => prev + Math.floor(Math.random() * 10) - 5)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const filteredMarkets = markets.filter(market => 
    (activeTab === 'active' && market.status === 'active') ||
    (activeTab === 'resolved' && market.status === 'resolved') ||
    (activeTab === 'pending' && market.status === 'pending')
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-indigo-950 text-purple-100 p-8 pt-[75px]">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
        Mystic Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Dashboard Overview */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              Market Overview
            </h2>
            <div className="flex space-x-4 mb-4">
              {['active', 'resolved', 'pending'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-800 text-purple-300 hover:bg-purple-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {filteredMarkets.map((market) => (
                <motion.div
                  key={market.id}
                  className="bg-purple-800 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-purple-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{market.name}</h3>
                    {market.status === 'active' && (
                      <span className="text-green-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Active
                      </span>
                    )}
                    {market.status === 'resolved' && (
                      <span className="text-blue-400 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {market.outcome === 'win' ? 'Won' : 'Lost'}
                      </span>
                    )}
                    {market.status === 'pending' && (
                      <span className="text-yellow-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Pending
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-purple-300">
                    {market.stake && `Stake: ${market.stake} tokens`}
                    {market.profit && `Profit: ${market.profit} tokens`}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activity Tracker */}
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Scroll className="w-6 h-6 mr-2" />
              Magical Ledger
            </h2>
            <div className="space-y-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-300">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-purple-800 rounded-lg p-4"
                >
                  <p>{activity.action}</p>
                  <p className="text-sm text-purple-400 mt-1">{activity.timestamp}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Wallet Integration */}
          <motion.div
            className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Wallet className="w-6 h-6 mr-2" />
              Enchanted Wallet
            </h2>
            <div className="text-4xl font-bold text-center p-4 bg-purple-800 rounded-lg">
              {walletBalance} <span className="text-sm text-purple-300">tokens</span>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors duration-300">
                Deposit
              </button>
              <button className="px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors duration-300">
                Withdraw
              </button>
            </div>
          </motion.div>

          {/* Gamification */}
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Mystical Achievements
            </h2>
            <div className="space-y-4">
              {badges.map((badge) => (
                <motion.div
                  key={badge.id}
                  className="bg-purple-800 rounded-lg p-4 flex items-center space-x-4 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl">{badge.icon}</div>
                  <div>
                    <h3 className="font-semibold">{badge.name}</h3>
                    <p className="text-sm text-purple-300">{badge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}