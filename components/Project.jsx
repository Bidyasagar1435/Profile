"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";



const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Recipe Generator",
      description:
        "AI-powered recipe generator that creates custom recipes based on available ingredients with nutritional info.",
      image:
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
      tech: ["React", "API", "Tailwind CSS", "TypeScript"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Car Rental Platform",
      description:
        "Modern booking platform with real-time availability, pricing filters, and seamless checkout experience.",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/044/879/non_2x/mobile-car-rental-service-web-page-template-vector.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL", "React Query"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal frontend portfolio showcasing projects, skills, and experience with smooth animations and modern design.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Task Manager App",
      description:
        "Productivity app with drag-and-drop tasks, categories, priorities, and persistent local storage.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tech: ["React", "Redux", "Material-UI", "Local Storage"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#0A0F1C] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden md:absolute md:top-1/3 md:left-1/4 md:w-96 md:h-96 bg-[#00FFD1]/8 rounded-full blur-3xl opacity-20" />
        <div className="hidden md:absolute md:bottom-1/3 md:right-1/4 md:w-96 md:h-96 bg-[#6366F1]/8 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00FFD1]/5 rounded-full blur-2xl opacity-15" />

        {/* Grid pattern SVG */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonal-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="60"
                stroke="url(#line-gradient)"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </pattern>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00FFD1] via-[#00FFD1] to-[#6366F1] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my expertise in
            frontend development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group h-full"
              variants={itemVariants}
            >
              {/* Project Card */}
              <div className="h-full flex flex-col bg-[#121A2B] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#00FFD1]/30">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-[#0A0F1C]">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121A2B] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Glow Border on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 20px rgba(0, 255, 209, 0.2), inset 0 0 40px rgba(99, 102, 241, 0.1)",
                    }}
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#E2E8F0] mb-2 line-clamp-1 group-hover:text-[#00FFD1] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#94A3B8] mb-6 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 text-xs sm:text-sm rounded-full bg-[#0A0F1C]/60 text-[#00FFD1] border border-[#00FFD1]/30 hover:border-[#00FFD1] transition-colors duration-200 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-[#94A3B8] mb-6">
            Want to see more? Visit my GitHub for additional projects
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00FFD1] to-[#6366F1] text-[#0A0F1C] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00FFD1]/50 transition-all duration-300 hover:scale-105"
          >
            <Code size={20} />
            Explore All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
