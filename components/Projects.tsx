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
  ChartBar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

interface ProjectCardProps {
  project: Project;
  hoveredProject: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
}

// ------------------- PROJECT DATA -------------------
const PROJECTS_DATA: Project[] = [
  {
    id: "e-edir",
    title: "E-Edir",
    shortDescription: "A Full Stack Next.js 14 Edir Management App",
    description: `
      E-Edir is a full-stack application that digitizes the traditional communal fund management
      system (Edir). It transforms manual processes and paper records into a streamlined digital
      platform, improving data management, member coordination, and communication.
      Developed as a CBT project at Jimma University Institute of Technology with peers.
    `,
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Chapa",
      "Zod",
      "React Hook Form",
      "Shadcn",
      "uploadthing",
    ],
    github: "https://github.com/whiHak/E-Edir",
    demo: "https://e-edir.vercel.app",
    category: "web",
    icon: Globe,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: {
      stars: 2,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 3,
    },
    tech: [
      { name: "Next.js", icon: Braces, level: 90 },
      { name: "TypeScript", icon: Braces, level: 90 },
      { name: "TailwindCSS", icon: Palette, level: 85 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Chapa", icon: CreditCard, level: 80 },
      { name: "Zod", icon: Layers, level: 80 },
      { name: "React Hook Form", icon: Braces, level: 80 },
      { name: "Shadcn", icon: Palette, level: 75 },
      { name: "uploadthing", icon: Cloud, level: 75 },
    ],
    status: "completed",
    features: [
      "Authentication (CRUD) with Clerk: Secure user management and authentication.",
      "Edirs (CRUD): Full functionality to create, read, update, and delete edirs.",
      "Create Edirs: Add new edirs with title, date, location, and details.",
      "Read Edirs: Access detailed view of all edirs, including schedules and descriptions.",
      "Update Edirs: Modify edir details dynamically to keep information accurate.",
      "Delete Edirs: Remove edirs efficiently for platform management.",
      "Checkout and Pay with Chapa: Smooth and secure payment transactions.",
    ],
    userRoles: {
      admin: [
        "Manage edirs CRUD operations",
        "View all payments and transactions",
        "Manage users and permissions",
      ],
      user: [
        "Browse and join edirs",
        "Submit payments via Chapa",
        "Access personal dashboard",
      ],
    },
    pages: [
      "Home: Featured edirs and announcements",
      "Edirs: List, Create, Update, Delete edirs",
      "Checkout & Payment: Chapa integration for payments",
      "Profile & Settings: User management and preferences",
    ],
  },
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
    id: "agrilink-mobile-flutter",
    title: "AgriLink Mobile",
    shortDescription: "Mobile-first marketplace for farmers in Flutter",
    description:
      "Flutter-based, mobile-optimized version of AgriLink Platform. Designed for rural areas with fast browsing, real-time pricing, logistics integration, and offline-first support. Built with Clean Architecture, BLoC, Dio for network, GetIt for dependency injection, and GoRouter for navigation.",
    tags: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "BLoC",
      "GetIt",
      "GoRouter",
      "Dio",
      "MongoDB",
      "Firebase",
    ],
    github: null,
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#16a34a",
    lightColor: "#dcfce7",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 2,
    },
    features: [
      "Mobile-first Design with Flutter",
      "Fast Browsing in Low Bandwidth",
      "Real-time Price Tracking",
      "Seamless Logistics & Delivery Integration",
      "Payment Escrow System",
      "Offline-first Support",
      "Multi-language Support",
    ],
    tech: [
      { name: "Flutter", icon: Smartphone, level: 95 },
      { name: "Dart", icon: Braces, level: 90 },
      { name: "BLoC", icon: Layers, level: 90 },
      { name: "GetIt", icon: Layers, level: 85 },
      { name: "GoRouter", icon: Terminal, level: 85 },
      { name: "Dio", icon: Cloud, level: 80 },
      { name: "SQLite", icon: Database, level: 75 },
    ],
    status: "active",
  },
  {
    id: "gurmuu-website",
    title: "Gurmuu Platform",
    shortDescription: "Community platform connecting people through technology",
    description: `
      Full-stack web application for Gurmuu Tola Oltummaa Abbootii Mul’ata Dammaqsitu.
      The platform showcases programs, achievements, training resources, and provides
      donation & volunteer management. Features role-based access for Super Admins,
      Admins, and public users, with Node.js/Express backend, Zustand for state
      management, and React Query for data fetching and caching.
    `,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Zustand",
      "React Query",
      "Chapa",
    ],
    github: "https://github.com/Gemeda4927/gurmuu-website",
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
    tech: [
      { name: "Next.js", icon: Braces, level: 90 },
      { name: "TypeScript", icon: Braces, level: 85 },
      { name: "Tailwind", icon: Palette, level: 95 },
      { name: "Prisma", icon: Database, level: 80 },
      { name: "PostgreSQL", icon: Database, level: 75 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Express", icon: Terminal, level: 85 },
      { name: "Zustand", icon: Database, level: 85 },
      { name: "React Query", icon: Cloud, level: 80 },
      { name: "Chapa Payment Gateway", icon: CreditCard, level: 80 },
    ],
    status: "completed",
    userRoles: {
      superAdmin: [
        "Manage Admin accounts",
        "Full CMS access",
        "Approve/reject Admin content",
        "View analytics",
        "Manage donations & financial summaries",
        "Configure system settings",
        "Backup & restore system data",
        "Manage user permissions",
      ],
      admin: [
        "Upload/manage content",
        "Add training materials",
        "Post updates",
        "Manage volunteer & partnership applications",
        "Respond to contact forms",
        "View transaction logs (read-only)",
        "Manage media files",
      ],
      publicUser: [
        "View programs & activities",
        "Access training materials",
        "Read news & updates",
        "Check achievements",
        "Download content & watch videos",
        "Submit volunteer/partnership forms",
        "Make donations",
        "Share posts to social media",
      ],
      donor: [
        "Make one-time/recurring donations",
        "Receive receipts & confirmations",
        "Access donor contact details",
        "View impact reports",
      ],
      volunteer: [
        "Submit volunteer applications",
        "Receive acceptance messages",
        "Access volunteer guidelines",
        "Join training events",
      ],
    },
    pages: [
      "Home: Hero, Stats, Featured Programs, Latest News, Quick Donation",
      "About Us: Background, Mission/Vision/Values, Organizational Structure",
      "Programs: Youth Empowerment, Teacher Training, Agricultural Training, Family Awareness, Government Programs",
      "Achievements: Six-month documentation, Location reports, Testimonials",
      "Training Resources: PDFs, Videos, Articles",
      "Donation: Payment options (Telebirr, Chapa, CBE Birr), Donation categories, Donor acknowledgment",
      "News & Updates: Articles, Announcements, Upcoming Events",
      "Volunteer & Partnership: Registration, Terms, Applications",
      "Contact Page",
    ],
    features: [],
  },
  {
    id: "debo-erp-mobile",
    title: "DeboERP Mobile",
    shortDescription: "Mobile enterprise & workforce management system",
    description:
      "DeboERP Mobile is a comprehensive mobile enterprise application for organizations, companies, and government institutions. Provides full access to core modules on mobile devices, enabling employees, managers, and clients to collaborate seamlessly. Streamlines operations, improves transparency, accountability, and efficiency.",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Zustand",
      "MySQL",
      "REST API",
      "Push Notifications",
    ],
    github: "https://github.com/Debo-Engineering-Plc/debo-erp-mobile-app",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 3,
    },
    features: [
      "Letter Management: Create/send letters, attach files, track status, notifications, archive & reporting",
      "Appointment Booking: Online booking, real-time slots, reschedule/cancel, push notifications, calendar view",
      "Performance Evaluation: Assign tasks, monitor progress, supervisor/peer reviews, reports",
      "Attendance Management: Mobile check-in/check-out, location verification, dashboards, notifications",
      "Centralized Management: All departments accessible from mobile",
      "Improved Team Communication & Accountability",
      "Reduced Paperwork & Time Saving",
      "Accessible Anywhere: Ideal for remote/hybrid teams",
    ],
    tech: [
      { name: "React Native", icon: Smartphone, level: 95 },
      { name: "TypeScript", icon: Braces, level: 90 },
      { name: "Expo", icon: Braces, level: 85 },
      { name: "Zustand", icon: Database, level: 85 },
      { name: "REST API", icon: Cloud, level: 80 },
      { name: "MySQL (Workbench)", icon: Database, level: 75 },
      { name: "Push Notifications", icon: Smartphone, level: 70 },
    ],
    status: "completed",
  },
  {
    id: "news-hub-ultra",
    title: "News Hub Ultra",
    shortDescription:
      "Flutter mobile app providing categorized news from multiple APIs",
    description:
      "News Hub Ultra is a Flutter mobile application that lets users access and explore categorized news from multiple APIs. Built with clean architecture using Provider for state management and Dio for API communication. The app features secure API integration, offline caching, search & filter capabilities, and a clean mobile UI for seamless reading.",
    tags: [
      "Flutter",
      "Dart",
      "Dio",
      "Provider",
      "Clean Architecture",
      "REST API",
    ],
    github: "https://github.com/SBAK729/News-APInews_hub_ultra",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#0ea5e9",
    lightColor: "#d0f0fd",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 2,
    },
    features: [
      "Browse categorized news from multiple APIs",
      "Search and filter news articles quickly",
      "Offline caching using local storage",
      "Push notifications for breaking news",
      "Secure and efficient API integration with Dio",
      "Clean and responsive Flutter UI",
      "Structured using Clean Architecture",
      "State managed with Provider",
    ],
    tech: [
      { name: "Flutter", icon: Smartphone, level: 90 },
      { name: "Dart", icon: Braces, level: 88 },
      { name: "Dio (HTTP)", icon: Cloud, level: 85 },
      { name: "Provider (State)", icon: Database, level: 85 },
      { name: "Clean Architecture", icon: Layers, level: 80 },
      { name: "REST API", icon: Cloud, level: 80 },
    ],
    status: "completed",
    userRoles: {
      user: [
        "Browse categorized news",
        "Search and filter articles",
        "Read news offline",
        "Receive latest news updates with notifications",
      ],
    },
    pages: [
      "Home: Latest & Trending News",
      "Categories: Topic-based news lists",
      "Search: Query news articles",
      "Article Detail: Full content & source links",
      "Settings: Notifications & preferences",
    ],
  },
  {
    id: "m-market",
    title: "M-Market",
    shortDescription:
      "Modern e-commerce platform with digital wallet and secure payments",
    description:
      "M-Market is a PHP-based e-commerce website and my first completed project. It provides users with seamless online shopping, including product catalogs, digital wallet integration, user profiles, and secure payment processing. Built with HTML, CSS, and PHP, using MySQL for database management. Hosted on XAMPP/Server setup for local development and testing.",
    tags: ["PHP", "HTML", "CSS", "MySQL", "XAMPP", "Server Setup"],
    github: "https://github.com/Gemeda4927/M-market",
    demo: null,
    category: "web",
    icon: Globe,
    color: "#f97316",
    lightColor: "#ffe8d5",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 1,
    },
    features: [
      "Browse products and categories",
      "User profile management",
      "Digital wallet integration for easy payments",
      "Order tracking and history",
      "Secure transactions",
      "Clean, user-friendly interface",
      "Responsive design for desktop and mobile",
      "Local deployment with XAMPP / server setup",
    ],
    tech: [
      { name: "PHP", icon: Braces, level: 90 },
      { name: "HTML", icon: Braces, level: 95 },
      { name: "CSS", icon: Palette, level: 90 },
      { name: "MySQL", icon: Database, level: 85 },
      { name: "XAMPP / Server", icon: Cloud, level: 80 },
    ],
    status: "completed",
    projectOrder: 1,
    userRoles: {
      user: [
        "Browse and search products",
        "Manage profile and preferences",
        "Add items to cart and checkout",
        "Use digital wallet for secure payments",
        "Track order history",
      ],
      admin: [
        "Manage products, categories, and inventory",
        "View orders and transactions",
        "Manage user accounts",
        "Generate reports and analytics",
      ],
    },
    pages: [
      "Home Page: Featured products, categories, and banners",
      "Product Pages: Details, images, pricing",
      "Cart & Checkout: Digital wallet integration",
      "User Profile: Orders, settings, preferences",
      "Admin Dashboard: Manage products, users, orders",
    ],
  },
  {
    id: "cpp-worksheet",
    title: "C++ Programming Worksheet",
    shortDescription: "Interactive learning platform to master C++ fundamentals",
    description:
      "An interactive learning platform designed to help students master C++ fundamentals through structured practice, real-time feedback, and gamified progress tracking.",
    tags: [
      "C++",
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],
    github:
      "https://github.com/Gemeda4927/Programming-%F0%9F%93%98%20C++%20Programming%20Worksheet%20%E2%9C%A8",
    demo: "https://abjworksheet.vercel.app",
    category: "web",
    icon: BookOpen,
    color: "#2563eb",
    lightColor: "#dbeafe",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 1,
    },
    features: [
      "Topic-based Learning: Arrays, Functions, Structures",
      "Multiple Difficulty Levels: Easy, Medium, Hard",
      "Variety of Question Types: Fill in the blanks, Output prediction, Debugging, Coding exercises, Conceptual Q&A",
      "Interactive Dashboard for Progress Tracking",
      "Gamified Study Experience",
    ],
    tech: [
      { name: "C++", icon: Terminal, level: 95 },
      { name: "Next.js", icon: Braces, level: 90 },
      { name: "TailwindCSS", icon: Palette, level: 88 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Express", icon: Terminal, level: 85 },
      { name: "MongoDB", icon: Database, level: 80 },
      { name: "Chart.js", icon: ChartBar, level: 75 },
    ],
    status: "completed",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Online store with payment integration",
    description:
      "E-commerce platform with product catalog, shopping cart, and Stripe/PayPal integration.",
    tags: ["Next.js", "TypeScript", "Chapa", "MongoDB", "PostgreSQL"],
    github: "https://github.com/Gemeda4927/ecommerce-platform",
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
      { name: "Next.js", icon: Braces, level: 92 },
      { name: "TypeScript", icon: Braces, level: 88 },
      { name: "Stripe", icon: CreditCard, level: 85 },
      { name: "Prisma", icon: Database, level: 82 },
      { name: "PostgreSQL", icon: Database, level: 80 },
    ],
    status: "planned",
  },
  {
    id: "delala-mobile",
    title: "Delala Mobile App",
    shortDescription:
      "A seamless digital marketplace for buying & selling properties, vehicles, electronics, and more.",
    description: `
      Delala is a feature-rich mobile application that serves as a digital broker, enabling users to buy and sell properties,
      cars, electronics, and more effortlessly. Built with Flutter Clean Architecture and BLoC state management, Delala ensures
      scalability, maintainability, and high performance.

      Developed as an internship project at Eagle Lion Systems (https://www.eaglelionsystems.com/) with mentor Mr. Henok
      and peers, Delala connects users with services, products, and rental opportunities through a clean, scalable monorepo architecture.
    `,
    tags: [
      "Flutter",
      "Dart",
      "BLoC",
      "Clean Architecture",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Chappa API",
      "AWS",
      "Firebase",
      "Swagger",
    ],
    github: "https://github.com/Gemeda4927/Delala",
    demo: null,
    category: "mobile",
    icon: Smartphone,
    color: "#0ea5e9",
    lightColor: "#d0f0fd",
    stats: {
      stars: 0,
      forks: 0,
      lastUpdated: "Feb 2026",
      contributors: 1,
    },
    tech: [
      { name: "Flutter", icon: Smartphone, level: 95 },
      { name: "Dart", icon: Braces, level: 90 },
      { name: "BLoC", icon: Layers, level: 90 },
      { name: "Clean Architecture", icon: Layers, level: 85 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Express.js", icon: Terminal, level: 80 },
      { name: "MongoDB", icon: Database, level: 80 },
      { name: "JWT Authentication", icon: Braces, level: 80 },
      { name: "Chappa API", icon: CreditCard, level: 80 },
      { name: "Swagger API Docs", icon: Layers, level: 75 },
    ],
    features: [
      "Secure login with backend and JWT-based authentication",
      "Sellers can add, update, and delete items with ease",
      "Advanced search & filter for listings",
      "Seamless payments via Chappa API",
      "Digital contracts for secure transactions",
      "Role-specific dashboards: Customer, Supplier, Super Admin",
      "Real-time notifications for listings, payments, and orders",
      "Admin panel with moderation, analytics, and system management",
      "Fully functional on Android and iOS",
    ],
    userRoles: {
      customer: [
        "Browse & search listings",
        "Add items to cart and checkout",
        "Pay securely via Chappa",
        "Track orders and manage digital contracts",
      ],
      supplier: [
        "Manage product listings (add/update/delete)",
        "Track sales and revenue",
        "Manage incoming customer orders",
        "Monitor inventory levels",
        "Track payments in real-time",
      ],
      superAdmin: [
        "Approve/suspend/remove users",
        "Moderate and approve listings",
        "Monitor payments and resolve disputes",
        "View analytics and reports",
        "Enforce system security and rules",
      ],
    },
    pages: [
      "Customer Dashboard: Browse, search, checkout, payments, order tracking",
      "Supplier Dashboard: Manage listings, inventory, sales, orders, payments",
      "Super Admin Dashboard: User management, listings moderation, payments, analytics",
    ],
    status: "active",
  },
  {
    id: "edumart",
    title: "Edumart Platform",
    shortDescription: "A full-stack e-learning marketplace for courses and educational content.",
    description: `
      Edumart is a comprehensive e-learning platform that enables instructors to create and sell courses, 
      while students can browse, purchase, and access educational content seamlessly. Built with a full-stack architecture:
      - Backend: Node.js, Express, MongoDB
      - Frontend: React.js, TailwindCSS, Redux
      - Features secure authentication, payments, and content management.

      Developed as a collaborative project combining backend and frontend development skills, aiming to deliver
      a modern, scalable, and user-friendly e-learning marketplace.
    `,
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
      { name: "TailwindCSS", icon: Palette, level: 85 },
      { name: "Redux", icon: Layers, level: 80 },
      { name: "Node.js", icon: Terminal, level: 85 },
      { name: "Express.js", icon: Terminal, level: 80 },
      { name: "MongoDB", icon: Database, level: 85 },
      { name: "JWT Authentication", icon: Braces, level: 80 },
      { name: "Stripe API", icon: CreditCard, level: 75 },
    ],
    features: [
      "Secure user authentication and role-based access",
      "Course creation, update, and management for instructors",
      "Browse, search, and purchase courses for students",
      "Integrated payment system using Stripe API",
      "Interactive course content including video, quizzes, and documents",
      "Admin panel for platform moderation and analytics",
    ],
    userRoles: {
      student: [
        "Browse and search courses",
        "Purchase courses securely",
        "Access purchased content",
        "Track learning progress",
      ],
      instructor: [
        "Create and manage courses",
        "Upload video and document content",
        "Track student enrollments and revenue",
      ],
      admin: [
        "Manage users (students and instructors)",
        "Approve courses and content",
        "Monitor transactions and reports",
        "Maintain platform security and analytics",
      ],
    },
    pages: [
      "Home: Featured courses, categories, and announcements",
      "Course Pages: Detailed course content and enrollment",
      "Dashboard: Role-based dashboards for students, instructors, and admin",
      "Checkout: Payment integration and order tracking",
      "Admin Panel: User and content management",
    ],
    status: "active",
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
  const [filter, setFilter] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

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

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 3);

  const totalStats = {
    stars: PROJECTS_DATA.reduce((acc, p) => acc + p.stats.stars, 0),
    forks: PROJECTS_DATA.reduce((acc, p) => acc + p.stats.forks, 0),
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
          transition={{ duration: 0.6, delay: 0.2 }}
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
                  onClick={() => {
                    setFilter(cat.id);
                    setShowAll(false); // Reset showAll when filter changes
                  }}
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
                gray: active
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                green: active
                  ? "bg-green-600 text-white"
                  : "bg-green-50 text-green-600 hover:bg-green-100",
                blue: active
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100",
                purple: active
                  ? "bg-purple-600 text-white"
                  : "bg-purple-50 text-purple-600 hover:bg-purple-100",
              };

              return (
                <motion.button
                  key={status.id}
                  onClick={() => {
                    setStatusFilter(status.id);
                    setShowAll(false); // Reset showAll when filter changes
                  }}
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
            key={`${filter}-${statusFilter}-${showAll}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard
                    project={project}
                    hoveredProject={hoveredProject}
                    onHover={setHoveredProject}
                    onLeave={() => setHoveredProject(null)}
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
                  <FolderOpen size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500">
                  No projects match the selected filters.
                </p>
                <button
                  onClick={() => {
                    setFilter("all");
                    setStatusFilter("all");
                    setShowAll(false);
                  }}
                  className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  View all projects
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All / Show Less Button */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <span className="text-sm opacity-75">({filteredProjects.length} total)</span>
                </>
              ) : (
                <>
                  <span>View All Projects</span>
                  <span className="text-sm opacity-75">({filteredProjects.length - 3} more)</span>
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
    active: {
      label: "In Development",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    completed: {
      label: "Completed",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    planned: {
      label: "Planned",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
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
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full border ${
              statusConfig[project.status].color
            }`}
          >
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
              <Icon size={24} style={{ color: project.color }} strokeWidth={1.5} />
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
              <span className="text-xs text-green-600 font-medium">Live</span>
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
          {project.tags.map((tag: string, i: number) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                tagColors[i % tagColors.length]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats - Clean Numbers */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex items-center gap-1.5">
            <Star size={16} className="text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">
              {project.stats.stars}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <GitFork size={16} className="text-purple-500" />
            <span className="text-sm font-medium text-gray-700">
              {project.stats.forks}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-green-500" />
            <span className="text-sm font-medium text-gray-700">
              {project.stats.contributors}
            </span>
          </div>
        </div>

        {/* Tech Stack - Minimal */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          {project.tech.slice(0, 4).map((tech: Tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-600"
            >
              <tech.icon size={12} className="text-gray-500" />
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
              style={{ backgroundColor: project.color }}
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
        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.color}08, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}