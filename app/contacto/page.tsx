import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%]">
        <p className="text-center text-[5vh] text-yellow-500 pb-4">CONTACTO</p>
        <div>
          <Image
            alt=""
            src={"/IMAGEN-CON-LINEAS.png"}
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
            <Link href="https://instagram.com/tallerescasafierros?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr">
              <AiFillInstagram />
            </Link>
          </div>
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
            <Link href="#">
              <FaTiktok />
            </Link>
          </div>
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
            <Link href="#">
              <FaWhatsapp />
            </Link>
          </div>
          <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
            <Link href="#">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
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
        <div>
          <Image alt="" src={"/logo_letters.webp"} height={100} width={100} />
        </div>
      </div>
    </main>
  );
}
