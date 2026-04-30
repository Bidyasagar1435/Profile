"use client";

import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  // Array of random positions for shining dots
  const shiningDots = [
    { top: "10%", left: "15%", delay: 0 },
    { top: "20%", left: "70%", delay: 0.5 },
    { top: "35%", left: "25%", delay: 1 },
    { top: "45%", left: "80%", delay: 1.5 },
    { top: "60%", left: "10%", delay: 0.3 },
    { top: "70%", left: "60%", delay: 0.8 },
    { top: "80%", left: "35%", delay: 1.2 },
    { top: "25%", left: "50%", delay: 2 },
    { top: "75%", left: "75%", delay: 0.7 },
    { top: "55%", left: "45%", delay: 1.8 },
    { top: "65%", left: "25%", delay: 1.4 },
    { top: "50%", left: "50%", delay: 0.9 },
    { top: "12%", left: "85%", delay: 1.1 },
    { top: "30%", left: "5%", delay: 0.6 },
    { top: "40%", left: "55%", delay: 1.7 },
    { top: "68%", left: "90%", delay: 0.2 },
    { top: "85%", left: "20%", delay: 1.3 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a1a] via-[#0d1020] to-[#050810]" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#020408]" />

      {/* Grid pattern - diagonal lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Diagonal line pattern */}
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

          {/* Gradient for lines */}
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

          {/* Glow dots pattern */}
          <pattern
            id="dots"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="1.5" fill="#6366f1" opacity="0.3" />
            <circle cx="0" cy="0" r="1" fill="#3b82f6" opacity="0.2" />
            <circle cx="60" cy="60" r="1" fill="#8b5cf6" opacity="0.2" />
          </pattern>

          {/* Radial gradient for center glow */}
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0" />
            <stop offset="70%" stopColor="#0f172a" stopOpacity="0" />
            <stop offset="100%" stopColor="#020408" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Grid lines */}
        <rect width="100%" height="100%" fill="url(#diagonal-grid)" />

        {/* Dots at intersections */}
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Shining dots with animation */}
      {shiningDots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            background:
              index % 3 === 0
                ? "#3b82f6"
                : index % 3 === 1
                  ? "#6366f1"
                  : "#8b5cf6",
            boxShadow: `0 0 6px ${index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#6366f1" : "#8b5cf6"}, 0 0 12px ${index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#6366f1" : "#8b5cf6"}`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Additional subtle glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-500/3 rounded-full blur-3xl" />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Background;
