"use client";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "LUXE COMMERCE",
    category: "E-COMMERCE DE LUXO",
    year: "2024",
  },
  {
    id: "portfolio-2",
    title: "VERTEX PLATFORM",
    category: "APLICAÇÃO WEB",
    year: "2024",
  },
  {
    id: "portfolio-3",
    title: "NOIR STUDIO",
    category: "SITE INSTITUCIONAL",
    year: "2024",
  },
  {
    id: "portfolio-4",
    title: "PULSE DASHBOARD",
    category: "SOFTWARE CUSTOMIZADO",
    year: "2025",
  },
  {
    id: "portfolio-5",
    title: "AETHER EXPERIENCE",
    category: "EXPERIÊNCIA IMERSIVA",
    year: "2025",
  },
];

export default function GridDoMundo() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
      }}
    >
      {/* Título da seção */}
      <div className="section-padding pb-8 md:pb-12">
        <span className="font-body text-xs uppercase tracking-[0.3em] opacity-40">
          Portfólio Selecionado
        </span>
        <h2 className="font-heading text-massive mt-4">
          GRID DO MUNDO
        </h2>
      </div>

      {/* Container de scroll horizontal — será controlado pelo GSAP ScrollTrigger */}
      <div
        id="portfolio-scroll-container"
        className="flex items-stretch gap-6 md:gap-8 px-6 md:px-10 pb-16"
        style={{
          /* Largura total para scroll horizontal */
          width: "max-content",
        }}
      >
        {portfolioItems.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden cursor-pointer"
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Placeholder visual — mock de interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

            {/* Overlay com info */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              {/* Número do projeto */}
              <span className="font-heading text-7xl md:text-8xl absolute top-6 right-6 opacity-[0.06]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Categoria */}
              <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-40 mb-2">
                {item.category} — {item.year}
              </span>

              {/* Título do projeto */}
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl group-hover:text-gradient-accent transition-colors duration-500">
                {item.title}
              </h3>

              {/* Linha accent no hover */}
              <div className="w-0 h-[2px] gradient-accent mt-4 group-hover:w-16 transition-all duration-700" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
