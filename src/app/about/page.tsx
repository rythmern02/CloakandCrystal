'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Star } from 'lucide-react'

const teamMembers = [
  { id: 1, name: "Merlin Stormweaver", role: "Founder & Chief Seer", image: "/placeholder.svg?height=200&width=200", bio: "A visionary wizard with centuries of experience in magical predictions." },
  { id: 2, name: "Luna Moonshadow", role: "Head of Enchantments", image: "/placeholder.svg?height=200&width=200", bio: "Master of arcane algorithms and spell-binding smart contracts." },
  { id: 3, name: "Orion Starforge", role: "Crystal Ball Engineer", image: "/placeholder.svg?height=200&width=200", bio: "Crafts the most accurate prediction orbs in the magical realm." },
]

const milestones = [
  { id: 1, year: 2021, title: "The Prophecy Begins", description: "Cloaks and Crystals is conceived in a vision." },
  { id: 2, year: 2022, title: "First Enchantment", description: "Launch of our beta platform with 100 mystic users." },
  { id: 3, year: 2023, title: "The Great Convergence", description: "Integration with major magical blockchains." },
  { id: 4, year: 2024, title: "Astral Expansion", description: "Reaching 1 million seers across the realms." },
]

export default function AboutUs() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextPage = () => {
    setDirection(1)
    setCurrentPage((prev) => (prev === 2 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setDirection(-1)
    setCurrentPage((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const pageTransition = {
    type: 'tween',
    duration: 0.5,
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextPage()
      } else if (event.key === 'ArrowLeft') {
        prevPage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-indigo-950 text-purple-100 p-8 pt-[75px]">
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
        The Tale of Cloaks and Crystals
      </h1>

      <div className="relative overflow-hidden" style={{ height: '70vh' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="absolute inset-0 flex items-center justify-center"
          >
            {currentPage === 0 && (
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Our Mystical Origins</h2>
                <p className="mb-4">
                  In the ethereal realms where magic and technology intertwine, Cloaks and Crystals emerged as a 
                  beacon of foresight. Founded by a council of visionary seers and enchanted engineers, our platform 
                  bridges the gap between ancient divination and cutting-edge blockchain technology.
                </p>
                <p>
                  We empower mystics, oracles, and curious souls alike to peer into the mists of tomorrow, 
                  harnessing the collective wisdom of the cosmos to illuminate the paths of possibility.
                </p>
              </div>
            )}
            {currentPage === 1 && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Enchanted Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <motion.div
                      key={member.id}
                      className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                          <p className="text-sm text-white">{member.bio}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                      <p className="text-purple-300 text-center">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            {currentPage === 2 && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Celestial Journey</h2>
                <div className="relative">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.id} className="mb-12 flex items-center">
                      <div className="w-1/3 text-right pr-8">
                        <h3 className="text-xl font-bold">{milestone.year}</h3>
                        <h4 className="text-lg text-purple-300">{milestone.title}</h4>
                      </div>
                      <div className="relative">
                        <motion.div
                          className="w-6 h-6 bg-purple-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                        />
                        <motion.div
                          className="absolute top-3 left-3 w-12 h-12 bg-purple-500 rounded-full opacity-25"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, opacity: 0 }}
                          transition={{ delay: index * 0.2, duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                      <div className="w-1/3 pl-8">
                        <p>{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-purple-700 -ml-0.5" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevPage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-800 hover:bg-purple-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-800 hover:bg-purple-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-3 h-3 rounded-full ${
              currentPage === page ? 'bg-purple-500' : 'bg-purple-800'
            }`}
            aria-label={`Go to page ${page + 1}`}
          />
        ))}
      </div>
    </div>
  )
}