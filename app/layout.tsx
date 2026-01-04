import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gemeda Tamiru | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Next.js, Flutter, and scalable web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-screen pt-24"> {/* Added pt-24 for spacing */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}