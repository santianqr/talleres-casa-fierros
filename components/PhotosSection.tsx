import type { NextPage } from "next";
import Carousel from "@/components/Carousel";
import Image from "next/image";

import image1 from "@/public/musculoso.webp";
import image2 from "@/public/niche.webp";

const PhotosSection: NextPage = () => {
  const images = [image1, image2];
  return (
    <section className="container max-w-screen-lg mx-auto px-6 relative">
      <Carousel loop >
        {images.map((src, i) => {
          return (
            <div className="relative w-full flex-shrink-0" key={i}>
              <Image
                src={src}
                className="object-cover"
                alt="alt"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default PhotosSection;
