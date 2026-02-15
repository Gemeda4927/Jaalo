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
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

// ------------------- CreditCard Icon -------------------
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
      <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        ry="2"
      />
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
}

interface ProjectCardProps {
  project: Project;
  hoveredProject: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
}

// ------------------- PROJECT DATA -------------------
const PROJECTS_DATA: Project[] = [
  {
    id: "agrilink",
    title: "AgriLink Platform",
    shortDescription:
      "Digital marketplace connecting farmers directly with buyers",
    description:
      "A comprehensive platform empowering farmers to sell produce directly to buyers, eliminating middlemen. Features real-time pricing, logistics integration, and mobile-first design for rural areas.",
    tags: [
      "Next.js",
      "TypeScript",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebSocket",
    ],
    github: null,
    demo: null,
    category: "web",
    icon: Sprout,
    color: "#16a34a",
    lightColor: "#dcfce7",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 2,
    },
    features: [
      "Farmer-to-Buyer Direct Connection",
      "Real-time Price Tracking",
      "Logistics & Delivery Integration",
      "Mobile App for Rural Access",
      "Payment Escrow System",
      "Quality Certification",
      "Weather Integration",
      "Multi-language Support",
    ],
    tech: [
      { name: "Next.js 14", icon: Braces, level: 90 },
      { name: "TypeScript", icon: Braces, level: 88 },
      { name: "React Native", icon: Smartphone, level: 85 },
      { name: "Node.js", icon: Terminal, level: 87 },
      { name: "PostgreSQL", icon: Database, level: 82 },
      { name: "Redis", icon: Database, level: 75 },
      { name: "WebSocket", icon: Cloud, level: 70 },
    ],
    status: "active",
  },
  {
    id: "gurmuu-website",
    title: "Gurmuu Platform",
    shortDescription:
      "Community platform connecting people through technology",
    description:
      "Full-stack web app with event management, blog system, and role-based access for community engagement.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
    ],
    github:
      "https://github.com/Gemeda4927/gurmuu-website",
    demo: null,
    category: "web",
    icon: Globe,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: {
      stars: 12,
      forks: 4,
      lastUpdated: "Feb 2026",
      contributors: 3,
    },
    features: [
      "Event Creation",
      "Blog System",
      "Role-based Access",
      "Admin Dashboard",
      "Real-time Notifications",
      "User Profiles",
    ],
    tech: [
      {
        name: "Next.js",
        icon: Braces,
        level: 90,
      },
      {
        name: "TypeScript",
        icon: Braces,
        level: 85,
      },
      {
        name: "Tailwind",
        icon: Palette,
        level: 95,
      },
      {
        name: "Prisma",
        icon: Database,
        level: 80,
      },
      {
        name: "PostgreSQL",
        icon: Database,
        level: 75,
      },
    ],
    status: "completed",
  },
  {
    id: "profile-readme",
    title: "Developer Portfolio",
    shortDescription:
      "Interactive GitHub profile showcasing skills",
    description:
      "Dynamic GitHub profile README with real-time stats and project showcases.",
    tags: [
      "Markdown",
      "GitHub Actions",
      "JavaScript",
      "HTML/CSS",
    ],
    github:
      "https://github.com/Gemeda4927/Gemeda4927",
    demo: "https://github.com/Gemeda4927",
    category: "web",
    icon: Briefcase,
    color: "#7c3aed",
    lightColor: "#ede9fe",
    stats: {
      stars: 8,
      forks: 3,
      lastUpdated: "Oct 2025",
      contributors: 1,
    },
    features: [
      "Tech Matrix",
      "Experience Timeline",
      "GitHub Analytics",
      "Learning Showcase",
    ],
    tech: [
      {
        name: "Markdown",
        icon: Braces,
        level: 95,
      },
      {
        name: "GitHub Actions",
        icon: Terminal,
        level: 85,
      },
      {
        name: "JavaScript",
        icon: Braces,
        level: 80,
      },
      {
        name: "HTML/CSS",
        icon: Palette,
        level: 90,
      },
    ],
    status: "completed",
  },
  {
    id: "debo-erp",
    title: "Debo ERP Mobile",
    shortDescription:
      "ERP for engineering projects",
    description:
      "Mobile ERP solution with project tracking, inventory, and task assignment for engineering firms.",
    tags: [
      "React Native",
      "TypeScript",
      "Redux",
      "Node.js",
      "MongoDB",
    ],
    github:
      "https://github.com/Debo-Engineering-Plc/debo-erp-mobile-app",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#059669",
    lightColor: "#d1fae5",
    stats: {
      stars: 18,
      forks: 6,
      lastUpdated: "Jan 2026",
      contributors: 5,
    },
    features: [
      "Project Dashboard",
      "Inventory Tracking",
      "Task Assignment",
      "Offline Sync",
      "Financial Reports",
      "Time Tracking",
    ],
    tech: [
      {
        name: "React Native",
        icon: Smartphone,
        level: 88,
      },
      {
        name: "TypeScript",
        icon: Braces,
        level: 85,
      },
      {
        name: "Redux Toolkit",
        icon: Layers,
        level: 90,
      },
      {
        name: "Node.js",
        icon: Terminal,
        level: 82,
      },
      {
        name: "MongoDB",
        icon: Database,
        level: 78,
      },
    ],
    status: "completed",
  },
  {
    id: "cpp-tutorial",
    title: "C++ Learning Platform",
    shortDescription:
      "Interactive platform with real-time code execution",
    description:
      "Platform for learning C++ with 150+ practice problems and automated grading.",
    tags: [
      "C++",
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
    github:
      "https://github.com/Gemeda4927/programming-cpp",
    demo: null,
    category: "web",
    icon: BookOpen,
    color: "#dc2626",
    lightColor: "#fee2e2",
    stats: {
      stars: 23,
      forks: 8,
      lastUpdated: "Dec 2025",
      contributors: 4,
    },
    features: [
      "150+ Problems",
      "Code Execution",
      "Automated Grading",
      "Progress Tracking",
    ],
    tech: [
      { name: "C++", icon: Terminal, level: 95 },
      { name: "React", icon: Braces, level: 85 },
      {
        name: "Node.js",
        icon: Terminal,
        level: 80,
      },
      {
        name: "MongoDB",
        icon: Database,
        level: 75,
      },
      { name: "Docker", icon: Braces, level: 70 },
    ],
    status: "completed",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "Online store with payment integration",
    description:
      "E-commerce platform with product catalog, shopping cart, and Stripe/PayPal integration.",
    tags: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Prisma",
      "PostgreSQL",
    ],
    github:
      "https://github.com/Gemeda4927/ecommerce-platform",
    demo: null,
    category: "web",
    icon: Globe2,
    color: "#e11d48",
    lightColor: "#ffe4e6",
    stats: {
      stars: 5,
      forks: 2,
      lastUpdated: "Jan 2026",
      contributors: 2,
    },
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Gateway",
      "Order Tracking",
      "Admin Dashboard",
    ],
    tech: [
      {
        name: "Next.js",
        icon: Braces,
        level: 92,
      },
      {
        name: "TypeScript",
        icon: Braces,
        level: 88,
      },
      {
        name: "Stripe",
        icon: CreditCard,
        level: 85,
      },
      {
        name: "Prisma",
        icon: Database,
        level: 82,
      },
      {
        name: "PostgreSQL",
        icon: Database,
        level: 80,
      },
    ],
    status: "planned",
  },
];

// ------------------- ANIMATION VARIANTS -------------------
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// ------------------- MAIN COMPONENT -------------------
export default function ProjectsComponent() {
  const [filter, setFilter] =
    useState<string>("all");
  const [hoveredProject, setHoveredProject] =
    useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const categories = [
    {
      id: "all",
      label: "All Projects",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "web",
      label: "Web Apps",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const statuses = [
    { id: "all", label: "All Status", color: "gray" },
    { id: "active", label: "Active Development", color: "green" },
    { id: "completed", label: "Completed", color: "blue" },
    { id: "planned", label: "Planned", color: "purple" },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const categoryMatch = filter === "all" || p.category === filter;
    const statusMatch = statusFilter === "all" || p.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const totalStats = {
    stars: PROJECTS_DATA.reduce(
      (acc, p) => acc + p.stats.stars,
      0
    ),
    forks: PROJECTS_DATA.reduce(
      (acc, p) => acc + p.stats.forks,
      0
    ),
    contributors: PROJECTS_DATA.reduce(
      (acc, p) => acc + p.stats.contributors,
      0
    ),
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
            My
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Building innovative solutions that make a difference
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const active = filter === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 ${
                    active
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : "bg-white text-gray-600 border border-gray-200 hover:shadow-md"
                  }`}
                >
                  <Icon size={18} />
                  {cat.label}
                </motion.button>
              );
            })}
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {statuses.map((status) => {
              const active = statusFilter === status.id;
              const colorClasses = {
                gray: active ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                green: active ? "bg-green-600 text-white" : "bg-green-50 text-green-600 hover:bg-green-100",
                blue: active ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600 hover:bg-blue-100",
                purple: active ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-600 hover:bg-purple-100",
              };

              return (
                <motion.button
                  key={status.id}
                  onClick={() => setStatusFilter(status.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    colorClasses[status.color as keyof typeof colorClasses]
                  }`}
                >
                  {status.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${statusFilter}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                >
                  <ProjectCard
                    project={project}
                    hoveredProject={
                      hoveredProject
                    }
                    onHover={setHoveredProject}
                    onLeave={() =>
                      setHoveredProject(null)
                    }
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                  <FolderOpen
                    size={32}
                    className="text-gray-400"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500">
                  No projects match the selected
                  filters.
                </p>
                <button
                  onClick={() => {
                    setFilter("all");
                    setStatusFilter("all");
                  }}
                  className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  View all projects
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              {
                value: PROJECTS_DATA.length,
                label: "Total Projects",
                color: "text-blue-600",
                icon: FolderOpen,
              },
              {
                value: totalStats.stars,
                label: "GitHub Stars",
                color: "text-yellow-600",
                icon: Star,
              },
              {
                value: totalStats.forks,
                label: "Total Forks",
                color: "text-purple-600",
                icon: GitFork,
              },
              {
                value: `${totalStats.contributors}+`,
                label: "Contributors",
                color: "text-green-600",
                icon: Users,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100"
              >
                <stat.icon
                  className={`w-6 h-6 mx-auto mb-2 ${stat.color}`}
                />
                <div
                  className={`text-2xl font-bold ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Gemeda4927"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View All on GitHub
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ------------------- PROJECT CARD -------------------
function ProjectCard({
  project,
  hoveredProject,
  onHover,
  onLeave,
}: ProjectCardProps) {
  const Icon = project.icon;

  // Clean, minimal tag styles
  const tagColors = [
    "bg-blue-50 text-blue-600",
    "bg-purple-50 text-purple-600",
    "bg-emerald-50 text-emerald-600",
    "bg-amber-50 text-amber-600",
    "bg-rose-50 text-rose-600",
    "bg-cyan-50 text-cyan-600",
  ];

  // Status badge configuration
  const statusConfig = {
    active: { label: "In Development", color: "bg-green-100 text-green-700 border-green-200" },
    completed: { label: "Completed", color: "bg-blue-100 text-blue-700 border-blue-200" },
    planned: { label: "Planned", color: "bg-purple-100 text-purple-700 border-purple-200" },
  };

  return (
    <motion.div
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
      whileHover={{ y: -6 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Status Badge */}
      {project.status && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusConfig[project.status].color}`}>
            {statusConfig[project.status].label}
          </span>
        </div>
      )}

      {/* Simple Top Accent */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: project.color }}
      />

      {/* Header - Clean and Spacious */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* Minimal Icon Container */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center bg-white border border-gray-100 group-hover:border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300"
              style={{
                boxShadow:
                  hoveredProject === project.id
                    ? `0 8px 20px -12px ${project.color}`
                    : "none",
              }}
            >
              <Icon
                size={24}
                style={{ color: project.color }}
                strokeWidth={1.5}
              />
            </div>

            {/* Title & Category */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full capitalize">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock size={12} />
                  {project.stats.lastUpdated}
                </span>
              </div>
            </div>
          </div>

          {/* Live Indicator - Simple Dot */}
          {project.demo && (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-green-600 font-medium">
                Live
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-4">
        {/* Description - Clean & Readable */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>

        {/* Tags - Simple Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(
            (tag: string, i: number) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  tagColors[i % tagColors.length]
                }`}
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Stats - Clean Numbers */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex items-center gap-1.5">
            <Star
              size={16}
              className="text-yellow-500"
            />
            <span className="text-sm font-medium text-gray-700">
              {project.stats.stars}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <GitFork
              size={16}
              className="text-purple-500"
            />
            <span className="text-sm font-medium text-gray-700">
              {project.stats.forks}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users
              size={16}
              className="text-green-500"
            />
            <span className="text-sm font-medium text-gray-700">
              {project.stats.contributors}
            </span>
          </div>
        </div>

        {/* Tech Stack - Minimal */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          {project.tech
            .slice(0, 4)
            .map((tech: Tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-600"
              >
                <tech.icon
                  size={12}
                  className="text-gray-500"
                />
                <span>{tech.name}</span>
              </div>
            ))}
        </div>

        {/* Action Buttons - Clean & Modern */}
        <div className="flex items-center gap-3 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={16} />
              Code
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-400 rounded-xl text-sm font-medium">
              <Github size={16} />
              Private
            </div>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-colors duration-200"
              style={{
                backgroundColor: project.color,
              }}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-400 rounded-xl text-sm font-medium">
              <Clock size={16} />
              {project.status === "active" ? "In Progress" : "Soon"}
            </div>
          )}
        </div>

        {/* Features Preview */}
        {project.features.length > 0 && (
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {project.features.slice(0, 3).map((feature, i) => (
                <span
                  key={i}
                  className="text-xs text-gray-500 flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  {feature}
                </span>
              ))}
              {project.features.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{project.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Clean Hover Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={{
          opacity:
            hoveredProject === project.id ? 1 : 0,
        }}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.color}08, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}