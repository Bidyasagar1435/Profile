"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-linear-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full text-muted-foreground border border-border/50">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-foreground">I'm </span>
              <span className="bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Bidyasagar Sahu
              </span>
            </motion.h1>

            {/* Introduction Paragraph */}
            <motion.p
              className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              A passionate{" "}
              <span className="bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">
                Frontend Developer
              </span>{" "}
              with expertise in building modern, responsive, and user-friendly
              web applications. I love transforming ideas into elegant digital
              experiences using cutting-edge technologies.
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "JavaScript",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-full border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                className="group"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo with Animation */}
          <motion.div
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer spinning gradient ring - clockwise */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f472b6, #3b82f6)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Glow effect for outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                  filter: "blur(20px)",
                  opacity: 0.3,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner white ring */}
              <div className="absolute inset-1 rounded-full bg-background" />

              {/* Inner spinning gradient ring - counter-clockwise */}
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f472b6, #3b82f6)",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Glow effect for inner ring */}
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                  filter: "blur(15px)",
                  opacity: 0.2,
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner dark ring */}
              <div className="absolute inset-3 rounded-full bg-background" />

              {/* Photo container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/me.jpeg"
                  alt="Bidyasagar Sahu"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 right-4 px-3 py-1 bg-background rounded-full shadow-lg border border-border/50"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-medium text-foreground">
                  React
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-4 px-3 py-1 bg-background rounded-full shadow-lg border border-border/50"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-sm font-medium text-foreground">
                  Next.js
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Frontend Developer component

export default HomePage;
