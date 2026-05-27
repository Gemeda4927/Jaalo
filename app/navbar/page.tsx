'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { personalInfo, socialLinks } from '@/lib/data'
import { useState, useEffect } from 'react'
import {
  Menu, X, Github, Codepen, Mail,
  Download, Check,
} from 'lucide-react'

const ACCENT = '#22c55e'

const navItems = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills',   path: '/skills' },
  { name: 'Contact',  path: '/contact' },
]

const socialIcons = [
  { icon: Github,  href: () => socialLinks.github,             label: 'GitHub'  },
  { icon: Codepen, href: () => socialLinks.codepen ?? '#',     label: 'CodePen' },
  { icon: Mail,    href: () => `mailto:${personalInfo.email}`, label: 'Email'   },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen,    setIsOpen]    = useState(false)
  const [mounted,   setMounted]   = useState(false)
  const [done,      setDone]      = useState(false)
  const [loading,   setLoading]   = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleResume = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => {
      const a = document.createElement('a')
      a.href = '/Gemeda Tamiru.pdf'
      a.download = 'Gemeda_Tamiru_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setLoading(false)
      setDone(true)
      setTimeout(() => setDone(false), 2500)
    }, 800)
  }

  if (!mounted) return null

  const ResumeIcon = done ? Check : Download

  /* ─── shared styles ─────────────────────────────────── */
  const iconLinkStyle: React.CSSProperties = {
    fontSize: 20,
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'color 0.15s',
  }

  return (
    <>
      {/* ── DESKTOP NAV ──────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: '#fff',
        borderBottom: '1px solid #f3f4f6',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
      }}>

        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            position: 'relative', width: 36, height: 36,
            background: '#111827', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 17, fontWeight: 500, color: '#fff', letterSpacing: -1 }}>G</span>
            <span style={{
              position: 'absolute', top: 6, right: 6,
              width: 6, height: 6, background: ACCENT, borderRadius: '50%',
            }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, lineHeight: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#111827' }}>Gemeda</span>
            <span style={{ fontSize: 11, color: '#9ca3af' }}>Full-Stack Developer</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4 }}>
          {navItems.map(({ name, path }) => {
            const active = pathname === path
            return (
              <Link key={name} href={path} style={{
                fontSize: 13,
                fontWeight: active ? 500 : 400,
                color: active ? ACCENT : '#9ca3af',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: 8,
                transition: 'background 0.15s, color 0.15s',
              }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = '#f9fafb'
                    ;(e.currentTarget as HTMLElement).style.color = '#374151'
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.color = '#9ca3af'
                  }
                }}
              >
                {name}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 10 }}>
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href()} target="_blank" rel="noopener noreferrer"
              title={label} aria-label={label}
              style={iconLinkStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#9ca3af' }}
            >
              <Icon size={18} />
            </a>
          ))}

          <button onClick={handleResume} disabled={loading}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 16px',
              background: done ? '#f0fdf4' : ACCENT,
              border: done ? '1px solid #bbf7d0' : 'none',
              borderRadius: 20,
              fontSize: 12, fontWeight: 500,
              color: done ? '#16a34a' : '#fff',
              cursor: loading ? 'wait' : 'pointer',
              transition: 'background 0.15s',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { if (!done) (e.currentTarget as HTMLElement).style.background = '#16a34a' }}
            onMouseLeave={e => { if (!done) (e.currentTarget as HTMLElement).style.background = ACCENT }}
          >
            <ResumeIcon size={13} />
            {loading ? 'Wait…' : done ? 'Got it!' : 'Resume'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#6b7280', display: 'flex', alignItems: 'center',
          }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── MOBILE DRAWER ────────────────────────────────── */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div onClick={() => setIsOpen(false)} style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.18)',
            zIndex: 40,
          }} />

          {/* Drawer */}
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0,
            width: 260, background: '#fff', zIndex: 50,
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 18px', height: 64,
              borderBottom: '1px solid #f3f4f6',
            }}>
              <Link href="/" onClick={() => setIsOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{
                  position: 'relative', width: 30, height: 30,
                  background: '#111827', borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#fff', letterSpacing: -1 }}>G</span>
                  <span style={{
                    position: 'absolute', top: 5, right: 5,
                    width: 5, height: 5, background: ACCENT, borderRadius: '50%',
                  }} />
                </div>
                <div style={{ lineHeight: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: '#111827' }}>Gemeda</div>
                  <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>Full-Stack Developer</div>
                </div>
              </Link>
              <button onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex' }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
              <p style={{
                fontSize: 10, fontWeight: 500, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#9ca3af',
                padding: '0 8px', marginBottom: 6,
              }}>Navigate</p>

              {navItems.map(({ name, path }) => {
                const active = pathname === path
                return (
                  <Link key={name} href={path} onClick={() => setIsOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 10px', borderRadius: 8, marginBottom: 2,
                      background: active ? '#f0fdf4' : 'transparent',
                      color: active ? '#16a34a' : '#6b7280',
                      fontSize: 13, fontWeight: active ? 500 : 400,
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                      background: active ? ACCENT : '#d1d5db',
                    }} />
                    {name}
                  </Link>
                )
              })}

              <p style={{
                fontSize: 10, fontWeight: 500, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#9ca3af',
                padding: '0 8px', marginTop: 20, marginBottom: 6,
              }}>Find me</p>

              <div style={{ display: 'flex', gap: 8 }}>
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href()} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      flex: 1, height: 36,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid #e5e7eb', borderRadius: 8,
                      color: '#9ca3af', textDecoration: 'none',
                      transition: 'color 0.13s, border-color 0.13s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = ACCENT
                      ;(e.currentTarget as HTMLElement).style.borderColor = ACCENT
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = '#9ca3af'
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'
                    }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div style={{ padding: '14px 12px', borderTop: '1px solid #f3f4f6' }}>
              <button
                onClick={() => { handleResume(); setIsOpen(false) }}
                disabled={loading}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '12px 0',
                  background: done ? '#f0fdf4' : ACCENT,
                  border: done ? '1px solid #bbf7d0' : 'none',
                  borderRadius: 20,
                  fontSize: 12, fontWeight: 500,
                  color: done ? '#16a34a' : '#fff',
                  cursor: loading ? 'wait' : 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                <ResumeIcon size={15} />
                {loading ? 'Preparing…' : done ? 'Downloaded!' : 'Download Resume'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}