import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] border-t-1 border-t-yellow-500 flex flex-col sm:flex-row gap-x-4 items-center gap-y-4 sm:gap-x-0">
        <div className="flex flex-col sm:flex-row w-[100%] sm:w-[50%] justify-between items-center px-4 gap-4 mt-4 sm:mt-6">
          <Image
            src={"/logo_color.png"}
            alt=""
            height={140}
            width={140}
            className="object-contain"
          />

          <div
            className="flex flex-col gap-y-3 w-[100%] sm:w-[40%] h-[40%] items-center sm:items-start"
            style={{ wordBreak: "break-word" }}
          >
            <div className="flex flex-row items-center">
              <FaLocationDot className="text-xl" />
              <p className="px-2">Cl. 161a #16a-58</p>
            </div>
            <div className="flex flex-row items-center">
              <MdOutlineSmartphone className="text-xl" />
              <p className="px-2">
                324 582 7230
                <br />
                350780050
              </p>
            </div>
            <div className="flex flex-row items-center">
              <MdEmail className="text-xl" />
              <p className="px-2">atencion@tallerescasafierros.co</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-[100%] sm:w-[50%] items-center px-4 gap-4 justify-center mt-4 sm:mt-6">
          <div className="text-sm">
            <Link href={"/"}>
              <p>Inicio</p>
            </Link>
            <Link href={"/servicios"}>
              <p>Servicios</p>
            </Link>
            {/* <p>Blog</p>*/}
            <Link href={"/contacto"}>
              <p>Contacto</p>
            </Link>
            {/*<p>Nosotros</p>*/}
            {/* <p>Trabaja con nosotros</p>*/}
            <br />
            <p>Horario de atención</p>
            <p>Lunes - Viernes/7am - 5pm</p>
            <p>Sábados /8am-3pm</p>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between">
              <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
                <Link
                  href="https://instagram.com/tallerescasafierros?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <AiFillInstagram />
                </Link>
              </div>
              <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
                <Link
                  href="https://www.facebook.com/tcasafierros"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </div>
              <div className="flex items-center justify-center w-11 h-11 border-2 border-white rounded-full text-3xl">
                <Link href="https://wa.me/+573507800050" target="_blank">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
            <p className="text-sm">
              <span>®</span> 2024 Talleres Casa Fierros
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
