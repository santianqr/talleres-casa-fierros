import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

export default function AboutSection() {
  return (
    <section className="flex w-full justify-center py-4">
      <div className="z-1 flex gap-3 w-full flex-row relative flex-nowrap items-center justify-between h-[40vw] sm:max-h-[40vh] max-w-[1024px] border-t-1 border-yellow-500/[0.5]">
        <div>hola</div>
        <Image
          alt=""
          className="object-contain"
          src={"/logo_opacity.webp"}
          height={500}
          width={400}
        />
      </div>
    </section>
  );
}
