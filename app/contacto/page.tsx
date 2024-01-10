"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarDatos = async (event: FormEvent) => {
    event.preventDefault();

    const respuesta = await fetch("http://localhost:3000/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
      }),
    });

    console.log(respuesta);
  };

  return (
    <main className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] flex flex-col items-center gap-y-8 sm:gap-y-16">
        <p className="text-center text-[5vh] text-yellow-500 pb-4">CONTACTO</p>
        <div className="relative w-full">
          <Image
            alt=""
            src={"/IMAGEN-CON-LINEAS.png"}
            height={100}
            width={1024}
            className="object-contain"
          />
        </div>
        <div className="flex flex-row justify-end w-full gap-x-4">
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl ">
            <Link href="https://instagram.com/tallerescasafierros?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr">
              <AiFillInstagram />
            </Link>
          </div>
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
            <Link href="#">
              <FaFacebookF />
            </Link>
          </div>
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
            <Link href="#">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        {/*<div className="w-[100%] flex justify-center">
          <GoogleMapsEmbed
            apiKey={process.env.GOOGLE_MAPS_API_KEY!}
            width={1024}
            height={500}
            mode="place"
            q="Talleres Casa Fierros, Calle 161a, Bogotá"
            allowfullscreen
            loading="lazy"
            style="border-radius:1rem; max-width: 100%; max-height: 100%;"
  />
        </div>*/}
        <div className="w-full h-[15vh] flex flex-col items-center relative">
          <div className="w-full h-1/2 bg-yellow-500/[0.6] absolute top-0 z-10"></div>
          <Image
            alt=""
            src={"/logo_letters.webp"}
            height={100}
            width={900}
            className="absolute z-20"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
          <div className="w-full h-1/2 bg-background absolute bottom-0 z-10"></div>
        </div>

        <div className="w-[80%] flex flex-col sm:flex-row justify-between gap-4 sm:px-14">
          <form
            className="flex flex-col items-center gap-y-4"
            onSubmit={enviarDatos}
          >
            <p>COMENTARIOS Y OPINIONES</p>
            <Input
              size="sm"
              type="text"
              placeholder="Nombre"
              className=" max-w-md "
              startContent={<FaUser />}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Input
              size="sm"
              type="email"
              className="  max-w-md "
              placeholder="you@example.com"
              startContent={<MdEmail />}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Textarea
              label="Descipción"
              placeholder="Escribe aqui"
              className="max-w-md"
              onChange={(e) => setMensaje(e.target.value)}
            />

            <Button
              type="submit"
              variant="solid"
              className="bg-yellow-500 text-background font-bold"
            >
              ENVIAR
            </Button>
          </form>
          <div
            className="flex flex-col gap-y-8 items-center"
            style={{ wordBreak: "break-word" }}
          >
            <div>
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
                  <FaLocationDot className="text-xl" />
                </div>

                <p className="px-2">Cl. 161a #16a-58</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
                  <MdOutlineSmartphone className="text-xl" />
                </div>
                <p className="px-2">
                  324 582 7230
                  <br />
                  350780050
                </p>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
                  <MdEmail className="text-xl" />
                </div>
                <p className="px-2">atencion@tallerescasafierros.co</p>
              </div>
            </div>
            <div className="flex flex-row gap-x-6">
              <p className="font-bold">
                Horario de
                <br />
                atencion
              </p>
              <p>
                Lunes-Viernes/ 7am-5pm <br />
                Sabados/ 8am-3pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
