'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, TrendingUp, Filter } from 'lucide-react'
import Link from 'next/link'

const markets = [
  { id: 1, name: "Ethereum Price Prediction", category: "Crypto", trend: 75 },
  { id: 2, name: "Next Hogwarts Headmaster", category: "Entertainment", trend: 60 },
  { id: 3, name: "Dragon Egg Hatching Date", category: "Fantasy", trend: 90 },
  { id: 4, name: "Mana Crystal Yield", category: "Resources", trend: 45 },
  { id: 5, name: "Wizard's Duel Champion", category: "Sports", trend: 80 },
]

const categories = ["All", "Crypto", "Entertainment", "Fantasy", "Resources", "Sports"]

export default function MarketListing() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredMarkets, setFilteredMarkets] = useState(markets)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    setFilteredMarkets(
      selectedCategory === "All"
        ? markets
        : markets.filter(market => market.category === selectedCategory)
    )
  }, [selectedCategory])

  return (
    <div className="min-h-screen pt-[75px] bg-gradient-to-b from-gray-900 via-purple-950 to-indigo-950 text-purple-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
        Mystical Markets
      </h1>

      {/* Filter Dropdown */}
      <div className="relative mb-8">
        <motion.button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Filter className="w-5 h-5" />
          <span>Filter by Category</span>
        </motion.button>
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-purple-800 ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsFilterOpen(false)
                    }}
                    className="block px-4 py-2 text-sm text-white hover:bg-purple-700 w-full text-left"
                    role="menuitem"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Market Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredMarkets.map((market) => (
            <motion.div
              key={market.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link href={`/markets/${market.id}`} className="block">
                <h2 className="text-xl font-semibold mb-2">{market.name}</h2>
                <p className="text-purple-300 mb-4">{market.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400">Trend</span>
                  <div className="w-2/3 bg-purple-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${market.trend}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Trending Markets Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Flame className="w-6 h-6 mr-2 text-orange-500" />
          Trending Markets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.slice(0, 2).map((market) => (
            <motion.div
              key={market.id}
              className="bg-gradient-to-br from-orange-900 to-red-900 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/market/${market.id}`} className="block">
                <h3 className="text-xl font-semibold mb-2">{market.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-300">Staking Trend</span>
                  <div className="w-2/3 bg-orange-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${market.trend}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}