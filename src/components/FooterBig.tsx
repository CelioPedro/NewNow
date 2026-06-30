"use client";

import { motion } from "framer-motion";

const footerColumns = {
  sobre: {
    title: "Sobre",
    items: [
      { label: "A New Now", href: "#" },
      { label: "Manifesto", href: "#manifesto" },
      { label: "Processo", href: "#" },
      { label: "Carreiras", href: "#" },
    ],
  },
  servicos: {
    title: "Serviços",
    items: [
      { label: "Experiências Web", href: "#expertise" },
      { label: "Front-End High-End", href: "#expertise" },
      { label: "Software Customizado", href: "#expertise" },
      { label: "Consultoria Técnica", href: "#" },
    ],
  },
  redes: {
    title: "Redes",
    items: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Behance", href: "#" },
    ],
  },
  contato: {
    title: "Contato",
    items: [
      { label: "contato@newnow.dev", href: "mailto:contato@newnow.dev" },
      { label: "+55 11 9999-0000", href: "tel:+5511999990000" },
      { label: "São Paulo, Brasil", href: "#" },
    ],
  },
};

export default function FooterBig() {
  return (
    <footer
      id="footer"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden noise-overlay"
      style={{
        background:
          "linear-gradient(160deg, var(--color-accent-red) 0%, var(--color-accent-orange) 100%)",
        color: "var(--color-text-light)",
      }}
    >
      {/* ── CTA gigante ── */}
      <div className="flex-1 flex flex-col items-center justify-center section-padding text-center relative z-10">
        {/* Label */}
        <span
          className="text-label font-body block mb-8 md:mb-12"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          Próximo Passo
        </span>

        {/* Texto vazado colossal */}
        <h2 className="font-heading text-colossal text-outline">
          VAMOS
          <br />
          CONSTRUIR?
        </h2>

        {/* CTA */}
        <motion.a
          href="mailto:contato@newnow.dev"
          id="cta-footer"
          className="mt-12 md:mt-16 font-body font-semibold uppercase rounded-full transition-colors"
          style={{
            fontSize: "clamp(0.7rem, 0.85vw, 0.85rem)",
            letterSpacing: "0.15em",
            padding: "16px 48px",
            backgroundColor: "white",
            color: "var(--color-text-dark)",
          }}
          whileHover={{
            scale: 1.04,
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
          whileTap={{ scale: 0.97 }}
        >
          Iniciar Consultoria
        </motion.a>
      </div>

      {/* ── Grid de links — 4 colunas ── */}
      <div
        className="relative z-10"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "clamp(2.5rem, 5vh, 4rem) var(--section-padding-x)",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
          {Object.values(footerColumns).map((column) => (
            <div key={column.title}>
              {/* Título da coluna */}
              <h4
                className="text-label font-body mb-5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                {column.title}
              </h4>

              {/* Links */}
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-body text-sm opacity-75 hover:opacity-100 transition-opacity"
                      style={{ transitionDuration: "var(--duration-base)" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Barra inferior: Logo + Copyright ── */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <span className="font-heading text-base tracking-[0.15em]">
            NEW NOW
          </span>
          <span
            className="font-body text-xs"
            style={{ color: "rgba(255, 255, 255, 0.4)" }}
          >
            © {new Date().getFullYear()} New Now. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
