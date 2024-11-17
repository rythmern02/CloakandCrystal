'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Send, ArrowUp } from 'lucide-react'

const footerLinks = [
  { href: '/markets', label: 'Markets' },
  { href: '/create-market', label: 'Create Market' },
  { href: '/governance', label: 'Governance' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
]

const Rune = ({ className = '' }) => (
  <motion.div
    className={`w-4 h-4 border border-purple-400 rounded-lg ${className}`}
    animate={{
      opacity: [0.5, 1, 0.5],
      rotate: [0, 360],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Submitted email:', email)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-purple-900 to-indigo-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Rune className="mr-2" />
              <span className="text-2xl font-bold">Cloaks and Crystals</span>
            </Link>
            <motion.p
              className="text-purple-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              The future unfolds with magic and clarity.
            </motion.p>
          </div>

          {/* Center Section */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Link href={link.href} className="block p-2">
                  <Rune />
                  <motion.span
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs whitespace-nowrap"
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className="bg-purple-800 p-2 rounded-full"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-purple-800/50 text-white placeholder-purple-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {/* Return to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 mx-auto block bg-purple-700 text-white px-4 py-2 rounded-full"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Magical Mist Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/mist.png')] bg-repeat-x"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Glowing Rune Patterns */}
      <Rune className="absolute top-4 left-4 opacity-20" />
      <Rune className="absolute top-4 right-4 opacity-20" />
      <Rune className="absolute bottom-20 left-4 opacity-20" />
      <Rune className="absolute bottom-20 right-4 opacity-20" />
    </footer>
  )
}