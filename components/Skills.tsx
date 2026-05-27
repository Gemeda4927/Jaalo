"use client";

import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────────────── */
const skills = {
  frontend:  ["React","Next.js"],
  backend:   ["Node.js","Express"],
  databases: ["MySQL","MongoDB","Firebase","Supabase"],
  tools:     ["Git","CI/CD","Vercel","Figma","Postman"],
};
const learning = ["AI / Machine Learning","Cloud Architecture","DevOps & CI/CD","Blockchain","IoT"];
type Cat = keyof typeof skills | "all";
const meta: Record<keyof typeof skills, { label: string; sym: string }> = {
  frontend:  { label: "Frontend",  sym: "◈" },
  backend:   { label: "Backend",   sym: "◎" },
  databases: { label: "Databases", sym: "◉" },
  tools:     { label: "Tools",     sym: "◇" },
};
const SHOW = 8;

/* ─── STYLES ────────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap');
.sk*,.sk*::before,.sk*::after{box-sizing:border-box;margin:0;padding:0;}
.sk{font-family:'Manrope',sans-serif;background:#fff;}
.sk-tab{display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border-radius:999px;border:1.5px solid #e5e7eb;background:#fff;font-family:'Manrope',sans-serif;font-size:11.5px;font-weight:700;color:#6b7280;cursor:pointer;transition:all .17s;white-space:nowrap;letter-spacing:.2px;}
.sk-tab:hover{border-color:#bbf7d0;color:#16a34a;background:#f0fdf4;}
.sk-tab.on{background:#22c55e;border-color:#22c55e;color:#fff;box-shadow:0 3px 10px rgba(34,197,94,.2);}
.sk-tab .n{font-family:'DM Mono',monospace;font-size:9.5px;opacity:.65;margin-left:1px;}
.sk-tab.on .n{opacity:.8;}
.sk-chip{display:flex;flex-direction:column;gap:5px;padding:13px 14px;border-radius:12px;border:1.5px solid #f0f0f0;background:#fff;cursor:default;transition:border-color .18s,transform .18s,box-shadow .18s;position:relative;overflow:hidden;animation:chipIn .25s ease both;}
.sk-chip::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:#22c55e;transform:scaleX(0);transform-origin:left;transition:transform .2s ease;}
.sk-chip:hover{border-color:#bbf7d0;background:#f9fffe;transform:translateY(-2px);box-shadow:0 6px 18px rgba(34,197,94,.09);}
.sk-chip:hover::after{transform:scaleX(1);}
.sk-chip:hover .cdot{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.14);}
.sk-chip:hover .cname{color:#15803d;}
@keyframes chipIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.sk-brow{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px solid #f3f3f3;cursor:pointer;transition:all .15s;}
.sk-brow:last-child{border-bottom:none;}
.sk-brow:hover .bname,.sk-brow.sel .bname{color:#16a34a;}
.sk-brow:hover .bsym,.sk-brow.sel .bsym{color:#22c55e;}
.sk-pill{display:inline-flex;align-items:center;gap:6px;padding:6px 13px;border-radius:999px;background:#fff;border:1.5px solid #bbf7d0;font-size:11.5px;font-weight:600;color:#166534;font-family:'Manrope',sans-serif;transition:all .17s;}
.sk-pill:hover{background:#dcfce7;}
.sk-see{display:inline-flex;align-items:center;gap:8px;padding:10px 26px;border-radius:999px;border:1.5px solid #e5e7eb;background:#fff;font-family:'Manrope',sans-serif;font-size:12.5px;font-weight:700;color:#374151;cursor:pointer;transition:all .2s;letter-spacing:.3px;}
.sk-see:hover{border-color:#22c55e;color:#16a34a;background:#f0fdf4;box-shadow:0 4px 14px rgba(34,197,94,.12);}
.pulse{width:5px;height:5px;border-radius:50%;background:#22c55e;animation:pulse 2s infinite;display:inline-block;flex-shrink:0;}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.65)}}
`;

/* ─── COMPONENT ─────────────────────────────────────────────────── */
export default function SkillsComponent() {
  const [active, setActive]     = useState<Cat>("all");
  const [expanded, setExpanded] = useState(false);

  const total = Object.values(skills).flat().length;

  const allItems = (): { s: string; k: keyof typeof skills }[] =>
    active === "all"
      ? (Object.entries(skills) as [keyof typeof skills, string[]][]).flatMap(([k, v]) => v.map(s => ({ s, k })))
      : skills[active as keyof typeof skills].map(s => ({ s, k: active as keyof typeof skills }));

  const items   = allItems();
  const visible = expanded ? items : items.slice(0, SHOW);
  const hidden  = items.length - SHOW;

  const tabs = [
    { key: "all" as Cat, label: "All", n: total },
    ...(Object.keys(skills) as (keyof typeof skills)[]).map(k => ({ key: k as Cat, label: meta[k].label, n: skills[k].length })),
  ];

  const handleTab = (k: Cat) => { setActive(k); setExpanded(false); };
  const handleBar = (k: keyof typeof skills) => { setActive(k); setExpanded(false); };

  return (
    <>
      <style>{css}</style>
      <section className="sk" id="skills" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>

          {/* ── TOP GRID ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start", marginBottom: 40 }}>

            {/* Headline */}
            <div>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#16a34a", marginBottom: 14 }}>● Skills &amp; Technologies</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 60, lineHeight: .95, fontWeight: 600, color: "#111827" }}>
                What <span style={{ color: "#6b7280", opacity: .38, fontStyle: "italic" }}>I</span><br />
                build <span style={{ color: "#16a34a", fontStyle: "italic" }}>with</span>
              </h2>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, maxWidth: 300, marginTop: 18 }}>
                A curated stack of modern frameworks, tools, and platforms I use to ship great software.
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 20, padding: "8px 18px", borderRadius: 999, background: "#f0fdf4", border: "1.5px solid #bbf7d0" }}>
                <strong style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600, color: "#16a34a" }}>{total}</strong>
                <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>technologies · {Object.keys(skills).length} domains</span>
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ border: "1.5px solid #ececec", borderRadius: 16, padding: "20px 22px", background: "#fafafa" }}>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#b0b0b0", marginBottom: 14 }}>Domain breakdown</p>
              {(Object.keys(skills) as (keyof typeof skills)[]).map(k => {
                const pct = Math.round(skills[k].length / total * 100);
                return (
                  <div key={k} className={`sk-brow${active === k ? " sel" : ""}`} onClick={() => handleBar(k)}>
                    <span className="bsym" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, color: active === k ? "#22c55e" : "#d1fae5", fontStyle: "italic", width: 16, flexShrink: 0, transition: "color .15s" }}>{meta[k].sym}</span>
                    <span className="bname" style={{ fontSize: 11.5, fontWeight: 700, color: active === k ? "#16a34a" : "#374151", width: 68, flexShrink: 0, letterSpacing: ".3px", transition: "color .15s" }}>{meta[k].label}</span>
                    <div style={{ flex: 1, height: 3, background: "#efefef", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: "#22c55e", borderRadius: 2, transition: "width .6s cubic-bezier(.4,0,.2,1)" }} />
                    </div>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#b0b0b0", width: 18, textAlign: "right", flexShrink: 0 }}>{skills[k].length}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── TABS ── */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 22 }}>
            {tabs.map(({ key, label, n }) => (
              <button key={key} className={`sk-tab${active === key ? " on" : ""}`} onClick={() => handleTab(key)}>
                {key !== "all" && <span style={{ fontSize: 12, opacity: .65 }}>{meta[key as keyof typeof skills].sym}</span>}
                {label}<span className="n">{n}</span>
              </button>
            ))}
          </div>

          {/* ── CHIP GRID + FADE + SEE MORE ── */}
          <div style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(136px,1fr))", gap: 9 }}>
              {visible.map(({ s, k }, i) => (
                <div key={`${active}-${s}`} className="sk-chip" style={{ animationDelay: `${i * 13}ms` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="cdot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#d1fae5", flexShrink: 0, transition: "all .18s" }} />
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8.5, color: "#d1d5db" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="cname" style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", transition: "color .18s", lineHeight: 1.25, letterSpacing: ".1px" }}>{s}</span>
                  {active === "all" && <span style={{ fontSize: 9.5, color: "#aaa", fontFamily: "'DM Mono',monospace", letterSpacing: ".4px" }}>{meta[k].label}</span>}
                </div>
              ))}
            </div>

            {/* Fade mask when collapsed */}
            {!expanded && items.length > SHOW && (
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: "linear-gradient(to bottom, rgba(255,255,255,0), #fff)", pointerEvents: "none" }} />
            )}
          </div>

          {/* See more / Show less */}
          {items.length > SHOW && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16, marginBottom: 4 }}>
              <button className="sk-see" onClick={() => setExpanded(e => !e)}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transition: "transform .25s", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M2 4.5L6.5 9L11 4.5" stroke={expanded ? "#16a34a" : "#374151"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {expanded ? "Show less" : "See more"}
                {!expanded && <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#9ca3af", marginLeft: 2 }}>+{hidden} more</span>}
              </button>
            </div>
          )}

          {/* ── CURRENTLY LEARNING ── */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, padding: "20px 26px", borderRadius: 16, border: "1.5px solid #dcfce7", background: "#f0fdf4", flexWrap: "wrap", marginTop: 28 }}>
            <div style={{ flexShrink: 0 }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: "#166534", lineHeight: 1.1 }}>
                Currently <span style={{ color: "#22c55e", fontStyle: "italic" }}>learning</span>
              </p>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 9.5, color: "#86efac", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 3 }}>Expanding horizons</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", paddingTop: 1 }}>
              {learning.map(t => (
                <span key={t} className="sk-pill"><span className="pulse" />{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}