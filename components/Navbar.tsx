'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { personalInfo, socialLinks } from '@/lib/data'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail,
  Sparkles,
  Code,
  ChevronRight
} from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <Link href="/" className="group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Code className="text-white" size={20} />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                  <div>
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {personalInfo.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-600 flex items-center gap-1"> {/* Changed from text-gray-500 to text-gray-600 */}
                      <Sparkles size={10} className="text-blue-500" /> {/* Changed from yellow to blue */}
                      Full-Stack Developer
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative px-6 py-3 group"
                >
                  <span className={`font-medium transition-colors relative z-10 ${
                    pathname === item.path
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600' // Changed from gray-600 to gray-700
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Active indicator */}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Social icons */}
              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={socialLinks.github}
                  target="_blank"
                  className="p-2.5 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-md transition-all group"
                >
                  <Github size={18} className="text-gray-700 group-hover:text-blue-600 transition-colors" /> {/* Updated hover color */}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={socialLinks.linkedin}
                  target="_blank"
                  className="p-2.5 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-md transition-all group"
                >
                  <Linkedin size={18} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all group"
              >
                <span>Get In Touch</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
          
          {/* Menu panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl md:hidden"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Mobile header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {personalInfo.name.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-600">Portfolio</div> {/* Changed from gray-500 to gray-600 */}
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile navigation */}
              <div className="space-y-2 mb-8 flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${
                      pathname === item.path
                        ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border-l-4 border-blue-500'
                        : 'hover:bg-gray-50 text-gray-700' // Changed from gray-700 (same)
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </Link>
                ))}
              </div>

              {/* Mobile social links */}
              <div className="mb-8">
                <div className="text-sm text-gray-600 mb-4">Connect with me</div> {/* Changed from gray-500 to gray-600 */}
                <div className="flex gap-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Github size={18} className="text-gray-700" />
                    <span className="font-medium text-gray-700">GitHub</span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin size={18} className="text-blue-600" />
                    <span className="font-medium text-blue-600">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Mobile CTA */}
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>

              {/* Footer note */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600"> {/* Changed from gray-500 to gray-600 */}
                  Built with ❤️ using Next.js
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  )
}