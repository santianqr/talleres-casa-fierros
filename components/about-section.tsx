import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
//

export default function AboutSection() {
  return (
    <>
      <section className="w-full py-4 px-6 flex justify-center">
        <div className="max-w-[1024px] border-t-1 border-t-yellow-500 relative pt-6 flex flex-row justify-between">
          <div className="flex flex-col gap-6 py-6 text-center sm:text-left w-full sm:w-1/2 justify-center sm:justify-start pl-0 sm:pl-4">
            <h1 className="font-bold text-lg sm:text-2xl">QUIENES SOMOS?</h1>
            <p className="text-sm sm:text-base">
              Talleres Casa Fierros es una sociedad con más de 15 años de
              experiencia certificada, nos dedicamos a la prestación de
              servicios de mantenimiento, embellecimiento y reparación de
              vehículos automotores. Actualmente contamos con una amplia
              experiencia en el sector automotriz, garantizando así una
              excelente calidad en el servicio.
              <br />
              <br />
              Garantizamos un excelente servicio al cliente.
              <br />
              <br />
              Contamos con talleres de mantenimiento, colisión y suministro de
              repuestos/accesorios. equipo de la más alta calidad humana y
              tecnológica.
            </p>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              color="warning"
              showAnchorIcon
              variant="solid"
              className="mx-auto sm:mx-0 w-1/2 px-6"
            >
              Más Información
            </Button>
          </div>
          <div className="hidden sm:relative sm:flex sm:items-center sm:justify-center sm:h-[100%] sm:w-[45%]">
            <Image
              alt="..."
              src={"/logo_opacity.webp"}
              fill
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className=" "
            />
          </div>
        </div>
      </section>
    </>
  );
}
