"use client";
import { personalInfo, socialLinks } from "@/lib/data";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
} from "lucide-react";
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
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.7,
        }}
      />
      {/* Glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
      />
      {/* Glow bottom-right */}
      <div
        className="absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ══════════ LEFT ══════════ */}
          <div className="flex flex-col gap-7">

            {/* Name & Role */}
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium w-fit"
                style={{ background: "#f0fdf4", color: "#16a34a" }}
              >
                <span
                  className="w-1 h-4 rounded-sm inline-block"
                  style={{ background: "#22c55e" }}
                />
                {roles[currentRole]}
              </div>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-relaxed" style={{ color: "#6b7280" }}>
              I craft{" "}
              <span className="font-semibold" style={{ color: "#22c55e" }}>
                digital experiences
              </span>{" "}
              that blend beautiful design with powerful functionality. Full-stack
              expertise delivering clean code and innovative solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-3">
              <a
                href="/projects"
                className="flex items-center justify-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: "#22c55e",
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(34,197,94,0.30)",
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

            {/* Socials */}
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

          {/* ══════════ RIGHT ══════════ */}
          <div className="flex flex-col gap-6">

            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: "#0a0f1e",
                border: "1px solid #1e293b",
                boxShadow: "0 4px 32px rgba(0,0,0,0.28)",
                minHeight: 220,
              }}
            >
              {/* Subtle star field background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 65%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.06) 0%, transparent 50%)",
                }}
              />

              <div className="flex items-stretch relative z-10">

                {/* SVG Illustration */}
                <div className="flex-shrink-0" style={{ padding: "16px 0 0 16px" }}>
                  <svg
                    viewBox="0 0 210 290"
                    width="210"
                    height="290"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block" }}
                  >
                    {/* ── Phone (tilted 3D) ── */}
                    <g transform="translate(86,22) rotate(-7)">
                      <rect x="0" y="0" width="88" height="176" rx="18" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
                      <rect x="5" y="16" width="78" height="148" rx="12" fill="#0a0f1e"/>
                      <rect x="27" y="7" width="34" height="6" rx="3" fill="#0a0f1e"/>
                      <rect x="5" y="16" width="78" height="36" rx="12" fill="#22c55e" fillOpacity="0.08"/>
                      <rect x="11" y="20" width="46" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.75"/>
                      <rect x="11" y="29" width="32" height="3" rx="1.5" fill="#334155"/>
                      {[
                        { y: 38, accent: "#22c55e", w1: 28, w2: 42 },
                        { y: 60, accent: "#3b82f6", w1: 20, w2: 46 },
                        { y: 82, accent: "#a855f7", w1: 34, w2: 36 },
                      ].map((card, idx) => (
                        <g key={idx}>
                          <rect x="11" y={card.y} width="66" height="18" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                          <rect x="15" y={card.y + 4} width={card.w1} height="3.5" rx="1.5" fill={card.accent} fillOpacity="0.85"/>
                          <rect x="15" y={card.y + 10} width={card.w2} height="3" rx="1.5" fill="#475569"/>
                        </g>
                      ))}
                      {[
                        { x: 11, color: "#22c55e" },
                        { x: 34, color: "#3b82f6" },
                        { x: 57, color: "#a855f7" },
                      ].map((s, i) => (
                        <g key={i}>
                          <rect x={s.x} y="105" width="20" height="16" rx="5" fill={s.color} fillOpacity="0.12" stroke={s.color} strokeOpacity="0.28" strokeWidth="0.8"/>
                          <rect x={s.x + 4} y="109" width="12" height="3" rx="1.5" fill={s.color} fillOpacity="0.6"/>
                          <rect x={s.x + 4} y="114" width="9" height="2" rx="1" fill="#475569"/>
                        </g>
                      ))}
                      <rect x="11" y="127" width="66" height="18" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                      {[16, 37, 57].map((x, i) => (
                        <rect key={i} x={x} y="132" width="12" height="8" rx="2.5" fill={i === 0 ? "#22c55e" : "#334155"} fillOpacity={i === 0 ? 0.35 : 0.5}/>
                      ))}
                      <rect x="30" y="153" width="28" height="2.5" rx="2" fill="#334155"/>
                      <rect x="85" y="0" width="3" height="176" rx="2" fill="white" fillOpacity="0.025"/>
                    </g>

                    {/* ── Ladder ── */}
                    <line x1="22" y1="284" x2="74" y2="56" stroke="#2d3f5e" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="62" y1="284" x2="106" y2="82" stroke="#2d3f5e" strokeWidth="4" strokeLinecap="round"/>
                    {[
                      { y: 262, x1: 25, x2: 65 },
                      { y: 234, x1: 30, x2: 70 },
                      { y: 206, x1: 36, x2: 76 },
                      { y: 178, x1: 42, x2: 84 },
                      { y: 150, x1: 49, x2: 91 },
                      { y: 122, x1: 55, x2: 97 },
                      { y: 96,  x1: 61, x2: 103 },
                    ].map((r, i) => (
                      <line key={i} x1={r.x1} y1={r.y} x2={r.x2} y2={r.y} stroke="#3d5278" strokeWidth="2.5" strokeLinecap="round"/>
                    ))}

                    {/* ── Person ── */}
                    <ellipse cx="44" cy="285" rx="22" ry="4.5" fill="#000" fillOpacity="0.4"/>

                    {/* Back leg */}
                    <path d="M 78 182 Q 70 165 62 150" stroke="#1d4ed8" strokeWidth="7.5" strokeLinecap="round" fill="none"/>
                    <ellipse cx="61" cy="149" rx="7" ry="4" fill="#1e3a8a" transform="rotate(-20 61 149)"/>

                    {/* Front leg */}
                    <path d="M 86 182 Q 82 170 80 158" stroke="#1d4ed8" strokeWidth="7.5" strokeLinecap="round" fill="none"/>
                    <ellipse cx="79" cy="157" rx="7" ry="4" fill="#1e3a8a" transform="rotate(-25 79 157)"/>

                    {/* Torso */}
                    <rect x="72" y="142" width="24" height="43" rx="9" fill="#22c55e"/>
                    <rect x="74" y="145" width="9" height="18" rx="4.5" fill="white" fillOpacity="0.09"/>
                    <rect x="77" y="139" width="14" height="7" rx="3.5" fill="#16a34a"/>

                    {/* Right arm — reaching up */}
                    <path d="M 96 150 Q 116 132 122 112" stroke="#fbbf24" strokeWidth="6.5" strokeLinecap="round" fill="none"/>
                    {/* Right hand */}
                    <circle cx="124" cy="109" r="5.5" fill="#fbbf24"/>

                    {/* Left arm */}
                    <path d="M 72 150 Q 55 144 46 136" stroke="#fbbf24" strokeWidth="6.5" strokeLinecap="round" fill="none"/>
                    <circle cx="44" cy="134" r="5" fill="#fbbf24"/>

                    {/* Neck */}
                    <rect x="78" y="132" width="12" height="11" rx="6" fill="#fbbf24"/>

                    {/* Head */}
                    <ellipse cx="84" cy="122" rx="14" ry="13" fill="#fbbf24"/>
                    {/* Hair */}
                    <path d="M 70 120 Q 72 104 84 102 Q 96 102 98 116 Q 96 108 84 108 Q 74 108 70 120Z" fill="#1f2937"/>
                    {/* Eyes */}
                    <circle cx="78.5" cy="121" r="2.2" fill="#1f2937"/>
                    <circle cx="89.5" cy="121" r="2.2" fill="#1f2937"/>
                    <circle cx="79.3" cy="120.2" r="0.9" fill="white"/>
                    <circle cx="90.3" cy="120.2" r="0.9" fill="white"/>
                    {/* Smile */}
                    <path d="M 78 128 Q 84 133 90 128" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    {/* Eyebrows */}
                    <path d="M 75 116 Q 78.5 113.5 82 115.5" stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                    <path d="M 86 115.5 Q 89.5 113.5 93 116" stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

                    {/* Hard hat */}
                    <ellipse cx="84" cy="111" rx="16" ry="7" fill="#facc15"/>
                    <rect x="69" y="105" width="30" height="9" rx="4.5" fill="#eab308"/>
                    <rect x="70" y="108" width="28" height="5" rx="2.5" fill="#facc15"/>
                    <rect x="67" y="113" width="34" height="2" rx="1" fill="#ca8a04" fillOpacity="0.4"/>

                    {/* Arrow callout */}
                    <path
                      d="M 14 80 Q 28 52 56 40"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="5 3"
                      fill="none"
                    />
                    <polygon points="56,40 46,38 50,48" fill="#22c55e"/>

                    {/* Callout bubble */}
                    <rect x="0" y="84" width="82" height="38" rx="10" fill="#0d2218" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
                    <polygon points="24,84 32,76 40,84" fill="#0d2218"/>
                    <line x1="24" y1="84" x2="32" y2="76" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
                    <line x1="32" y1="76" x2="40" y2="84" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
                    <text x="41" y="99" textAnchor="middle" fontSize="7.5" fill="#22c55e" fontFamily="'SF Mono',monospace" fontWeight="700" letterSpacing="0.5">
                      Gemeda builds
                    </text>
                    <text x="41" y="111" textAnchor="middle" fontSize="7" fill="#86efac" fontFamily="'SF Mono',monospace">
                      smart apps ✦
                    </text>

                    {/* Floating code symbols */}
                    <text x="8"   y="52"  fontSize="9.5" fill="#22c55e" fillOpacity="0.55" fontFamily="monospace">{"</>"}</text>
                    <text x="158" y="68"  fontSize="9"   fill="#3b82f6" fillOpacity="0.5"  fontFamily="monospace">{"{ }"}</text>
                    <text x="4"   y="168" fontSize="9"   fill="#a855f7" fillOpacity="0.5"  fontFamily="monospace">{"fn()"}</text>
                    <text x="160" y="120" fontSize="9"   fill="#22c55e" fillOpacity="0.5"  fontFamily="monospace">{"tsx"}</text>
                    <text x="155" y="152" fontSize="9"   fill="#fbbf24" fillOpacity="0.45" fontFamily="monospace">{"⚡"}</text>

                    {/* Sparkle stars */}
                    <g fill="#22c55e" fillOpacity="0.45">
                      <polygon points="170,44 172,38 174,44 168,40 176,40"/>
                      <polygon points="6,228 7.5,224 9,228 5,226 11,226" transform="scale(0.8)"/>
                    </g>
                    <circle cx="164" cy="180" r="1.5" fill="#3b82f6" fillOpacity="0.5"/>
                    <circle cx="7"   cy="195" r="1.5" fill="#22c55e" fillOpacity="0.4"/>
                  </svg>
                </div>

                {/* Right side text content */}
                <div
                  className="flex flex-col gap-3 relative z-10"
                  style={{ padding: "28px 18px 24px 6px", justifyContent: "center" }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#22c55e",
                        margin: "0 0 6px",
                      }}
                    >
                      Mobile First
                    </p>
                    <p
                      style={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: "#f1f5f9",
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      Beautiful apps built with Flutter &amp; React Native
                    </p>
                  </div>

                  {/* Tech pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Flutter", "Dart", "React Native", "Firebase"].map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          padding: "3px 9px",
                          borderRadius: 6,
                          background: "#1e293b",
                          color: "#94a3b8",
                          border: "1px solid #334155",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Feature list */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {["Cross-platform", "60fps animations", "Offline-ready"].map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#22c55e",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 11.5, color: "#64748b" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badge */}
                  <div
                    style={{
                      marginTop: 4,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#0d2218",
                      border: "1px solid #22c55e44",
                      borderRadius: 8,
                      padding: "5px 10px",
                      width: "fit-content",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 700 }}>
                      ✦ Gemeda can build this for you
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}