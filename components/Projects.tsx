"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import {
  Github,
  ExternalLink,
  Star,
  Eye,
  Code2,
  Zap,
  Sparkles,
  ArrowRight,
  Filter,
  FolderOpen,
  Briefcase,
} from "lucide-react";
import { Project } from "@/types";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function ProjectsComponent() {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] =
    useState<string | null>(null);

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
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "full-stack",
      label: "Full Stack",
      icon: Code2,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag
              .toLowerCase()
              .includes(filter.toLowerCase())
          )
        );

  const handleSetHoveredProject = (
    id: string | number
  ) => {
    setHoveredProject(id.toString());
  };

  const handleClearHoveredProject = () => {
    setHoveredProject(null);
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map(
          (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          )
        )}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my recent work
            showcasing{" "}
            <span className="font-semibold text-blue-600">
              innovation
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600">
              creativity
            </span>
            , and{" "}
            <span className="font-semibold text-pink-600">
              technical excellence
            </span>
            .
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <div className="w-full text-center mb-4">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <Filter size={16} />
              <span>Filter by category</span>
            </div>
          </div>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() =>
                  setFilter(category.id)
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100"
                }`}
              >
                <Icon size={18} />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map(
                (project: Project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    hoveredProject={
                      hoveredProject
                    }
                    onHover={
                      handleSetHoveredProject
                    }
                    onLeave={
                      handleClearHoveredProject
                    }
                  />
                )
              )
            ) : (
              <EmptyState />
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="text-center mt-20"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>

          <p className="text-gray-500 mt-6 text-sm">
            Currently showcasing{" "}
            {filteredProjects.length} of{" "}
            {projects.length} total projects
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              {
                value: projects.length,
                label: "Total Projects",
                color: "text-blue-600",
                icon: FolderOpen,
              },
              {
                value: "24/7",
                label: "Support",
                color: "text-purple-600",
                icon: Zap,
              },
              {
                value: "100%",
                label: "Satisfaction",
                color: "text-pink-600",
                icon: Star,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center"
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
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({
  project,
  index,
  hoveredProject,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  hoveredProject: string | null;
  onHover: (id: string | number) => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Project Image/Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Project initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={
              hoveredProject ===
              project.id.toString()
                ? { scale: 1.2, rotate: 5 }
                : { scale: 1, rotate: 0 }
            }
            className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {project.title.charAt(0)}
          </motion.div>
        </div>

        {/* Tags overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Live badge */}
        {project.demo && (
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-semibold text-white shadow-lg flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              LIVE
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={
              hoveredProject ===
              project.id.toString()
                ? { x: 5 }
                : { x: 0 }
            }
            transition={{ duration: 0.3 }}
            className="text-blue-500"
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags
              .slice(0, 4)
              .map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100/50"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300"
            >
              <Github size={18} />
              <span>Code</span>
            </motion.a>
          )}
          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-500 rounded-xl font-medium cursor-not-allowed">
              <ExternalLink size={18} />
              <span>No Demo</span>
            </div>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none rounded-2xl" />
    </motion.div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="col-span-full text-center py-16"
    >
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
        <Filter className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mb-3">
        No projects found
      </h3>
      <p className="text-gray-500 max-w-md mx-auto">
        No projects match the selected filter. Try
        a different category or check back soon
        for updates!
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // onClick={() => Filter('all')}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
      >
        View All Projects
      </motion.button>
    </motion.div>
  );
}
