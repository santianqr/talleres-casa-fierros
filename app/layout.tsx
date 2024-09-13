import type { Metadata } from "next";
import { Average, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import HeaderPage from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const average = Average({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-average",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talleres Casa Fierros",
  description: "Taller de mecánica en general ubicado en Bogotá.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`dark bg-background text-white ${average.variable} ${outfit.variable}`}
      >
        <Providers>
          <HeaderPage />
          {children}
          <Footer />
          <Link
            href="https://wa.me/+573507800050?text=Hola%20quiero%20solicitar%20un%20servicio"
            target="_blank"
            className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={70}/>
          </Link>
        </Providers>
      </body>
    </html>
  );
}
