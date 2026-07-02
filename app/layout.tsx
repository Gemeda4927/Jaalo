import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from './navbar/page'

const inter = Inter({ subsets: ['latin'] })

const iconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
  <rect width='100' height='100' rx='20' fill='#1B4332'/>
  <text x='50' y='68' font-family='Arial, sans-serif' font-weight='700' font-size='46' fill='#D8F3DC' text-anchor='middle'>GT</text>
</svg>`

const iconDataUrl = `data:image/svg+xml,${encodeURIComponent(iconSvg)}`

export const metadata: Metadata = {
  metadataBase: new URL('https://gemedatamiru.com'),
  title: {
    default: 'Gemeda Tamiru | Software Engineer',
    template: '%s | Gemeda Tamiru',
  },
  description:
    'Software Engineer specializing in React, Next.js, Flutter, and scalable, well-crafted applications.',
  keywords: [
    'Gemeda Tamiru',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'Flutter Developer',
    'TypeScript',
    'Java Swing',
  ],
  authors: [{ name: 'Gemeda Tamiru' }],
  creator: 'Gemeda Tamiru',
  icons: {
    icon: iconDataUrl,
    shortcut: iconDataUrl,
    apple: iconDataUrl,
  },
  openGraph: {
    title: 'Gemeda Tamiru | Software Engineer',
    description:
      'Software Engineer specializing in React, Next.js, Flutter, and scalable, well-crafted applications.',
    url: 'https://gemedatamiru.com',
    siteName: 'Gemeda Tamiru',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gemeda Tamiru — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemeda Tamiru | Software Engineer',
    description:
      'Software Engineer specializing in React, Next.js, Flutter, and scalable, well-crafted applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}