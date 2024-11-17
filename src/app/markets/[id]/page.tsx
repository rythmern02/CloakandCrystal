'use client'

import { use, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'
import { gsap } from 'gsap'

export default function MarketDetails({ params }: any) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      gsap.to(chartRef.current, {
        duration: 2,
        height: '100%',
        ease: 'power2.out',
      })
    }
  }, [])

  const { id }: any = use(params);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-indigo-950 text-purple-100 p-8 mb-10 pt-[75px]">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
        Market Details: {id}
      </h1>

      {/* Market Information */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ethereum Price Prediction</h2>
        <p className="text-purple-300 mb-4">
          Predict the price of Ethereum at the end of the month. Will it go up or down?
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Current Price: $2,500</span>
          <span className="text-lg font-medium">End Date: 30 days</span>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg mb-8 h-64 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end">
          <div ref={chartRef} className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">Live Price Chart</span>
        </div>
      </div>

      {/* Prediction Buttons */}
      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-300"
        >
          <ArrowUpCircle className="w-6 h-6" />
          <span>Predict Up</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-300"
        >
          <ArrowDownCircle className="w-6 h-6" />
          <span>Predict Down</span>
        </motion.button>
      </div>

      {/* Market Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Staked", value: "$1,000,000" },
          { label: "Participants", value: "1,234" },
          { label: "Time Remaining", value: "29d 23h 59m" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg text-center"
          >
            <h3 className="text-lg font-medium mb-2">{stat.label}</h3>
            <p className="text-2xl font-bold text-blue-300">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}