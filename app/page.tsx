import Carousel from "@/components/carousel"
import CarouselBrand from "@/components/carousel-brand"
import HeaderPage from "@/components/header"

export default function Home() {
  return (
    <main>
      <HeaderPage />
      <Carousel />
      <CarouselBrand/>
    </main>
  )
}
