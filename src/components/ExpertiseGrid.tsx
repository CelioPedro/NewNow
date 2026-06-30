"use client";

const expertiseItems = [
  {
    id: "exp-web",
    title: "EXPERIÊNCIAS WEB IMERSIVAS",
    description:
      "Sites de alto impacto visual e animações avançadas que transcendem o comum.",
  },
  {
    id: "exp-frontend",
    title: "ARQUITETURA FRONT-END HIGH-END",
    description:
      "Aplicações robustas, fluidas e performáticas construídas com engenharia de precisão.",
  },
  {
    id: "exp-software",
    title: "SOFTWARE CUSTOMIZADO",
    description:
      "Sistemas desenhados sob medida do back ao front. Código puro, zero templates.",
  },
];

export default function ExpertiseGrid() {
  return (
    <section
      id="expertise"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundColor: "var(--color-bg-light)",
        color: "var(--color-text-dark)",
      }}
    >
      <div className="section-padding">
        {/* Título gigante */}
        <h2 className="font-heading text-massive max-w-[90vw] mb-16 md:mb-24">
          INTERFACE É TUDO.
          <br />
          <span className="text-gradient-accent">
            NÓS CONSTRUÍMOS AS MELHORES.
          </span>
        </h2>

        {/* Grid assimétrico de cards — preparado para parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {expertiseItems.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="group relative p-8 md:p-10 border border-black/10 rounded-[var(--radius-card)] transition-all duration-500 hover:bg-black hover:text-white hover:border-transparent"
              style={{
                /* Offset vertical para efeito assimétrico */
                marginTop: index === 1 ? "3rem" : index === 2 ? "6rem" : "0",
              }}
            >
              {/* Número editorial */}
              <span className="font-heading text-6xl md:text-7xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-heading text-xl md:text-2xl mt-4 mb-4">
                {item.title}
              </h3>

              <p className="font-body text-sm md:text-base opacity-60 group-hover:opacity-80 transition-opacity duration-500 leading-relaxed">
                {item.description}
              </p>

              {/* Linha accent no hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 gradient-accent group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
