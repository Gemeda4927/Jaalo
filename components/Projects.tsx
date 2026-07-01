"use client";

import { useState, useRef, useEffect } from "react";
import {
  Globe,
  Smartphone,
  BookOpen,
  Sprout,
  ExternalLink,
  Github,
  ChevronRight,
  X,
  ArrowUpRight,
  ChevronLeft,
  CheckCircle2,
  Zap,
  Layers,
} from "lucide-react";

interface Tech { name: string; level: number }
interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  category: "web" | "mobile";
  icon: React.ComponentType<any>;
  accent: string;
  accentLight: string;
  accentMid: string;
  features: string[];
  tech: Tech[];
  status: "active" | "completed" | "planned";
}

// ─── Design tokens synced with portfolio UI ───────────────────────────────────
const G = {
  // The signature mint-green from the UI header & accent text
  primary:     "#86EFAC", // green-300 — headings, accent elements
  primaryDark: "#22C55E", // green-500 — CTA buttons, active states
  primaryDeep: "#16A34A", // green-600 — hover, darker text accents
  // Surfaces
  tint:        "#F0FDF4", // green-50  — card backgrounds, pill fills
  tintMid:     "#DCFCE7", // green-100 — borders on green elements
  tintStrong:  "#BBF7D0", // green-200 — progress bars, dividers
  // Neutral slate (matches portfolio body)
  ink:         "#0F172A", // slate-900 — headings
  body:        "#475569", // slate-600 — body text
  muted:       "#64748B", // slate-500 — subtitles, labels
  hint:        "#94A3B8", // slate-400 — placeholders
  // Surfaces
  surface:     "#FFFFFF", // cards, modals
  surfaceAlt:  "#F8FAFC", // subtle bg
  surfaceDeep: "#F1F5F9", // section bg
  border:      "#E2E8F0", // dividers, card borders
  borderLight: "#F1F5F9", // very subtle borders
};

const PROJECTS_DATA: Project[] = [
  {
    id: "e-edir",
    title: "E-Edir",
    shortDescription: "Edir Management Platform",
    description:
      "E-Edir digitizes the traditional communal fund management system (Edir). Transforms manual processes into a streamlined digital platform. Developed as a CBT project at Jimma University Institute of Technology.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Chapa", "Shadcn"],
    github: "https://github.com/whiHak/E-Edir",
    demo: "https://e-edir.vercel.app",
    category: "web",
    icon: Globe,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "completed",
    features: [
      "Authentication with Clerk",
      "Edirs full CRUD operations",
      "Chapa payment integration",
      "Role-based admin & user dashboards",
    ],
    tech: [
      { name: "Next.js",     level: 90 },
      { name: "TypeScript",  level: 90 },
      { name: "TailwindCSS", level: 85 },
      { name: "Node.js",     level: 85 },
      { name: "Chapa",       level: 80 },
    ],
  },
  {
    id: "agrilink",
    title: "AgriLink Platform",
    shortDescription: "Farmer-to-Buyer Marketplace",
    description:
      "Platform empowering farmers to sell produce directly to buyers, eliminating middlemen. Features real-time pricing, logistics integration, and mobile-first design for rural areas.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket"],
    github: null,
    demo: null,
    category: "web",
    icon: Sprout,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "active",
    features: [
      "Farmer-to-Buyer Direct Connection",
      "Real-time Price Tracking",
      "Logistics & Delivery Integration",
      "Payment Escrow System",
    ],
    tech: [
      { name: "Next.js 14",   level: 90 },
      { name: "TypeScript",   level: 88 },
      { name: "React Native", level: 85 },
      { name: "PostgreSQL",   level: 82 },
      { name: "Redis",        level: 75 },
    ],
  },
  {
    id: "agrilink-mobile-flutter",
    title: "AgriLink Mobile",
    shortDescription: "Flutter Marketplace for Farmers",
    description:
      "Flutter-based version of AgriLink. Built with Clean Architecture, BLoC, Dio, GetIt, and GoRouter. Designed for rural areas with offline-first support and low-bandwidth browsing.",
    tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "MongoDB"],
    github: null,
    demo: null,
    category: "mobile",
    icon: Smartphone,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "active",
    features: [
      "Mobile-first Flutter design",
      "Fast browsing in low bandwidth",
      "Offline-first support",
      "Real-time price tracking",
    ],
    tech: [
      { name: "Flutter", level: 95 },
      { name: "Dart",    level: 90 },
      { name: "BLoC",    level: 90 },
      { name: "Dio",     level: 80 },
      { name: "SQLite",  level: 75 },
    ],
  },
  {
    id: "gurmuu-website",
    title: "Gurmuu Platform",
    shortDescription: "Community & Donation Management",
    description:
      "Full-stack web app for Gurmuu Tola Oltummaa. Showcases programs, achievements, training resources, and provides donation & volunteer management with role-based access.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand", "Chapa"],
    github: "https://github.com/Gemeda4927/gurmuu-website",
    demo: null,
    category: "web",
    icon: Globe,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintMid,
    status: "completed",
    features: [
      "Super Admin, Admin, Public role-based access",
      "Donation management with Chapa",
      "Training resources & media uploads",
      "Volunteer & partnership applications",
    ],
    tech: [
      { name: "Next.js",    level: 90 },
      { name: "Prisma",     level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Zustand",    level: 85 },
      { name: "Chapa",      level: 80 },
    ],
  },
  {
    id: "debo-erp-mobile",
    title: "DeboERP Mobile",
    shortDescription: "Enterprise Workforce Management",
    description:
      "Comprehensive mobile ERP for organizations and government institutions. Enables employees and managers to collaborate via letter management, appointments, evaluations, and attendance.",
    tags: ["React Native", "TypeScript", "Expo", "Zustand", "MySQL"],
    github: "https://github.com/Debo-Engineering-Plc/debo-erp-mobile-app",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "completed",
    features: [
      "Letter management with tracking",
      "Appointment booking with real-time slots",
      "Performance evaluation & reporting",
      "Mobile attendance check-in/check-out",
    ],
    tech: [
      { name: "React Native", level: 95 },
      { name: "TypeScript",   level: 90 },
      { name: "Expo",         level: 85 },
      { name: "Zustand",      level: 85 },
      { name: "MySQL",        level: 75 },
    ],
  },
  {
    id: "news-hub-ultra",
    title: "News Hub Ultra",
    shortDescription: "Categorized News Mobile App",
    description:
      "Flutter app for browsing categorized news from multiple APIs. Built with clean architecture, Provider state management, and Dio for networking. Features offline caching and search.",
    tags: ["Flutter", "Dart", "Dio", "Provider", "Clean Architecture"],
    github: "https://github.com/SBAK729/News-APInews_hub_ultra",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "completed",
    features: [
      "Categorized news from multiple APIs",
      "Search and filter articles",
      "Offline caching",
      "Clean Architecture with Provider",
    ],
    tech: [
      { name: "Flutter",            level: 90 },
      { name: "Dart",               level: 88 },
      { name: "Dio",                level: 85 },
      { name: "Provider",           level: 85 },
      { name: "Clean Architecture", level: 80 },
    ],
  },
  {
    id: "m-market",
    title: "M-Market",
    shortDescription: "E-Commerce with Digital Wallet",
    description:
      "PHP-based e-commerce site — my first completed project. Includes product catalogs, digital wallet integration, user profiles, and secure payment processing with MySQL.",
    tags: ["PHP", "HTML", "CSS", "MySQL", "XAMPP"],
    github: "https://github.com/Gemeda4927/M-market",
    demo: null,
    category: "web",
    icon: Globe,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "completed",
    features: [
      "Product catalog and categories",
      "Digital wallet payments",
      "Order tracking and history",
      "Admin product & user management",
    ],
    tech: [
      { name: "PHP",      level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "MySQL",    level: 85 },
      { name: "XAMPP",    level: 80 },
    ],
  },
  {
    id: "cpp-worksheet",
    title: "C++ Worksheet",
    shortDescription: "Interactive C++ Learning Platform",
    description:
      "Interactive platform for students to master C++ through structured practice, real-time feedback, and gamified progress tracking across multiple difficulty levels.",
    tags: ["C++", "React", "TailwindCSS", "Node.js", "MongoDB"],
    github: "https://github.com/Gemeda4927/Programming-%F0%9F%93%98%20C++%20Programming%20Worksheet%20%E2%9C%A8",
    demo: "https://abjworksheet.vercel.app",
    category: "web",
    icon: BookOpen,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "completed",
    features: [
      "Topic-based learning: Arrays, Functions, Structures",
      "Easy, Medium, Hard difficulty levels",
      "Fill-in-blanks, debugging, coding exercises",
      "Gamified progress dashboard",
    ],
    tech: [
      { name: "C++",     level: 95 },
      { name: "Next.js", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Chart.js", level: 75 },
    ],
  },
  {
    id: "delala-mobile",
    title: "Delala Mobile App",
    shortDescription: "Digital Property & Product Broker",
    description:
      "Feature-rich digital broker app built with Flutter Clean Architecture and BLoC. Developed during internship at Eagle Lion Systems. Connects users with products and services.",
    tags: ["Flutter", "Dart", "BLoC", "Node.js", "MongoDB"],
    github: "https://github.com/Gemeda4927/Delala",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintStrong,
    status: "active",
    features: [
      "JWT-based secure authentication",
      "Seller listing management (CRUD)",
      "Chappa payment integration",
      "Role dashboards: Customer, Supplier, Admin",
    ],
    tech: [
      { name: "Flutter",   level: 95 },
      { name: "BLoC",      level: 90 },
      { name: "Node.js",   level: 85 },
      { name: "MongoDB",   level: 80 },
      { name: "Chappa API", level: 80 },
    ],
  },
  {
    id: "edumart",
    title: "Edumart Platform",
    shortDescription: "E-Learning Course Marketplace",
    description:
      "E-learning platform where instructors create and sell courses, and students browse, purchase, and access content. Built with React, Node.js, MongoDB, and Stripe.",
    tags: ["React.js", "Redux", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/Gemeda4927/edumart2",
    demo: null,
    category: "web",
    icon: BookOpen,
    accent: G.primaryDark,
    accentLight: G.tint,
    accentMid: G.tintMid,
    status: "active",
    features: [
      "Role-based access: student, instructor, admin",
      "Course creation and video upload",
      "Stripe payment integration",
      "Admin moderation and analytics",
    ],
    tech: [
      { name: "React.js",   level: 90 },
      { name: "Redux",      level: 80 },
      { name: "Node.js",    level: 85 },
      { name: "MongoDB",    level: 85 },
      { name: "Stripe API", level: 75 },
    ],
  },
];

const STATUS_MAP = {
  active:    { label: "In Progress", dot: G.primaryDark, bg: G.tint,        color: G.primaryDeep, border: G.tintStrong },
  completed: { label: "Completed",   dot: G.primary,     bg: G.surfaceAlt,  color: G.muted,       border: G.border     },
  planned:   { label: "Planned",     dot: G.primary,     bg: G.tint,        color: G.primaryDeep, border: G.tintStrong },
};

// ─── Screen mock for DemoStrip ───────────────────────────────────────────────
function getScreenSlides() {
  return [
    { label: "Dashboard",   icon: "📊", desc: "Analytics & overview" },
    { label: "Main View",   icon: "🏠", desc: "Core interface"        },
    { label: "Detail Page", icon: "📋", desc: "Item details"          },
    { label: "Settings",    icon: "⚙️",  desc: "Configuration"         },
    { label: "Profile",     icon: "👤", desc: "User profile"           },
  ];
}

function ScreenMock({
  project,
  index,
  label,
  icon,
  desc,
  isMobileProject,
}: {
  project: Project;
  index: number;
  label: string;
  icon: string;
  desc: string;
  isMobileProject: boolean;
}) {
  const Icon = project.icon;
  const rows = [0, 1, 2, 3, 4];

  // Neutral palette for mock screens — slate grays, no green
  const N = {
    bg:       "#ffffff",
    surface:  "#f8fafc",
    border:   "#e2e8f0",
    line:     "#e2e8f0",
    lineDim:  "#f1f5f9",
    icon:     "#94a3b8",
    iconBg:   "#f1f5f9",
    iconActive:"#475569",
    bar:      "#e2e8f0",
    barFill:  "#94a3b8",
    pill:     "#f1f5f9",
    pillBold: "#64748b",
    text:     "#64748b",
    textDim:  "#cbd5e1",
    accent:   G.primaryDark, // only the app icon keeps brand green
  };

  const navIcons = ["ti-home","ti-search","ti-circle-plus","ti-bell","ti-user"];
  const sideIcons = ["ti-home","ti-chart-bar","ti-file","ti-settings"];

  if (isMobileProject) {
    return (
      <div style={{
        width: 160, height: 290, flexShrink: 0, borderRadius: 24,
        background: N.bg, border: `1.5px solid ${N.border}`,
        display: "flex", flexDirection: "column", alignItems: "stretch",
        overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
      }}>
        {/* Notch */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}>
          <div style={{ width: 44, height: 5, borderRadius: 99, background: N.border }} />
        </div>
        {/* Status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 12px", fontSize: 8, color: N.text, fontWeight: 600 }}>
          <span>9:41</span>
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <i className="ti ti-wifi" style={{ fontSize: 9, color: N.icon }} aria-hidden="true" />
            <i className="ti ti-battery" style={{ fontSize: 9, color: N.icon }} aria-hidden="true" />
          </div>
        </div>
        {/* App header */}
        <div style={{ padding: "8px 12px 6px", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: 7, background: N.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={11} color="#fff" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#475569", letterSpacing: "-0.02em" }}>{project.title}</div>
            <div style={{ fontSize: 7, color: N.icon }}>{label}</div>
          </div>
        </div>
        {/* Stats card — deep slate gray with depth */}
        <div style={{ margin: "4px 12px 8px", padding: 10, borderRadius: 12, background: "rgba(71,85,105,0.85)" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>{desc}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
            <i className={`ti ${index % 2 === 0 ? "ti-chart-bar" : "ti-chart-line"}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }} aria-hidden="true" />
            <span style={{ fontSize: 13, fontWeight: 800, color: "rgba(255,255,255,0.9)" }}>—</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {[40, 65, 52, 78, 61].map((v, i) => (
              <div key={i} style={{ flex: 1, height: 20, borderRadius: 3, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "flex-end", padding: 2 }}>
                <div style={{ width: "100%", height: `${v}%`, borderRadius: 2, background: "rgba(255,255,255,0.3)" }} />
              </div>
            ))}
          </div>
        </div>
        {/* List rows */}
        <div style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
          {rows.map((r) => (
            <div key={r} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 8px", borderRadius: 8, background: r % 2 === 0 ? N.surface : "transparent" }}>
              <div style={{ width: 16, height: 16, borderRadius: 5, background: N.iconBg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="ti ti-file" style={{ fontSize: 9, color: N.icon }} aria-hidden="true" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 5, borderRadius: 99, background: N.bar, width: `${55 + r * 8}%`, marginBottom: 3 }} />
                <div style={{ height: 3, borderRadius: 99, background: N.lineDim, width: `${40 + r * 5}%` }} />
              </div>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0 10px", borderTop: `1px solid ${N.border}`, marginTop: 8 }}>
          {navIcons.map((ic, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <i className={`ti ${ic}`} style={{ fontSize: 14, color: i === index % 5 ? N.iconActive : N.bar }} aria-hidden="true" />
              {i === index % 5 && <div style={{ width: 4, height: 4, borderRadius: 99, background: N.iconActive }} />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: 280, height: 190, flexShrink: 0, borderRadius: 16,
      background: N.bg, border: `1.5px solid ${N.border}`,
      overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Browser chrome */}
      <div style={{ height: 28, background: N.surface, borderBottom: `1px solid ${N.border}`, display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["#f87171","#facc15","#4ade80"].map((c) => (
            <div key={c} style={{ width: 7, height: 7, borderRadius: 99, background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, height: 14, borderRadius: 4, background: N.bg, border: `1px solid ${N.border}`, display: "flex", alignItems: "center", padding: "0 8px" }}>
          <i className="ti ti-lock" style={{ fontSize: 7, color: N.icon, marginRight: 3 }} aria-hidden="true" />
          <span style={{ fontSize: 7, color: N.icon }}>{project.demo || `app.${project.id}.io`}</span>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: 52, background: N.surface, borderRight: `1px solid ${N.border}`, padding: "10px 6px", display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: N.accent, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
            <Icon size={12} color="#fff" strokeWidth={2} />
          </div>
          {sideIcons.map((ic, i) => (
            <div key={i} style={{ width: 28, height: 28, borderRadius: 8, background: i === index % 4 ? N.iconBg : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className={`ti ${ic}`} style={{ fontSize: 14, color: i === index % 4 ? N.iconActive : N.bar }} aria-hidden="true" />
            </div>
          ))}
        </div>
        {/* Main content */}
        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ height: 8, borderRadius: 4, background: N.bar, width: 70 }} />
            <div style={{ height: 18, borderRadius: 6, background: N.accent, width: 44 }} />
          </div>
          {/* Stat cards — neutral */}
          <div style={{ display: "flex", gap: 6 }}>
            {[["#f8fafc","#e2e8f0"],["#f1f5f9","#cbd5e1"],["#e2e8f0","#94a3b8"]].map(([bg, fg], i) => (
              <div key={i} style={{ flex: 1, padding: "6px 8px", borderRadius: 8, background: bg, border: `1px solid ${fg}` }}>
                <div style={{ height: 4, width: "50%", borderRadius: 99, background: fg, marginBottom: 4 }} />
                <div style={{ height: 8, width: "70%", borderRadius: 99, background: fg, opacity: 0.7 }} />
              </div>
            ))}
          </div>
          {/* Table rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
            {[1,2,3,4].map((r) => (
              <div key={r} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: `1px solid ${N.lineDim}` }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: N.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="ti ti-file" style={{ fontSize: 9, color: N.icon }} aria-hidden="true" />
                </div>
                <div style={{ flex: 1, height: 5, borderRadius: 99, background: N.bar, width: `${50 + r * 10}%` }} />
                <div style={{ width: 28, height: 14, borderRadius: 4, background: N.pill, border: `1px solid ${N.border}` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Demo strip (scrollable preview carousel) ────────────────────────────────
function DemoStrip({ project }: { project: Project }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIdx, setActiveIdx]           = useState(0);
  const isMobile = project.category === "mobile";
  const slides   = getScreenSlides();
  const ITEM_W   = isMobile ? 176 : 296;

  const checkScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    setActiveIdx(Math.round(el.scrollLeft / ITEM_W));
  };

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    stripRef.current?.scrollBy({ left: dir === "right" ? ITEM_W : -ITEM_W, behavior: "smooth" });
  };

  const navBtn = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    [side]: 8,
    top: "50%",
    transform: "translateY(-60%)",
    width: 32, height: 32,
    borderRadius: 99,
    background: G.surface,
    border: `1px solid #e2e8f0`,
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer",
    color: G.primaryDark,
    zIndex: 5,
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={stripRef}
        style={{
          display: "flex", gap: 16, overflowX: "auto", paddingBottom: 12,
          scrollSnapType: "x mandatory", scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch", paddingLeft: 2, paddingRight: 2,
        }}
      >
        {slides.map((s, i) => (
          <div key={i} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
            <ScreenMock project={project} index={i} label={s.label} icon={s.icon} desc={s.desc} isMobileProject={isMobile} />
          </div>
        ))}
        <div style={{ width: 8, flexShrink: 0 }} />
      </div>

      {canScrollLeft && (
        <>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 12, width: 56, background: "linear-gradient(90deg, #f8fafc 0%, transparent 100%)", pointerEvents: "none" }} />
          <button onClick={() => scroll("left")} style={navBtn("left")}><ChevronLeft size={15} strokeWidth={2.5} /></button>
        </>
      )}
      {canScrollRight && (
        <>
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 12, width: 56, background: "linear-gradient(270deg, #f8fafc 0%, transparent 100%)", pointerEvents: "none" }} />
          <button onClick={() => scroll("right")} style={navBtn("right")}><ChevronRight size={15} strokeWidth={2.5} /></button>
        </>
      )}

      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 8 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => stripRef.current?.scrollTo({ left: i * ITEM_W, behavior: "smooth" })}
            style={{
              width: i === activeIdx ? 20 : 6, height: 6, borderRadius: 99,
              background: i === activeIdx ? G.primaryDark : "#cbd5e1",
              border: "none", cursor: "pointer", padding: 0, transition: "width 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Project detail modal ────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.icon;
  const statusCfg = STATUS_MAP[project.status];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(15,23,42,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 16px",
      }}
    >
      <style>{`
        .pm-scroll::-webkit-scrollbar { width: 5px; }
        .pm-scroll::-webkit-scrollbar-track { background: ${G.surfaceAlt}; border-radius: 99px; }
        .pm-scroll::-webkit-scrollbar-thumb { background: ${G.tintStrong}; border-radius: 99px; }
        .pm-scroll::-webkit-scrollbar-thumb:hover { background: ${G.primaryDark}; }
      `}</style>

      <div
        className="pm-scroll"
        style={{
          background: G.surface, borderRadius: 20,
          width: "100%", maxWidth: 700, maxHeight: "92vh",
          overflowY: "scroll", overflowX: "hidden",
          boxShadow: "0 24px 64px rgba(15,23,42,0.18)",
          display: "flex", flexDirection: "column",
        }}
      >
        {/* Accent top bar — #86EFAC as the signature stripe */}
        <div style={{ height: 3, background: G.primary, borderRadius: "20px 20px 0 0", flexShrink: 0 }} />

        {/* Header */}
        <div style={{ padding: "22px 26px 18px", display: "flex", alignItems: "flex-start", gap: 14, flexShrink: 0 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: G.tint, border: `1.5px solid ${G.tintStrong}`,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icon size={22} style={{ color: G.primaryDark }} strokeWidth={1.5} />
          </div>

          <div style={{ flex: 1, paddingTop: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7, flexWrap: "wrap" }}>
              {/* Status badge */}
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "3px 10px", borderRadius: 99,
                background: statusCfg.bg, border: `1px solid ${statusCfg.border}`,
                fontSize: 11, fontWeight: 600, color: statusCfg.color,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusCfg.dot, display: "inline-block" }} />
                {statusCfg.label}
              </span>
              {/* Category badge */}
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "3px 10px", borderRadius: 99,
                background: G.tint, border: `1px solid ${G.tintStrong}`,
                fontSize: 11, fontWeight: 500, color: G.primaryDeep, textTransform: "capitalize",
              }}>
                <Icon size={10} strokeWidth={2} />{project.category}
              </span>
              {/* Live badge */}
              {project.demo && (
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  padding: "3px 10px", borderRadius: 99,
                  background: G.tint, border: `1px solid ${G.primary}`,
                  fontSize: 11, fontWeight: 600, color: G.primaryDark,
                }}>
                  <Zap size={10} strokeWidth={2} />Live
                </span>
              )}
            </div>
            {/* Title — uses #86EFAC green for the name */}
            <h2 style={{ fontSize: 22, fontWeight: 800, color: G.ink, margin: "0 0 3px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              {project.title}
            </h2>
            <p style={{ fontSize: 13, color: G.muted, margin: 0, fontWeight: 500 }}>
              {project.shortDescription}
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              width: 34, height: 34, borderRadius: 10,
              background: G.surfaceAlt, border: `1px solid ${G.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: G.muted, flexShrink: 0,
            }}
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        <div style={{ height: 1, background: G.borderLight, margin: "0 26px", flexShrink: 0 }} />

        {/* Screen previews */}
        <div style={{ padding: "20px 26px 16px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Layers size={13} style={{ color: G.muted }} strokeWidth={2} />
            <span style={{ fontSize: 11, fontWeight: 700, color: G.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Screen previews
            </span>
            <div style={{ flex: 1, height: 1, background: G.borderLight }} />
            <span style={{ fontSize: 11, color: G.hint, fontWeight: 500 }}>scroll →</span>
          </div>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "18px 14px 12px" }}>
            <DemoStrip project={project} />
          </div>
        </div>

        <div style={{ height: 1, background: G.borderLight, margin: "0 26px", flexShrink: 0 }} />

        {/* Body */}
        <div style={{ padding: "22px 26px 32px", display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Tags + action links */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 6,
                  background: G.surfaceAlt, color: G.body, border: `1px solid ${G.border}`,
                }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  height: 34, padding: "0 14px", borderRadius: 10,
                  background: G.surfaceAlt, border: `1px solid ${G.border}`,
                  color: G.ink, fontSize: 12, fontWeight: 600, textDecoration: "none",
                }}>
                  <Github size={13} strokeWidth={1.5} />GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  height: 34, padding: "0 16px", borderRadius: 10,
                  background: G.primaryDark, color: "#ffffff",
                  fontSize: 12, fontWeight: 600, textDecoration: "none",
                }}>
                  <ExternalLink size={13} strokeWidth={2} />Live Demo
                </a>
              )}
            </div>
          </div>

          {/* About */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: G.hint, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>About</p>
            <p style={{ fontSize: 14, color: G.body, lineHeight: 1.85, margin: 0 }}>{project.description}</p>
          </div>

          {/* Key features */}
          {project.features.length > 0 && (
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: G.hint, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Key Features</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 10 }}>
                {project.features.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "12px 14px", borderRadius: 12,
                    background: G.surfaceAlt, border: `1px solid ${G.borderLight}`,
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 7,
                      background: G.tint, border: `1px solid ${G.tintStrong}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <CheckCircle2 size={12} style={{ color: G.primaryDark }} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: 12.5, color: G.ink, lineHeight: 1.55, fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: G.hint, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Tech Stack</p>
            <div style={{ background: G.surfaceAlt, border: `1px solid ${G.borderLight}`, borderRadius: 16, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 13 }}>
              {project.tech.map((t) => (
                <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: 12.5, color: G.ink, fontWeight: 600, width: 120, flexShrink: 0 }}>{t.name}</span>
                  <div style={{ flex: 1, height: 6, background: G.border, borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ width: `${t.level}%`, height: "100%", background: G.primary, borderRadius: 99 }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: G.primaryDeep, width: 34, textAlign: "right", flexShrink: 0 }}>{t.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 4 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 14px", borderRadius: 99,
              background: G.tint, border: `1px solid ${G.tintStrong}`,
              fontSize: 12, fontWeight: 600, color: G.primaryDeep, textTransform: "capitalize",
            }}>
              <Icon size={12} strokeWidth={2} />{project.category} project
            </div>
            <button onClick={onClose} style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              padding: "7px 18px", borderRadius: 10,
              background: G.surfaceAlt, border: `1px solid ${G.border}`,
              color: G.body, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>
              <X size={12} strokeWidth={2} />Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card thumbnail preview ──────────────────────────────────────────────────
function CardPreview({ project }: { project: Project }) {
  const Icon = project.icon;
  const isMobile = project.category === "mobile";

  if (isMobile) {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 10, height: "100%", paddingBottom: 8, background: "#f8fafc" }}>
        {[{ w: 68, h: 126, op: 0.45 }, { w: 80, h: 148, op: 1 }, { w: 68, h: 126, op: 0.45 }].map(({ w, h, op }, i) => (
          <div key={i} style={{
            width: w, height: h, borderRadius: 16,
            background: "#ffffff", border: "1.5px solid #e2e8f0",
            opacity: op, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 5,
            overflow: "hidden", position: "relative",
          }}>
            <div style={{ position: "absolute", top: 7, width: 20, height: 3, borderRadius: 99, background: "#e2e8f0" }} />
            <Icon size={i === 1 ? 18 : 14} style={{ color: "#94a3b8" }} strokeWidth={1.5} />
            <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
              {[80, 60, 70].map((w2, j) => (
                <div key={j} style={{ width: w2 * 0.4, height: 2.5, borderRadius: 99, background: "#e2e8f0" }} />
              ))}
            </div>
            <div style={{ position: "absolute", bottom: 7, display: "flex", gap: 3, justifyContent: "center" }}>
              {[0,1,2].map(k => <div key={k} style={{ width: k === 0 ? 10 : 4, height: 4, borderRadius: 99, background: k === 0 ? "#94a3b8" : "#e2e8f0" }} />)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc", position: "relative", overflow: "hidden" }}>
      {/* Neutral dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        opacity: 0.6,
      }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: "#ffffff", border: "1.5px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={22} style={{ color: "#94a3b8" }} strokeWidth={1.5} />
        </div>
        <span style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}>Preview</span>
      </div>
    </div>
  );
}

// ─── Project card ────────────────────────────────────────────────────────────
function ProjectCard({ project, onView }: { project: Project; onView: (p: Project) => void }) {
  const Icon = project.icon;
  const statusCfg = STATUS_MAP[project.status];

  return (
    <div
      style={{
        background: G.surface,
        border: `1px solid ${G.border}`,
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "box-shadow 0.2s, border-color 0.2s",
      }}
      onClick={() => onView(project)}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(34,197,94,0.12)";
        (e.currentTarget as HTMLDivElement).style.borderColor = G.tintStrong;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.borderColor = G.border;
      }}
    >
      {/* Thumbnail */}
      <div style={{ height: project.category === "mobile" ? 170 : 150, position: "relative", overflow: "hidden" }}>
        <CardPreview project={project} />
        {/* Category badge */}
        <div style={{ position: "absolute", bottom: 10, left: 12, padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.92)", fontSize: 10, fontWeight: 600, color: G.body, textTransform: "capitalize" }}>{project.category}</div>
        {/* Status badge */}
        <div style={{ position: "absolute", bottom: 10, right: 12, padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.92)", fontSize: 10, fontWeight: 600, color: statusCfg.color, display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: statusCfg.dot, display: "inline-block" }} />{statusCfg.label}
        </div>
        {/* Live badge */}
        {project.demo && (
          <div style={{ position: "absolute", top: 10, right: 12, padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.92)", fontSize: 10, fontWeight: 600, color: G.primaryDeep, border: `1px solid ${G.tintStrong}` }}>Live</div>
        )}
        {/* Top accent stripe — #86EFAC */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: G.primary }} />
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: G.ink, margin: 0, letterSpacing: "-0.02em" }}>{project.title}</h3>
            <p style={{ fontSize: 11.5, color: G.muted, margin: "2px 0 0", fontWeight: 500 }}>{project.shortDescription}</p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: G.tint, border: `1px solid ${G.tintStrong}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon size={15} style={{ color: G.primaryDark }} strokeWidth={1.5} />
          </div>
        </div>

        <p style={{ fontSize: 12, color: G.muted, lineHeight: 1.65, margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} style={{ fontSize: 10, fontWeight: 500, padding: "3px 8px", borderRadius: 5, background: G.surfaceAlt, color: G.body, border: `1px solid ${G.border}` }}>{tag}</span>
          ))}
          {project.tags.length > 4 && <span style={{ fontSize: 10, color: G.hint, padding: "3px 0" }}>+{project.tags.length - 4}</span>}
        </div>

        {/* Actions row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: `1px solid ${G.borderLight}`, marginTop: "auto" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ width: 28, height: 28, borderRadius: 8, background: G.surfaceAlt, border: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: G.body, textDecoration: "none" }}
              >
                <Github size={13} strokeWidth={1.5} />
              </a>
            ) : (
              <div style={{ padding: "5px 10px", borderRadius: 8, background: G.surfaceAlt, border: `1px solid ${G.borderLight}`, fontSize: 10, color: G.hint, fontWeight: 500 }}>Private</div>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ width: 28, height: 28, borderRadius: 8, background: G.tint, border: `1px solid ${G.tintStrong}`, display: "flex", alignItems: "center", justifyContent: "center", color: G.primaryDark, textDecoration: "none" }}
              >
                <ExternalLink size={13} strokeWidth={1.5} />
              </a>
            )}
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 8, background: G.surfaceAlt, border: `1px solid ${G.border}`, color: G.body, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
            View details <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────
export default function ProjectsComponent() {
  const [filter, setFilter]             = useState<"all" | "web" | "mobile">("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAll, setShowAll]           = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all",    label: "All Projects" },
    { id: "web",    label: "Web"          },
    { id: "mobile", label: "Mobile"       },
  ];
  const statuses = [
    { id: "all",       label: "All"         },
    { id: "active",    label: "In Progress" },
    { id: "completed", label: "Completed"   },
  ];

  const filtered = PROJECTS_DATA.filter(
    (p) =>
      (filter === "all" || p.category === filter) &&
      (statusFilter === "all" || p.status === statusFilter)
  );

  const INITIAL  = 6;
  const displayed = showAll ? filtered : filtered.slice(0, INITIAL);

  return (
    <section id="projects" style={{ padding: "80px 20px", background: G.surface, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          {/* "Portfolio" pill badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 14px", borderRadius: 99,
            background: G.tint, border: `1px solid ${G.tintStrong}`,
            fontSize: 11, fontWeight: 600, color: G.primaryDeep,
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16,
          }}>
            Portfolio
          </div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: G.ink, margin: "0 0 12px", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Featured{" "}
            {/* Saturated green with broken/dashed underline — matches "together." style */}
            <span style={{
              color: G.primaryDark,
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              textDecorationColor: G.primary,
              textDecorationThickness: 3,
              textUnderlineOffset: 6,
            }}>Projects</span>
          </h2>
          <p style={{ fontSize: 15, color: G.muted, maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            A curated selection of work spanning web platforms, mobile apps, and full-stack systems.
          </p>
        </div>

        {/* Filter pills */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
          {/* Category filter */}
          <div style={{ display: "flex", gap: 3, padding: 4, borderRadius: 12, background: G.surfaceAlt, border: `1px solid ${G.border}` }}>
            {categories.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => { setFilter(c.id as any); setShowAll(false); }}
                  style={{
                    padding: "6px 16px", borderRadius: 9, border: "none",
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                    background: active ? G.surface : "transparent",
                    color: active ? G.ink : G.hint,
                    boxShadow: active ? "0 1px 4px rgba(0,0,0,0.07)" : "none",
                    transition: "all 0.15s",
                  }}
                >{c.label}</button>
              );
            })}
          </div>
          {/* Status filter */}
          <div style={{ display: "flex", gap: 3, padding: 4, borderRadius: 12, background: G.surfaceAlt, border: `1px solid ${G.border}` }}>
            {statuses.map((s) => {
              const active = statusFilter === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => { setStatusFilter(s.id); setShowAll(false); }}
                  style={{
                    padding: "6px 14px", borderRadius: 9, border: "none",
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                    background: active ? G.surface : "transparent",
                    color: active ? G.ink : G.hint,
                    boxShadow: active ? "0 1px 4px rgba(0,0,0,0.07)" : "none",
                    transition: "all 0.15s",
                  }}
                >{s.label}</button>
              );
            })}
          </div>
        </div>

        {/* Count */}
        <div style={{ marginBottom: 20, paddingLeft: 2 }}>
          <span style={{ fontSize: 12, color: G.hint, fontWeight: 500 }}>Showing {displayed.length} of {filtered.length} projects</span>
        </div>

        {/* Grid */}
        {displayed.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 18 }}>
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} onView={setSelectedProject} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "72px 0", background: G.surfaceAlt, borderRadius: 16, border: `1px dashed ${G.border}` }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: G.ink, marginBottom: 6 }}>No projects found</p>
            <p style={{ fontSize: 13, color: G.hint, marginBottom: 20 }}>Try adjusting the filters above</p>
            <button
              onClick={() => { setFilter("all"); setStatusFilter("all"); setShowAll(false); }}
              style={{ padding: "8px 20px", borderRadius: 10, background: G.primaryDark, color: "#ffffff", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer" }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Show more / less */}
        {filtered.length > INITIAL && (
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 24px", borderRadius: 12,
                background: G.surface, color: G.body,
                fontSize: 13, fontWeight: 600,
                border: `1.5px solid ${G.border}`, cursor: "pointer",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = G.tintStrong)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = G.border)}
            >
              {showAll
                ? "Show less"
                : <><span>View {filtered.length - INITIAL} more projects</span><ArrowUpRight size={14} /></>}
            </button>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}