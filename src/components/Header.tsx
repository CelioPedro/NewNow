"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#manifesto" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#footer" },
];

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 flex items-center justify-between"
      style={{
        height: "var(--header-height)",
        padding: "0 var(--section-padding-x)",
        backgroundColor: "var(--color-bg-cream)",
      }}
    >
      {/* ── Logo + Separador ── */}
      <div className="flex items-center gap-5">
        <a
          href="#"
          className="font-heading tracking-[0.1em]"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.3rem)",
            color: "var(--color-text-dark)",
          }}
        >
          NEW NOW
        </a>

        {/* Separador vertical */}
        <div
          className="hidden md:block w-px"
          style={{
            height: "20px",
            backgroundColor: "var(--color-text-dark)",
            opacity: 0.2,
          }}
        />

        {/* ── Nav links ── */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body transition-opacity hover:opacity-100"
              style={{
                fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)",
                fontWeight: 500,
                color: "var(--color-text-dark)",
                opacity: 0.7,
                transitionDuration: "var(--duration-base)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── CTA ── */}
      <motion.a
        href="#footer"
        id="cta-header"
        className="font-body font-semibold uppercase rounded-[var(--radius-sm)]"
        style={{
          fontSize: "clamp(0.6rem, 0.7vw, 0.72rem)",
          letterSpacing: "0.12em",
          padding: "10px 24px",
          backgroundColor: "var(--color-text-dark)",
          color: "var(--color-bg-cream)",
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Iniciar Consultoria
      </motion.a>
    </header>
  );
}
