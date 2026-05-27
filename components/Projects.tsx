"use client";

import { useState } from "react";
import {
  Github,
  Star,
  Users,
  GitFork,
  FolderOpen,
  Briefcase,
  Globe,
  Globe2,
  Smartphone,
  BookOpen,
  Braces,
  Palette,
  Database,
  Terminal,
  Layers,
  Clock,
  ExternalLink,
  Sprout,
  Cloud,
  Truck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function CreditCard(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

// ------------------- TYPES -------------------
interface Tech {
  name: string;
  icon: React.ComponentType<any>;
  level: number;
}

interface UserRole {
  [key: string]: string[];
}

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  category: string;
  icon: React.ComponentType<any>;
  color: string;
  lightColor: string;
  stats: {
    stars: number;
    forks: number;
    lastUpdated: string;
    contributors: number;
  };
  features: string[];
  tech: Tech[];
  status?: "active" | "completed" | "planned";
  userRoles?: UserRole;
  pages?: string[];
  projectOrder?: number;
}

// ------------------- PROJECT DATA -------------------
const PROJECTS_DATA: Project[] = [
  {
    id: "e-edir",
    title: "E-Edir",
    shortDescription: "A Full Stack Next.js 14 Edir Management App",
    description: `E-Edir digitizes the traditional communal fund management system (Edir). Transforms manual processes into a streamlined digital platform. Developed as a CBT project at Jimma University Institute of Technology.`,
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Chapa", "Zod", "Shadcn", "uploadthing"],
    github: "https://github.com/whiHak/E-Edir",
    demo: "https://e-edir.vercel.app",
    category: "web",
    icon: Globe,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: { stars: 2, forks: 0, lastUpdated: "Feb 2026", contributors: 3 },
    tech: [
      { name: "Next.js", icon: Braces, level: 90 },
      { name: "TypeScript", icon: Braces, level: 90 },
      { name: "TailwindCSS", icon: Palette, level: 85 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Chapa", icon: CreditCard, level: 80 },
    ],
    status: "completed",
    features: [
      "Authentication with Clerk",
      "Edirs full CRUD operations",
      "Chapa payment integration",
      "Role-based admin & user dashboards",
    ],
  },
  {
    id: "agrilink",
    title: "AgriLink Platform",
    shortDescription: "Digital marketplace connecting farmers directly with buyers",
    description: "Platform empowering farmers to sell produce directly to buyers, eliminating middlemen. Features real-time pricing, logistics integration, and mobile-first design for rural areas.",
    tags: ["Next.js", "TypeScript", "React Native", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    github: null,
    demo: null,
    category: "web",
    icon: Sprout,
    color: "#16a34a",
    lightColor: "#dcfce7",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 2 },
    features: [
      "Farmer-to-Buyer Direct Connection",
      "Real-time Price Tracking",
      "Logistics & Delivery Integration",
      "Payment Escrow System",
    ],
    tech: [
      { name: "Next.js 14", icon: Braces, level: 90 },
      { name: "TypeScript", icon: Braces, level: 88 },
      { name: "React Native", icon: Smartphone, level: 85 },
      { name: "PostgreSQL", icon: Database, level: 82 },
      { name: "Redis", icon: Database, level: 75 },
    ],
    status: "active",
  },
  {
    id: "agrilink-mobile-flutter",
    title: "AgriLink Mobile",
    shortDescription: "Mobile-first marketplace for farmers in Flutter",
    description: "Flutter-based version of AgriLink. Built with Clean Architecture, BLoC, Dio, GetIt, and GoRouter. Designed for rural areas with offline-first support and low-bandwidth browsing.",
    tags: ["Flutter", "Dart", "Clean Architecture", "BLoC", "GetIt", "GoRouter", "Dio", "MongoDB"],
    github: null,
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#16a34a",
    lightColor: "#dcfce7",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 2 },
    features: [
      "Mobile-first Flutter design",
      "Fast browsing in low bandwidth",
      "Offline-first support",
      "Real-time price tracking",
    ],
    tech: [
      { name: "Flutter", icon: Smartphone, level: 95 },
      { name: "Dart", icon: Braces, level: 90 },
      { name: "BLoC", icon: Layers, level: 90 },
      { name: "Dio", icon: Cloud, level: 80 },
      { name: "SQLite", icon: Database, level: 75 },
    ],
    status: "active",
  },
  {
    id: "gurmuu-website",
    title: "Gurmuu Platform",
    shortDescription: "Community platform connecting people through technology",
    description: "Full-stack web app for Gurmuu Tola Oltummaa. Showcases programs, achievements, training resources, and provides donation & volunteer management with role-based access.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Node.js", "Express", "Zustand", "Chapa"],
    github: "https://github.com/Gemeda4927/gurmuu-website",
    demo: null,
    category: "web",
    icon: Globe,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: { stars: 12, forks: 4, lastUpdated: "Feb 2026", contributors: 3 },
    tech: [
      { name: "Next.js", icon: Braces, level: 90 },
      { name: "Prisma", icon: Database, level: 80 },
      { name: "PostgreSQL", icon: Database, level: 75 },
      { name: "Zustand", icon: Database, level: 85 },
      { name: "Chapa", icon: CreditCard, level: 80 },
    ],
    status: "completed",
    features: [
      "Super Admin, Admin, Public role-based access",
      "Donation management with Chapa",
      "Training resources & media uploads",
      "Volunteer & partnership applications",
    ],
  },
  {
    id: "debo-erp-mobile",
    title: "DeboERP Mobile",
    shortDescription: "Mobile enterprise & workforce management system",
    description: "Comprehensive mobile ERP for organizations and government institutions. Enables employees and managers to collaborate via letter management, appointments, evaluations, and attendance.",
    tags: ["React Native", "TypeScript", "Expo", "Zustand", "MySQL", "REST API", "Push Notifications"],
    github: "https://github.com/Debo-Engineering-Plc/debo-erp-mobile-app",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 3 },
    features: [
      "Letter management with tracking",
      "Appointment booking with real-time slots",
      "Performance evaluation & reporting",
      "Mobile attendance check-in/check-out",
    ],
    tech: [
      { name: "React Native", icon: Smartphone, level: 95 },
      { name: "TypeScript", icon: Braces, level: 90 },
      { name: "Expo", icon: Braces, level: 85 },
      { name: "Zustand", icon: Database, level: 85 },
      { name: "MySQL", icon: Database, level: 75 },
    ],
    status: "completed",
  },
  {
    id: "news-hub-ultra",
    title: "News Hub Ultra",
    shortDescription: "Flutter mobile app providing categorized news from multiple APIs",
    description: "Flutter app for browsing categorized news from multiple APIs. Built with clean architecture, Provider state management, and Dio for networking. Features offline caching and search.",
    tags: ["Flutter", "Dart", "Dio", "Provider", "Clean Architecture", "REST API"],
    github: "https://github.com/SBAK729/News-APInews_hub_ultra",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#0ea5e9",
    lightColor: "#d0f0fd",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 2 },
    features: [
      "Categorized news from multiple APIs",
      "Search and filter articles",
      "Offline caching",
      "Clean Architecture with Provider",
    ],
    tech: [
      { name: "Flutter", icon: Smartphone, level: 90 },
      { name: "Dart", icon: Braces, level: 88 },
      { name: "Dio", icon: Cloud, level: 85 },
      { name: "Provider", icon: Database, level: 85 },
      { name: "Clean Architecture", icon: Layers, level: 80 },
    ],
    status: "completed",
  },
  {
    id: "m-market",
    title: "M-Market",
    shortDescription: "Modern e-commerce platform with digital wallet and secure payments",
    description: "PHP-based e-commerce site and my first completed project. Includes product catalogs, digital wallet integration, user profiles, and secure payment processing with MySQL.",
    tags: ["PHP", "HTML", "CSS", "MySQL", "XAMPP"],
    github: "https://github.com/Gemeda4927/M-market",
    demo: null,
    category: "web",
    icon: Globe,
    color: "#f97316",
    lightColor: "#ffe8d5",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 1 },
    features: [
      "Product catalog and categories",
      "Digital wallet payments",
      "Order tracking and history",
      "Admin product & user management",
    ],
    tech: [
      { name: "PHP", icon: Braces, level: 90 },
      { name: "HTML/CSS", icon: Palette, level: 95 },
      { name: "MySQL", icon: Database, level: 85 },
      { name: "XAMPP", icon: Cloud, level: 80 },
    ],
    status: "completed",
    projectOrder: 1,
  },
  {
    id: "cpp-worksheet",
    title: "C++ Worksheet",
    shortDescription: "Interactive learning platform to master C++ fundamentals",
    description: "Interactive platform for students to master C++ through structured practice, real-time feedback, and gamified progress tracking across multiple difficulty levels.",
    tags: ["C++", "React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/Gemeda4927/Programming-%F0%9F%93%98%20C++%20Programming%20Worksheet%20%E2%9C%A8",
    demo: "https://abjworksheet.vercel.app",
    category: "web",
    icon: BookOpen,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 1 },
    features: [
      "Topic-based learning: Arrays, Functions, Structures",
      "Easy, Medium, Hard difficulty levels",
      "Fill-in-blanks, debugging, coding exercises",
      "Gamified progress dashboard",
    ],
    tech: [
      { name: "C++", icon: Terminal, level: 95 },
      { name: "Next.js", icon: Braces, level: 90 },
      { name: "MongoDB", icon: Database, level: 80 },
      { name: "Chart.js", icon: Layers, level: 75 },
    ],
    status: "completed",
  },
  {
    id: "delala-mobile",
    title: "Delala Mobile App",
    shortDescription: "Digital marketplace for buying & selling properties, vehicles, electronics, and more.",
    description: "Feature-rich digital broker app built with Flutter Clean Architecture and BLoC. Developed during internship at Eagle Lion Systems. Connects users with products and services through a scalable monorepo.",
    tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Node.js", "MongoDB", "JWT", "Chappa API"],
    github: "https://github.com/Gemeda4927/Delala",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#0ea5e9",
    lightColor: "#d0f0fd",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 1 },
    tech: [
      { name: "Flutter", icon: Smartphone, level: 95 },
      { name: "BLoC", icon: Layers, level: 90 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "MongoDB", icon: Database, level: 80 },
      { name: "Chappa API", icon: CreditCard, level: 80 },
    ],
    features: [
      "JWT-based secure authentication",
      "Seller listing management (CRUD)",
      "Chappa payment integration",
      "Role dashboards: Customer, Supplier, Admin",
    ],
    status: "active",
  },
  {
    id: "edumart",
    title: "Edumart Platform",
    shortDescription: "Full-stack e-learning marketplace for courses and educational content.",
    description: "E-learning platform where instructors create and sell courses, and students browse, purchase, and access content. Built with React, Node.js, MongoDB, and Stripe payment integration.",
    tags: ["React.js", "TailwindCSS", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe API"],
    github: "https://github.com/Gemeda4927/edumart2",
    demo: null,
    category: "web",
    icon: Globe,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: { stars: 0, forks: 0, lastUpdated: "Feb 2026", contributors: 2 },
    tech: [
      { name: "React.js", icon: Braces, level: 90 },
      { name: "Redux", icon: Layers, level: 80 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "MongoDB", icon: Database, level: 85 },
      { name: "Stripe API", icon: CreditCard, level: 75 },
    ],
    features: [
      "Role-based access: student, instructor, admin",
      "Course creation and video upload",
      "Stripe payment integration",
      "Admin moderation and analytics",
    ],
    status: "active",
  },
];

// ------------------- STATUS CONFIG -------------------
const statusConfig = {
  active:    { label: "Active",    style: { background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" } },
  completed: { label: "Completed", style: { background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" } },
  planned:   { label: "Planned",   style: { background: "#f5f3ff", color: "#7c3aed", border: "1px solid #ddd6fe" } },
};

// ------------------- PROJECT CARD -------------------
function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;
  const PREVIEW_FEATURES = 2;
  const cfg = project.status ? statusConfig[project.status] : null;

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={16} style={{ color: project.color }} strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 2 }}>
              {project.title}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  padding: "1px 7px",
                  borderRadius: 4,
                  background: "#f3f4f6",
                  color: "#6b7280",
                  border: "1px solid #e5e7eb",
                  textTransform: "capitalize",
                }}
              >
                {project.category}
              </span>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>
                {project.stats.lastUpdated}
              </span>
            </div>
          </div>
        </div>

        {/* Status + live dot */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          {project.demo && (
            <span style={{ fontSize: 10, color: "#16a34a", fontWeight: 500 }}>● Live</span>
          )}
          {cfg && (
            <span style={{ fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 4, ...cfg.style }}>
              {cfg.label}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 11, color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
        {project.description}
      </p>

      {/* Features — show 2, expand */}
      {project.features.length > 0 && (
        <div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 4, margin: 0, padding: 0, listStyle: "none" }}>
            {(expanded ? project.features : project.features.slice(0, PREVIEW_FEATURES)).map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#d1d5db", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 11, color: "#6b7280" }}>{f}</span>
              </li>
            ))}
          </ul>
          {project.features.length > PREVIEW_FEATURES && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 3,
                marginTop: 6,
                fontSize: 10,
                color: "#9ca3af",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {expanded
                ? <><ChevronUp size={11} /> Show less</>
                : <><ChevronDown size={11} /> +{project.features.length - PREVIEW_FEATURES} more</>
              }
            </button>
          )}
        </div>
      )}

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 4,
              background: "#f3f4f6",
              color: "#6b7280",
              border: "1px solid #e5e7eb",
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span style={{ fontSize: 10, color: "#9ca3af" }}>+{project.tags.length - 5}</span>
        )}
      </div>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingTop: 10, borderTop: "1px solid #f3f4f6" }}>
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech.name}
            style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 4,
              background: "#f9fafb",
              color: "#6b7280",
              border: "1px solid #e5e7eb",
            }}
          >
            {tech.name}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span style={{ fontSize: 10, color: "#9ca3af" }}>+{project.tech.length - 4}</span>
        )}
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6b7280" }}>
          <Star size={12} style={{ color: "#d97706" }} /> {project.stats.stars}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6b7280" }}>
          <GitFork size={12} style={{ color: "#7c3aed" }} /> {project.stats.forks}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6b7280" }}>
          <Users size={12} style={{ color: "#16a34a" }} /> {project.stats.contributors}
        </span>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, paddingTop: 4 }}>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "7px 12px",
              borderRadius: 8,
              background: "#111827",
              color: "#ffffff",
              fontSize: 11,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Github size={13} /> Code
          </a>
        ) : (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "7px 12px",
              borderRadius: 8,
              background: "#f3f4f6",
              color: "#9ca3af",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <Github size={13} /> Private
          </div>
        )}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "7px 12px",
              borderRadius: 8,
              background: "#f0fdf4",
              color: "#16a34a",
              border: "1px solid #bbf7d0",
              fontSize: 11,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <ExternalLink size={13} /> Demo
          </a>
        ) : (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "7px 12px",
              borderRadius: 8,
              background: "#f3f4f6",
              color: "#9ca3af",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <Clock size={13} /> {project.status === "active" ? "In Progress" : "Soon"}
          </div>
        )}
      </div>
    </div>
  );
}

// ------------------- MAIN COMPONENT -------------------
export default function ProjectsComponent() {
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all",    label: "All"    },
    { id: "web",    label: "Web"    },
    { id: "mobile", label: "Mobile" },
  ];

  const statuses = [
    { id: "all",       label: "All"       },
    { id: "active",    label: "Active"    },
    { id: "completed", label: "Completed" },
    { id: "planned",   label: "Planned"   },
  ];

  const filtered = PROJECTS_DATA.filter((p) => {
    const cat = filter === "all" || p.category === filter;
    const sta = statusFilter === "all" || p.status === statusFilter;
    return cat && sta;
  });

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  const totalStats = {
    projects: PROJECTS_DATA.length,
    stars: PROJECTS_DATA.reduce((a, p) => a + p.stats.stars, 0),
    forks: PROJECTS_DATA.reduce((a, p) => a + p.stats.forks, 0),
    contributors: PROJECTS_DATA.reduce((a, p) => a + p.stats.contributors, 0),
  };

  const filterBtnStyle = (active: boolean) => ({
    padding: "5px 14px",
    borderRadius: 6,
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    border: active ? "1px solid #e5e7eb" : "1px solid transparent",
    background: active ? "#ffffff" : "transparent",
    color: active ? "#111827" : "#9ca3af",
  });

  return (
    <section id="projects" style={{ padding: "64px 16px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            My{" "}
            <span style={{ color: "#22c55e", borderBottom: "2px solid #22c55e", paddingBottom: 1 }}>
              Projects
            </span>
          </h2>
          <p style={{ fontSize: 12, color: "#6b7280", maxWidth: 400, margin: "0 auto" }}>
            Building solutions that make a difference
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 36 }}>
          {/* Category */}
          <div
            style={{
              display: "flex",
              gap: 4,
              padding: 4,
              borderRadius: 8,
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
            }}
          >
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => { setFilter(c.id); setShowAll(false); }}
                style={filterBtnStyle(filter === c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Status */}
          <div
            style={{
              display: "flex",
              gap: 4,
              padding: 4,
              borderRadius: 8,
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
            }}
          >
            {statuses.map((s) => (
              <button
                key={s.id}
                onClick={() => { setStatusFilter(s.id); setShowAll(false); }}
                style={filterBtnStyle(statusFilter === s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {displayed.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 16,
            }}
          >
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <FolderOpen size={28} style={{ color: "#d1d5db", margin: "0 auto 12px" }} />
            <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 4 }}>No projects found</p>
            <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 16 }}>
              No projects match the selected filters.
            </p>
            <button
              onClick={() => { setFilter("all"); setStatusFilter("all"); setShowAll(false); }}
              style={{
                padding: "7px 18px",
                borderRadius: 8,
                background: "#111827",
                color: "#ffffff",
                fontSize: 11,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Show more / less */}
        {filtered.length > 6 && (
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 20px",
                borderRadius: 8,
                background: "#111827",
                color: "#ffffff",
                fontSize: 11,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              {showAll ? (
                <><ChevronUp size={13} /> Show Less</>
              ) : (
                <><ChevronDown size={13} /> +{filtered.length - 6} more projects</>
              )}
            </button>
          </div>
        )}

    

      </div>
    </section>
  );
}