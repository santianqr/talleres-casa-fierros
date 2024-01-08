"use client";

import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useState } from "react";

export default function CotizaSection() {
  const [formState, setFormState] = useState<{
    nombre: string;
    celular: string;
    marcaModeloAno: string;
    servicios: string[];
    motivo: string;
    acepto: boolean;
  }>({
    nombre: "",
    celular: "",
    marcaModeloAno: "",
    servicios: [],
    motivo: "",
    acepto: false,
  });

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: any) => {
    if (e.target.checked) {
      setFormState({
        ...formState,
        servicios: [...formState.servicios, e.target.value],
      });
    } else {
      setFormState({
        ...formState,
        servicios: formState.servicios.filter(
          (value) => value !== e.target.value
        ),
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.log("Error sending email");
    }
  };

  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] ">
        <div className="flex flex-row items-center justify-between">
          <div className="relative w-[20%] sm:w-[50%]">
            <div className="absolute inset-x-0 top-1/2 border-t border-yellow-500 transform -translate-y-1/2"></div>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <p className="text-3xl sm:text-[5vh] font-bold text-white">
              COTIZA YA
            </p>
            <div className="relative w-10 h-[4vh]">
              <Image src={"/ICONO-Cotiza ya.png"} fill alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-12 gap-6 items-center">
          <div className="w-[90%] sm:w-[40%] flex justify-center">
            <GoogleMapsEmbed
              apiKey={process.env.GOOGLE_MAPS_API_KEY!}
              height={400}
              width={400}
              mode="place"
              q="Talleres Casa Fierros, Calle 161a, Bogotá"
              allowfullscreen
              loading="lazy"
              style="border-radius:1rem; max-width: 100%; max-height: 100%;"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6 justify-between w-[80%] sm:w-[40%]"
          >
            <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 justify-between">
              <div className="flex flex-col justify-between">
                <Input
                  type="text"
                  variant={"underlined"}
                  label="Nombre"
                  name="nombre"
                  value={formState.nombre}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  variant={"underlined"}
                  label="Celular"
                  name="celular"
                  value={formState.celular}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  variant={"underlined"}
                  label="Marca/Modelo/Año"
                  name="marcaModeloAno"
                  value={formState.marcaModeloAno}
                  onChange={handleChange}
                />
              </div>

              <CheckboxGroup label="SERVICIOS" size="sm" color="warning">
                <Checkbox value="mec-bas" onChange={handleCheckboxChange}>
                  Mecánica básica
                </Checkbox>
                <Checkbox value="mec-esp" onChange={handleCheckboxChange}>
                  Mecánica especializada
                </Checkbox>
                <Checkbox value="ele-aut" onChange={handleCheckboxChange}>
                  Electricidad automotriz
                </Checkbox>
                <Checkbox value="lat-pin" onChange={handleCheckboxChange}>
                  Latoneria y pintura
                </Checkbox>
                <Checkbox value="serv-esp" onChange={handleCheckboxChange}>
                  Servicios especiales
                </Checkbox>
              </CheckboxGroup>
            </div>
            <div className="flex flex-col gap-y-4">
              <Input
                type="text"
                variant={"underlined"}
                label="Motivo"
                name="motivo"
                value={formState.motivo}
                onChange={handleChange}
              />
              <Checkbox
                size="sm"
                color="warning"
                defaultSelected
                name="acepto"
                checked={formState.acepto}
                onChange={handleChange}
              >
                Acepto que mis datos enviados se recopilen y se almacenen de
                forma responsable.
              </Checkbox>
            </div>
            <Button color="warning">Cotizar</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
