"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export default function CardsServices() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Mecánica Básica</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Revisión general"
              >
                Diagnóstico que permite conocer el estado del vehículo,
                proporcionando una guía para su mantenimiento, hacerlo de manera
                permanente es esencial ya que las condiciones del terreno y
                otros factores pueden alterar su correcto funcionamiento
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Cambio de aceite"
              >
                Permite mantener lubricadas las partes internas del motor y así
                reducir la fricción, protegiéndolo por el desgaste y la
                corrosión, ayudando a mantener una temperatura óptima de
                funcionamiento que prolonga su vida útil y mejora su
                rendimiento.
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Scanner">
                Esta herramienta se utiliza para diagnosticar las fallas
                electrónicas del vehículo, específicamente las almacenadas en la
                computadora del mismo, la cual se encarga de regular las
                funciones del motor a través de distintos sensores registrando
                todos los errores con un código.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Suspensión"
              >
                Es el sistema que conecta el chasis del vehículo con las ruedas,
                siendo responsable de brindar viajes en auto suaves y estables,
                se encarga de absorber en gran medida las irregularidades del
                camino
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Alineación y balanceo"
              >
                Son dos servicios de mantenimiento importante para todo vehículo
                ya que facilitan una conducción suave, mejoran la tracción,
                reducen el desgaste de las llantas y podría ayudar en ahorrar
                gasolina
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="Cambios de fluidos y aceite"
              >
                Los fluidos de un vehículo son líquidos que permiten que muchos
                de los dispositivos del carro funcionen y mantener el vehiculo
                en correctas condiciones para su manejo. El refrigerante tiene
                como función evacuar el calor residual del motor. Es un fluido
                caracterizado por poseer monoetilenglicol, un compuesto químico
                que le otorga un bajo punto de congelamiento (menor a 0°C) y un
                alto punto de ebullición (superando los 100°C).
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="Aire acondicionado"
              >
                Sistema que se encarga de enfriar, purificar y filtrar el aire
                dentro de los automóviles. Mantenerlo en buen estado permite
                regular la temperatura interna, controla la humedad y filtrar
                los agentes contaminantes.
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="Accordion 8"
                title="Sincronización de motor"
              >
                Es el mantenimiento del sistema de Admisión de Combustible para
                coordinar el tiempo y la cantidad ideal de combustible que
                necesita el motor para su óptimo funcionamiento.
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>

        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Mecánica especializada</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Reparación de motor"
              >
                Consiste en desarmar completamente las piezas del motor,
                limpiarlo a fondo, medir y rectificar las partes, cambiar las
                piezas que sean necesarias y volverlas a ensamblar según
                especificaciones de la casa matriz
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Cambio kit de repartición"
              >
                Contribuye a que funcione el motor del vehículo, está compuesto
                principalmente de: una correa o cadena de distribución,
                poleas-guía, y tensores. En algunos vehículos también se incluye
                bomba de agua y/o anticongelante
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Sistema de refrigeración"
              >
                Su función principal es garantizar que el motor este a
                temperatura óptima. Si el sistema o cualquier parte del mismo
                falla, sobrecalentará el motor lo que puede provocar graves
                problemas al mismo
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Mantenimiento sistema de embrague"
              >
                Es crucial para alargar la vida útil y garantizar un rendimiento
                óptimo. Esto incluye revisar el pedal del embrague, el cable, el
                sistema hidráulico, el volante, la placa de presión y el disco.
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Mantenimiento y reparación de transmisiones"
              >
                Es un conjunto de piezas que transmiten la potencia generada por
                el motor directamente hacia las ruedas, para que el vehículo
                pueda desplazarse, en un término más técnico es el instrumento
                encargado de transformar la energía térmica en energía mecánica,
                para que se produzca el movimiento
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="Mantenimiento y reparación de cajas de dirección"
              >
                Es asegurar el correcto movimiento de las ruedas delanteras,
                para controlar la dirección o trayectoria del vehículo. Este
                sistema ayuda al conductor a garantizar control y
                maniobrabilidad de cualquier vehículo, inclusive uno de gran
                peso, a voluntad y sin mayor esfuerzo
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="Cambio de discos de frenos y pastillas"
              >
                Como norma general, los discos suelen renovarse cada dos cambios
                de pastillas y así garantizar tanto la frenada como la seguridad
                de los ocupantes, lo mejor es que con cada cambio de pastillas
                se revise el estado de los discos
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>

        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Electricidad automotriz</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Laboratorio electrónico"
              >
                Esta máquina está diseñada especialmente para ensayar las partes
                del sistema eléctrico
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Reparación de alternadores"
              >
                El Alternador es una parte esencial ya que es el encargado de
                recargar la batería y de generar la electricidad que los
                componentes del auto requieren para su funcionamiento cuando el
                motor está encendido
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Reparación de arranque"
              >
                El sistema de arranque de un auto es el encargado de convertir
                la energía eléctrica de la batería en energía mecánica para
                encender el motor
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Sistema eléctrico en general"
              >
                Se encarga de suministrar energía al sistema de chispa, arrancar
                el motor y brindar energía eléctrica a la corneta, luces,
                sensores, equipo de sonido y otros accesorios
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>

        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Latoneria y pintura</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Banco de enderezado"
              >
                Equipo especial que permite averiguar cuáles son las zonas que
                se necesitan corregir en el chasis, devolviendo a la
                originalidad las medidas del vehículo
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Laboratorio de pintura"
              >
                Disponemos de laboratorio de pinturas, con el que obtenemos el
                color exacto del fabricante, evitando con ello posibles
                variaciones de tonalidades
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Cambio de color"
              >
                Contamos con todas las gamas de colores si es tu intención tener
                un nuevo color
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>

        <Card className="max-w-[400px] w-full">
          <CardHeader className="">
            <p className="text-md font-bold ">Servicios especiales</p>
          </CardHeader>
          <Divider />
          <CardBody className="text-sm ">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Embellecimiento"
              >
                Te ayudamos a modernizar el color de tu vehículo, permitiendo
                renovar, proteger y dar brillo a la pintura de tu carro con un
                sello de calidad y durabilidad, brillado y desmanchado, sistema
                de polichado, pintura de rines, farolas
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Cerámico">
                Te ofrecemos un recubrimiento cerámico basada en una solución de
                polímero químico que se aplica al exterior del auto para ayudar
                a proteger la pintura
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Revisión pre-tecnomecánica"
              >
                Enfocados en el mantenimiento preventivo y correctivo de
                máquinas de combustión interna, incluyendo todos los sistemas
                que conforman el vehículo como motor, suspensión, dirección,
                transmisión, electricidad automotriz, entre otros
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Mantenimiento preventivo y correctivo"
              >
                Ofrecemos una programación en los diferentes planes de servicios
                mecánicos de mantenimiento preventivo y correctivo, enfocados en
                vehículos tanto particulares como flotas empresariales,
                asegurando de manera efectiva los controles habituales para
                asegurar el adecuando funcionamiento de estos
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Poliza - SOAT - Seguro todo riesgo"
              >
                Nuestro equipo experto te ayudará en el proceso para adquirir el
                Seguro Obligatorio de Accidentes de Tránsito establecido por
                Ley, pólizas en general y seguro todo riesgo, su objetivo es
                tener la atención, de manera oportuna y directa en los eventos
                que diera lugar
              </AccordionItem>
              <AccordionItem key="6" aria-label="Accordion 6" title="Peritaje">
                Realizamos la inspección mecánica con un enfoque documental del
                vehículo a evaluar, esta inspección es realizada por expertos
                los cuales brindan un informe detallado con información a favor
                y en contra de cada parte del vehículo para garantizar de manera
                segura la compra o venta de este automotor
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="Cerrajería"
              >
                Servicio de asistencia para la apertura de la puerta de tu
                vehículo
              </AccordionItem>
              <AccordionItem key="8" aria-label="Accordion 8" title="Vidrios">
                Manejamos todo tipo de vidrios para cualquier marca de vehículo
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>

        <div className="relative bg-background self-center">
          <Image
            alt=""
            src={"/ICONO-CARRO-AMARILLO.png"}
            width={700}
            height={200}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
