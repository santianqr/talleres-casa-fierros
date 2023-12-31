"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export default function Servicios() {
  const size = 24;
  const rows = new Array(6).fill(null);
  const cols = new Array(size).fill(null);

  return (
    <>
      <main className="w-full py-4 px-6 flex justify-center">
        <div className="max-w-[1024px] w-[100%]">
          <section>
            <p className="text-center text-[5vh] text-yellow-500 pb-4">
              SERVICIOS
            </p>
            <div className="flex flex-wrap justify-center h-[20vh] relative pb-16">
              <div
                className="grid w-full h-[100%] gap-0.5"
                style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
              >
                {rows.map((_, i) =>
                  cols.map((_, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`relative ${
                        i % 2 === j % 2 ? "bg-yellow-500" : "bg-black"
                      }`}
                      style={{ paddingBottom: `${100 / size}%` }}
                    >
                      <div className="absolute inset-0"></div>
                    </div>
                  ))
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            </div>
          </section>
          <section>
            <div className="w-full bg-gray-500 flex">
              <div className="w-1/2 bg-gradient-to-r from-transparent  to-black" />
              <div className="relative bg-background ">
                <Image
                  alt=""
                  src={"/ICONO-CARRO-AMARILLO.png"}
                  width={700}
                  height={200}
                  objectFit="contain"
                />
              </div>

              <div className="w-1/2 bg-gradient-to-l from-transparent  to-black" />
            </div>
          </section>
          <section>
            <Accordion selectionMode="multiple" showDivider={false}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="MECÁNICA BÁSICA"
              >
                <Accordion selectionMode="multiple" isCompact={true}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="REVISIÓN GENERAL"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Diagnóstico que permite conocer el estado del vehículo,
                      proporcionando una guía para su mantenimiento, hacerlo de
                      manera permanente es esencial ya que las condiciones del
                      terreno y otros factores pueden alterar su correcto
                      funcionamiento
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="CAMBIO DE ACEITE"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Permite mantener lubricadas las partes internas del motor
                      y así reducir la fricción, protegiéndolo por el desgaste y
                      la corrosión, ayudando a mantener una temperatura óptima
                      de funcionamiento que prolonga su vida útil y mejora su
                      rendimiento.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="SCANNER"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Esta herramienta se utiliza para diagnosticar las fallas
                      electrónicas del vehículo, específicamente las almacenadas
                      en la computadora del mismo, la cual se encarga de regular
                      las funciones del motor a través de distintos sensores
                      registrando todos los errores con un código.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="SUSPENSIÓN"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Es el sistema que conecta el chasis del vehículo con las
                      ruedas, siendo responsable de brindar viajes en auto
                      suaves y estables, se encarga de absorber en gran medida
                      las irregularidades del camino.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="Accordion 5"
                    title="ALINEACIÓN Y BALANCEO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Son dos servicios de mantenimiento importante para todo
                      vehículo ya que facilitan una conducción suave, mejoran la
                      tracción, reducen el desgaste de las llantas y podría
                      ayudar en ahorrar gasolina.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="6"
                    aria-label="Accordion 6"
                    title="CAMBIO DE FLUIDOS Y REFRIGERANTE"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Los fluidos de un vehículo son líquidos que permiten que
                      muchos de los dispositivos del carro funcionen y mantener
                      el vehiculo en correctas condiciones para su manejo. El
                      refrigerante tiene como función evacuar el calor residual
                      del motor. Es un fluido caracterizado por poseer
                      monoetilenglicol, un compuesto químico que le otorga un
                      bajo punto de congelamiento (menor a 0°C) y un alto punto
                      de ebullición (superando los 100°C).
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="7"
                    aria-label="Accordion 7"
                    title="AIRE ACONDICIONADO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Sistema que se encarga de enfriar, purificar y filtrar el
                      aire dentro de los automóviles. Mantenerlo en buen estado
                      permite regular la temperatura interna, controla la
                      humedad y filtrar los agentes contaminantes.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="8"
                    aria-label="Accordion 8"
                    title="SINCRONIZACIÓN DE MOTOR"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Es el mantenimiento del sistema de Admisión de Combustible
                      para coordinar el tiempo y la cantidad ideal de
                      combustible que necesita el motor para su óptimo
                      funcionamiento.
                    </p>
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="MECÁNICA ESPECIALIZADA"
              >
                <Accordion selectionMode="multiple" isCompact={true}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="REPARACIÓN DE MOTOR"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Consiste en desarmar completamente las piezas del motor,
                      limpiarlo a fondo, medir y rectificar las partes, cambiar
                      las piezas que sean necesarias y volverlas a ensamblar
                      según especificaciones de la casa matriz.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="CAMBIO KIT DE REPARTICIÓN"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Contribuye a que funcione el motor del vehículo, está
                      compuesto principalmente de: una correa o cadena de
                      distribución, poleas-guía, y tensores. En algunos
                      vehículos también se incluye bomba de agua y/o
                      anticongelante.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="SISTEMA DE REFRIGERACIÓN"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Su función principal es garantizar que el motor este a
                      temperatura óptima. Si el sistema o cualquier parte del
                      mismo falla, sobrecalentará el motor lo que puede provocar
                      graves problemas al mismo.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="MANTENIMIENTO DE SISTEMA DE EMBRAGUE"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Es crucial para alargar la vida útil y garantizar un
                      rendimiento óptimo. Esto incluye revisar el pedal del
                      embrague, el cable, el sistema hidráulico, el volante, la
                      placa de presión y el disco.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="Accordion 5"
                    title="MANTENIMIENTO Y REPARACIÓN DE TRANSMISIONES"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Es un conjunto de piezas que transmiten la potencia
                      generada por el motor directamente hacia las ruedas, para
                      que el vehículo pueda desplazarse, en un término más
                      técnico es el instrumento encargado de transformar la
                      energía térmica en energía mecánica, para que se produzca
                      el movimiento.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="6"
                    aria-label="Accordion 6"
                    title="MANTENIMIENTO Y REPARACIÓN DE CAJAS DE DIRECCIÓN"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Es asegurar el correcto movimiento de las ruedas
                      delanteras, para controlar la dirección o trayectoria del
                      vehículo. Este sistema ayuda al conductor a garantizar
                      control y maniobrabilidad de cualquier vehículo, inclusive
                      uno de gran peso, a voluntad y sin mayor esfuerzo.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="7"
                    aria-label="Accordion 7"
                    title="CAMBIO DE DISCOS, FRENOS Y PASTILLAS"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Como norma general, los discos suelen renovarse cada dos
                      cambios de pastillas y así garantizar tanto la frenada
                      como la seguridad de los ocupantes, lo mejor es que con
                      cada cambio de pastillas se revise el estado de los
                      discos.
                    </p>
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="ELECTRICIDAD AUTOMOTRIZ"
              >
                <Accordion selectionMode="multiple" isCompact={true}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="LABORATORIO ELECTRÓNICO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Esta máquina está diseñada especialmente para ensayar las
                      partes del sistema eléctrico.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="REPARACION DE ALTERNADORES"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      El Alternador es una parte esencial ya que es el encargado
                      de recargar la batería y de generar la electricidad que
                      los componentes del auto requieren para su funcionamiento
                      cuando el motor está encendido.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="REPARACIÓN DE ARRANQUE"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      El sistema de arranque de un auto es el encargado de
                      convertir la energía eléctrica de la batería en energía
                      mecánica para encender el motor.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="SISTEMA ELÉCTRICO EN GENERAL"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Se encarga de suministrar energía al sistema de chispa,
                      arrancar el motor y brindar energía eléctrica a la
                      corneta, luces, sensores, equipo de sonido y otros
                      accesorios.
                    </p>
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="LATONERIA Y PINTURA"
              >
                <Accordion selectionMode="multiple" isCompact={true}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="BANCO DE ENDEREZADO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Equipo especial que permite averiguar cuáles son las zonas
                      que se necesitan corregir en el chasis, devolviendo a la
                      originalidad las medidas del vehículo.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="LABORATORIO DE PINTURA"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Disponemos de laboratorio de pinturas, con el que
                      obtenemos el color exacto del fabricante, evitando con
                      ello posibles variaciones de tonalidades.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="CAMBIO DE COLOR"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Contamos con todas las gamas de colores si es tu intención
                      tener un nuevo color.
                    </p>
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="SERVICIOS ESPECIALES"
              >
                <Accordion selectionMode="multiple" isCompact={true}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="EMBELLECIMIENTO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Te ayudamos a modernizar el color de tu vehículo,
                      permitiendo renovar, proteger y dar brillo a la pintura de
                      tu carro con un sello de calidad y durabilidad, brillado y
                      desmanchado, sistema de polichado, pintura de rines,
                      farolas.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="CERÁMICO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Te ofrecemos un recubrimiento cerámico basada en una
                      solución de polímero químico que se aplica al exterior del
                      auto para ayudar a proteger la pintura.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="REVISIÓN PRE-TECNOMECÁNICA"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Enfocados en el mantenimiento preventivo y correctivo de
                      máquinas de combustión interna, incluyendo todos los
                      sistemas que conforman el vehículo como motor, suspensión,
                      dirección, transmisión, electricidad automotriz, entre
                      otros.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="MANTENIMIENTO PREVENTIVO Y CORRECTIVO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Ofrecemos una programación en los diferentes planes de
                      servicios mecánicos de mantenimiento preventivo y
                      correctivo, enfocados en vehículos tanto particulares como
                      flotas empresariales, asegurando de manera efectiva los
                      controles habituales para asegurar el adecuando
                      funcionamiento de estos.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="Accordion 5"
                    title="POLIZA – SOAT- SEGURO TODO RIESGO"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Nuestro equipo experto te ayudará en el proceso para
                      adquirir el Seguro Obligatorio de Accidentes de Tránsito
                      establecido por Ley, pólizas en general y seguro todo
                      riesgo, su objetivo es tener la atención, de manera
                      oportuna y directa en los eventos que diera lugar.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="6"
                    aria-label="Accordion 6"
                    title="PERITAJE"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Nuestro equipo experto te ayudará en el proceso para
                      adquirir el Seguro Obligatorio de Accidentes de Tránsito
                      establecido por Ley, pólizas en general y seguro todo
                      riesgo, su objetivo es tener la atención, de manera
                      oportuna y directa en los eventos que diera lugar.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="7"
                    aria-label="Accordion 7"
                    title="CERRALJERÍA"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Servicio de asistencia para la apertura de la puerta de tu
                      vehículo.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="8"
                    aria-label="Accordion 8"
                    title="VIDRIOS"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      Manejamos todo tipo de vidrios para cualquier marca de
                      vehículo.
                    </p>
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
    </>
  );
}
