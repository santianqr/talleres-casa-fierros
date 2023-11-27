import Image from "next/image";

export default function CarroSection() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] flex flex-row justify-between items-center">
        <div className="relative w-[35%] h-[30vh]">
          <Image
            alt="..."
            src={"/medio_carro.png"}
            fill
            style={{
              objectFit: "contain", // cover, contain, none
            }}
            className=" "
          />
        </div>
        <div className="flex flex-row w-[60%] justify-between px-6">
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">15</p>
                <p className="text-sm">AÑOS DE<br/>EXPERIENCIA</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">1020</p>
                <p className="text-sm">CLIENTES<br/>ATENDIDOS</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">20</p>
                <p className="text-sm">MECÁNICOS<br/>PROFESIONALES</p>
            </div>
        </div>
      </div>
    </section>
  );
}
