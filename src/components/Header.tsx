"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all"
      style={{
        height: "var(--header-height)",
        padding: "0 var(--section-padding-x)",
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transitionDuration: "var(--duration-slow)",
        transitionTimingFunction: "var(--ease-out-expo)",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-heading tracking-[0.15em] transition-colors"
        style={{
          fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
          color: scrolled ? "var(--color-text-dark)" : "var(--color-text-light)",
          transitionDuration: "var(--duration-slow)",
        }}
      >
        NEW NOW
      </a>

      {/* CTA */}
      <motion.a
        href="#footer"
        id="cta-header"
        className="font-body font-semibold uppercase rounded-full transition-colors"
        style={{
          fontSize: "clamp(0.6rem, 0.7vw, 0.7rem)",
          letterSpacing: "0.15em",
          padding: "10px 28px",
          backgroundColor: scrolled
            ? "var(--color-text-dark)"
            : "rgba(255, 255, 255, 0.12)",
          color: "var(--color-text-light)",
          border: scrolled ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
          transitionDuration: "var(--duration-slow)",
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Iniciar Consultoria
      </motion.a>
    </header>
  );
}
