"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const images = [
  "/brands/brand1.webp",
  "/brands/brand2.webp",
  "/brands/brand3.webp",
  "/brands/brand4.webp",
  "/brands/brand5.webp",
  "/brands/brand6.webp",
  "/brands/brand7.webp",
  "/brands/brand8.webp",
  "/brands/brand9.webp",
  "/brands/brand10.webp",
  "/brands/brand11.webp",
  "/brands/brand12.webp",
  "/brands/brand13.webp",
  "/brands/brand14.webp",
  "/brands/brand16.webp",
  "/brands/brand17.webp",
  "/brands/brand18.webp",
];

export default function CarouselBrand() {
  const [start, setStart] = useState(0);

  const handlePrevPage = useCallback(() => {
    setStart((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const handleNextPage = useCallback(() => {
    setStart((prev) => (prev + 1) % images.length);
  }, []);

  return (
    <section className="flex w-full justify-center py-4 px-6">
      <div className="z-1 flex gap-1 w-full flex-row relative flex-nowrap items-center justify-center h-[10vw] sm:max-h-[10vh] max-w-[1024px] px-[5vw] py-1 pl-12 pr-12">
        {[...images, ...images].slice(start, start + 5).map((image, index) => (
          <div
            key={index}
            className="w-full h-full relative overflow-hidden flex align-middle"
          >
            <Image
              className="object-contain object-center"
              fill
              alt="images"
              sizes="(max-width: 640px) 100vw, (max-width: 1020px) 53vw, 33vw"
              src={image}
            />
          </div>
        ))}
        {/* left arrow */}
        <div
          onClick={handlePrevPage}
          className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &lt;
          </span>
        </div>

        {/* right arrow */}
        <div
          onClick={handleNextPage}
          className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
