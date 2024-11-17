'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SnowflakeIcon as Crystal, Wand, Lock, Zap, Coins, Star, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const testimonials = [
    { name: 'Merlin', text: 'Cloaks and Crystals has revolutionized my divination practice!' },
    { name: 'Morgana', text: 'The most accurate predictions I\'ve ever seen. Simply magical.' },
    { name: 'Gandalf', text: 'A platform as wise as it is powerful. Highly recommended.' },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-indigo-950 text-purple-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30 animate-twinkle"></div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-80 h-80 mx-auto mb-8 rounded-full bg-gradient-radial from-purple-500 via-blue-500 to-transparent animate-pulse-glow"
          >
            <Image src={'/logo.png'} alt='' width={1000} height={1000} className="  p-8 md:p-2 lg:p-0 text-indigo-200 animate-float" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
          >
            Peer into the future with Cloaks and Crystals
          </motion.h1>
          <Link href='/markets'>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-shimmer"
            >

            Explore Markets
          </motion.button>
            </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <motion.h2
          {...fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-200"
        >
          Magical Features
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Lock, title: 'Enchanted Privacy', description: 'Your secrets are safe with our arcane encryption.' },
            { icon: Zap, title: 'Lightning-Fast Transactions', description: 'Faster than a wizard\'s spell cast.' },
            { icon: Coins, title: 'Decentralized Magic', description: 'Power distributed like stardust across the cosmos.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-900 to-indigo-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mb-4 mx-auto"
              >
                <feature.icon className="w-full h-full text-purple-300" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-200">{feature.title}</h3>
              <p className="text-purple-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950 to-purple-950">
        <motion.h2
          {...fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-200"
        >
          The Sorcerer's Guide
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            { icon: Star, text: 'Choose your mystical market' },
            { icon: Moon, text: 'Cast your prediction with crystal clarity' },
            { icon: Sun, text: 'Watch your fortunes unfold' },
            { icon: Wand, text: 'Reap the rewards of your foresight' },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg"
              >
                <step.icon className="w-8 h-8 text-purple-100" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 p-4 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg shadow-md"
              >
                <p className="text-lg text-purple-200">{step.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4">
        <motion.h2
          {...fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-200"
        >
          Whispers from the Crystal Ball
        </motion.h2>
        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            {isClient && (
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-lg shadow-xl"
              >
                <p className="text-lg mb-4 text-purple-200">{testimonials[currentTestimonial].text}</p>
                <p className="font-semibold text-purple-300">- {testimonials[currentTestimonial].name}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentTestimonial === index ? 'bg-purple-300' : 'bg-purple-700'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}