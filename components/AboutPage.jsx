"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const AboutPage = () => {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const skills = ["React", "Next.js", "JavaScript", "Tailwind CSS"];

  return (
    <section
      id="about"
      className="relative bg-[#0A0F1C] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,430px)_minmax(0,1fr)] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div
            className="relative mx-auto w-full max-w-[430px]"
            variants={item}
          >
            <div className="relative mx-auto w-full max-w-[420px] aspect-square rounded-[2rem] bg-[#0D1626] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/5">
              <div className="absolute inset-0 rounded-[2rem] border border-white/5" />
              <motion.div
                className="relative mx-auto h-full w-full overflow-hidden rounded-[1.75rem] border border-[#00FFD1]/20 bg-[#0D1626]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br from-[#00FFD1]/30 via-transparent to-[#00FFD1]/10 blur-2xl" />
                <div className="absolute inset-0 rounded-[1.75rem] border border-white/10" />
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                  <img
                    src="/me.jpeg"
                    alt="Bidyasagar Sahu"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={item}>
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                About Me
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[#CBD5E1] sm:text-lg">
                Hi, I’m{" "}
                <span className="font-semibold text-[#00FFD1]">
                  Bidyasagar Sahu
                </span>
                , a passionate frontend developer who builds modern, responsive,
                and intuitive web applications. I combine polished design with
                performance-first development to create interfaces that feel
                fast, accessible, and recruiter-ready.
              </p>
            </div>

            <motion.div className="grid gap-4 sm:grid-cols-2" variants={item}>
              <motion.div
                className="rounded-3xl border border-white/10 bg-[#0D1626]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#94A3B8]">
                  Core skills
                </p>
                <ul className="mt-4 space-y-3 text-base text-[#E2E8F0]">
                  <li>• React & Next.js</li>
                  <li>• JavaScript & TypeScript</li>
                  <li>• Tailwind CSS & responsive UI</li>
                </ul>
              </motion.div>

              <motion.div
                className="rounded-3xl border border-white/10 bg-[#0D1626]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#94A3B8]">
                  What I love
                </p>
                <div className="mt-4 space-y-3 text-base leading-7 text-[#CBD5E1]">
                  <p>
                    Building polished interfaces with clarity, strong structure,
                    and modern styling.
                  </p>
                  <p>
                    Crafting user-friendly, responsive experiences that adapt
                    beautifully across devices.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6" variants={item}>
              <div className="flex flex-wrap gap-3 justify-start">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-[#00FFD1]/20 bg-[#00FFD1]/10 px-4 py-2 text-sm text-[#E2E8F0]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="w-full sm:w-auto bg-[#00FFD1] text-[#050A14] shadow-lg shadow-[#00ffd15e] hover:bg-[#86ffe1] transition-colors"
                >
                  <a href="/resume.pdf" download>
                    <span className="inline-flex items-center gap-2 ">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </span>
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full sm:w-auto border-[#00FFD1]/30 bg-transparent text-[#E2E8F0] hover:bg-white/5 hover:text-[#00FFD1] transition-colors"
                >
                  <a href="#contact" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
