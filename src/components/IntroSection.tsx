"use client";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* ── Vignette sutil ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      />

      {/* ── Logo / Brand reveal — placeholder para vídeo da marca ── */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Glow atrás do logo */}
        <div
          className="absolute inset-0 blur-[80px] opacity-30"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent-red), var(--color-accent-orange))",
            transform: "scale(2.5)",
          }}
        />

        {/* Logo text — simula o vídeo brand reveal */}
        <h1
          className="relative font-heading tracking-[0.05em] select-none"
          style={{
            fontSize: "clamp(4rem, 12vw, 12rem)",
            lineHeight: 1,
            color: "var(--color-text-light)",
          }}
        >
          <span
            className="inline-block"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-red) 0%, var(--color-accent-orange) 60%, rgba(255,255,255,0.9) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NEW
          </span>{" "}
          NOW
        </h1>
      </div>

      {/* ── Partículas / linhas de ruído para profundidade ── */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
    </section>
  );
}
