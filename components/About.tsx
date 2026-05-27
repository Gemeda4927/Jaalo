"use client";

import {
  personalInfo,
  experience,
  achievements,
  testimonials,
} from "@/lib/data";
import {
  Calendar,
  MapPin,
  Briefcase,
  Users,
  GraduationCap,
  ExternalLink,
  CheckCircle,
  Trophy,
  Github,
  ChevronRight,
  Quote,
  Globe,
  BookOpen,
  MessageCircle,
  TrendingUp,
  Medal,
  Crown,
  Brain,
  Shield,
  Lightbulb,
  CheckCheck,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface ValueType {
  title: string;
  description: string;
  icon: LucideIcon;
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap');

.ab { font-family: 'Manrope', sans-serif; background: #fff; }
.ab *, .ab *::before, .ab *::after { box-sizing: border-box; margin: 0; padding: 0; }

.ab-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px;
  border-radius: 999px;
  background: #f0fdf4;
  border: 1.5px solid #bbf7d0;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #16a34a;
}
.ab-eyebrow-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: #22c55e; display: inline-block; flex-shrink: 0;
}
.ab-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.0;
  color: #111827;
  letter-spacing: -0.5px;
}
.ab-headline em { color: #16a34a; font-style: italic; }
.ab-headline .faded { color: #9ca3af; opacity: 0.5; font-style: italic; font-weight: 400; }
.ab-divider { width: 36px; height: 2px; background: #22c55e; border-radius: 2px; margin: 0 auto; }
.ab-sub { font-size: 13px; color: #6b7280; line-height: 1.75; max-width: 500px; margin: 0 auto; }

.ab-info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1.5px solid #f0f0f0;
  background: #fff;
  transition: border-color .18s;
}
.ab-info-item:hover { border-color: #bbf7d0; }
.ab-info-icon {
  width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
  background: #f0fdf4; border: 1px solid #bbf7d0;
  display: flex; align-items: center; justify-content: center;
}

.ab-tab {
  flex: 1;
  padding: 8px 10px;
  border-radius: 10px;
  border: none;
  background: transparent;
  font-family: 'Manrope', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all .17s;
  white-space: nowrap;
}
.ab-tab:hover { color: #16a34a; background: #f0fdf4; }
.ab-tab.on { background: #22c55e; color: #fff; box-shadow: 0 3px 10px rgba(34,197,94,.22); }

.ab-dot {
  position: absolute;
  top: 3px;
  left: -13px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #bbf7d0;
}

.ab-highlight {
  padding: 14px 16px;
  border-radius: 12px;
  background: #f0fdf4;
  border: 1.5px solid #bbf7d0;
  font-size: 12.5px;
  line-height: 1.7;
  color: #374151;
}
.ab-highlight strong { color: #16a34a; }

.ab-cert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #fffbeb;
  border: 1.5px solid #fde68a;
}
.ab-cert-icon {
  width: 32px; height: 32px; border-radius: 8px;
  background: #fef08a; display: flex; align-items: center;
  justify-content: center; flex-shrink: 0;
}

.ab-ach-btn {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  text-align: left;
  background: none;
  border: none;
  padding: 9px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background .15s;
  font-family: 'Manrope', sans-serif;
}
.ab-ach-btn:hover { background: #f9fafb; }

.ab-value-icon {
  width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;
  background: #f0fdf4; border: 1.5px solid #bbf7d0;
  display: flex; align-items: center; justify-content: center;
}

.ab-tech-chip {
  font-size: 10.5px;
  padding: 3px 9px;
  border-radius: 6px;
  font-weight: 600;
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
  display: inline-block;
}

.ab-exp-period {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
  font-family: 'DM Mono', monospace;
}

.ab-testi-wrap {
  padding: 20px 22px;
  border-radius: 16px;
  background: #f9fafb;
  border: 1.5px solid #f0f0f0;
}

.ab-testi-dot-btn {
  border: none;
  cursor: pointer;
  border-radius: 3px;
  height: 4px;
  padding: 0;
  transition: all .25s ease;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp .28s ease both; }
`;

export default function AboutComponent() {
  const [activeTab, setActiveTab] = useState("background");
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const tabs = [
    { id: "background", label: "Background", icon: BookOpen   },
    { id: "journey",    label: "Journey",    icon: TrendingUp },
    { id: "values",     label: "Values",     icon: Lightbulb  },
  ];

  const values: ValueType[] = [
    { title: "Excellence",    description: "Striving for the highest quality in every project, with meticulous attention to detail.", icon: Trophy },
    { title: "Innovation",    description: "Embracing new technologies and creative solutions to solve complex problems.",             icon: Brain  },
    { title: "Collaboration", description: "Working together to achieve extraordinary results through shared purpose and synergy.",    icon: Users  },
    { title: "Integrity",     description: "Transparent communication and ethical practices in every interaction.",                   icon: Shield },
  ];

  const infoItems = [
    { icon: MapPin,        label: "Location",  value: personalInfo.location                  },
    { icon: GraduationCap, label: "Education", value: "Jimma Institute of Technology (2026)" },
    { icon: Briefcase,     label: "Status",    value: "Open to Opportunities"                },
    { icon: Globe,         label: "Languages", value: "English, Amharic, Afan Oromo"         },
  ];

  const S = {
    // spacing constants — zero guesswork
    section: { padding: "80px 24px" } as React.CSSProperties,
    headerWrap: { textAlign: "center" as const, marginBottom: 48 },
    stack4: { display: "flex", flexDirection: "column" as const, gap: 4 },
    stack8: { display: "flex", flexDirection: "column" as const, gap: 8 },
    stack12: { display: "flex", flexDirection: "column" as const, gap: 12 },
    stack16: { display: "flex", flexDirection: "column" as const, gap: 16 },
    stack20: { display: "flex", flexDirection: "column" as const, gap: 20 },
    stack24: { display: "flex", flexDirection: "column" as const, gap: 24 },
    stack32: { display: "flex", flexDirection: "column" as const, gap: 32 },
  };

  return (
    <>
      <style>{css}</style>

      <section id="about" className="ab" style={{ ...S.section, position: "relative", overflow: "hidden" }}>

        {/* dot grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "28px 28px", opacity: 0.45,
        }} />
        {/* green glow */}
        <div style={{
          position: "absolute", top: -160, left: -160,
          width: 480, height: 480, borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
        }} />
        {/* ring top-right */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", border: "1px solid #bbf7d0", opacity: 0.45, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1080, margin: "0 auto" }}>

          {/* ════════════════════════════════
              HEADER
          ════════════════════════════════ */}
          <div style={S.headerWrap}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <span className="ab-eyebrow">
                <span className="ab-eyebrow-dot" />
                About Me
              </span>
            </div>
            <h2 className="ab-headline" style={{ marginBottom: 14 }}>
              The person{" "}
              <span className="faded">behind</span>
              <br />
              the <em>code</em>
            </h2>
            <div className="ab-divider" style={{ marginBottom: 16 }} />
            <p className="ab-sub">{personalInfo.bio}</p>
          </div>

          {/* ════════════════════════════════
              INFO ROW
          ════════════════════════════════ */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 8,
            maxWidth: 860,
            margin: "0 auto 52px",
          }}>
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="ab-info-item">
                  <span className="ab-info-icon">
                    <Icon size={13} style={{ color: "#16a34a" }} />
                  </span>
                  <div style={S.stack4}>
                    <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ════════════════════════════════
              2-COL: LEFT tabs / RIGHT experience
          ════════════════════════════════ */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* ── LEFT ── */}
            <div style={S.stack20}>

              {/* Tab nav */}
              <div style={{
                display: "flex",
                gap: 4,
                padding: 5,
                borderRadius: 14,
                background: "#f9fafb",
                border: "1.5px solid #f0f0f0",
              }}>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`ab-tab${activeTab === tab.id ? " on" : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon size={12} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab content — fixed min-height so layout doesn't jump */}
              <div style={{ minHeight: 380 }} className="fade-up" key={activeTab}>

                {/* ── BACKGROUND ── */}
                {activeTab === "background" && (
                  <div style={S.stack16}>
                    <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#374151" }}>
                      I'm a dedicated Full-Stack and Mobile Developer with a journey that started
                      in C++ programming and evolved into mastering modern web and mobile
                      technologies. Currently pursuing Software Engineering at Jimma Institute
                      of Technology (expected 2026).
                    </p>
                    <div className="ab-highlight">
                      With hands-on experience at{" "}
                      <strong>Eagle Lion Systems</strong>
                      {" "}(Flutter) and{" "}
                      <strong>Debo Engineering PLC</strong>
                      {" "}(React Native), I bridge beautiful user experiences with powerful backend systems.
                    </div>
                    <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#374151" }}>
                      Beyond coding, I'm a Teaching Assistant for C++ programming, having
                      mentored 200+ students and developed interactive learning platforms.
                    </p>
                    <div className="ab-cert">
                      <div className="ab-cert-icon">
                        <Medal size={15} style={{ color: "#d97706" }} />
                      </div>
                      <div style={S.stack8}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <p style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>
                            Eagle Lion Systems Certification
                          </p>
                          <Crown size={11} style={{ color: "#d97706" }} />
                        </div>
                        <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.55 }}>
                          Recognized for strong commitment and technical skills during internship
                        </p>
                        <a
                          href="https://credsverse.com/credentials/f758a319-970e-4979-85c8-9404c5b8afe3"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 11, fontWeight: 600, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: 4 }}
                        >
                          View Credential <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── JOURNEY ── */}
                {activeTab === "journey" && (
                  <div style={S.stack24}>
                    {/* Timeline */}
                    <div style={{ position: "relative", paddingLeft: 20, borderLeft: "2px solid #bbf7d0" }}>
                      <div style={S.stack24}>
                        {[
                          {
                            year: "2025 – Present",
                            title: "Dual Mobile Development",
                            company: "Eagle Lion Systems & Debo Engineering",
                            points: ["Flutter Development", "React Native", "Enterprise Apps"],
                          },
                          {
                            year: "2023 – Present",
                            title: "Teaching Assistant",
                            company: "Jimma Institute of Technology",
                            points: ["200+ Students Mentored", "C++ Programming", "Lab Sessions"],
                          },
                          {
                            year: "2022 – 2026",
                            title: "Software Engineering Student",
                            company: "Jimma Institute of Technology",
                            points: ["Full-Stack Focus", "Mobile Development", "GPA: 3.6/4.0"],
                          },
                        ].map((item, idx) => (
                          <div key={idx} style={{ position: "relative" }}>
                            <span className="ab-dot" />
                            <div style={S.stack4}>
                              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#22c55e", fontWeight: 500 }}>{item.year}</p>
                              <p style={{ fontSize: 12.5, fontWeight: 700, color: "#111827" }}>{item.title}</p>
                              <p style={{ fontSize: 11, color: "#9ca3af" }}>{item.company}</p>
                            </div>
                            <div style={{ ...S.stack4, marginTop: 8 }}>
                              {item.points.map((p, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "#6b7280" }}>
                                  <CheckCircle size={10} style={{ color: "#22c55e", flexShrink: 0 }} />
                                  {p}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                        <Trophy size={13} style={{ color: "#22c55e" }} />
                        <p style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>Key Achievements</p>
                      </div>
                      <div style={S.stack4}>
                        {achievements?.map((achievement, index) => (
                          <button
                            key={index}
                            className="ab-ach-btn"
                            onClick={() => setExpandedAchievement(expandedAchievement === index ? null : index)}
                          >
                            <CheckCheck size={13} style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }} />
                            <div style={{ flex: 1 }}>
                              <p style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{achievement.title}</p>
                              {expandedAchievement === index && (
                                <div style={{ marginTop: 6 }}>
                                  <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.6 }}>{achievement.description}</p>
                                  {achievement.link && (
                                    <a
                                      href={achievement.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ fontSize: 11, fontWeight: 600, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: 4, marginTop: 4 }}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      View Credential <ExternalLink size={9} />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                            <ChevronRight
                              size={12}
                              style={{
                                color: "#9ca3af", flexShrink: 0,
                                transform: expandedAchievement === index ? "rotate(90deg)" : "none",
                                transition: "transform .2s",
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── VALUES ── */}
                {activeTab === "values" && (
                  <div style={S.stack16}>
                    {values.map((value) => {
                      const Icon = value.icon;
                      return (
                        <div key={value.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <span className="ab-value-icon">
                            <Icon size={14} style={{ color: "#16a34a" }} />
                          </span>
                          <div style={S.stack4}>
                            <p style={{ fontSize: 12.5, fontWeight: 700, color: "#111827" }}>{value.title}</p>
                            <p style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.65 }}>{value.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT: Experience — no sticky, no overlap ── */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <Briefcase size={16} style={{ color: "#22c55e" }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#111827",
                }}>
                  Experience
                </h3>
              </div>

              <div style={{ position: "relative", paddingLeft: 20, borderLeft: "2px solid #bbf7d0" }}>
                <div style={S.stack32}>
                  {experience.map((exp, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <span className="ab-dot" />

                      <div style={{ ...S.stack4, marginBottom: 8 }}>
                        <span className="ab-exp-period">
                          <Calendar size={9} />
                          {exp.period}
                        </span>
                      </div>

                      <div style={S.stack4}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{exp.role}</p>
                        <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>{exp.company}</p>
                      </div>

                      <div style={{ marginTop: 10 }}>
                        {Array.isArray(exp.description) ? (
                          <div style={S.stack8}>
                            {exp.description.map((item, i) => (
                              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 11.5, color: "#6b7280" }}>
                                <CheckCheck size={11} style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }} />
                                {item}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p style={{ fontSize: 11.5, lineHeight: 1.7, color: "#6b7280" }}>{exp.description}</p>
                        )}
                      </div>

                      {exp.technologies && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="ab-tech-chip">{tech}</span>
                          ))}
                        </div>
                      )}

                      {exp.certificate && (
                        <div style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "9px 12px", borderRadius: 10, marginTop: 10,
                          background: "#fffbeb", border: "1px solid #fde68a",
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                            <Medal size={12} style={{ color: "#d97706" }} />
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>
                              {exp.certificateName || "Internship Certificate"}
                            </span>
                            {exp.credentialId && (
                              <span style={{ fontSize: 10, color: "#9ca3af" }}>· {exp.credentialId}</span>
                            )}
                          </div>
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: 11, fontWeight: 600, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: 4 }}
                          >
                            Verify <ExternalLink size={9} />
                          </a>
                        </div>
                      )}

                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 11, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 5, marginTop: 8 }}
                        >
                          <Github size={11} />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
              TESTIMONIALS — full width below both cols
              Only renders when testimonials exist
          ════════════════════════════════ */}
          {testimonials && testimonials.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <div className="ab-testi-wrap">
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                  <MessageCircle size={13} style={{ color: "#22c55e" }} />
                  <p style={{ fontSize: 11.5, fontWeight: 700, color: "#111827" }}>What People Say</p>
                </div>
                <Quote size={16} style={{ color: "#d1d5db", display: "block", marginBottom: 8 }} />
                <p style={{ fontSize: 13, fontStyle: "italic", color: "#6b7280", lineHeight: 1.75, marginBottom: 16 }}>
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={S.stack4}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p style={{ fontSize: 11, color: "#9ca3af" }}>
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                  {testimonials[activeTestimonial].company && (
                    <span className="ab-tech-chip">{testimonials[activeTestimonial].company}</span>
                  )}
                </div>
                {testimonials.length > 1 && (
                  <div style={{ display: "flex", gap: 5, marginTop: 14 }}>
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        className="ab-testi-dot-btn"
                        onClick={() => setActiveTestimonial(i)}
                        style={{
                          width: activeTestimonial === i ? 20 : 4,
                          background: activeTestimonial === i ? "#22c55e" : "#d1d5db",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}