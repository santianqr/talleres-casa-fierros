import { Cash, Card, WireTransfer } from "./icons_v1";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import daviplata from "@/public/payment-methods/logo-daviplata.webp";
import bancolombia from "@/public/payment-methods/logo-grupo-bancolombia.webp";
import nequi from "@/public/payment-methods/logo-nequi.webp";
import pse from "@/public/payment-methods/pse.webp";
import visa from "@/public/payment-methods/visa.webp";
import mastercard from "@/public/payment-methods/mastercard.webp";

export default function PaymentMethods() {
  const icons = {
    cash: <Cash />,
    card: <Card />,
    wiret: <WireTransfer />,
  };

  return (
    <section className="w-full py-4 px-6 flex justify-center mt-12 sm:mt-20">
      <div className="max-w-[1024px] w-[100%] flex flex-col items-center gap-y-16">
        <div className="bg-yellow-500/[0.6] text-center py-4 px-4 w-[100%]">
          <p className="text-3xl sm:text-[5vh] font-bold">MEDIOS DE PAGO</p>
        </div>
        <div className="flex flex-row justify-between w-[100%] sm:w-[40%]">
          <div className="flex flex-col items-center">
            {icons.cash}
            <p className="font-bold">Efectivo</p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <div className="flex flex-col items-center">
              {icons.card}
              <p className="font-bold">Tarjeta</p>
            </div>

            <div className="flex flex-col items-center gap-y-1">
              <Chip className="bg-white" size="lg">
                <Image src={visa} alt="" width={40} height={35} />
              </Chip>
              <Chip className="bg-white" size="lg">
                <Image src={mastercard} alt="" width={40} height={40} />
              </Chip>
              <Chip className="bg-white" size="lg">
                <Image src={pse} alt="" width={30} height={25} />
              </Chip>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <div className="flex flex-col items-center">
              {icons.wiret}
              <p className="font-bold">Transferencia</p>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Chip className="bg-white" size="lg">
                <Image src={nequi} alt="" width={80} height={35} />
              </Chip>
              <Chip className="bg-white" size="lg">
                <Image src={daviplata} alt="" width={80} height={35} />
              </Chip>
              <Chip className="bg-white" size="lg">
                <Image src={bancolombia} alt="" width={80} height={35} />
              </Chip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
