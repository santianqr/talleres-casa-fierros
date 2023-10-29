"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

const images = ["/musculoso.webp", "/niche.webp"];

export default function Carousel() {
  const [page, setpage] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);
  const [intervalTime, setIntervalTime] = useState<number>(5000);

  useEffect(() => {
    setOpacity(0);
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 100);
    return () => clearTimeout(timeout);
  }, [page]);

  useEffect(() => {
    let int = setInterval(() => {
      setpage((prev) => (prev + 1 >= 3 ? 1 : prev + 1));
    }, 5000);
    return () => {
      clearInterval(int);
    };
  }, [intervalTime]);

  const handlePrevPage = () => {
    setpage((prev) => (prev - 1 <= 0 ? 2 : prev - 1));
    setIntervalTime(0);
  };

  const handleNextPage = () => {
    setpage((prev) => (prev + 1 >= 3 ? 1 : prev + 1));
    setIntervalTime(0);
  };

  return (
    <section className="relative flex w-full flex-col justify-center items-center px-6">
      <div className="z-1 flex gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[50vw] sm:max-h-[50vh] max-w-[1024px]">
        <div className="w-full h-full relative">
          <Image
            className="object-cover object-center"
            fill
            alt="images"
            src={images[page - 1]}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent flex flex-col justify-center items-center">
            {/* logo letras */}
            <Image
              className={`transition-opacity duration-500 opacity-${opacity} px-[15vw]`}
              width={1000}
              height={1000}
              alt="logoletras"
              src={"/logo_letters.webp"}
            />
            <h4
              className={`text-foreground mb-2 transition-opacity duration-500 opacity-${opacity}`}
            >
              Mecánica Básica
            </h4>
            <Button
              className={`text-foreground bg-yellow-500 transition-opacity duration-500 opacity-${opacity}`}
            >
              Más Información
            </Button>
          </div>
        </div>

        {/* left arrow */}
        <div
          onClick={handlePrevPage}
          className="z-10 absolute bottom-1/2 left-4 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &lt;
          </span>
        </div>

        {/* right arrow */}
        <div
          onClick={handleNextPage}
          className="z-10 absolute bottom-1/2 right-4 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
