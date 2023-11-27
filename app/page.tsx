import CarouselBrand from "@/components/carousel-brand";
import HeaderPage from "@/components/header";
import Carousel from "@/components/carousel";
import AboutSection from "@/components/about-section";
import CarroSection from "@/components/carro-section";
import PrefSection from "@/components/pref-section";
import AgendaSection from "@/components/agenda-section";

export default function Home() {
  return (
    <main>
      <HeaderPage />
      <CarouselBrand />
      <AboutSection />
      <CarroSection />
      <PrefSection />
      <AgendaSection />
    </main>
  );
}
