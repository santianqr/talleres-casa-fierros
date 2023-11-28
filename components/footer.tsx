import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//<MdOutlineSmartphone />
//<FaLocationDot />
//<MdEmail />

//<IoLogoInstagram />
//<FaTiktok />
//<FaWhatsapp />

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] border-t-1 border-t-yellow-500">
        <div>
          <div className="relative w-36 h-28">
            <Image src={"/logo_color.png"} alt="" fill />
          </div>
          <div>
            <div>
              <FaLocationDot />
              <p>Cl. 161a #16a-58</p>
            </div>
            <div>
              <MdOutlineSmartphone />
              <p>
                324 582 7230
                <br />
                350780050
              </p>
            </div>
            <div>
              <MdEmail />
              <p>atencion@tallerescasafierros.co</p>
            </div>
          </div>
        </div>
        <div>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
          <p>Palabrac</p>
        </div>
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
      </div>
    </footer>
  );
}
