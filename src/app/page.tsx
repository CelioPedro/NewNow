import IntroSection from "@/components/IntroSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import ManifestoSection from "@/components/ManifestoSection";
import GridDoMundo from "@/components/GridDoMundo";
import FooterBig from "@/components/FooterBig";

export default function Home() {
  return (
    <>
      {/* Intro — vídeo/brand reveal full-screen preto */}
      <IntroSection />

      {/* Header — sticky: nasce na base da intro, gruda no topo ao scrollar */}
      <Header />

      {/* Home & conteúdo */}
      <main className="flex-1">
        <HeroSection />
        <ExpertiseGrid />
        <ManifestoSection />
        <GridDoMundo />
      </main>

      <FooterBig />
    </>
  );
}
