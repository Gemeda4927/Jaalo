'use client';

import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  Award,
  Fingerprint,
  Download,
  ZoomIn,
  Share2,
  X,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CertificateWithMeta } from './certificates';

interface CertificateDetailPageProps {
  certificate: CertificateWithMeta;
  slug: string;
  prev?: CertificateWithMeta;
  next?: CertificateWithMeta;
  position: { index: number; total: number };
  related: CertificateWithMeta[];
}

export default function CertificateDetailPage({
  certificate,
  slug,
  prev,
  next,
  position,
  related,
}: CertificateDetailPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const handleShare = async () => {
    const shareData = {
      title: `${certificate.title} — Certificate`,
      text: certificate.description,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F5F8F4',
        padding: '32px 20px 64px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');

        :root {
          --ink: #0F1D15;
          --ink-soft: #52655A;
          --muted: #93A69A;
          --accent: #16A34A;
          --accent-deep: #0B5C2E;
          --accent-light: #E7F7EC;
          --foil: #A9822F;
          --foil-light: #F5EDD8;
          --border: #E2E9DE;
          --card: #FFFFFF;
        }

        @keyframes certRise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes certLightboxIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes sealSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-140%) rotate(20deg); }
          100% { transform: translateX(140%) rotate(20deg); }
        }
        .cert-card-anim { animation: certRise 0.5s cubic-bezier(.2,.8,.2,1) both; }
        .cert-lightbox-anim { animation: certLightboxIn 0.2s ease both; }

        .cert-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 32px;
        }
        @media (max-width: 720px) {
          .cert-grid { grid-template-columns: 1fr; }
        }

        .pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          padding: 10px 17px;
          cursor: pointer;
          border: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }
        .pill-btn:active { transform: scale(0.97); }
        .pill-btn:focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 2px; }

        .pill-primary {
          color: #ffffff;
          background: linear-gradient(135deg, var(--accent), var(--accent-deep));
          box-shadow: 0 8px 18px rgba(11, 92, 46, 0.28);
        }
        .pill-primary:hover {
          box-shadow: 0 10px 22px rgba(11, 92, 46, 0.36);
          transform: translateY(-1px);
        }

        .pill-secondary {
          color: var(--ink);
          background: #ffffff;
          border: 1.5px solid var(--border);
        }
        .pill-secondary:hover {
          border-color: var(--accent);
          color: var(--accent-deep);
          transform: translateY(-1px);
        }

        .seal-ring { animation: sealSpin 16s linear infinite; }

        .seal-wrap { position: relative; overflow: hidden; border-radius: 50%; }
        .seal-wrap::after {
          content: '';
          position: absolute;
          top: -60%;
          left: -20%;
          width: 40%;
          height: 220%;
          background: rgba(255,255,255,0.55);
          filter: blur(2px);
          opacity: 0;
        }
        .cert-card-anim:hover .seal-wrap::after {
          animation: shimmer 1.1s ease forwards;
          opacity: 1;
        }

        .ledger-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding: 9px 0;
          border-bottom: 1px dashed var(--border);
        }
        .ledger-row:last-child { border-bottom: none; }
        .ledger-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .ledger-fill {
          flex: 1;
          border-bottom: 1px dotted var(--muted);
          margin-bottom: 3px;
          opacity: 0.6;
        }
        .ledger-value {
          font-size: 11px;
          font-weight: 700;
          color: var(--ink);
          white-space: nowrap;
        }

        .frame-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border: 2px solid var(--foil);
          opacity: 0.75;
        }

        .step-dot { transition: width 0.25s ease, background 0.25s ease, opacity 0.25s ease; }
      `}</style>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* ── Header: back pill + step dots ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          <Link href="/#certifications" style={{ textDecoration: 'none' }}>
            <span
              className="pill-secondary pill-btn"
              style={{ padding: '7px 14px 7px 10px', fontSize: 10.5 }}
            >
              <ArrowLeft size={12} strokeWidth={2.5} />
              Certifications
            </span>
          </Link>

          {position.index >= 0 && position.total > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {Array.from({ length: position.total }).map((_, i) => (
                <span
                  key={i}
                  className="step-dot"
                  style={{
                    height: 5,
                    width: i === position.index ? 18 : 5,
                    borderRadius: 999,
                    background: i === position.index ? certificate.accent : 'var(--border)',
                    opacity: i === position.index ? 1 : 0.9,
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: 6,
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: 'var(--muted)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {String(position.index + 1).padStart(2, '0')} / {String(position.total).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>

        {/* ── Certificate Plaque ── */}
        <div
          className="cert-card-anim"
          style={{
            background: 'var(--card)',
            borderRadius: 24,
            border: '1px solid var(--border)',
            boxShadow: '0 18px 48px rgba(15,29,21,0.07)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: 4,
              width: '100%',
              background: `linear-gradient(90deg, ${certificate.accent}, var(--accent-deep))`,
            }}
          />

          {/* Masthead */}
          <div style={{ padding: '26px 28px 6px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-deep)',
                    marginBottom: 8,
                  }}
                >
                  <span style={{ width: 14, height: 1.5, background: 'var(--accent)', display: 'inline-block' }} />
                  {certificate.category}
                </div>
                <h1
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontOpticalSizing: 'auto',
                    fontSize: 24,
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.22,
                    letterSpacing: '-0.01em',
                    maxWidth: 540,
                  }}
                >
                  <span
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${certificate.accent}, var(--accent-deep) 65%)`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {certificate.title}
                  </span>
                </h1>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'var(--foil-light)',
                  border: '1px solid #E9DBB2',
                  borderRadius: 999,
                  padding: '5px 12px',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={11} strokeWidth={2.5} style={{ color: 'var(--foil)' }} />
                <span style={{ fontSize: 9.5, fontWeight: 700, color: '#8A6B22' }}>Verified credential</span>
              </div>
            </div>
          </div>

          {/* Body: two-column */}
          <div style={{ padding: '20px 28px 28px' }} className="cert-grid">
            {/* LEFT: framed image + seal + actions */}
            <div>
              {certificate.imageUrl && (
                <div style={{ position: 'relative', marginBottom: 16 }}>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    style={{
                      display: 'block',
                      width: '100%',
                      border: '1px solid var(--border)',
                      borderRadius: 14,
                      overflow: 'hidden',
                      background: '#F5F8F4',
                      position: 'relative',
                      padding: 0,
                      cursor: 'zoom-in',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 12px 26px ${certificate.accent}22`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    aria-label="Expand certificate image"
                  >
                    <Image
                      src={certificate.imageUrl}
                      alt={`${certificate.title} Certificate`}
                      width={300}
                      height={210}
                      style={{ width: '100%', height: 'auto', maxHeight: 200, objectFit: 'cover', display: 'block' }}
                      priority
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        background: 'rgba(15,29,21,0.72)',
                        backdropFilter: 'blur(6px)',
                        color: '#fff',
                        fontSize: 9,
                        fontWeight: 600,
                        padding: '4px 8px',
                        borderRadius: 999,
                      }}
                    >
                      <ZoomIn size={10} strokeWidth={2.5} />
                      Expand
                    </div>

                    {/* Ornamental corners — diploma frame cue */}
                    <span className="frame-corner" style={{ top: 6, left: 6, borderRight: 'none', borderBottom: 'none' }} />
                    <span className="frame-corner" style={{ top: 6, right: 6, borderLeft: 'none', borderBottom: 'none' }} />
                    <span className="frame-corner" style={{ bottom: 6, left: 6, borderRight: 'none', borderTop: 'none' }} />
                    <span className="frame-corner" style={{ bottom: 6, right: 6, borderLeft: 'none', borderTop: 'none' }} />
                  </button>

                  {/* Foil seal — signature element */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -16,
                      right: -12,
                      width: 54,
                      height: 54,
                      transform: 'rotate(-6deg)',
                    }}
                  >
                    <svg className="seal-ring" viewBox="0 0 54 54" style={{ position: 'absolute', inset: 0 }}>
                      <circle
                        cx="27"
                        cy="27"
                        r="25"
                        fill="none"
                        stroke="var(--foil)"
                        strokeWidth="1.4"
                        strokeDasharray="2.5 4"
                        opacity="0.65"
                      />
                    </svg>
                    <div
                      className="seal-wrap"
                      style={{
                        position: 'absolute',
                        inset: 5,
                        background: 'linear-gradient(150deg, #E8CE86, var(--foil) 70%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(15,29,21,0.22), inset 0 1px 1px rgba(255,255,255,0.5)',
                      }}
                    >
                      <CheckCircle2 size={18} strokeWidth={2.5} style={{ color: '#ffffff' }} />
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
                <button className="pill-btn pill-primary" onClick={() => window.print()}>
                  <Download size={13} strokeWidth={2.5} />
                  Download PDF
                </button>
                <button
                  className="pill-btn pill-secondary"
                  onClick={handleShare}
                  style={
                    copied
                      ? { background: 'var(--accent-light)', borderColor: '#D6F0DE', color: 'var(--accent-deep)' }
                      : undefined
                  }
                >
                  <Share2 size={13} strokeWidth={2.5} />
                  {copied ? 'Link copied!' : 'Share'}
                </button>
              </div>
            </div>

            {/* RIGHT: description + ledger details */}
            <div>
              <p style={{ fontSize: 11.5, color: 'var(--ink-soft)', lineHeight: 1.75, margin: '0 0 18px' }}>
                {certificate.description}
              </p>

              <div
                style={{
                  background: '#FBFCFA',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '6px 16px',
                  marginBottom: 18,
                }}
              >
                <div className="ledger-row">
                  <span className="ledger-label">
                    <Building2 size={11} strokeWidth={2.5} style={{ color: 'var(--accent)' }} />
                    Issuer
                  </span>
                  <span className="ledger-fill" />
                  <span className="ledger-value">{certificate.issuer}</span>
                </div>
                <div className="ledger-row">
                  <span className="ledger-label">
                    <Calendar size={11} strokeWidth={2.5} style={{ color: 'var(--accent)' }} />
                    Year
                  </span>
                  <span className="ledger-fill" />
                  <span className="ledger-value">{certificate.year}</span>
                </div>
                <div className="ledger-row">
                  <span className="ledger-label">
                    <Fingerprint size={11} strokeWidth={2.5} style={{ color: 'var(--accent)' }} />
                    Credential ID
                  </span>
                  <span className="ledger-fill" />
                  <span className="ledger-value" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
                    {slug}
                  </span>
                </div>
              </div>

              <Link href="/#certifications" style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    fontSize: 10.5,
                    fontWeight: 700,
                    color: 'var(--ink-soft)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-deep)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-soft)')}
                >
                  <Award size={12} strokeWidth={2.5} />
                  View all certificates
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Prev / Next navigation ── */}
        {(prev || next) && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr',
              gap: 12,
              marginTop: 18,
            }}
          >
            {prev && (
              <Link href={`/certificate/${prev.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = prev.accent;
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(15,29,21,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowLeft size={13} strokeWidth={2.5} style={{ color: prev.accent }} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      Previous
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {prev.title}
                    </div>
                  </div>
                </div>
              </Link>
            )}
            {next && (
              <Link href={`/certificate/${next.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 10,
                    textAlign: 'right',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = next.accent;
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(15,29,21,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      Next
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {next.title}
                    </div>
                  </div>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={13} strokeWidth={2.5} style={{ color: next.accent }} />
                  </div>
                </div>
              </Link>
            )}
          </div>
        )}

        {/* ── Related certificates ── */}
        {related.length > 0 && (
          <div style={{ marginTop: 34 }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
              More in <span style={{ color: 'var(--accent-deep)' }}>{certificate.category}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
              {related.map((rel) => (
                <Link key={rel.slug} href={`/certificate/${rel.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--border)',
                      borderRadius: 14,
                      padding: '14px 14px',
                      height: '100%',
                      transition: 'box-shadow 0.15s, transform 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 24px rgba(15,29,21,0.07)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: rel.accent,
                        marginBottom: 8,
                      }}
                    />
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 3 }}>
                      {rel.title}
                    </div>
                    <span style={{ fontSize: 9.5, color: 'var(--muted)', fontWeight: 500 }}>
                      <span style={{ color: rel.accent, fontWeight: 700 }}>{rel.issuer}</span> · {rel.year}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Footer note ── */}
        <div style={{ textAlign: 'center', marginTop: 28, fontSize: 9.5, color: 'var(--muted)', letterSpacing: '0.02em' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <CheckCircle2 size={10} strokeWidth={2.5} style={{ color: 'var(--accent)' }} />
            Verified by <span style={{ color: 'var(--accent-deep)', fontWeight: 700 }}>{certificate.issuer}</span> · {certificate.year}
          </span>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxOpen && certificate.imageUrl && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="cert-lightbox-anim"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15,29,21,0.86)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 28,
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            aria-label="Close image view"
          >
            <X size={16} strokeWidth={2.5} style={{ color: '#ffffff' }} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85vw',
              maxHeight: '80vh',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 24px 70px rgba(0,0,0,0.5)',
              cursor: 'default',
            }}
          >
            <Image
              src={certificate.imageUrl}
              alt={`${certificate.title} Certificate — full view`}
              width={1000}
              height={700}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '85vw',
                maxHeight: '80vh',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 999,
              padding: '6px 14px',
              color: '#e9ece7',
              fontSize: 9.5,
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ color: certificate.accent, fontWeight: 700 }}>{certificate.title}</span> · {certificate.issuer}
          </div>
        </div>
      )}
    </div>
  );
}