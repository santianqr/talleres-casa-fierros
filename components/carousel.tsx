"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@nextui-org/react";
import musculoso from "@/public/musculoso.webp";
import niche from "@/public/carro.jpg";

const images = [musculoso, niche];

// Single Responsibility Principle: Cada función tiene una única responsabilidad
const useCarousel = (images: StaticImageData[]) => {
  const [page, setPage] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);

  const handlePageChange = useCallback((increment: number) => {
    setPage(
      (prevPage) => (prevPage + increment + images.length) % images.length
    );
    setOpacity(0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 100);
    return () => clearTimeout(timeout);
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      handlePageChange(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [handlePageChange]);

  return { page, opacity, handlePageChange };
};

// Open/Closed Principle: Las entidades de software deben estar abiertas para su extensión, pero cerradas para su modificación
export default function Carousel() {
  const { page, opacity, handlePageChange } = useCarousel(images);

  return (
    <section className="flex w-full flex-col justify-center items-center px-6">
      <div className="flex gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[45vw] sm:max-h-[45vh] max-w-[1024px]">
        <div className="w-auto h-auto">
          <Image
            alt="images"
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1020px) 66vw, 33vw"
            src={images[page]}
          />

          <div className="relative inset-0 bg-gradient-to-r from-background to-transparent flex flex-col justify-between items-center py-[3vw]">
            <div className="relative w-[15rem] sm:w-[40rem] h-48 max-w-[600px]">
              <Image
                className={`transition-opacity duration-500 opacity-${opacity} px-8`}
                fill
                alt="logoletras"
                sizes="(max-width: 640px) 100vw, (max-width: 1020px) 53vw, 33vw"
                src={"/logo_letters.webp"}
              />
            </div>

            <Button
              className={`text-foreground bg-yellow-500 transition-opacity duration-500 opacity-${opacity}`}
              size="md"
            >
              Más Información
            </Button>
          </div>
        </div>

        <div
          onClick={() => handlePageChange(-1)}
          className="z-10 absolute bottom-1/2 left-4 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &lt;
          </span>
        </div>

        <div
          onClick={() => handlePageChange(1)}
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
