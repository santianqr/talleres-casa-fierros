import CarouselBrand from "@/components/carousel-brand";
import HeaderPage from "@/components/header";
import Carousel from "@/components/carousel";
import AboutSection from "@/components/about-section";
import CarroSection from "@/components/carro-section";
import PrefSection from "@/components/pref-section";
import AgendaSection from "@/components/agenda-section";
import CotizaSection from "@/components/cotiza-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeaderPage />
      {/*<Carousel />
      <CarouselBrand />
      <AboutSection />
      <CarroSection />
      <PrefSection />
      <AgendaSection />
      <CotizaSection />*/}
      <Footer />
    </main>
  );
}
