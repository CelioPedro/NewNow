"use client";

const metrics = [
  { value: "200+", label: "Projetos Entregues" },
  { value: "<50ms", label: "Load Time Médio" },
  { value: "Zero", label: "Templates Usados" },
];

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay"
      style={{
        backgroundColor: "var(--color-bg-black)",
        color: "var(--color-text-light)",
      }}
    >
      {/* ── Conteúdo central ── */}
      <div className="relative z-10 text-center w-full" style={{ padding: "0 var(--section-padding-x)" }}>
        {/* Label */}
        <span
          className="text-label font-body block mb-8 md:mb-12"
          style={{ color: "var(--color-text-subtle)" }}
        >
          Manifesto
        </span>

        {/* Texto colossal */}
        <h2 className="font-heading text-colossal mx-auto">
          CÓDIGO FEITO
          <br />
          PARA SER
          <br />
          <span className="text-gradient-accent">SENTIDO.</span>
        </h2>

        {/* Subtexto */}
        <p
          className="font-body text-sm md:text-base mt-12 md:mt-16 mx-auto max-w-xl leading-relaxed"
          style={{ color: "var(--color-text-muted)", opacity: 0.6 }}
        >
          Sem templates. Sem atalhos. Engenharia pura focada em performance
          milissegunda e visuais absolutos.
        </p>
      </div>

      {/* ── Counter row — métricas conceituais ── */}
      <div
        className="relative z-10 w-full mt-20 md:mt-28"
        style={{
          padding: "0 var(--section-padding-x)",
          borderTop: "1px solid var(--color-border-dark)",
        }}
      >
        <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="py-8 md:py-10 text-center"
            >
              <span
                className="font-heading block text-2xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "var(--color-accent-red)" }}
              >
                {metric.value}
              </span>
              <span
                className="text-label font-body"
                style={{ color: "var(--color-text-subtle)" }}
              >
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
