import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] border-t-1 border-t-yellow-500 h-[20vh] flex flex-row">
        <div className="flex flex-row w-[50%]">
          <div className="relative w-36 h-28">
            <Image src={"/logo_color.png"} alt="" fill />
          </div>
          <div>
            <div className="flex flex-row">
              <FaLocationDot />
              <p>Cl. 161a #16a-58</p>
            </div>
            <div className="flex flex-row">
              <MdOutlineSmartphone />
              <p>
                324 582 7230
                <br />
                350780050
              </p>
            </div>
            <div className="flex flex-row">
              <MdEmail />
              <p>atencion@tallerescasafierros.co</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[50%] justify-between">
          <div><div>
            <p>Inicio</p>
            <p>Servicios</p>
            <p>Blog</p>
            <p>Contacto</p>
            <p>Nosotros</p>
            <p>Trabaja con nosotros</p>
          </div>
          <div>
            <p>Horario de atención</p>
            <p>Luves - Viernes/7am - 5pm</p>
            <p>Sabados /8am-3pm</p>s
          </div></div>
          

          <div>
            <div>
              <div>
                <IoLogoInstagram />
              </div>
              <div>
                <FaTiktok />
              </div>
              <div>
                <FaWhatsapp />
              </div>
            </div>
            <p>® 2023 Talleres Casa Fierros</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
