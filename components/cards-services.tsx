import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import React from "react";

export default function CardsServices() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Mecánica Básica</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <ul className="list-disc list-outside ml-6">
              <li>Revisión general</li>
              <li>Cambio de aceite</li>
              <li>Scanner</li>
              <li>Suspensión</li>
              <li>Alineación y balanceo</li>
              <li>Cambio de fluidos y refrigerante</li>
              <li>Aire acondicionado</li>
              <li>Sincronización de motor</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/servicios">
              <p className="text-yellow-500/[0.6]">Ver más en Servicios</p>
            </Link>
          </CardFooter>
        </Card>

        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Mecánica especializada</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <ul className="list-disc list-outside ml-6">
              <li>Reparación de motor</li>
              <li>Cambio kit de repartición</li>
              <li>Sistema de refrigeración</li>
              <li>Mantenimiento sistema de embrague</li>
              <li>Mantenimiento y reparación de transmisiones</li>
              <li>Mantenimiento y reparación de cajas de dirección</li>
              <li>Cambio de discos, frenos y pastillas</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/servicios">
              <p className="text-yellow-500/[0.6]">Ver más en Servicios</p>
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Electricidad automotriz</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <ul className="list-disc list-outside ml-6">
              <li>Laboratorio electrónico</li>
              <li>Reparación de alternadores</li>
              <li>Reparación de arranque</li>
              <li>Sistema eléctrico en general</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/servicios">
              <p className="text-yellow-500/[0.6]">Ver más en Servicios</p>
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Latoneria y pintura</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <ul className="list-disc list-outside ml-6">
              <li>Banco de enderezado</li>
              <li>Laboratorio de pintura</li>
              <li>Cambio de color</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/servicios">
              <p className="text-yellow-500/[0.6]">Ver más en Servicios</p>
            </Link>
          </CardFooter>
        </Card>

        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Servicios especiales</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <ul className="list-disc list-outside ml-6">
              <li>Embellecimiento</li>
              <li>Cerámico</li>
              <li>Revisión pre-tecnomecánica</li>
              <li>Mantenimiento preventivo y correctivo</li>
              <li>Polizas - SOAT - Seguro todo riesgo</li>
              <li>Peritaje</li>
              <li>Cerrajería</li>
              <li>Vidrios</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter className="">
            <Link href="/servicios">
              <p className="text-yellow-500/[0.6]">Ver más en Servicios</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
