import { personalInfo, socialLinks } from '@/lib/data'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href={socialLinks.github}
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={socialLinks.twitter}
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by {personalInfo.name}
            <span className="text-gray-500">•</span>
            © {currentYear} All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}