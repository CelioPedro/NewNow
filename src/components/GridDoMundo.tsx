"use client";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "LUXE COMMERCE",
    category: "E-Commerce de Luxo",
    year: "2024",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
    accentGlow: "radial-gradient(circle at 30% 70%, rgba(233, 69, 96, 0.15), transparent 60%)",
  },
  {
    id: "portfolio-2",
    title: "VERTEX PLATFORM",
    category: "Aplicação Web",
    year: "2024",
    gradient: "linear-gradient(145deg, #0d1117 0%, #161b22 40%, #21262d 100%)",
    accentGlow: "radial-gradient(circle at 70% 30%, rgba(88, 166, 255, 0.12), transparent 60%)",
  },
  {
    id: "portfolio-3",
    title: "NOIR STUDIO",
    category: "Site Institucional",
    year: "2024",
    gradient: "linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
    accentGlow: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05), transparent 50%)",
  },
  {
    id: "portfolio-4",
    title: "PULSE DASHBOARD",
    category: "Software Customizado",
    year: "2025",
    gradient: "linear-gradient(130deg, #0a1628 0%, #1a0a28 40%, #0a1628 100%)",
    accentGlow: "radial-gradient(circle at 60% 80%, rgba(139, 92, 246, 0.15), transparent 55%)",
  },
  {
    id: "portfolio-5",
    title: "AETHER EXPERIENCE",
    category: "Experiência Imersiva",
    year: "2025",
    gradient: "linear-gradient(140deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    accentGlow: "radial-gradient(circle at 40% 40%, rgba(6, 214, 160, 0.12), transparent 55%)",
  },
];

export default function GridDoMundo() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
        minHeight: "80vh",
      }}
    >
      {/* ── Header da seção ── */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        style={{ padding: "var(--section-padding-y) var(--section-padding-x) clamp(2rem, 4vh, 4rem)" }}
      >
        <div>
          <span
            className="text-label font-body block mb-4"
            style={{ color: "var(--color-text-subtle)" }}
          >
            Portfólio Selecionado
          </span>
          <h2 className="font-heading text-massive">GRID DO MUNDO</h2>
        </div>
        <span
          className="font-heading text-xl md:text-2xl"
          style={{ color: "var(--color-text-subtle)" }}
        >
          {String(portfolioItems.length).padStart(2, "0")} PROJETOS
        </span>
      </div>

      {/* ── Container de scroll horizontal ── */}
      <div
        id="portfolio-scroll-container"
        className="flex items-stretch gap-8 md:gap-12"
        style={{
          padding: "0 var(--section-padding-x) clamp(3rem, 6vh, 5rem)",
          width: "max-content",
        }}
      >
        {portfolioItems.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className="group relative flex-shrink-0 rounded-[var(--radius-card)] overflow-hidden cursor-pointer transition-all"
            style={{
              width: "clamp(320px, 45vw, 580px)",
              aspectRatio: "16 / 10",
              border: "1px solid var(--color-border-dark)",
              transitionDuration: "var(--duration-slow)",
              transitionTimingFunction: "var(--ease-out-expo)",
            }}
          >
            {/* ── Fundo: gradiente simulando interface ── */}
            <div
              className="absolute inset-0 transition-transform"
              style={{
                background: item.gradient,
                transitionDuration: "var(--duration-slower)",
                transitionTimingFunction: "var(--ease-out-expo)",
              }}
            />

            {/* Glow accent sutil */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: item.accentGlow,
                transitionDuration: "var(--duration-slower)",
              }}
            />

            {/* ── Mock de interface: linhas e blocos ── */}
            <div className="absolute inset-0 p-6 md:p-8 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity"
              style={{ transitionDuration: "var(--duration-slow)" }}
            >
              {/* Barra de título simulada */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              {/* Blocos simulando layout */}
              <div className="flex gap-3 h-[40%]">
                <div className="w-[30%] bg-white/20 rounded-lg" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-3 w-[80%] bg-white/15 rounded" />
                  <div className="h-3 w-[60%] bg-white/10 rounded" />
                  <div className="h-3 w-[40%] bg-white/8 rounded" />
                </div>
              </div>
            </div>

            {/* ── Overlay com informações ── */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
              {/* Número gigante */}
              <span className="font-heading text-[clamp(4rem,10vw,8rem)] absolute top-4 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity leading-none"
                style={{ transitionDuration: "var(--duration-slow)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Categoria + Ano */}
              <span
                className="text-label font-body mb-2"
                style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}
              >
                {item.category} — {item.year}
              </span>

              {/* Título */}
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl">
                {item.title}
              </h3>

              {/* Linha accent */}
              <div
                className="h-[2px] gradient-accent mt-4 transition-all"
                style={{
                  width: "0px",
                  transitionDuration: "var(--duration-slower)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
              />
              <div className="w-0 h-[2px] gradient-accent mt-4 group-hover:w-20 transition-all"
                style={{
                  transitionDuration: "var(--duration-slower)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
