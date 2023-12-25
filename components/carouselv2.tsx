"use client";

import { useState } from "react";
import Image from "next/image";
import carousel1 from "@/public/carousel/CARRUSEL1.jpg";
import carousel2 from "@/public/carousel/CARRUSEL2.jpg";
import carousel3 from "@/public/carousel/CARRUSEL3.jpg";
import carousel4 from "@/public/carousel/CARRUSEL4.jpg";
import carousel5 from "@/public/carousel/CARRUSEL5.jpg";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

export default function Carouselv2() {
  const [page, setPage] = useState<number>(0);

  const handlePageChange = (direction: number) => {
    let newPage = page + direction;
    if (newPage < 0) newPage = images.length - 1;
    if (newPage >= images.length) newPage = 0;
    setPage(newPage);
  };

  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] bg-yellow-300 relative">
        <div>
          <Image src={images[page]} alt="" />
        </div>
        <div
          onClick={() => handlePageChange(-1)}
          className="z-10 absolute top-1/2 left-4 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &lt;
          </span>
        </div>
        <div
          onClick={() => handlePageChange(1)}
          className="z-10 absolute top-1/2 right-4 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-yellow-500">
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
