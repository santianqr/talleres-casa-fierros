import YoutubeVideo from "./youtube-video";
import { Link, Button } from "@nextui-org/react";

export default function PrefSection() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] relative pt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="w-[30%] flex flex-col gap-6">
          <h2 className="font-bold text-lg sm:text-2xl">
            ¿POR QUÉ PREFERIRNOS?
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-sm sm:text-base">
              Garantizamos un excelente servicio al cliente.
            </li>
            <li className="text-sm sm:text-base">
              Contamos con talleres de mantenimiento, colisión y suministro de
              repuestos/accesorios.
            </li>
            <li className="text-sm sm:text-base">
              Equipos de la más alta calidad humana y tecnológica.
            </li>
          </ul>
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
        <div className="w-[50%] items-center">
          <YoutubeVideo />
        </div>
      </div>
    </section>
  );
}
