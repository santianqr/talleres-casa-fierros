"use client";
import React from "react";
import HeaderPage from "@/components/header";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Servicios() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const size = 24;
  const rows = new Array(6).fill(null);
  const cols = new Array(size).fill(null);

  return (
    <main className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%]">
        <p className="text-center">SERVICIOS</p>
        <div className="flex flex-wrap justify-center h-[20vh] relative">
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
          <div className="w-full bg-gray-500 flex">
            <div className="w-1/2 bg-gradient-to-r from-transparent  to-black" />
            <div className="relative bg-background ">
              <Image
                alt=""
                src={"/ICONO-CARRO-AMARILLO.png"}
                width={700}
                height={200}
                objectFit="contain"
              />
            </div>

            <div className="w-1/2 bg-gradient-to-l from-transparent  to-black" />
          </div>
        </div>
      </div>
    </main>
  );
}
