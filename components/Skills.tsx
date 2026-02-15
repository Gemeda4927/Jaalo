"use client";

import { skills } from "@/lib/data";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaGithub,
  FaCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Skill category icons
const skillIcons = {
  frontend: <FaLaptopCode className="text-blue-500" size={28} />,
  backend: <FaServer className="text-green-500" size={28} />,
  databases: <FaDatabase className="text-purple-500" size={28} />,
  tools: <FaTools className="text-orange-500" size={28} />,
};

export default function SkillsCompnent() {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <>
      <section
        id="skills"
        className="py-24 px-6 bg-linear-to-br from-gray-50 via-white to-gray-50 font-sans relative overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Animated background blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ repeat: Infinity, duration: 25 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-6 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <FaCode className="text-white text-3xl" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-6 rounded-full" />
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              I craft elegant, scalable, and beautiful solutions using modern
              technologies.
            </p>
          </motion.div>

          {/* Skills Grid with enhanced cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                {/* Category Header with enhanced icon */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {skillIcons[category as keyof typeof skillIcons] || (
                      <FaTools size={28} />
                    )}
                  </motion.div>
                  <h3 className="text-xl font-semibold capitalize bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {category}
                  </h3>
                </div>

                {/* Skill Items with improved animations */}
                <div className="space-y-3">
                  {items.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: idx * 0.1,
                        }}
                      />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill count badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-4 text-right"
                >
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    {items.length} skills
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Currently Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mt-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-10 md:p-14 shadow-xl border border-white/50"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block mb-4"
              >
                <FaRocket className="text-4xl text-purple-500" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Currently Leveling Up
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Continuously expanding my horizons with cutting-edge
                technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "🤖 AI/ML",
                  "☁️ Cloud Architecture",
                  "⚙️ DevOps",
                  "🔗 Blockchain",
                  "📱 IoT",
                ].map((topic) => (
                  <motion.span
                    key={topic}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-2xl border border-purple-200 text-purple-700 shadow-md cursor-default transition-all duration-300 font-medium"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Royal Purple & Gold Theme - GitHub Section */}
      <motion.section
        id="github"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden py-16"
      >
        {/* Animated background with royal colors */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute top-0 -left-40 w-[500px] h-[500px] bg-amber-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 25 }}
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-fuchsia-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 30 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/20 rounded-full blur-3xl"
        />

        {/* Main Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-6xl w-full mx-4"
        >
          {/* Spectacular Header with Royal Purple & Gold */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 via-amber-500 to-yellow-500 rounded-t-3xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Animated gold overlay */}
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent skew-x-12"
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                {/* Animated GitHub Icon with gold effect */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="bg-gradient-to-br from-amber-400 to-yellow-500 p-4 rounded-2xl shadow-2xl"
                >
                  <FaGithub className="text-purple-900 text-5xl md:text-6xl" />
                </motion.div>
                
                <div>
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-lg"
                  >
                    GitHub Activity
                  </motion.h2>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <FaHeart className="text-yellow-300 text-xl" />
                    <p className="text-amber-200 text-lg md:text-xl font-medium">
                      @Gemeda4927
                    </p>
                    <FaHeart className="text-yellow-300 text-xl" />
                  </motion.div>
                </div>
              </div>
              
              {/* Stats with royal theme */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex gap-4"
              >
                {[
                  { label: "Repos", value: "24+", color: "from-purple-500 to-purple-600", icon: FaCode },
                  { label: "Contributions", value: "1.2k+", color: "from-amber-500 to-yellow-500", icon: FaRocket },
                  { label: "Followers", value: "156", color: "from-fuchsia-500 to-purple-500", icon: FaHeart },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`bg-gradient-to-br ${stat.color} px-6 py-4 rounded-xl text-center min-w-[120px] shadow-xl border border-white/20 backdrop-blur-sm`}
                  >
                    <stat.icon className="text-white/80 text-xl mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/90 font-medium uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub Chart Container with royal theme */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-800/90 via-purple-900/90 to-indigo-900/90 rounded-b-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm border-t-2 border-amber-500/30"
          >
            <div className="relative">
              {/* Royal glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-purple-500/30 to-fuchsia-500/30 rounded-3xl blur-xl" />
              
              {/* Chart with golden frame */}
              <div className="relative bg-gradient-to-br from-purple-950 to-indigo-950 rounded-2xl p-1 shadow-2xl">
                <div className="bg-purple-900/50 rounded-xl p-6 backdrop-blur-sm border border-amber-500/20">
                  <div className="overflow-hidden rounded-xl ring-2 ring-amber-500/30">
                    <img
                      src="https://ghchart.rshah.org/Gemeda4927"
                      alt="GitHub Contributions Chart"
                      className="w-full brightness-110 contrast-125"
                    />
                  </div>
                  
                  {/* Activity Legend with royal colors */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-sm" />
                      <span className="text-amber-200 font-medium">Peak Performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-sm" />
                      <span className="text-purple-200 font-medium">Active Days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-sm" />
                      <span className="text-indigo-200 font-medium">Regular Commits</span>
                    </div>
                  </div>

                  {/* Achievement badges */}
                  <div className="mt-8 flex justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-2 rounded-full text-purple-900 font-bold text-sm shadow-lg"
                    >
                      ⚡ 47 Day Streak
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg"
                    >
                      🏆 Top 5% Contributor
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative corner elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-10 -left-10 w-20 h-20 border-4 border-amber-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 border-4 border-purple-500/30 rounded-full"
          />
        </motion.div>

        {/* Floating particles - FIXED: Only render when mounted */}
        {mounted && dimensions.width > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * dimensions.width,
                  y: Math.random() * dimensions.height,
                }}
                animate={{
                  y: [null, -30, 30, -30],
                  x: [null, 30, -30, 30],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5 + Math.random() * 5,
                  delay: Math.random() * 5,
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: 0,
                  top: 0,
                }}
              />
            ))}
          </div>
        )}
      </motion.section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
}