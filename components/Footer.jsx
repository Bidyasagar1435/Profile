"use client";

import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#121A2B] text-[#E2E8F0] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00FFD1]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Get In <span className="text-[#00FFD1]">Touch</span>
          </h2>

          <p className="text-[#94A3B8] max-w-md">
            I'm always open to discussing new opportunities, creative ideas, or
            collaborations. Feel free to reach out!
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-5"
        >
          <FormInput placeholder="Your Name" />
          <FormInput placeholder="Your Email" type="email" />

          <motion.textarea
            variants={fadeUp}
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl bg-transparent border border-[#2A334A] focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/30 outline-none transition-all duration-300"
          />

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-[#00FFD1] text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFD1]/30"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

/* Reusable Components */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="text-[#00FFD1] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-[#E2E8F0] group-hover:text-[#00FFD1] transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="p-3 rounded-full border border-[#2A334A] hover:border-[#00FFD1] hover:text-[#00FFD1] transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-[#00FFD1]/20">
      {icon}
    </div>
  );
}

function FormInput({ placeholder, type = "text" }) {
  return (
    <motion.input
      variants={fadeUp}
      type={type}
      placeholder={placeholder}
      className="w-full p-4 rounded-xl bg-transparent border border-[#2A334A] focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/30 outline-none transition-all duration-300"
    />
  );
}
