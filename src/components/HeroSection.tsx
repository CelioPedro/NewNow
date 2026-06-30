"use client";

const showcaseCards = [
  {
    id: "card-1",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    rotation: -6,
    offsetX: "-5%",
    offsetY: "0",
    zIndex: 3,
  },
  {
    id: "card-2",
    gradient: "linear-gradient(145deg, #0d1117 0%, #161b22 50%, #21262d 100%)",
    rotation: 4,
    offsetX: "5%",
    offsetY: "-2%",
    zIndex: 2,
  },
  {
    id: "card-3",
    gradient: "linear-gradient(160deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    rotation: -3,
    offsetX: "15%",
    offsetY: "4%",
    zIndex: 1,
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-cream)",
        color: "var(--color-text-dark)",
        paddingBottom: "clamp(4rem, 8vh, 8rem)",
      }}
    >
      {/* ── Texto gigante com gradiente ── */}
      <div
        style={{
          padding: "clamp(2rem, 4vh, 4rem) var(--section-padding-x) 0",
        }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(3.5rem, 11.5vw, 13rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            background:
              "linear-gradient(160deg, var(--color-accent-red) 0%, var(--color-accent-red) 35%, var(--color-accent-orange) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          O ESTÚDIO DE
          <br />
          ENGENHARIA QUE
          <br />
          VOCÊ PROCURAVA
        </h1>
      </div>

      {/* ── Cards tilted / rotacionados — showcase ── */}
      <div
        className="relative flex items-center justify-center"
        style={{
          marginTop: "clamp(2rem, 5vh, 5rem)",
          height: "clamp(280px, 40vh, 480px)",
        }}
      >
        {showcaseCards.map((card) => (
          <div
            key={card.id}
            className="absolute rounded-[var(--radius-card)] overflow-hidden shadow-2xl"
            style={{
              width: "clamp(200px, 28vw, 340px)",
              aspectRatio: "3 / 4",
              background: card.gradient,
              transform: `rotate(${card.rotation}deg) translateX(${card.offsetX}) translateY(${card.offsetY})`,
              zIndex: card.zIndex,
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Mock de conteúdo visual dentro do card */}
            <div className="absolute inset-0 flex flex-col p-5 opacity-[0.15]">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-white/50" />
                <div className="w-2 h-2 rounded-full bg-white/35" />
                <div className="w-2 h-2 rounded-full bg-white/25" />
              </div>
              {/* Layout blocks */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-[45%] bg-white/10 rounded-lg" />
                <div className="flex gap-2 flex-1">
                  <div className="flex-1 bg-white/8 rounded-lg" />
                  <div className="flex-1 bg-white/5 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Play button simulado no card central */}
            {card.zIndex === 3 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                      borderLeft: "14px solid rgba(255, 255, 255, 0.7)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
