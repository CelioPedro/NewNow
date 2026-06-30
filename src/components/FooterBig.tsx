"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Behance", href: "#" },
];

export default function FooterBig() {
  return (
    <footer
      id="footer"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent-red) 0%, var(--color-accent-orange) 100%)",
        color: "var(--color-text-light)",
      }}
    >
      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center justify-center section-padding text-center">
        {/* Texto gigante vazado */}
        <h2
          className="font-heading text-colossal"
          style={{
            WebkitTextStroke: "2px rgba(255,255,255,0.9)",
            WebkitTextFillColor: "transparent",
          }}
        >
          VAMOS
          <br />
          CONSTRUIR?
        </h2>

        {/* CTA */}
        <motion.a
          href="mailto:contato@newnow.dev"
          id="cta-footer"
          className="mt-10 md:mt-14 bg-white text-black font-body font-semibold text-sm md:text-base uppercase tracking-widest rounded-full px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Iniciar Consultoria
        </motion.a>
      </div>

      {/* Grid inferior — links e contato */}
      <div className="border-t border-white/20 section-padding !py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-heading text-xl tracking-tight">NEW NOW</span>

          {/* Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <span className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} New Now. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
