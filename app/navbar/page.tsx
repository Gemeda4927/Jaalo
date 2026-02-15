'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { personalInfo, socialLinks } from '@/lib/data'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail,
  Sparkles,
  Code,
  ChevronRight,
  Home,
  User,
  FolderGit2,
  Phone,
  Award,
  Brain,
  Rocket,
  Zap,
  ChevronDown,
  Sun,
  Moon,
  Download,
  ExternalLink
} from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', path: '/', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { name: 'About', path: '/about', icon: User, color: 'from-purple-500 to-pink-500' },
    { name: 'Projects', path: '/projects', icon: FolderGit2, color: 'from-emerald-500 to-teal-500' },
    { name: 'Skills', path: '/skills', icon: Brain, color: 'from-amber-500 to-orange-500' },
    { name: 'Achievements', path: '/achievements', icon: Award, color: 'from-rose-500 to-red-500' },
    { name: 'Contact', path: '/contact', icon: Phone, color: 'from-indigo-500 to-purple-500' },
  ]

  const quickActions = [
    { name: 'Resume', icon: Download, action: () => window.open('/resume.pdf', '_blank'), color: 'bg-emerald-500' },
    { name: 'GitHub', icon: Github, action: () => window.open(socialLinks.github, '_blank'), color: 'bg-gray-800' },
    { name: 'LinkedIn', icon: Linkedin, action: () => window.open(socialLinks.linkedin, '_blank'), color: 'bg-blue-600' },
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Enhanced */}
            <Link href="/" onClick={() => setIsOpen(false)} className="group">
              <motion.div 
                className="flex items-center gap-3"
                whileHover="hover"
                variants={{
                  hover: { scale: 1.02 }
                }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code className="text-white" size={22} />
                  </motion.div>
                  
                  {/* Animated rings */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Sparkle effect */}
                  <motion.div 
                    className="absolute -top-1 -right-1"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles size={14} className="text-yellow-400" />
                  </motion.div>
                </div>
                
                <div className="hidden sm:block">
                  <motion.div 
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    style={{
                      backgroundSize: '200% auto',
                    }}
                  >
                    {personalInfo.name.split(' ')[0]}
                  </motion.div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Zap size={10} className="text-blue-500" />
                    </motion.div>
                    <span>Full-Stack Developer</span>
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      <Sparkles size={10} className="text-purple-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path
                
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="relative px-3 py-2 group"
                  >
                    <motion.div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl relative"
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <motion.div
                        animate={isActive ? {
                          rotate: [0, 10, -10, 0],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={18} className={`transition-colors ${
                          isActive ? `text-transparent bg-clip-text bg-gradient-to-r ${item.color}` : 'text-gray-600 group-hover:text-gray-900'
                        }`} />
                      </motion.div>
                      
                      <span className={`text-sm lg:text-base font-medium transition-all ${
                        isActive
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${item.color}`
                          : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {item.name}
                      </span>

                      {/* Active indicator with animation */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </motion.div>

                    {/* Bottom line animation */}
                    <motion.div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '80%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Quick Action Buttons */}
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <motion.button
                    key={action.name}
                    onClick={action.action}
                    className={`p-2.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 ${action.color}`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={action.name}
                  >
                    <Icon size={18} />
                  </motion.button>
                )
              })}

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ rotate: 180, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>

            {/* Mobile menu button - Enhanced */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-gradient-to-br from-black/80 via-black/70 to-purple-900/80 backdrop-blur-xl z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-white to-gray-50 z-50 md:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Code className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Menu
                      </div>
                      <div className="text-xs text-gray-500">Navigate & Explore</div>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl transition-all duration-300"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2 mb-8">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.path
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                              isActive
                                ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            whileHover={{ x: 5 }}
                          >
                            <Icon size={20} />
                            <span className="font-medium">{item.name}</span>
                            {isActive && (
                              <motion.div
                                className="ml-auto"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                <ChevronRight size={16} />
                              </motion.div>
                            )}
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <div className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                    <Zap size={14} />
                    <span>Quick Actions</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {quickActions.map((action) => {
                      const Icon = action.icon
                      return (
                        <motion.button
                          key={action.name}
                          onClick={action.action}
                          className={`flex flex-col items-center gap-2 p-3 rounded-xl text-white ${action.color} shadow-lg`}
                          whileHover={{ y: -3, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon size={18} />
                          <span className="text-xs font-medium">{action.name}</span>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Theme Toggle for Mobile */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100"
                >
                  <div className="flex items-center gap-3">
                    {isDarkMode ? <Sun size={20} className="text-amber-600" /> : <Moon size={20} className="text-indigo-600" />}
                    <span className="font-medium text-gray-700">Dark Mode</span>
                  </div>
                  <motion.button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                      isDarkMode ? 'bg-indigo-600' : 'bg-amber-400'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: isDarkMode ? 6 : 0 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </motion.button>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 text-center"
                >
                  <p className="text-xs text-gray-400">
                    © 2024 {personalInfo.name}. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}