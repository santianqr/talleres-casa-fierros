import CarroSection from "@/components/carro-section";
import PrefSection from "@/components/pref-section";
import AgendaSection from "@/components/agenda-section";
import CotizaSection from "@/components/cotiza-section";
import Carouselv2 from "@/components/carouselv2";
import PaymentMethods from "@/components/payment-methods";

export default function Home() {
  return (
    <main>
      <Carouselv2 />
      <CarroSection />
      <PrefSection />
      <AgendaSection />
      <CotizaSection />
      <PaymentMethods />
    </main>
  );
}
