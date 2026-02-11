"use client";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileText,
  Sparkles,
  Code,
  Terminal,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Coffee,
  ChevronRight,
  User,
  Award,
  Clock,
  Monitor,
  Star,
  Rocket,
  Layers,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
    "Tech Innovator",
    "Problem Solver",
  ];

  const codeLines = [
    "const gemeda = new Developer();",
    "gemeda.skills = ['React', 'Next.js', 'Flutter', 'Flutter', 'Native'];",
    "gemeda.passion = 'Building amazing things';",
    "gemeda.mission = 'Solve real-world problems';",
    "export default gemeda;",
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= line.length) {
          setTypedText(line.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
            setTypedText("");
          }, 1000);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    } else {
      setTimeout(() => {
        setCurrentLine(0);
        setTypedText("");
      }, 2000);
    }
  }, [currentLine]);

  const techStack = [
    {
      icon: Code,
      label: "React/Next.js",
      color: "from-cyan-500 to-blue-500",
      bg: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      label: "Flutter",
      color: "from-blue-400 to-cyan-300",
      bg: "bg-gradient-to-r from-blue-400 to-cyan-300",
    },
    {
      icon: Database,
      label: "MongoDB",
      color: "from-green-600 to-green-400",
      bg: "bg-gradient-to-r from-green-600 to-green-400",
    },
    {
      icon: Terminal,
      label: "Node.js",
      color: "from-green-500 to-green-400",
      bg: "bg-gradient-to-r from-green-500 to-green-400",
    },
    {
      icon: Cpu,
      label: "TypeScript",
      color: "from-blue-600 to-blue-400",
      bg: "bg-gradient-to-r from-blue-600 to-blue-400",
    },
    {
      icon: Cloud,
      label: "Next.js",
      color: "from-black to-gray-800",
      bg: "bg-gradient-to-r from-black to-gray-800",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 md:space-y-9"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm px-5 py-2.5 md:px-6 md:py-3 rounded-full"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Available for Opportunities
              </span>
              <Sparkles size={14} className="text-yellow-500 animate-pulse" />
            </motion.div>

            {/* Main Title */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-800">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Gemeda Tamiru
                  </span>
                </h1>
              </motion.div>

              {/* Animated Role */}
              <div className="h-12 md:h-14 flex items-center">
                <motion.div
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-lg md:text-xl lg:text-2xl font-semibold"
                >
                  <span className="text-gray-600">
                    <Zap
                      size={20}
                      className="inline mr-2 text-yellow-500 animate-pulse"
                    />
                    Transforming ideas into
                  </span>
                  <span className="ml-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {roles[currentRole]}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              I craft{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                digital experiences
              </span>{" "}
              that blend beautiful design with powerful functionality. With
              expertise across the full stack, I bring ideas to life through
              clean code and innovative solutions.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 py-4 lg:hidden"
            >
              {[
                {
                  value: "50+",
                  label: "Projects",
                  icon: Layers,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  value: "3+",
                  label: "Years Exp",
                  icon: Award,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: "100%",
                  label: "Satisfaction",
                  icon: Star,
                  color: "from-orange-500 to-yellow-500",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Code size={20} />
                <span>View Projects</span>
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex-1 bg-white text-gray-800 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              >
                <Mail size={20} />
                <span>Hire Me</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
              <p className="text-sm text-gray-500 mb-3">Connect with me</p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    href: socialLinks.github,
                    label: "GitHub",
                    color: "hover:bg-gray-900 hover:text-white",
                  },
                  {
                    icon: Linkedin,
                    href: socialLinks.linkedin,
                    label: "LinkedIn",
                    color: "hover:bg-blue-700 hover:text-white",
                  },
                  {
                    icon: Mail,
                    href: `mailto:${personalInfo.email}`,
                    label: "Email",
                    color:
                      "hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3.5 bg-white rounded-xl shadow-md hover:shadow-lg text-gray-700 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Terminal Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Terminal Window */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <div className="ml-3 text-xs font-mono text-gray-300 font-medium tracking-wide">
                  gemeda.js — portfolio
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono">
                {/* Command line */}
                <div className="text-green-400 mb-4 text-sm flex items-center">
                  <span className="text-blue-400">$</span>
                  <span className="ml-2">npm run dev</span>
                  <motion.div
                    className="ml-1 w-2 h-4 bg-green-400"
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Status message */}
                <div className="text-cyan-400 mb-5 text-sm flex items-center">
                  <span className="text-purple-400">→</span>
                  <span className="ml-2">Starting development server...</span>
                </div>

                {/* Code lines with proper spacing */}
                <div className="space-y-2.5 mb-7">
                  {codeLines.slice(0, currentLine).map((line, idx) => (
                    <div
                      key={idx}
                      className="flex items-start text-gray-300 group"
                    >
                      <span className="text-gray-500 mr-4 w-5 text-right text-xs">
                        {idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                        {line}
                      </span>
                    </div>
                  ))}
                  {typedText && (
                    <div className="flex items-start">
                      <span className="text-gray-500 mr-4 w-5 text-right text-xs">
                        {currentLine + 1}
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed tracking-wide">
                        {typedText}
                      </span>
                      <span className="ml-0.5 w-1.5 h-5 bg-gray-400 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Footer message */}
                <div className="flex items-center text-gray-500 text-xs mb-3">
                  <Coffee className="mr-2 animate-pulse" size={14} />
                  Building something amazing...
                </div>

                {/* Branch indicator */}
                <div className="text-gray-500 text-xs flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                  <span className="font-medium">main</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100/50"
            >
              <h3 className="text-sm font-semibold text-gray-700 mb-5 flex items-center gap-2">
                <Monitor size={18} className="text-blue-500" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 ${tech.bg} rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <tech.icon className="text-white" size={22} />
                    </div>
                    <div className="text-xs font-semibold text-gray-800 text-center leading-tight px-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {tech.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats for Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="hidden lg:grid grid-cols-3 gap-4 mt-6"
            >
              {[
                {
                  value: "50+",
                  label: "Projects",
                  icon: Layers,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  value: "3+",
                  label: "Years Exp",
                  icon: Award,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: "100%",
                  label: "Satisfaction",
                  icon: Star,
                  color: "from-orange-500 to-yellow-500",
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-md`}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 mb-2 font-medium">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="w-6 h-10 border-2 border-gray-300/50 rounded-full flex justify-center"
            >
              <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1.5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}