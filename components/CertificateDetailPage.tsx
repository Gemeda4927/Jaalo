'use client';

import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Calendar,
  Building,
  Award,
  FileText,
  Download,
  Eye,
  X,
  ZoomIn,
  Share2,
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
        background: '#fafafa',
        padding: '28px 20px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes certFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes certLightboxIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .cert-card-anim { animation: certFadeIn 0.35s ease both; }
        .cert-lightbox-anim { animation: certLightboxIn 0.2s ease both; }
        .cert-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 24px;
        }
        @media (max-width: 720px) {
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* ── Back Button + position ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 18,
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <Link
            href="/#certifications"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              color: '#64748b',
              textDecoration: 'none',
              padding: '6px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
          >
            <ArrowLeft size={13} strokeWidth={2.5} />
            Back to Certifications
          </Link>

          {position.index >= 0 && (
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                color: '#a1a9b8',
                letterSpacing: '0.03em',
              }}
            >
              {position.index + 1} of {position.total}
            </span>
          )}
        </div>

        {/* ── Certificate Card ── */}
        <div
          className="cert-card-anim"
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1px solid ${certificate.border}`,
            boxShadow: '0 8px 28px rgba(15,23,42,0.06)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: certificate.light,
              padding: '16px 22px',
              borderBottom: `1px solid ${certificate.border}`,
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: certificate.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `0 3px 10px ${certificate.accent}45`,
              }}
            >
              <CheckCircle size={15} strokeWidth={2.5} style={{ color: '#ffffff' }} />
            </div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: certificate.dot,
                  marginBottom: 2,
                }}
              >
                {certificate.category}
              </div>
              <h1
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: 0,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                }}
              >
                {certificate.title}
              </h1>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: '#ffffff',
                border: `1px solid ${certificate.border}`,
                borderRadius: 99,
                padding: '4px 10px',
              }}
            >
              <CheckCircle size={11} strokeWidth={2.5} style={{ color: certificate.accent }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: certificate.dot }}>Verified</span>
            </div>
          </div>

          {/* ── Body: two-column layout ── */}
          <div style={{ padding: '20px 22px' }} className="cert-grid">
            {/* ── LEFT: image + actions ── */}
            <div>
              {certificate.imageUrl && (
                <button
                  onClick={() => setLightboxOpen(true)}
                  style={{
                    display: 'block',
                    width: '100%',
                    border: `1px solid ${certificate.border}`,
                    borderRadius: 10,
                    overflow: 'hidden',
                    background: '#fafafa',
                    position: 'relative',
                    padding: 0,
                    cursor: 'zoom-in',
                    transition: 'box-shadow 0.2s',
                    marginBottom: 12,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 6px 18px ${certificate.accent}25`;
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
                      background: 'rgba(15,23,42,0.72)',
                      backdropFilter: 'blur(6px)',
                      color: '#fff',
                      fontSize: 9,
                      fontWeight: 600,
                      padding: '4px 8px',
                      borderRadius: 99,
                    }}
                  >
                    <ZoomIn size={10} strokeWidth={2.5} />
                    Expand
                  </div>
                </button>
              )}

              {/* Actions stacked under image */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <button
                  onClick={() => window.print()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#ffffff',
                    background: certificate.accent,
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 14px',
                    cursor: 'pointer',
                    boxShadow: `0 3px 10px ${certificate.accent}35`,
                  }}
                >
                  <Download size={12} strokeWidth={2.5} />
                  Download PDF
                </button>

                <button
                  onClick={handleShare}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#0f172a',
                    background: copied ? certificate.light : '#f1f5f9',
                    border: `1px solid ${copied ? certificate.border : '#e2e8f0'}`,
                    borderRadius: 8,
                    padding: '8px 14px',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    if (!copied) e.currentTarget.style.background = '#e2e8f0';
                  }}
                  onMouseLeave={(e) => {
                    if (!copied) e.currentTarget.style.background = '#f1f5f9';
                  }}
                >
                  <Share2 size={12} strokeWidth={2.5} />
                  {copied ? 'Link copied!' : 'Share'}
                </button>
              </div>
            </div>

            {/* ── RIGHT: description + details ── */}
            <div>
              <p style={{ fontSize: 12.5, color: '#334155', lineHeight: 1.6, margin: '0 0 16px' }}>
                {certificate.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <div style={{ background: '#f8fafc', borderRadius: 8, padding: '10px 12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                    <Building size={11} style={{ color: certificate.accent }} />
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Issuer
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{certificate.issuer}</span>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: 8, padding: '10px 12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                    <Calendar size={11} style={{ color: certificate.accent }} />
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Year
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{certificate.year}</span>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: 8, padding: '10px 12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                    <FileText size={11} style={{ color: certificate.accent }} />
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Certificate ID
                    </span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#0f172a', fontFamily: 'monospace' }}>{slug}</span>
                </div>
              </div>

              <button
                onClick={() => (window.location.href = '/#certifications')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#64748b',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                <Award size={12} strokeWidth={2.5} />
                View all certificates
              </button>
            </div>
          </div>
        </div>

        {/* ── Prev / Next navigation ── */}
        {(prev || next) && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr',
              gap: 10,
              marginTop: 16,
            }}
          >
            {prev && (
              <Link href={`/certificate/${prev.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #f1f5f9',
                    borderRadius: 10,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = prev.border;
                    e.currentTarget.style.background = prev.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f1f5f9';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  <ArrowLeft size={13} strokeWidth={2.5} style={{ color: prev.accent, flexShrink: 0 }} />
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Previous
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                    border: '1px solid #f1f5f9',
                    borderRadius: 10,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 8,
                    textAlign: 'right',
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = next.border;
                    e.currentTarget.style.background = next.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f1f5f9';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Next
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {next.title}
                    </div>
                  </div>
                  <ArrowRight size={13} strokeWidth={2.5} style={{ color: next.accent, flexShrink: 0 }} />
                </div>
              </Link>
            )}
          </div>
        )}

        {/* ── Related certificates ── */}
        {related.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 10 }}>
              More in {certificate.category}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
              {related.map((rel) => (
                <Link key={rel.slug} href={`/certificate/${rel.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #f1f5f9',
                      borderTop: `2px solid ${rel.accent}`,
                      borderRadius: '0 0 10px 10px',
                      padding: '10px 12px',
                      height: '100%',
                      transition: 'box-shadow 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 3px 14px rgba(0,0,0,0.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}>
                      <CheckCircle size={11} strokeWidth={2.5} style={{ color: rel.accent, flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 11.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{rel.title}</span>
                    </div>
                    <span style={{ fontSize: 10, color: '#94a3b8', fontWeight: 500 }}>
                      {rel.issuer} · {rel.year}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Footer note ── */}
        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 10, color: '#94a3b8', letterSpacing: '0.02em' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <CheckCircle size={10} strokeWidth={2.5} style={{ color: certificate.accent }} />
            Verified by {certificate.issuer} · {certificate.year}
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
            background: 'rgba(15,23,42,0.85)',
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
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 20px 70px rgba(0,0,0,0.5)',
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
              borderRadius: 99,
              padding: '6px 14px',
              color: '#e2e8f0',
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            {certificate.title} · {certificate.issuer}
          </div>
        </div>
      )}
    </div>
  );
}