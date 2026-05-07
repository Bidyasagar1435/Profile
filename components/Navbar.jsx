"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();

    const section = document.querySelector(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-nav/80 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, "#home")}
              className="text-2xl font-bold bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
            >
              BS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleScrollToSection(e, link.href)
                  }
                  className="relative text-nav-foreground hover:text-primary transition-colors duration-300 py-2 group cursor-pointer"
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                  variants={{
                    initial: { rotate: 0, scale: 1 },
                    hover: {
                      rotate: [0, -1, 1, 0],
                      scale: 1.03,
                    },
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "center" }}
                >
                  {/* Text */}
                  <span className="relative z-10 block">
                    {link.name}
                  </span>

                  {/* Underline */}
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow */}
                  <motion.span
                    className="absolute inset-x-0 -mx-2 top-0 bottom-0 bg-linear-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-md -z-10"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Sparkle */}
                  <motion.span
                    className="absolute -top-1 -right-3 text-xs pointer-events-none"
                    variants={{
                      initial: { opacity: 0, scale: 0.5 },
                      hover: {
                        opacity: 1,
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                      },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    ✦
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-nav-foreground hover:text-primary p-2 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-nav/95 backdrop-blur-md px-4 py-4 space-y-2 border-t border-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) =>
                handleScrollToSection(e, link.href)
              }
              className="block text-nav-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;