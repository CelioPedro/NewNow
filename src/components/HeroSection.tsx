"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-end overflow-hidden noise-overlay vignette"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      {/* ── Background: grid sutil + fragmentos de código como textura ── */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Fragmentos de código flutuando — opacidade ultra-baixa */}
        <div
          className="absolute top-[15%] right-[8%] font-mono text-[11px] leading-relaxed select-none"
          style={{ color: "rgba(255, 255, 255, 0.04)" }}
        >
          <pre>{`const experience = () => {
  return {
    motion: 'fluid',
    render: 'pixel-perfect',
    performance: '< 50ms'
  };
};`}</pre>
        </div>

        <div
          className="absolute bottom-[25%] left-[5%] font-mono text-[10px] leading-relaxed select-none"
          style={{ color: "rgba(255, 255, 255, 0.03)" }}
        >
          <pre>{`.interface {
  display: grid;
  animation: seamless;
  quality: absolute;
}`}</pre>
        </div>

        <div
          className="absolute top-[40%] left-[55%] font-mono text-[9px] leading-relaxed select-none"
          style={{ color: "rgba(255, 255, 255, 0.025)" }}
        >
          <pre>{`<Component
  precision="surgical"
  motion={true}
/>`}</pre>
        </div>
      </div>

      {/* ── Conteúdo Principal — alinhado à esquerda, posicionado na base ── */}
      <div
        className="relative z-10 w-full"
        style={{ padding: "0 var(--section-padding-x) clamp(3rem, 8vh, 6rem)" }}
      >
        {/* Label editorial */}
        <span
          className="text-label font-body block mb-6 md:mb-8"
          style={{ color: "var(--color-text-muted)" }}
        >
          Engenharia de Software & Front-End High-End
        </span>

        {/* Texto colossal — preenche quase toda a viewport */}
        <h1
          className="font-heading text-colossal"
          style={{ color: "var(--color-accent-red)" }}
        >
          O PADRÃO
          <br />
          MUDOU<span style={{ color: "var(--color-text-light)" }}>.</span>
        </h1>

        {/* Linha inferior: subtexto + indicador de scroll */}
        <div className="flex items-end justify-between mt-10 md:mt-14">
          {/* Subtexto — tagline posicional */}
          <p
            className="font-heading text-large max-w-[50vw] md:max-w-none"
            style={{ color: "rgba(255, 255, 255, 0.35)" }}
          >
            BEM-VINDO AO NOVO AGORA.
          </p>

          {/* Indicador de scroll */}
          <div className="hidden md:flex flex-col items-center gap-3">
            <span
              className="text-label font-body"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              Scroll
            </span>
            <div
              className="w-px h-16"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
