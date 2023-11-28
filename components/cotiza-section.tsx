import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Button } from "@nextui-org/react";

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
        <div className="flex flex-row">
          <div className="w-[60%]">
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
          <div className="flex flex-col gap-y-6 w-[40%] justify-between">
            <div className="flex flex-row gap-x-6 justify-between">
              <div className="flex flex-col justify-between">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="bg-background border-b-2 border-yellow-500/[0.6] focus:border-yellow-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Celular"
                  className="bg-background border-b-2 border-yellow-500/[0.6] focus:border-yellow-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="no se que dice"
                  className="bg-background border-b-2 border-yellow-500/[0.6] focus:border-yellow-500 outline-none"
                />
              </div>
              <div>
                <p>SERVICIO</p>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="opciones" value="opcion1" />
                  <span>Mecánica básica</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="opciones" value="opcion2" />
                  <span>Mecánica especializada</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="opciones" value="opcion3" />
                  <span>Electricidad automotriz</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="opciones" value="opcion4" />
                  <span>Latoneria y pintura</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="opciones" value="opcion5" />
                  <span>Servicios especiales</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="tampoco se que dice"
                className="w-[100%] bg-background border-b-2 border-yellow-500/[0.6] focus:border-yellow-500 outline-none"
              />
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Acepto los términos y condiciones</span>
              </label>
            </div>
            <Button color="warning">Cotizar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
