"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedGridBackground from "./Background";
const HeroPage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ✅ ONLY your Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedGridBackground />
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* LEFT */}
          <div className="space-y-6 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-[#00FFD1]/10 text-[#94A3B8] border border-[#00FFD1]/20">
              <span className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
              Available for work
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0]">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#00FFD1] to-[#6366F1] bg-clip-text text-transparent">
                Bidyasagar Sahu
              </span>
            </h1>

            <p className="text-[#94A3B8]">
              A passionate Frontend Developer building modern, responsive, and
              user-friendly web applications with clean UI and smooth UX. I
              focus on performance, accessibility, and scalable design systems,
              ensuring seamless user experiences across devices while
              continuously learning and adapting to new technologies and
              industry best practices.
            </p>

            <div className="flex gap-4">
              <Button className="bg-[#00FFD1] text-[#050A14] hover:bg-[#8cffde]">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="border-[#00FFD1]/30 text-[#E2E8F0] hover:bg-[#00FFD1]/10"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-90 h-90 rounded-full overflow-hidden border-4 border-[#a4d5cc] shadow-xl">
              <img
                src="/me.jpeg"
                alt="Bidyasagar Sahu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
