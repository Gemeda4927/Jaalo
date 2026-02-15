"use client";
import {
  personalInfo,
  experience,
  achievements,
  testimonials,
  careerHighlights,
} from "@/lib/data";
import {
  Calendar,
  MapPin,
  Briefcase,
  Code,
  Users,
  Award,
  Sparkles,
  GraduationCap,
  Star,
  ExternalLink,
  CheckCircle,
  Heart,
  Zap,
  Shield,
  Clock,
  Rocket,
  Brain,
  Trophy,
  Coffee,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
  Quote,
  Layers,
  Cpu,
  Globe,
  BookOpen,
  Download,
  MessageCircle,
  Lightbulb,
  TrendingUp,
  BadgeCheck,
  Medal,
  Crown,
  LucideIcon,
  Compass,
  Target,
  Phone,
  Video,
  Camera,
  Palette,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Server,
  Figma,
  GitBranch,
  Terminal,
  Box,
  Hexagon,
  CircleDot,
  Activity,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Type definitions
interface ValueType {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  gradient: string;
}

export default function AboutComponent() {
  const [activeTab, setActiveTab] =
    useState("background");
  const [
    expandedAchievement,
    setExpandedAchievement,
  ] = useState<number | null>(null);
  const [
    activeTestimonial,
    setActiveTestimonial,
  ] = useState(0);
  const [mousePosition, setMousePosition] =
    useState({ x: 0, y: 0 });

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x:
          (e.clientX / window.innerWidth - 0.5) *
          20,
        y:
          (e.clientY / window.innerHeight - 0.5) *
          20,
      });
    };
    window.addEventListener(
      "mousemove",
      handleMouseMove
    );
    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  const tabs = [
    {
      id: "background",
      label: "Background",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "journey",
      label: "My Journey",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "values",
      label: "Values & Vision",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: "expertise",
      label: "Expertise",
      icon: Cpu,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const values: ValueType[] = [
    {
      title: "Excellence",
      description:
        "Striving for the highest quality in every project, with meticulous attention to detail",
      icon: Trophy,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Innovation",
      description:
        "Embracing new technologies and creative solutions to solve complex problems",
      icon: Brain,
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Collaboration",
      description:
        "Working together to achieve extraordinary results through synergy",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Integrity",
      description:
        "Transparent communication and ethical practices in every interaction",
      icon: Shield,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const expertise = [
    {
      category: "Frontend",
      icon: Monitor,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
      ],
      color: "blue",
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: [
        "Flutter",
        "React Native",
        "Dart",
        "iOS/Android",
      ],
      color: "green",
    },
    {
      category: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Python",
        "Java",
        "PHP",
      ],
      color: "purple",
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
      ],
      color: "orange",
    },
    {
      category: "DevOps",
      icon: Cloud,
      skills: [
        "Docker",
        "CI/CD",
        "AWS",
        "Vercel",
      ],
      color: "pink",
    },
    {
      category: "Design",
      icon: Palette,
      skills: [
        "Figma",
        "UI/UX",
        "Responsive",
        "Animation",
      ],
      color: "indigo",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Enhanced background with animated particles and parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Hero Section with 3D Card Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 shadow-lg"
          >
            <Sparkles
              className="text-yellow-500 animate-pulse"
              size={20}
            />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
            <Sparkles
              className="text-yellow-500 animate-pulse"
              size={20}
            />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900">
              About{" "}
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Enhanced Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{
                rotateY: 5,
                rotateX: 5,
              }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 transform-gpu perspective-1000"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: personalInfo.location,
                    color: "blue",
                    delay: 0,
                  },
                  {
                    icon: GraduationCap,
                    label: "Education",
                    value:
                      "Jimma Institute of Technology (2026)",
                    color: "green",
                    delay: 0.1,
                  },
                  {
                    icon: Briefcase,
                    label: "Status",
                    value:
                      "Open to Opportunities",
                    color: "purple",
                    delay: 0.2,
                  },
                  {
                    icon: Globe,
                    label: "Languages",
                    value:
                      "English, Amharic, Afan Oromo",
                    color: "orange",
                    delay: 0.3,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: item.delay,
                      }}
                      whileHover={{
                        scale: 1.05,
                        x: 5,
                      }}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all group"
                    >
                      <div
                        className={`relative p-3 bg-${item.color}-50 rounded-xl group-hover:scale-110 transition-transform`}
                      >
                        <Icon
                          size={20}
                          className={`text-${item.color}-600`}
                        />
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-${item.color}-500`}
                          initial={{ opacity: 0 }}
                          whileHover={{
                            opacity: 0.1,
                          }}
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-500 font-medium">
                          {item.label}
                        </div>
                        <div className="font-semibold text-gray-800">
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links with Floating Animation */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-8"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Gemeda4927",
                label: "GitHub",
                color: "hover:bg-gray-900",
                gradient:
                  "from-gray-700 to-gray-900",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/gemeda-tamiru",
                label: "LinkedIn",
                color: "hover:bg-blue-600",
                gradient:
                  "from-blue-500 to-blue-700",
              },
              {
                icon: Twitter,
                href: "https://twitter.com/gemeda_t",
                label: "Twitter",
                color: "hover:bg-blue-400",
                gradient:
                  "from-blue-400 to-blue-600",
              },
              {
                icon: Mail,
                href: "mailto:gemeda.tamiru@example.com",
                label: "Email",
                color: "hover:bg-red-500",
                gradient:
                  "from-red-500 to-red-700",
              },
              {
                icon: Phone,
                href: "tel:+251-XXX-XXXXXX",
                label: "Phone",
                color: "hover:bg-green-500",
                gradient:
                  "from-green-500 to-green-700",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                aria-label={social.label}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md`}
                />
                <div
                  className={`relative p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${social.color} group`}
                >
                  <social.icon
                    size={20}
                    className="text-gray-600 group-hover:text-white transition-colors"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Career Highlights with 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2"
            >
              <Trophy
                className="text-yellow-500"
                size={28}
              />
              Career Milestones
            </motion.h3>
            <p className="text-gray-600">
              Key achievements and growth moments
              in my journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerHighlights?.map(
              (highlight, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  className="relative group perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform-gpu">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1">
                        <Calendar size={12} />
                        {highlight.year}
                      </span>
                      {highlight.year ===
                        "2025" && (
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                          }}
                          className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1"
                        >
                          <Zap size={12} />
                          Current
                        </motion.span>
                      )}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>

                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-12 h-12 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45 translate-x-8 -translate-y-8" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Medal
                        size={32}
                        className="text-blue-500"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Main content with enhanced layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Enhanced Interactive tabs with glass morphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tab navigation with glass effect and 3D transform */}
            <div className="flex flex-wrap gap-2 p-2 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() =>
                      setActiveTab(tab.id)
                    }
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 relative overflow-hidden ${
                      activeTab === tab.id
                        ? "text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute inset-0 bg-gradient-to-r ${tab.gradient}`}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon
                      size={16}
                      className="relative z-10"
                    />
                    <span className="relative z-10 text-sm">
                      {tab.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab content with enhanced animations */}
            <div className="relative min-h-[600px]">
              <AnimatePresence mode="wait">
                {activeTab === "background" && (
                  <motion.div
                    key="background"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        I'm a dedicated Full-Stack
                        and Mobile Developer with
                        a journey that started in
                        C++ programming and
                        evolved into mastering
                        modern web and mobile
                        technologies. Currently
                        pursuing Software
                        Engineering at Jimma
                        Institute of Technology
                        (expected 2026), I'm
                        passionate about creating
                        robust, scalable solutions
                        that make a real impact.
                      </p>

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.2,
                        }}
                        className="relative p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 my-6"
                      >
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <BadgeCheck
                            size={14}
                            className="text-white"
                          />
                        </div>
                        <p className="text-gray-700 italic">
                          "With hands-on
                          experience at{" "}
                          <span className="font-semibold text-blue-600">
                            Eagle Lion Systems
                          </span>
                          (Flutter development)
                          and{" "}
                          <span className="font-semibold text-green-600">
                            Debo Engineering PLC
                          </span>
                          (React Native
                          development), I bridge
                          the gap between
                          beautiful user
                          experiences and powerful
                          backend systems."
                        </p>
                      </motion.div>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        Beyond coding, I'm a
                        Teaching Assistant for C++
                        programming, having
                        mentored 200+ students and
                        developed interactive
                        learning platforms. I
                        believe in continuous
                        learning and staying at
                        the forefront of
                        technological innovation.
                      </p>
                    </div>

                    {/* Enhanced Certificate highlight with 3D effect */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ delay: 0.3 }}
                      whileHover={{
                        rotateY: 5,
                        rotateX: 5,
                      }}
                      className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 shadow-lg transform-gpu perspective-1000"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-50" />
                          <div className="relative p-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl">
                            <Medal
                              className="text-white"
                              size={24}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            Eagle Lion Systems
                            Certification
                            <Crown
                              size={16}
                              className="text-yellow-500"
                            />
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Recognized for strong
                            commitment and
                            technical skills
                            during internship
                          </p>
                          <motion.a
                            href="https://credsverse.com/credentials/f758a319-970e-4979-85c8-9404c5b8afe3"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                          >
                            View Credential{" "}
                            <ExternalLink
                              size={14}
                            />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "journey" && (
                  <motion.div
                    key="journey"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Enhanced Timeline with interactive elements */}
                    <div className="relative pl-8 border-l-2 border-blue-200 space-y-8">
                      {[
                        {
                          year: "2025 - Present",
                          title:
                            "Dual Mobile Development",
                          company:
                            "Eagle Lion Systems & Debo Engineering",
                          color: "blue",
                          icon: Smartphone,
                          achievements: [
                            "Flutter Development",
                            "React Native",
                            "Enterprise Apps",
                          ],
                        },
                        {
                          year: "2023 - Present",
                          title:
                            "Teaching Assistant",
                          company:
                            "Jimma Institute of Technology",
                          color: "green",
                          icon: GraduationCap,
                          achievements: [
                            "200+ Students Mentored",
                            "C++ Programming",
                            "Lab Sessions",
                          ],
                        },
                        {
                          year: "2022 - 2026",
                          title:
                            "Software Engineering Student",
                          company:
                            "Jimma Institute of Technology",
                          color: "purple",
                          icon: BookOpen,
                          achievements: [
                            "Full-Stack Focus",
                            "Mobile Development",
                            "GPA: 3.6/4.0",
                          ],
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.1,
                          }}
                          className="relative group"
                        >
                          <motion.div
                            className={`absolute -left-10 top-1 w-5 h-5 bg-${item.color}-600 rounded-full border-4 border-white shadow-lg`}
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              delay: index * 0.5,
                            }}
                          />
                          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group-hover:translate-x-2">
                            <div className="flex items-start gap-4">
                              <div
                                className={`p-2 bg-${item.color}-100 rounded-lg`}
                              >
                                <item.icon
                                  size={20}
                                  className={`text-${item.color}-600`}
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-1">
                                  {item.year}
                                </h4>
                                <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                                  {item.title}
                                </p>
                                <p className="text-sm text-gray-500 mb-2">
                                  {item.company}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {item.achievements.map(
                                    (
                                      achievement,
                                      i
                                    ) => (
                                      <span
                                        key={i}
                                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                                      >
                                        {
                                          achievement
                                        }
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Achievements with expandable cards */}
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Trophy
                          size={20}
                          className="text-yellow-500"
                        />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {achievements?.map(
                          (
                            achievement,
                            index
                          ) => (
                            <motion.div
                              key={index}
                              initial={{
                                opacity: 0,
                              }}
                              animate={{
                                opacity: 1,
                              }}
                              transition={{
                                delay:
                                  index * 0.1,
                              }}
                              whileHover={{
                                scale: 1.02,
                                x: 5,
                              }}
                              className="group cursor-pointer"
                              onClick={() =>
                                setExpandedAchievement(
                                  expandedAchievement ===
                                    index
                                    ? null
                                    : index
                                )
                              }
                            >
                              <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all">
                                <div className="flex items-start gap-3">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                                    <CheckCircle
                                      size={20}
                                      className="text-green-500 relative z-10"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                                      {
                                        achievement.title
                                      }
                                    </p>
                                    <AnimatePresence>
                                      {expandedAchievement ===
                                        index && (
                                        <motion.div
                                          initial={{
                                            opacity: 0,
                                            height: 0,
                                          }}
                                          animate={{
                                            opacity: 1,
                                            height:
                                              "auto",
                                          }}
                                          exit={{
                                            opacity: 0,
                                            height: 0,
                                          }}
                                          transition={{
                                            duration: 0.2,
                                          }}
                                          className="overflow-hidden"
                                        >
                                          <p className="text-sm text-gray-600 mt-2">
                                            {
                                              achievement.description
                                            }
                                          </p>
                                          {achievement.link && (
                                            <a
                                              href={
                                                achievement.link
                                              }
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-xs text-blue-600 hover:underline mt-2 inline-flex items-center gap-1"
                                            >
                                              View
                                              Credential{" "}
                                              <ExternalLink
                                                size={
                                                  10
                                                }
                                              />
                                            </a>
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                  <ChevronRight
                                    size={16}
                                    className={`text-gray-400 transition-transform duration-200 ${
                                      expandedAchievement ===
                                      index
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "values" && (
                  <motion.div
                    key="values"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-4"
                  >
                    {values.map(
                      (value, index) => {
                        const Icon = value.icon;
                        return (
                          <motion.div
                            key={value.title}
                            initial={{
                              opacity: 0,
                              x: -20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: index * 0.1,
                            }}
                            whileHover={{
                              scale: 1.02,
                              x: 5,
                            }}
                            className={`group relative p-6 ${value.bgColor} rounded-xl overflow-hidden cursor-pointer`}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                              style={{
                                background: `linear-gradient(135deg, ${value.gradient})`,
                              }}
                            />

                            <div className="flex items-start gap-4">
                              <div
                                className={`relative p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all ${value.color}`}
                              >
                                <Icon size={24} />
                                <motion.div
                                  className="absolute inset-0 rounded-xl"
                                  animate={{
                                    boxShadow: [
                                      "0 0 0 0 rgba(59,130,246,0)",
                                      "0 0 0 4px rgba(59,130,246,0.1)",
                                      "0 0 0 0 rgba(59,130,246,0)",
                                    ],
                                  }}
                                  transition={{
                                    repeat:
                                      Infinity,
                                    duration: 2,
                                    delay:
                                      index * 0.5,
                                  }}
                                />
                              </div>
                              <div className="flex-1">
                                <h4
                                  className={`text-lg font-semibold ${value.color} mb-1`}
                                >
                                  {value.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                  {
                                    value.description
                                  }
                                </p>
                              </div>
                            </div>

                            {/* Progress bar */}
                            <motion.div
                              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                              style={{
                                background: `linear-gradient(90deg, ${value.gradient})`,
                              }}
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: "100%",
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 1,
                                delay:
                                  index * 0.1,
                              }}
                            />
                          </motion.div>
                        );
                      }
                    )}
                  </motion.div>
                )}

                {activeTab === "expertise" && (
                  <motion.div
                    key="expertise"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {expertise.map(
                        (area, index) => {
                          const Icon = area.icon;
                          return (
                            <motion.div
                              key={area.category}
                              initial={{
                                opacity: 0,
                                y: 20,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay:
                                  index * 0.1,
                              }}
                              whileHover={{
                                scale: 1.02,
                                y: -2,
                              }}
                              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div
                                  className={`p-2 bg-${area.color}-100 rounded-lg`}
                                >
                                  <Icon
                                    size={20}
                                    className={`text-${area.color}-600`}
                                  />
                                </div>
                                <h4 className="font-semibold text-gray-800">
                                  {area.category}
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {area.skills.map(
                                  (skill, i) => (
                                    <motion.span
                                      key={i}
                                      whileHover={{
                                        scale: 1.1,
                                        y: -2,
                                      }}
                                      className={`px-3 py-1 bg-${area.color}-50 text-${area.color}-700 rounded-lg text-xs font-medium border border-${area.color}-200`}
                                    >
                                      {skill}
                                    </motion.span>
                                  )
                                )}
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Testimonials with Carousel */}
            {testimonials &&
              testimonials.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                >
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                    <MessageCircle
                      size={20}
                      className="text-purple-500"
                    />
                    What People Say
                  </h4>
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTestimonial}
                        initial={{
                          opacity: 0,
                          x: 50,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -50,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="relative group"
                      >
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity" />
                        <div className="relative p-6 bg-gray-50 rounded-lg">
                          <Quote
                            size={24}
                            className="text-blue-300 mb-3"
                          />
                          <p className="text-gray-600 italic mb-4 text-lg">
                            "
                            {
                              testimonials[
                                activeTestimonial
                              ].quote
                            }
                            "
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {
                                  testimonials[
                                    activeTestimonial
                                  ].name
                                }
                              </p>
                              <p className="text-xs text-gray-500">
                                {
                                  testimonials[
                                    activeTestimonial
                                  ].role
                                }
                              </p>
                            </div>
                            {testimonials[
                              activeTestimonial
                            ].company && (
                              <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                                {
                                  testimonials[
                                    activeTestimonial
                                  ].company
                                }
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Carousel Controls */}
                    {testimonials.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {testimonials.map(
                          (_, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                setActiveTestimonial(
                                  index
                                )
                              }
                              className={`w-2 h-2 rounded-full transition-all ${
                                activeTestimonial ===
                                index
                                  ? "w-6 bg-blue-600"
                                  : "bg-gray-300 hover:bg-gray-400"
                              }`}
                            />
                          )
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
          </motion.div>

          {/* Right column - Enhanced Experience timeline with 3D cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50" />
                  <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Briefcase
                      className="text-white"
                      size={28}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Experience
                  </h3>
                  <p className="text-gray-500 flex items-center gap-2">
                    <Clock size={14} />
                    Professional journey timeline
                  </p>
                </div>
              </motion.div>

              <div className="relative pl-12">
                {/* Enhanced vertical line with gradient animation */}
                <motion.div
                  className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />

                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative mb-12 last:mb-0"
                  >
                    {/* Enhanced timeline dot with pulse animation */}
                    <div className="absolute -left-9 top-6">
                      <motion.div
                        className="relative"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: index * 0.5,
                        }}
                      >
                        <div
                          className={`w-5 h-5 bg-gradient-to-r from-${
                            index === 0
                              ? "blue"
                              : index === 1
                                ? "green"
                                : index === 2
                                  ? "purple"
                                  : "orange"
                          }-500 to-${
                            index === 0
                              ? "cyan"
                              : index === 1
                                ? "emerald"
                                : index === 2
                                  ? "pink"
                                  : "red"
                          }-500 rounded-full shadow-lg`}
                        />
                        <div className="absolute inset-0 animate-ping bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20" />
                      </motion.div>
                    </div>

                    {/* Enhanced content card with 3D effect */}
                    <motion.div
                      whileHover={{
                        rotateY: 5,
                        rotateX: 2,
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                        },
                      }}
                      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform-gpu perspective-1000"
                    >
                      {/* Header with gradient border */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />

                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {exp.role}
                        </h4>
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                        >
                          <Calendar
                            size={16}
                            className="text-blue-600"
                          />
                          <span className="text-blue-700 font-medium text-sm">
                            {exp.period}
                          </span>
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-block mb-4"
                      >
                        <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg font-medium flex items-center gap-2">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                      </motion.div>

                      {Array.isArray(
                        exp.description
                      ) ? (
                        <ul className="text-gray-600 space-y-3 mb-4">
                          {exp.description.map(
                            (item, i) => (
                              <motion.li
                                key={i}
                                initial={{
                                  opacity: 0,
                                  x: -10,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: i * 0.05,
                                }}
                                className="flex items-start gap-2 group/item"
                              >
                                <span className="text-blue-500 mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform">
                                  <BadgeCheck
                                    size={14}
                                  />
                                </span>
                                <span className="text-sm leading-relaxed">
                                  {item}
                                </span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      ) : (
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      )}

                      {/* Technologies with improved chips */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.technologies.map(
                            (tech, i) => (
                              <motion.span
                                key={i}
                                whileHover={{
                                  scale: 1.1,
                                  y: -2,
                                }}
                                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100 shadow-sm hover:shadow-md transition-all"
                              >
                                {tech}
                              </motion.span>
                            )
                          )}
                        </div>
                      )}

                      {/* Certificate link with enhanced design */}
                      {exp.certificate && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          whileHover={{
                            scale: 1.02,
                          }}
                          className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                <Medal
                                  size={16}
                                  className="text-yellow-600"
                                />
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700 block">
                                  {exp.certificateName ||
                                    "Internship Certificate"}
                                </span>
                                {exp.credentialId && (
                                  <p className="text-xs text-gray-500">
                                    ID:{" "}
                                    {
                                      exp.credentialId
                                    }
                                  </p>
                                )}
                              </div>
                            </div>
                            <motion.a
                              href={
                                exp.certificate
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{
                                x: 3,
                              }}
                              className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
                            >
                              Verify{" "}
                              <ExternalLink
                                size={10}
                              />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}

                      {/* GitHub link with animation */}
                      {exp.github && (
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="mt-3"
                        >
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2 group"
                          >
                            <Github
                              size={14}
                              className="group-hover:rotate-12 transition-transform"
                            />
                            View on GitHub
                          </a>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to action with parallax effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative group">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full opacity-10 animate-pulse" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full opacity-10 animate-pulse animation-delay-2000" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: [
                    "0% 0%",
                    "100% 100%",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  backgroundSize: "200% 200%",
                }}
              />
            </div>

            <div className="relative z-10 px-8 py-16 md:p-16">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Something
                  Amazing?
                </h3>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate to turn your
                  ideas into reality with
                  cutting-edge technology and
                  innovative solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all group"
                  >
                    <span>
                      Start a Conversation
                    </span>
                    <Rocket
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </motion.a>

                  <motion.a
                    href="/resume.pdf"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all group"
                  >
                    <span>Download Resume</span>
                    <Download
                      size={20}
                      className="group-hover:translate-y-1 transition-transform"
                    />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px)
              scale(1);
          }
          33% {
            transform: translate(30px, -50px)
              scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px)
              scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
