import Image from "next/image";
import logotype from "@/public/logotype-color.webp";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <Image src={logotype} alt="" width={70} height={70} />
      <nav className={styles.nav}>
        <a href="#">INICIO</a>
        <a href="#">SERVICIOS</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACTO</a>
        <a href="#">:</a>
      </nav>
      <div className={styles.container_buttons}>
        <button>Iniciar Sesión</button>
        <button>Crear Cuenta</button>
      </div>
    </header>
  );
}
