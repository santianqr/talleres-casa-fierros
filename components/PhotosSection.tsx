import type { NextPage } from "next";
import Carousel from "@/components/Carousel";
import Image from "next/image";

import image1 from "@/public/musculoso.webp"
import image2 from "@/public/niche.webp"

const PhotosSection: NextPage = () => {
  const images = [
    image1,
    image2,
  ];
  return (
    <div className="sm:w-3/4 mx-auto my-2">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PhotosSection;
