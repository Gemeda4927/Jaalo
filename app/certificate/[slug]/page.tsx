import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CertificateDetailPage from '@/components/CertificateDetailPage';
import { getAdjacentCertificates, getAllSlugs, getCertificate, getRelatedCertificates } from '@/components/certificates';


// ── Get all slugs for static generation ──
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Page Component (Next.js 15 async params) ──
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CertificatePage({ params }: PageProps) {
  const { slug } = await params;
  const certificate = getCertificate(slug);

  if (!certificate) {
    notFound();
  }

  const { prev, next, index, total } = getAdjacentCertificates(slug);
  const related = getRelatedCertificates(slug);

  return (
    <CertificateDetailPage
      certificate={certificate}
      slug={slug}
      prev={prev}
      next={next}
      position={{ index, total }}
      related={related}
    />
  );
}

// ── Metadata ──
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const certificate = getCertificate(slug);

  if (!certificate) {
    return {
      title: 'Certificate Not Found',
    };
  }

  return {
    title: `${certificate.title} - Certificate`,
    description: certificate.description,
    openGraph: {
      title: `${certificate.title} - Verified Certificate`,
      description: certificate.description,
      type: 'website',
      images: certificate.imageUrl ? [certificate.imageUrl] : [],
    },
  };
}