"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Atom,
  Wind,
  Layers,
  FileText,
  GitBranch,
} from "lucide-react";

const SkillPage = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "HTML", icon: Code, color: "#E34F26" },
    { name: "CSS", icon: Palette, color: "#1572B6" },
    { name: "JavaScript", icon: Zap, color: "#F7DF1E" },
    { name: "React.js", icon: Atom, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: Wind, color: "#06B6D4" },
    { name: "Next.js", icon: Layers, color: "#000000" },
    { name: "TypeScript", icon: FileText, color: "#3178C6" },
    { name: "GitHub", icon: GitBranch, color: "#181717" },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#0A0F1C] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden md:absolute md:top-1/4 md:left-1/4 md:w-72 md:h-72 bg-[#00FFD1]/10 rounded-full blur-3xl opacity-30" />
        <div className="hidden md:absolute md:bottom-1/4 md:right-1/4 md:w-72 md:h-72 bg-[#6366F1]/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#00FFD1]/5 rounded-full blur-2xl opacity-25" />

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00FFD1] to-[#6366F1] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="group relative bg-[#121A2B] rounded-2xl p-5 sm:p-6 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[180px]"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 255, 209, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00FFD1]/10 to-[#6366F1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/50 border border-white/5 group-hover:border-[#00FFD1]/30 transition-colors duration-300">
                    <IconComponent
                      className="w-8 h-8 text-[#E2E8F0] group-hover:text-[#00FFD1] transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#E2E8F0] group-hover:text-[#00FFD1] transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                {/* Subtle Pulse Animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-[#00FFD1]/20"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillPage;
