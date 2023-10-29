import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

export default function AboutSection() {
  return (
    <section className="flex w-full justify-center py-4">
      <div className="z-1 flex gap-3 w-full flex-row relative flex-nowrap items-center justify-between h-[50vw] sm:max-h-[50vh] max-w-[1024px] border-t-1 border-yellow-500/[0.5] py-[2vw]">
        <div>hola</div>
        <div className="relative h-full w-1/2">
          <Image
            alt=""

            src={"/logo_opacity.webp"}
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 33vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
