import { Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function ServicesHome() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] border-t-1 border-t-yellow-500 relative pt-6 flex flex-row justify-between w-full">
        <div className="flex flex-col gap-6 py-6 text-center sm:text-left w-full justify-center sm:justify-start pl-0 sm:pl-16">
          <h1 className="font-bold text-lg sm:text-2xl">
            SERVICIOS CASA FIERROS
          </h1>
          <div className="space-y-2">
            <ul className="space-y-0 list-disc list-inside">
              <li>Mecánica básica</li>
              <li>Mecánica especializada</li>
              <li>Electricidad Automotriz</li>
              <li>Latonería y pintura</li>
              <li>Servicios Especiales</li>
            </ul>
          </div>

          <Button
            href="/contacto"
            as={Link}
            color="warning"
            size="sm"
            showAnchorIcon
            variant="solid"
            className="w-32 mx-auto sm:mx-0"
          >
            Más Información
          </Button>
        </div>
        <div className="hidden sm:relative sm:flex sm:items-center sm:justify-center sm:h-[100%] sm:w-[65%]">
          <Image
            alt="..."
            src={"/logo_opacity.webp"}
            fill
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
      </div>
    </section>
  );
}
