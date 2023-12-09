"use client";

import { useState } from "react";
import Image from "next/image";
import musculoso from "@/public/musculoso.webp";
import carro from "@/public/carro.jpg";

const images = [musculoso, carro, musculoso, carro];

export default function Carouselv2() {
  const [page, setPage] = useState<number>(0);

  const handlePageChange = (direction: number) => {
    let newPage = page + direction;
    if (newPage < 0) newPage = images.length - 1;
    if (newPage >= images.length) newPage = 0;
    setPage(newPage);
  };

  return (
    <section className="flex w-full justify-center items-center px-6">
      <div className="flex w-full relative flex-nowrap items-center justify-between max-w-[1024px]">
        <Image
          src={images[page]}
          fill
          alt="images"
          sizes="100vw"
          className="relative object-cover"
        />
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
    </section>
  );
}
