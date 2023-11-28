import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function CotizaSection() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] ">
        <div className="flex flex-row items-center justify-between">
          <div className="relative w-[60%]">
            <div className="absolute inset-x-0 top-1/2 border-t border-yellow-500 transform -translate-y-1/2"></div>
          </div>
          <div className="flex flex-row">
            <p className="text-[5vh] font-bold text-white">COTIZA YA</p>
            <div className="relative w-[5vw] h-[3vh]">
              <Image src={"/tools.png"} fill alt="" />
            </div>
          </div>
        </div>

        <div className="w-64">
          <GoogleMapsEmbed
            apiKey="AIzaSyAaegn0N4t6OBIQBwhVVlZ2GepBvD9mSkg"
            height={400}
            width={400}
            mode="place"
            q="Talleres Casa Fierros, Calle 161a, Bogotá"
            allowfullscreen
            loading="lazy"
            style="border-radius:1rem;"
          />
        </div>
      </div>
    </section>
  );
}
