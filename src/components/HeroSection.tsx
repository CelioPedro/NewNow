"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      {/* Fundo abstrato — placeholder para animação de código em loop */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,51,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,51,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Texto Editorial Colossal */}
      <div className="relative z-10 text-center section-padding">
        <h1
          className="font-heading text-colossal"
          style={{ color: "var(--color-accent-red)" }}
        >
          O PADRÃO
          <br />
          MUDOU.
        </h1>

        {/* Subtexto — preparado para animação de scroll */}
        <p
          className="font-heading text-large mt-8 md:mt-12 opacity-60"
          style={{ color: "var(--color-text-light)" }}
        >
          BEM-VINDO AO NOVO AGORA.
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="font-body text-xs uppercase tracking-[0.3em] opacity-40"
          style={{ color: "var(--color-text-light)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12 opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-text-light), transparent)",
          }}
        />
      </div>
    </section>
  );
}
