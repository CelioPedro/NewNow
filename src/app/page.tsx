import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import ManifestoSection from "@/components/ManifestoSection";
import GridDoMundo from "@/components/GridDoMundo";
import FooterBig from "@/components/FooterBig";

export default function Home() {
  return (
    <>
      <Header />
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
