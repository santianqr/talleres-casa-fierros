//"use client";

//import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import CardsServices from "@/components/cards-services";

export default function Servicios() {
  const size = 24;
  const rows = new Array(6).fill(null);
  const cols = new Array(size).fill(null);

  return (
    <>
      <main className="w-full py-4 px-6 flex justify-center">
        <div className="max-w-[1024px] w-[100%] space-y-10">
          <section>
            <p className="text-center text-[5vh] text-yellow-500 pb-4">
              SERVICIOS
            </p>
            <div className="flex flex-wrap justify-center h-[20vh] relative pb-16">
              <div
                className="grid w-full h-[100%] gap-0.5"
                style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
              >
                {rows.map((_, i) =>
                  cols.map((_, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`relative ${
                        i % 2 === j % 2 ? "bg-yellow-500" : "bg-black"
                      }`}
                      style={{ paddingBottom: `${100 / size}%` }}
                    >
                      <div className="absolute inset-0"></div>
                    </div>
                  ))
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            </div>
          </section>
          
            
          
          <section>
            <CardsServices />
          </section>
        </div>
      </main>
    </>
  );
}
