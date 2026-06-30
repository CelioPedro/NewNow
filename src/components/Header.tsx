"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-sm px-6 md:px-10 py-4 border-b border-black/5"
    >
      {/* Logo */}
      <a href="#" className="font-heading text-2xl md:text-3xl tracking-tight text-black">
        NEW NOW
      </a>

      {/* CTA */}
      <motion.a
        href="#footer"
        id="cta-header"
        className="bg-black text-white font-body font-semibold text-xs md:text-sm uppercase tracking-widest rounded-full px-6 py-3 hover:bg-accent-red transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Iniciar Consultoria
      </motion.a>
    </header>
  );
}
