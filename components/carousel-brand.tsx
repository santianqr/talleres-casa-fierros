"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
  "/brands/brand15.webp",
  "/brands/brand16.webp",
];

export default function CarouselBrand() {
  const [start, setStart] = useState<number>(0);
  const [intervalTime, setIntervalTime] = useState<number>(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1 > images.length - 6 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [intervalTime]);


  const handlePrevPage = () => {
    setStart((prev) => (prev - 1 < 0 ? images.length - 6 : prev - 1));
    setIntervalTime(0);
  };

  const handleNextPage = () => {
    setStart((prev) => (prev + 1 > images.length - 6 ? 0 : prev + 1));
    setIntervalTime(0);
  };

  return (
    <section className="flex w-screen justify-center px-6 py-4">
      <div className="z-1 flex gap-3 w-full flex-row relative flex-nowrap items-center justify-center h-[10vw] sm:max-h-[10vh] max-w-[1024px] px-[3vw]">
        {images.slice(start, start + 6).map((image, index) => (
          <div key={index} className="w-full h-full relative overflow-hidden flex align-middle">
            <Image
              className="object-contain"
              height={100}
              width={80}
              alt="images"
              src={image}
            />
          </div>
        ))}

        {/* left arrow */}
        <div
          onClick={handlePrevPage}
          className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer text-yellow-500">
            &lt;
          </span>
        </div>

        {/* right arrow */}
        <div
          onClick={handleNextPage}
          className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer text-yellow-500">
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
