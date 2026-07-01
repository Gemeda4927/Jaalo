

export interface Certificate {
  title: string;
  description: string;
  issuer: string;
  year: string;
  imageUrl?: string;
}

export interface CertificateCategory {
  label: string;
  accent: string;
  light: string;
  border: string;
  dot: string;
  certs: Certificate[];
}

export interface CertificateWithMeta extends Certificate {
  slug: string;
  category: string;
  accent: string;
  light: string;
  border: string;
  dot: string;
}

// ── Unified forest-green palette ──
// Every category lives in the same green family, distinguished by
// shade rather than hue, so the whole site reads as one coherent
// system instead of a rainbow of unrelated accent colors.
export const categories: CertificateCategory[] = [
  {
    label: "Academic",
    accent: "#15803d",
    light: "#f0fdf4",
    border: "#bbf7d0",
    dot: "#14532d",
    certs: [
      {
        title: "BSc Software Engineering",
        description: "Bachelor's degree conferred upon graduation from the Software Engineering program",
        issuer: "Jimma University",
        year: "2026",
        imageUrl: "/certificates/bsc-software-engineering.jpg",
      },
      {
        title: "Letter of Recommendation",
        description: "Formal recommendation for academic excellence, technical skills & collaboration",
        issuer: "Jimma Institute of Technology",
        year: "2026",
        imageUrl: "/certificates/letter-of-recommendation.jpg",
      },
    ],
  },
  {
    label: "Mobile Development",
    accent: "#16a34a",
    light: "#f0fdf4",
    border: "#bbf7d0",
    dot: "#166534",
    certs: [
      {
        title: "Advanced Flutter",
        description: "Enterprise-ready architecture, state management & deployment at scale",
        issuer: "Udemy",
        year: "2026",
        imageUrl: "/certificates/advanced-flutter.jpg",
      },
      {
        title: "Advanced Mobile App Development",
        description: "Mastery-level cross-platform engineering & performance optimization",
        issuer: "Yai Technologies",
        year: "2026",
        imageUrl: "/certificates/advanced-mobile-app-dev.jpg",
      },
    ],
  },
  {
    label: "Networking",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
    dot: "#065f46",
    certs: [
      {
        title: "Introduction to Networks",
        description: "70hr — protocols, infrastructure & network fundamentals",
        issuer: "JU Cisco Networking Academy",
        year: "2025",
        imageUrl: "/certificates/introduction-to-networks.jpg",
      },
      {
        title: "Switching, Routing & Wireless",
        description: "70hr — enterprise routing, VLANs & wireless essentials",
        issuer: "JU Cisco Networking Academy",
        year: "2025",
        imageUrl: "/certificates/switching-routing-wireless.jpg",
      },
      {
        title: "Enterprise Networking & Automation",
        description: "70hr — security, automation & enterprise architecture",
        issuer: "JU Cisco Networking Academy",
        year: "2025",
        imageUrl: "/certificates/enterprise-networking-automation.jpg",
      },
    ],
  },
  {
    label: "Security & IoT",
    accent: "#4d7c0f",
    light: "#f7fee7",
    border: "#d9f99d",
    dot: "#3f6212",
    certs: [
      {
        title: "Introduction to Cyber Security",
        description: "Threat detection, risk mitigation & core security principles",
        issuer: "JU Cisco Networking Academy",
        year: "2025",
        imageUrl: "/certificates/introduction-to-cyber-security.jpg",
      },
      {
        title: "IoT Security Fundamentals",
        description: "Security architecture for connected devices & IoT ecosystems",
        issuer: "JU Cisco Networking Academy",
        year: "2024",
        imageUrl: "/certificates/iot-security-fundamentals.jpg",
      },
    ],
  },
  {
    label: "AI & Industry",
    accent: "#166534",
    light: "#f0fdf4",
    border: "#86efac",
    dot: "#052e16",
    certs: [
      {
        title: "Introduction to Deep Learning",
        description: "Neural networks, model training & applied AI system design",
        issuer: "AI Center, Jimma University",
        year: "2025",
        imageUrl: "/certificates/introduction-to-deep-learning.jpg",
      },
      {
        title: "Internship Certificate",
        description: "Professional software engineering in a production environment",
        issuer: "Eagle Lion Systems",
        year: "2025",
        imageUrl: "/certificates/internship-certificate.jpg",
      },
    ],
  },
];

// ── The one and only slug generator ──
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ── Build the flat, ordered list + lookup map once ──
const flatList: CertificateWithMeta[] = categories.flatMap((category) =>
  category.certs.map((cert) => ({
    ...cert,
    slug: generateSlug(cert.title),
    category: category.label,
    accent: category.accent,
    light: category.light,
    border: category.border,
    dot: category.dot,
  }))
);

const certificateMap = new Map<string, CertificateWithMeta>(
  flatList.map((cert) => [cert.slug, cert])
);

export function getCertificate(slug: string): CertificateWithMeta | undefined {
  return certificateMap.get(slug);
}

export function getAllSlugs(): string[] {
  return flatList.map((cert) => cert.slug);
}

export function getAllCertificates(): CertificateWithMeta[] {
  return flatList;
}

export function getRelatedCertificates(slug: string, limit = 3): CertificateWithMeta[] {
  const current = certificateMap.get(slug);
  if (!current) return [];
  return flatList.filter((c) => c.category === current.category && c.slug !== slug).slice(0, limit);
}

// ── Prev / next navigation across the full ordered list ──
export function getAdjacentCertificates(slug: string) {
  const index = flatList.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined, index: -1, total: flatList.length };
  const prev = index > 0 ? flatList[index - 1] : undefined;
  const next = index < flatList.length - 1 ? flatList[index + 1] : undefined;
  return { prev, next, index, total: flatList.length };
}