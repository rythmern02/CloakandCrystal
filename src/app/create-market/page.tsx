'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scroll, Clock, Coins, Wand2 } from 'lucide-react'

const steps = [
  { id: 'name', title: 'Market Name', icon: Scroll },
  { id: 'timeline', title: 'Timeline', icon: Clock },
  { id: 'stake', title: 'Stake Requirements', icon: Coins },
  { id: 'confirm', title: 'Confirmation', icon: Wand2 },
]

export default function CreateMarket() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    timeline: 30,
    stake: 100,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Market created:', formData)
    setCurrentStep(steps.length - 1) // Move to confirmation step
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-indigo-950 text-purple-100 p-8 pt-[75px]">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
        Create a Mystical Market
      </h1>

      <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-8 shadow-lg">
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex flex-col items-center ${
                index <= currentStep ? 'text-purple-300' : 'text-purple-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <step.icon className="w-8 h-8 mb-2" />
              <span className="text-sm">{step.title}</span>
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="name"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <label className="block">
                  <span className="text-purple-300">Market Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-purple-800 border-purple-600 text-purple-100 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                    required
                  />
                </label>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <label className="block">
                  <span className="text-purple-300">Timeline (days)</span>
                  <input
                    type="range"
                    name="timeline"
                    min="1"
                    max="90"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                  />
                  <div className="text-center text-2xl font-bold text-purple-300 animate-pulse">
                    {formData.timeline} days
                  </div>
                </label>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="stake"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <label className="block">
                  <span className="text-purple-300">Minimum Stake (tokens)</span>
                  <input
                    type="range"
                    name="stake"
                    min="10"
                    max="1000"
                    step="10"
                    value={formData.stake}
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                  />
                  <div className="text-center text-2xl font-bold text-purple-300 animate-pulse">
                    {formData.stake} tokens
                  </div>
                </label>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-center mb-4">Market Summary</h2>
                <div className="bg-purple-800 rounded-lg p-6 space-y-2">
                  <p><span className="font-bold">Name:</span> {formData.name}</p>
                  <p><span className="font-bold">Timeline:</span> {formData.timeline} days</p>
                  <p><span className="font-bold">Minimum Stake:</span> {formData.stake} tokens</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            {currentStep > 0 && (
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-purple-700 text-purple-100 rounded-md hover:bg-purple-600 transition-colors duration-300"
              >
                Previous
              </motion.button>
            )}
            {currentStep < steps.length - 1 ? (
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-purple-700 text-purple-100 rounded-md hover:bg-purple-600 transition-colors duration-300 ml-auto"
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-300 ml-auto"
              >
                Create Market
              </motion.button>
            )}
          </div>
        </form>
      </div>

      {/* Glowing Orb Preview */}
      <motion.div
        className="mt-12 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-pulse-glow"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-bold">{formData.name || 'Your Market'}</p>
              <p className="text-sm">{formData.timeline} days</p>
              <p className="text-sm">{formData.stake} tokens</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Confirmation Animation */}
      <AnimatePresence>
        {currentStep === steps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-lg shadow-2xl text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-4"
              >
                <Wand2 className="w-full h-full text-yellow-300" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Market Created Successfully!</h2>
              <p className="text-lg mb-6">Your mystical market is now live.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-400 transition-colors duration-300"
                onClick={() => setCurrentStep(0)} // Reset the form
              >
                Create Another Market
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}