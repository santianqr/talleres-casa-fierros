//import AboutSection from "@/components/about-section";
import CarouselBrand from "@/components/carousel-brand";
import HeaderPage from "@/components/header";
import Carousel from "@/components/carousel";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <main>
      <HeaderPage />
      <Carousel />
      <CarouselBrand />
      <AboutSection />
    </main>
  );
}
