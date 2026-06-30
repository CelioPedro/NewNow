"use client";

const expertiseItems = [
  {
    id: "exp-web",
    number: "01",
    title: "EXPERIÊNCIAS WEB IMERSIVAS",
    description:
      "Sites de alto impacto visual com animações avançadas, scroll storytelling e interações que transcendem o comum. Cada pixel é intencional.",
    tags: ["GSAP", "Three.js", "WebGL", "Motion Design"],
  },
  {
    id: "exp-frontend",
    number: "02",
    title: "ARQUITETURA FRONT-END HIGH-END",
    description:
      "Aplicações robustas, fluidas e performáticas. Componentização cirúrgica, state management impecável, carregamento sub-50ms.",
    tags: ["React", "Next.js", "TypeScript", "Performance"],
  },
  {
    id: "exp-software",
    number: "03",
    title: "SOFTWARE CUSTOMIZADO",
    description:
      "Sistemas desenhados sob medida do back ao front. Arquitetura escalável, APIs RESTful, deploy contínuo. Zero templates, zero atalhos.",
    tags: ["Node.js", "APIs", "Cloud", "DevOps"],
  },
];

export default function ExpertiseGrid() {
  return (
    <section
      id="expertise"
      className="relative"
      style={{
        backgroundColor: "var(--color-bg-light)",
        color: "var(--color-text-dark)",
      }}
    >
      <div className="section-padding">
        {/* ── Título gigante ── */}
        <div className="mb-20 md:mb-32">
          <span
            className="text-label font-body block mb-6"
            style={{ color: "var(--color-text-subtle)" }}
          >
            O Que Fazemos
          </span>
          <h2 className="font-heading text-massive" style={{ maxWidth: "85%" }}>
            INTERFACE É TUDO.
            <br />
            <span className="text-gradient-accent">
              NÓS CONSTRUÍMOS AS MELHORES.
            </span>
          </h2>
        </div>

        {/* ── Grid assimétrico: 1 grande + 2 empilhados ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Card principal — ocupa 7 colunas */}
          <article
            id={expertiseItems[0].id}
            className="group relative lg:col-span-7 flex flex-col justify-between border border-border-light rounded-[var(--radius-card)] p-8 md:p-12 transition-all hover:bg-black hover:text-white hover:border-transparent"
            style={{
              minHeight: "clamp(340px, 45vh, 520px)",
              transitionDuration: "var(--duration-slow)",
              transitionTimingFunction: "var(--ease-out-expo)",
            }}
          >
            {/* Topo: Número + Tags */}
            <div className="flex items-start justify-between">
              <span className="font-heading text-[clamp(4rem,8vw,7rem)] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity leading-none">
                {expertiseItems[0].number}
              </span>
              <div className="flex flex-wrap gap-2 justify-end max-w-[50%]">
                {expertiseItems[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label font-body px-3 py-1 rounded-full border border-border-light group-hover:border-border-dark transition-colors"
                    style={{
                      fontSize: "0.6rem",
                      transitionDuration: "var(--duration-slow)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Base: Título + Descrição */}
            <div>
              <h3 className="font-heading text-display mb-5">
                {expertiseItems[0].title}
              </h3>
              <p className="font-body text-sm md:text-base opacity-50 group-hover:opacity-70 max-w-lg leading-relaxed transition-opacity"
                style={{ transitionDuration: "var(--duration-slow)" }}
              >
                {expertiseItems[0].description}
              </p>
            </div>

            {/* Linha accent */}
            <div
              className="absolute bottom-0 left-0 h-[3px] gradient-accent transition-all"
              style={{
                width: "0%",
                transitionDuration: "var(--duration-slower)",
                transitionTimingFunction: "var(--ease-out-expo)",
              }}
              onMouseEnter={() => {}}
            />
            <div className="absolute bottom-0 left-0 w-0 h-[3px] gradient-accent group-hover:w-full transition-all"
              style={{
                transitionDuration: "var(--duration-slower)",
                transitionTimingFunction: "var(--ease-out-expo)",
              }}
            />
          </article>

          {/* Cards menores — empilhados em 5 colunas */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            {expertiseItems.slice(1).map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="group relative flex-1 flex flex-col justify-between border border-border-light rounded-[var(--radius-card)] p-8 md:p-10 transition-all hover:bg-black hover:text-white hover:border-transparent"
                style={{
                  minHeight: "clamp(200px, 22vh, 280px)",
                  transitionDuration: "var(--duration-slow)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
              >
                {/* Topo */}
                <div className="flex items-start justify-between">
                  <span className="font-heading text-5xl md:text-6xl opacity-[0.06] group-hover:opacity-[0.12] transition-opacity leading-none"
                    style={{ transitionDuration: "var(--duration-slow)" }}
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-label font-body px-2.5 py-0.5 rounded-full border border-border-light group-hover:border-border-dark transition-colors"
                        style={{
                          fontSize: "0.55rem",
                          transitionDuration: "var(--duration-slow)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base */}
                <div>
                  <h3 className="font-heading text-xl md:text-2xl mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm opacity-50 group-hover:opacity-70 leading-relaxed transition-opacity max-w-sm"
                    style={{ transitionDuration: "var(--duration-slow)" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Linha accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] gradient-accent group-hover:w-full transition-all"
                  style={{
                    transitionDuration: "var(--duration-slower)",
                    transitionTimingFunction: "var(--ease-out-expo)",
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
