import Image from "next/image";
import { FaTools } from "react-icons/fa";

export default function CarroSection() {
  return (
    <section className="w-full px-6 flex justify-center mt-20">
      <div className="max-w-[1024px] w-[100%] flex flex-col sm:flex-row justify-between items-center bg-yellow-500/[0.6] gap-y-2 sm:gap-y-0">
        <div className="hidden sm:block sm:relative sm:w-[35%] sm:h-[30vh]">
          <Image
            alt="..."
            src={"/medio_carro.png"}
            fill
            style={{
              objectFit: "contain", // cover, contain, none
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row sm:w-[60%] justify-center gap-y-6 sm:gap-x-8 sm:px-6 ">
          <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-4xl">15</p>
            <div className="flex flex-row gap-2 items-center">
              <FaTools />
              <p className="text-sm">
                AÑOS DE
                <br />
                EXPERIENCIA
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-4xl">1020</p>
            <div className="flex flex-row gap-2 items-center">
              <FaTools />
              <p className="text-sm">
                CLIENTES
                <br />
                ATENDIDOS
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-4xl">20</p>
            <div className="flex flex-row gap-2 items-center">
              <FaTools />
              <p className="text-sm break-words">
                MECÁNICOS
                <br />
                PROFESIONALES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
