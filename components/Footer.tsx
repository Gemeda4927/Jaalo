import { personalInfo, socialLinks } from '@/lib/data'

const G = "#22c55e"

const LINKS = [
  { label: "GitHub",   href: socialLinks.github   },
  { label: "LinkedIn", href: socialLinks.linkedin  },
  { label: "Twitter",  href: socialLinks.twitter   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .ft *, .ft *::before, .ft *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ft { font-family: 'Inter', sans-serif; }
        .ft-link { font-size: 13px; font-weight: 500; color: #6b7280; text-decoration: none; transition: color .15s; }
        .ft-link:hover { color: ${G}; }
        @keyframes ft-pulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
        .ft-dot { animation: ft-pulse 2s infinite; }
      `}</style>

      <footer className="ft" style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>

          {/* TOP ROW */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, marginBottom: 28 }}>

            {/* Name + tagline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <span className="ft-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: G, display: "inline-block", flexShrink: 0 }} />
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", letterSpacing: "-0.3px" }}>
                  {personalInfo.name}
                </h3>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280", paddingLeft: 15 }}>
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Nav links */}
            <nav style={{ display: "flex", gap: 28 }}>
              {LINKS.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="ft-link">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* DIVIDER */}
          <div style={{ height: "1px", background: "#e5e7eb", marginBottom: 24 }} />

          {/* BOTTOM ROW */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <p style={{ fontSize: 12, color: "#6b7280" }}>
              Made with{" "}
              <span style={{ color: G, fontWeight: 700 }}>&#9829;</span>
              {" "}by{" "}
              <span style={{ color: "#111827", fontWeight: 600 }}>{personalInfo.name}</span>
            </p>
            <p style={{ fontSize: 12, color: "#6b7280" }}>
              Built with Next.js, TypeScript &amp; Tailwind
              <span style={{ margin: "0 8px", color: "#d1d5db" }}>·</span>
              <span style={{ color: "#374151", fontWeight: 500 }}>© {year}</span>
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}