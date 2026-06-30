"use client";

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-black)",
        color: "var(--color-text-light)",
      }}
    >
      {/* Linhas decorativas verticais */}
      <div className="absolute inset-0 flex justify-between px-[10%] opacity-[0.04]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="w-px h-full bg-white"
          />
        ))}
      </div>

      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
        {/* Texto Principal — Editorial */}
        <h2 className="font-heading text-colossal">
          CÓDIGO FEITO
          <br />
          PARA SER
          <br />
          <span className="text-gradient-accent">SENTIDO.</span>
        </h2>

        {/* Subtexto */}
        <p className="font-body text-base md:text-lg mt-10 md:mt-16 opacity-50 max-w-2xl mx-auto leading-relaxed">
          Sem templates. Sem atalhos. Engenharia pura focada em performance
          milissegunda e visuais absolutos.
        </p>

        {/* Linha accent horizontal */}
        <div className="w-24 h-px gradient-accent mx-auto mt-10 opacity-60" />
      </div>
    </section>
  );
}
