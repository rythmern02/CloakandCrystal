'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Wallet, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/markets', label: 'Markets' },
  { href: '/create-market', label: 'Create Market' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/governance', label: 'Governance' },
  { href: '/about', label: 'About Us' },
]

const Rune = ({ className = '' }) => (
  <motion.div
    className={`w-6 h-6 border-2 border-purple-400 rounded-lg ${className}`}
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-purple-900/90 to-indigo-900/90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Rune className="mr-2" />
              <span className="text-2xl font-bold text-white">Cloaks and Crystals</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white hover:bg-purple-800/50'
                  } transition-all duration-300`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                      layoutId="navbar-underline"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <motion.div
              initial={false}
              animate={{ width: isWalletConnected ? 'auto' : '40px' }}
              className="mr-4 overflow-hidden"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWalletConnected(!isWalletConnected)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isWalletConnected ? 'bg-green-600' : 'bg-purple-700'
                } text-white transition-all duration-300`}
              >
                <Wallet className="w-5 h-5 mr-2" />
                {isWalletConnected && <span>Connected</span>}
              </motion.button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search..."
                className="bg-purple-800/50 text-white placeholder-purple-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-purple-900/90 to-indigo-900/90"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href
                        ? 'text-white bg-purple-800'
                        : 'text-gray-300 hover:text-white hover:bg-purple-800/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}