"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <>
      <section id="education" className="py-16 px-6 bg-[#0A0F1C]">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold text-center bg-gradient-to-r from-[#00FFD1] to-[#6366F1] bg-clip-text text-transparent">
            Education
          </h2>
          <p className="mt-3 text-center text-[#94A3B8] max-w-2xl mx-auto">
            My education has been a journey of self-discovery and growth. Here
            are my academic details.
          </p>

          {/* Card */}
          <div className="mt-10">
            <motion.div
              className="group relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#7C3AED]"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#7C3AED] opacity-20 blur-md group-hover:opacity-40 transition" />

              {/* Content */}
              <div className="relative rounded-3xl bg-[#0D1626]/90 p-6 md:p-8">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-200">
                    Bachelor's in Computer Science
                  </h3>
                  <span className="mt-2 md:mt-0 text-sm text-[#94A3B8]">
                    2023 - 2026
                  </span>
                </div>

                {/* University */}
                <p className="mt-2 text-[#CBD5E1]">
                  Utkal University, Bhubaneswar, Odisha
                </p>

                {/* Grade */}
                <p className="mt-2 text-[#94A3B8] text-sm">
                  Grade:{" "}
                  <span className="text-gray-300 font-medium">7.02 CGPA</span>
                </p>

                {/* Description */}
                <p className="mt-4 text-[#CBD5E1] leading-7">
                  Bachelor’s in Computer Science with a strong foundation in
                  software engineering, algorithms, and system architecture.
                  Focused on building scalable applications and understanding
                  modern development practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
