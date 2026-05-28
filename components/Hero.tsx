"use client";
import { personalInfo, socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowRight, Code } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
    "Tech Innovator",
    "Problem Solver",
  ];

  useEffect(() => {
    const id = setInterval(
      () => setCurrentRole((p) => (p + 1) % roles.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-16 md:pt-24 md:pb-20"
      style={{ background: "#ffffff" }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes roleFade {
          0%,100% { opacity: 0; transform: translateY(6px); }
          15%,85% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSteam {
          0%,100% { transform: translateY(0) scaleX(1); opacity: 0.55; }
          50%      { transform: translateY(-7px) scaleX(1.15); opacity: 0.9; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.18; }
          50%      { opacity: 0.32; }
        }
        @keyframes blinkDot {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        .hero-left > * { animation: fadeUp 0.55s ease both; }
        .hero-left > *:nth-child(1) { animation-delay: 0.05s; }
        .hero-left > *:nth-child(2) { animation-delay: 0.13s; }
        .hero-left > *:nth-child(3) { animation-delay: 0.21s; }
        .hero-left > *:nth-child(4) { animation-delay: 0.29s; }
        .hero-left > *:nth-child(5) { animation-delay: 0.37s; }
        .role-badge { animation: roleFade 2.5s ease both; }
        .steam-1 { animation: floatSteam 2.1s ease-in-out infinite; }
        .steam-2 { animation: floatSteam 2.1s ease-in-out infinite 0.35s; }
        .steam-3 { animation: floatSteam 2.1s ease-in-out infinite 0.7s; }
        .cup-glow { animation: glowPulse 2.6s ease-in-out infinite; }
        .live-dot { animation: blinkDot 1.6s ease-in-out infinite; }
      `}</style>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.65,
        }}
      />

      {/* Soft ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ══════════ LEFT ══════════ */}
          <div className="hero-left flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium" style={{ color: "#9ca3af" }}>
                Hello, I'm
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                style={{ color: "#111827" }}
              >
                Gemeda Tamiru
              </h1>
              <div
                key={currentRole}
                className="role-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium w-fit"
                style={{ background: "#f0fdf4", color: "#16a34a" }}
              >
                <span
                  className="w-1 h-4 rounded-sm inline-block"
                  style={{ background: "#22c55e" }}
                />
                {roles[currentRole]}
              </div>
            </div>

            <p className="text-[14px] leading-relaxed" style={{ color: "#6b7280" }}>
              I craft{" "}
              <span className="font-semibold" style={{ color: "#22c55e" }}>
                digital experiences
              </span>{" "}
              that blend beautiful design with powerful functionality. Full-stack
              expertise delivering clean code and innovative solutions.
            </p>

            <div className="flex flex-row gap-3">
              <a
                href="/projects"
                className="flex items-center justify-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: "#22c55e",
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(34,197,94,0.28)",
                }}
              >
                <Code size={14} />
                View Projects
                <ArrowRight size={13} />
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all hover:bg-gray-50"
                style={{
                  background: "#ffffff",
                  color: "#374151",
                  border: "1px solid #e5e7eb",
                }}
              >
                <Mail size={14} />
                Hire Me
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "#d1d5db" }}
              >
                Connect with me
              </p>
              <div className="flex gap-2">
                {[
                  { icon: Github,   href: socialLinks.github,            label: "GitHub"   },
                  { icon: Linkedin, href: socialLinks.linkedin,           label: "LinkedIn" },
                  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: "Email"    },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-gray-100 hover:-translate-y-0.5"
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      color: "#6b7280",
                    }}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════ RIGHT — PANEL ══════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Top label row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  className="live-dot"
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 0 3px rgba(34,197,94,0.18)",
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#22c55e" }}>
                  Mobile First Development
                </span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 10px", borderRadius: 20, background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}>
                Live
              </span>
            </div>

            {/* Main card */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #e5e7eb",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(34,197,94,0.05)",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                  borderBottom: "1px solid #bbf7d0",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#14532d", margin: 0, letterSpacing: "-0.01em" }}>
                    Beautiful Mobile Apps
                  </p>
                  <p style={{ fontSize: 11.5, color: "#16a34a", margin: "2px 0 0", fontWeight: 500 }}>
                    Flutter · React Native · Firebase
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#fff", border: "1px solid #d1fae5", borderRadius: 8, padding: "4px 8px" }}>
                  <span style={{ fontSize: 12 }}>📱</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#16a34a" }}>x2 Platforms</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ display: "flex", alignItems: "stretch" }}>

                {/* ── SVG Illustration column ── */}
                <div
                  style={{
                    flexShrink: 0,
                    padding: "20px 4px 20px 14px",
                    background: "linear-gradient(180deg, #fafffe 0%, #f0fdf4 100%)",
                    borderRight: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Person holding glowing coffee, looking up at phone */}
                  <svg viewBox="0 0 210 310" width="188" height="278" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", overflow: "visible" }}>

                    {/* ── Phone (tilted, floating above) ── */}
                    <g transform="translate(104,6) rotate(-6)">
                      {/* Phone shell */}
                      <rect x="0" y="0" width="90" height="178" rx="18" fill="#0f172a" stroke="#1e3a5f" strokeWidth="1.8"/>
                      {/* Side button */}
                      <rect x="-2" y="42" width="2.5" height="12" rx="1.2" fill="#1e293b"/>
                      <rect x="-2" y="58" width="2.5" height="20" rx="1.2" fill="#1e293b"/>
                      {/* Screen */}
                      <rect x="5" y="14" width="80" height="152" rx="13" fill="#060d1a"/>
                      {/* Dynamic island */}
                      <rect x="28" y="18" width="34" height="7" rx="3.5" fill="#0f172a"/>

                      {/* ── Status bar ── */}
                      <text x="10" y="30" fontSize="5" fill="#94a3b8" fontFamily="monospace" fontWeight="600">9:41</text>
                      <rect x="68" y="26" width="10" height="4" rx="2" fill="#334155"/>
                      <rect x="68" y="26" width="7" height="4" rx="2" fill="#22c55e" fillOpacity="0.8"/>
                      <rect x="60" y="26.5" width="6" height="3" rx="1" fill="#475569"/>

                      {/* ── Hero banner card ── */}
                      <rect x="8" y="36" width="74" height="34" rx="8" fill="#0d2a14" stroke="#14532d" strokeWidth="0.6"/>
                      {/* Banner glow stripe */}
                      <rect x="8" y="36" width="74" height="10" rx="8" fill="#22c55e" fillOpacity="0.15"/>
                      <rect x="8" y="42" width="74" height="4" fill="#22c55e" fillOpacity="0.08"/>
                      {/* Avatar circle */}
                      <circle cx="21" cy="57" r="8" fill="#14532d" stroke="#22c55e" strokeWidth="0.7" strokeOpacity="0.5"/>
                      <text x="21" y="60" textAnchor="middle" fontSize="6.5" fill="#4ade80" fontWeight="700">GT</text>
                      {/* Name + role */}
                      <text x="33" y="54" fontSize="6" fill="#f0fdf4" fontWeight="700" fontFamily="sans-serif">Gemeda T.</text>
                      <text x="33" y="62" fontSize="5" fill="#4ade80" fontFamily="sans-serif">Full-Stack Dev</text>
                      {/* Online dot */}
                      <circle cx="27" cy="49" r="2.2" fill="#22c55e" stroke="#0d2a14" strokeWidth="0.8"/>
                      {/* Verified badge */}
                      <circle cx="72" cy="57" r="5" fill="#22c55e" fillOpacity="0.18" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="0.6"/>
                      <path d="M 69.5 57 L 71.3 58.8 L 74.5 55.2" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                      {/* ── Section label ── */}
                      <text x="10" y="82" fontSize="5" fill="#64748b" fontWeight="700" letterSpacing="0.06em" fontFamily="sans-serif">ACTIVE PROJECTS</text>

                      {/* ── Project card 1 ── */}
                      <rect x="8" y="85" width="74" height="22" rx="6" fill="#111827" stroke="#1e293b" strokeWidth="0.7"/>
                      {/* Color tag */}
                      <rect x="8" y="85" width="4" height="22" rx="6" fill="#8b5cf6"/>
                      <rect x="8" y="89" width="4" height="14" fill="#8b5cf6"/>
                      <text x="17" y="93" fontSize="5.5" fill="#e2e8f0" fontWeight="700" fontFamily="sans-serif">ShopFlow App</text>
                      <text x="17" y="100" fontSize="4.5" fill="#64748b" fontFamily="sans-serif">Flutter · Firebase</text>
                      {/* Progress */}
                      <rect x="17" y="103" width="44" height="2.5" rx="1.2" fill="#1e293b"/>
                      <rect x="17" y="103" width="32" height="2.5" rx="1.2" fill="#8b5cf6" fillOpacity="0.8"/>
                      <text x="63" y="106" fontSize="4" fill="#8b5cf6" fontWeight="700" fontFamily="monospace">72%</text>

                      {/* ── Project card 2 ── */}
                      <rect x="8" y="110" width="74" height="22" rx="6" fill="#111827" stroke="#1e293b" strokeWidth="0.7"/>
                      <rect x="8" y="110" width="4" height="22" rx="6" fill="#22c55e"/>
                      <rect x="8" y="114" width="4" height="14" fill="#22c55e"/>
                      <text x="17" y="118" fontSize="5.5" fill="#e2e8f0" fontWeight="700" fontFamily="sans-serif">HealthTrack</text>
                      <text x="17" y="125" fontSize="4.5" fill="#64748b" fontFamily="sans-serif">React Native · Node</text>
                      <rect x="17" y="128" width="44" height="2.5" rx="1.2" fill="#1e293b"/>
                      <rect x="17" y="128" width="40" height="2.5" rx="1.2" fill="#22c55e" fillOpacity="0.8"/>
                      <text x="63" y="131" fontSize="4" fill="#22c55e" fontWeight="700" fontFamily="monospace">90%</text>

                      {/* ── Mini chart area ── */}
                      <rect x="8" y="135" width="74" height="22" rx="6" fill="#0a0f1e" stroke="#1e293b" strokeWidth="0.7"/>
                      <text x="12" y="142" fontSize="4.5" fill="#64748b" fontWeight="700" letterSpacing="0.05em" fontFamily="sans-serif">COMMITS THIS WEEK</text>
                      {/* Bar chart bars */}
                      {[
                        { x: 12, h: 6, c: "#334155"  },
                        { x: 19, h: 10, c: "#22c55e"  },
                        { x: 26, h: 7,  c: "#334155"  },
                        { x: 33, h: 13, c: "#22c55e"  },
                        { x: 40, h: 8,  c: "#334155"  },
                        { x: 47, h: 15, c: "#22c55e"  },
                        { x: 54, h: 11, c: "#4ade80"  },
                        { x: 61, h: 9,  c: "#334155"  },
                        { x: 68, h: 14, c: "#22c55e"  },
                      ].map((b, i) => (
                        <rect key={i} x={b.x} y={153 - b.h} width="5" height={b.h} rx="1.5" fill={b.c} fillOpacity="0.9"/>
                      ))}

                      {/* ── Tab bar ── */}
                      <rect x="5" y="158" width="80" height="8" fill="#060d1a"/>
                      <line x1="5" y1="158" x2="85" y2="158" stroke="#1e293b" strokeWidth="0.5"/>
                      {/* Tab icons (simplified shapes) */}
                      <rect x="13" y="161" width="8" height="3" rx="1.5" fill="#22c55e" fillOpacity="0.9"/>
                      <circle cx="38" cy="162.5" r="2.5" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
                      <circle cx="52" cy="162.5" r="2.5" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
                      <rect x="65" y="160.5" width="8" height="4" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
                      <circle cx="17" cy="167" r="1" fill="#22c55e"/>

                      {/* Shine overlay */}
                      <rect x="87" y="0" width="3" height="178" rx="2" fill="white" fillOpacity="0.02"/>
                    </g>

                    {/* ── Person: body ── */}
                    {/* Back leg */}
                    <path d="M 76 232 Q 68 252 62 275" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <ellipse cx="61" cy="277" rx="8" ry="4.5" fill="#15803d" transform="rotate(-10 61 277)"/>
                    {/* Front leg */}
                    <path d="M 86 232 Q 84 255 82 275" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <ellipse cx="81.5" cy="277" rx="8" ry="4.5" fill="#15803d" transform="rotate(-5 81.5 277)"/>

                    {/* Ground shadow */}
                    <ellipse cx="74" cy="282" rx="28" ry="5" fill="#d1fae5" fillOpacity="0.6"/>

                    {/* Torso */}
                    <rect x="62" y="188" width="30" height="46" rx="11" fill="#22c55e"/>
                    {/* Shirt highlight */}
                    <rect x="64" y="191" width="11" height="22" rx="5" fill="white" fillOpacity="0.1"/>

                    {/* ── RIGHT arm — raised, pointing up toward phone ── */}
                    <path d="M 92 198 Q 108 178 118 158" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round" fill="none"/>
                    {/* Right hand */}
                    <circle cx="120" cy="155" r="6" fill="#fbbf24"/>
                    {/* Extended index finger */}
                    <rect x="118" y="141" width="4" height="12" rx="2" fill="#fbbf24"/>

                    {/* ── LEFT arm — bent, holding coffee cup ── */}
                    <path d="M 62 200 Q 44 210 34 222" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round" fill="none"/>
                    {/* Left hand */}
                    <circle cx="32" cy="224" r="6" fill="#fbbf24"/>

                    {/* ── Coffee cup (held in left hand) ── */}
                    {/* Glow behind cup */}
                    <ellipse
                      className="cup-glow"
                      cx="22" cy="238" rx="16" ry="14"
                      fill="rgba(251,191,36,0.22)"
                    />
                    {/* Cup body */}
                    <path d="M 12 228 L 14 258 Q 14 262 18 262 L 28 262 Q 32 262 32 258 L 34 228 Z" fill="#fffbeb" stroke="#fde68a" strokeWidth="1"/>
                    {/* Cup gradient wash */}
                    <path d="M 12 228 L 13 244 Q 22 249 34 244 L 34 228 Z" fill="#fef9c3" fillOpacity="0.5"/>
                    {/* Cup rim */}
                    <rect x="11" y="225" width="24" height="5" rx="2.5" fill="#fde68a"/>
                    {/* Handle */}
                    <path d="M 32 236 Q 40 236 40 244 Q 40 252 32 252" stroke="#fde68a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    {/* Logo on cup */}
                    <circle cx="22" cy="246" r="5" fill="#fef08a" fillOpacity="0.7"/>
                    <text x="22" y="249" textAnchor="middle" fontSize="5.5" fill="#92400e" fontWeight="700">GT</text>
                    {/* Coffee liquid surface */}
                    <ellipse cx="22" cy="230" rx="9" ry="2.5" fill="#78350f" fillOpacity="0.7"/>
                    {/* Steam wisps */}
                    <path className="steam-1" d="M 17 225 Q 15 219 17 214 Q 19 209 17 204" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                    <path className="steam-2" d="M 22 223 Q 20 217 22 212 Q 24 207 22 202" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55"/>
                    <path className="steam-3" d="M 27 225 Q 25 219 27 214 Q 29 209 27 204" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
                    {/* Warm glow under cup */}
                    <ellipse cx="22" cy="263" rx="11" ry="3" fill="#fef9c3" fillOpacity="0.5"/>

                    {/* ── Neck + Head ── */}
                    <rect x="72" y="177" width="12" height="12" rx="5" fill="#fbbf24"/>
                    {/* Head — tilted up slightly */}
                    <ellipse cx="80" cy="164" rx="16" ry="15" fill="#fbbf24"/>
                    {/* Hair */}
                    <path d="M 64 161 Q 65 144 80 142 Q 95 142 96 158 Q 93 148 80 148 Q 67 148 64 161Z" fill="#1f2937"/>
                    {/* Eyes — looking up */}
                    <ellipse cx="74" cy="160" rx="2.5" ry="2" fill="#1f2937"/>
                    <ellipse cx="86" cy="160" rx="2.5" ry="2" fill="#1f2937"/>
                    <circle cx="74.8" cy="159.2" r="1" fill="white"/>
                    <circle cx="86.8" cy="159.2" r="1" fill="white"/>
                    {/* Raised eyebrows (looking up) */}
                    <path d="M 71 155 Q 74.5 152.5 78 154.5" stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                    <path d="M 82 154.5 Q 85.5 152.5 89 155" stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                    {/* Smile */}
                    <path d="M 74 168 Q 80 173 86 168" stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

                    {/* ── Hard hat ── */}
                    <ellipse cx="80" cy="151" rx="17" ry="7.5" fill="#facc15"/>
                    <rect x="64" y="145" width="32" height="9" rx="5" fill="#eab308"/>
                    <rect x="65" y="148" width="30" height="5" rx="2.5" fill="#facc15"/>
                    <rect x="62" y="153" width="36" height="2" rx="1" fill="#ca8a04" fillOpacity="0.4"/>

                    {/* Callout bubble from phone toward head */}
                    <path d="M 106 68 Q 96 90 90 118" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="4.5 3" fill="none"/>
                    <polygon points="90,118 82,110 96,108" fill="#22c55e"/>

                    {/* Chat bubble */}
                    <rect x="0" y="30" width="92" height="38" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.5"/>
                    <polygon points="20,68 30,60 40,68" fill="#f0fdf4"/>
                    <line x1="20" y1="68" x2="30" y2="60" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.5"/>
                    <line x1="30" y1="60" x2="40" y2="68" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.5"/>
                    <text x="46" y="46" textAnchor="middle" fontSize="7.5" fill="#16a34a" fontFamily="'SF Mono',monospace" fontWeight="700">Gemeda builds</text>
                    <text x="46" y="58" textAnchor="middle" fontSize="7" fill="#22c55e" fontFamily="'SF Mono',monospace">smart apps</text>

                    {/* Progress arc badge */}
                    <g transform="translate(166,46)">
                      <circle cx="0" cy="0" r="12" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.2"/>
                      <path d="M 0 -12 A 12 12 0 0 1 10.4 6" stroke="#22c55e" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
                      <text x="0" y="4" textAnchor="middle" fontSize="6" fill="#16a34a" fontFamily="monospace" fontWeight="700">76%</text>
                    </g>

                    {/* Floating code symbols */}
                    <text x="0"   y="20"  fontSize="9"   fill="#22c55e" fillOpacity="0.3" fontFamily="monospace">{"</>"}</text>
                    <text x="162" y="86"  fontSize="8.5" fill="#16a34a" fillOpacity="0.28" fontFamily="monospace">{"{ }"}</text>
                    <text x="0"   y="188" fontSize="8.5" fill="#22c55e" fillOpacity="0.28" fontFamily="monospace">{"fn()"}</text>
                    <text x="163" y="130" fontSize="8.5" fill="#15803d" fillOpacity="0.28" fontFamily="monospace">{"tsx"}</text>

                    {/* Stars / sparkles */}
                    <polygon points="173,38 175,32 177,38 171,35 179,35" fill="#22c55e" fillOpacity="0.3"/>
                    <circle cx="168" cy="178" r="1.5" fill="#22c55e" fillOpacity="0.28"/>
                    <circle cx="4"   cy="210" r="1.5" fill="#22c55e" fillOpacity="0.22"/>
                  </svg>
                </div>

                {/* ── Right content column ── */}
                <div
                  style={{
                    flex: 1,
                    padding: "18px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    minWidth: 0,
                  }}
                >

                  {/* Capabilities */}
                  <div>
                    <p style={{ fontSize: 9.5, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 7px" }}>
                      Capabilities
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {[
                        { label: "Cross-platform iOS & Android", check: true  },
                        { label: "60fps buttery animations",      check: true  },
                        { label: "Offline-ready local DB",        check: true  },
                        { label: "Push notifications",            check: true  },
                        { label: "Biometric authentication",      check: true  },
                        { label: "Real-time Firestore sync",      check: true  },
                        { label: "App Store & Play Store ready",  check: true  },
                        { label: "REST & GraphQL integration",    check: true  },
                        { label: "CI/CD with GitHub Actions",     check: true  },
                        { label: "Unit & widget testing",         check: true  },
                      ].map((f) => (
                        <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          {/* Tick icon */}
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
                            <circle cx="6.5" cy="6.5" r="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8"/>
                            <path d="M 3.8 6.5 L 5.6 8.3 L 9.2 4.7" stroke="#22c55e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                          <span style={{ fontSize: 10.5, color: "#374151", lineHeight: 1.4 }}>{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow */}
                  <div>
                    <p style={{ fontSize: 9.5, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>
                      Workflow
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap" }}>
                      {["Design", "Develop", "Test", "Deploy"].map((step, i, arr) => (
                        <div key={step} style={{ display: "flex", alignItems: "center", gap: 3 }}>
                          <span
                            style={{
                              fontSize: 9.5,
                              fontWeight: 600,
                              padding: "3px 8px",
                              borderRadius: 20,
                              background: i === arr.length - 1 ? "#22c55e" : "#f9fafb",
                              color: i === arr.length - 1 ? "#fff" : "#6b7280",
                              border: i === arr.length - 1 ? "none" : "1px solid #e5e7eb",
                            }}
                          >
                            {step}
                          </span>
                          {i < arr.length - 1 && (
                            <span style={{ fontSize: 10, color: "#d1d5db" }}>→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code snippet */}
                  <div
                    style={{
                      background: "#0f172a",
                      border: "1px solid #1e293b",
                      borderRadius: 10,
                      padding: "9px 12px",
                      fontFamily: "'SF Mono', ui-monospace, monospace",
                    }}
                  >
                    <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }}/>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }}/>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c940", display: "inline-block" }}/>
                    </div>
                    <p style={{ fontSize: 9, margin: 0, lineHeight: 1.6 }}>
                      <span style={{ color: "#f97316" }}>Widget</span>{" "}
                      <span style={{ color: "#e2e8f0" }}>build</span>
                      <span style={{ color: "#64748b" }}>(</span>
                      <span style={{ color: "#7dd3fc" }}>BuildContext</span>{" "}
                      <span style={{ color: "#e2e8f0" }}>ctx</span>
                      <span style={{ color: "#64748b" }}>) {"{"}</span>
                    </p>
                    <p style={{ fontSize: 9, margin: 0, lineHeight: 1.6, paddingLeft: 12 }}>
                      <span style={{ color: "#22c55e" }}>return</span>{" "}
                      <span style={{ color: "#fbbf24" }}>GestureDetector</span>
                      <span style={{ color: "#64748b" }}>(...);</span>
                    </p>
                    <p style={{ fontSize: 9, margin: 0, lineHeight: 1.6, color: "#64748b" }}>{"}"}</p>
                  </div>

                  {/* App store badges */}
                  <div style={{ display: "flex", gap: 6 }}>
                    {[
                      {
                        label: "App Store",
                        icon: (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f1f5f9">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                        ),
                      },
                      {
                        label: "Play Store",
                        icon: (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#22c55e">
                            <path d="M3.18 23.76c.3.17.64.22.99.13l12.4-7.17-2.78-2.78-10.61 9.82zm16.35-10.43c.43-.25.7-.7.7-1.33s-.27-1.08-.68-1.33L17.6 9.5 14.56 12.5l3.04 3c.3-.18 1.61-.95 1.93-1.17zM2.83.29C2.5.06 2.1-.04 1.71.11L14.29 12.5 3.18.17c-.12.03-.24.08-.35.12zM3.18.24L14.29 11.5l2.78-2.77L4.17.11c-.35-.09-.69-.04-.99.13z"/>
                          </svg>
                        ),
                      },
                    ].map((b) => (
                      <div
                        key={b.label}
                        style={{
                          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                          gap: 5, background: "#111827", borderRadius: 8,
                          padding: "5px 10px", border: "1px solid #1e293b",
                        }}
                      >
                        {b.icon}
                        <span style={{ fontSize: 9, color: "#f1f5f9", fontWeight: 600 }}>{b.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Open to work badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: 10,
                      padding: "8px 12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        className="live-dot"
                        style={{
                          width: 7, height: 7, borderRadius: "50%",
                          background: "#22c55e",
                          boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                          flexShrink: 0, display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: 10, color: "#16a34a", fontWeight: 700 }}>
                        Open to new projects
                      </span>
                    </div>
                    {/* Tick verify icon */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6.5" fill="#22c55e"/>
                        <path d="M 4 7 L 6.2 9.2 L 10 5.4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <span style={{ fontSize: 10, color: "#22c55e", fontWeight: 600 }}>
                        Verified
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* ══════════ END RIGHT ══════════ */}

        </div>
      </div>
    </section>
  );
}