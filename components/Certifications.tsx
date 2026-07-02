'use client';
import { ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { categories, generateSlug } from './certificates';

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ background: "#ffffff", padding: "96px 0 80px" }}
    >
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#22c55e",
              marginBottom: 14,
            }}
          >
            ✦ Verified Credentials
          </span>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.025em",
              margin: "0 0 6px",
              lineHeight: 1.1,
            }}
          >
            Certifications
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              borderRadius: 99,
              background: "#22c55e",
              margin: "14px auto 0",
            }}
          />
        </div>

        {/* ── Categories ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {categories.map((cat) => (
            <div key={cat.label}>

              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: cat.accent,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: cat.dot,
                  }}
                >
                  {cat.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: cat.border,
                  }}
                />
              </div>

              {/* Cards row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 12,
                }}
              >
                {cat.certs.map((cert, i) => {
                  const slug = generateSlug(cert.title);
                  return (
                    <Link
                      key={i}
                      href={`/certificate/${slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          background: "#fafafa",
                          border: `1px solid #f1f5f9`,
                          borderTop: `2.5px solid ${cat.accent}`,
                          borderRadius: "0 0 12px 12px",
                          padding: "16px 16px 13px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          height: "100%",
                          transition: "background 0.15s, box-shadow 0.15s",
                          cursor: "pointer",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLDivElement
                          el.style.background = cat.light
                          el.style.boxShadow = `0 4px 20px rgba(0,0,0,0.06)`
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLDivElement
                          el.style.background = "#fafafa"
                          el.style.boxShadow = "none"
                        }}
                      >
                        {/* Title row */}
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <CheckCircle
                            size={14}
                            strokeWidth={2.5}
                            style={{ color: cat.accent, flexShrink: 0, marginTop: 2 }}
                          />
                          <span
                            style={{
                              fontSize: 13.5,
                              fontWeight: 700,
                              color: "#0f172a",
                              lineHeight: 1.35,
                            }}
                          >
                            {cert.title}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: 12,
                            color: "#64748b",
                            margin: 0,
                            lineHeight: 1.6,
                            flex: 1,
                          }}
                        >
                          {cert.description}
                        </p>

                        {/* Footer */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: 10,
                            borderTop: "1px solid #f1f5f9",
                            marginTop: 2,
                          }}
                        >
                          <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>
                            {cert.issuer}
                          </span>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span
                              style={{
                                fontSize: 10.5,
                                fontWeight: 700,
                                color: cat.dot,
                                background: cat.light,
                                border: `1px solid ${cat.border}`,
                                borderRadius: 5,
                                padding: "1px 7px",
                              }}
                            >
                              {cert.year}
                            </span>
                            <ExternalLink size={11} strokeWidth={2.5} style={{ color: cat.dot }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── View All ── */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 52 }}>
          <Link
            href="/certificates"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 700,
              color: "#ffffff",
              background: "#22c55e",
              borderRadius: 12,
              padding: "12px 30px",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(34,197,94,0.28)",
              letterSpacing: "0.01em",
            }}
          >
            <CheckCircle size={14} strokeWidth={2.5} />
            View All Certificates
            <ExternalLink size={12} strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}