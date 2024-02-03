"use client";

import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function CotizaSection() {
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [carro, setCarro] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mecBas, setMecBas] = useState(false);
  const [mecEsp, setMecEsp] = useState(false);
  const [eleAut, setEleAut] = useState(false);
  const [latPin, setLatPin] = useState(false);
  const [servEsp, setServEsp] = useState(false);

  const enviarDatos = async (event: FormEvent) => {
    event.preventDefault();

    const serviciosSeleccionados = {
      "mecanica-basica": mecBas,
      "mecanica-esp": mecEsp,
      "electricidad-automotriz": eleAut,
      "latoneria-pintura": latPin,
      "servicios-especiales": servEsp,
    };

    const respuesta = await fetch("/api/cotiza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        celular: celular,
        carro: carro,
        motivo: motivo,
        servicio: JSON.stringify(serviciosSeleccionados),
      }),
    });

    const datos = await respuesta.json();
    console.log(datos);
    if (datos.error) {
      alert(datos.error);
      toast.error(datos.error);
      console.log(datos.error);
    } else {
      alert("Cotización enviada! En breve te contactaremos.");
      toast.success("Email sent successfuly!");
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.value) {
      case "mec-bas":
        setMecBas(event.target.checked);
        break;
      case "mec-esp":
        setMecEsp(event.target.checked);
        break;
      case "ele-aut":
        setEleAut(event.target.checked);
        break;
      case "lat-pin":
        setLatPin(event.target.checked);
        break;
      case "serv-esp":
        setServEsp(event.target.checked);
        break;
      default:
        break;
    }
  };

  return (
    <section className="w-full py-4 px-6 flex justify-center mt-12 sm:mt-20">
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
            onSubmit={enviarDatos}
            className="flex flex-col gap-y-6 justify-between w-[80%] sm:w-[40%]"
          >
            <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 justify-between">
              <div className="flex flex-col justify-between">
                <Input
                  type="text"
                  variant={"underlined"}
                  label="Nombre"
                  name="nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <Input
                  type="text"
                  variant={"underlined"}
                  label="Celular"
                  name="celular"
                  onChange={(e) => setCelular(e.target.value)}
                />
                <Input
                  type="text"
                  variant={"underlined"}
                  label="Marca/Modelo/Año"
                  name="marcaModeloAno"
                  onChange={(e) => setCarro(e.target.value)}
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
                onChange={(e) => setMotivo(e.target.value)}
              />
              <Checkbox size="sm" color="warning" defaultSelected name="acepto">
                Acepto que mis datos enviados se recopilen y se almacenen de
                forma responsable.
              </Checkbox>
            </div>
            <Button color="warning" type="submit">
              Cotizar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
