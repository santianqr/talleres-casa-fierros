import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Average } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

const average = Average({
  subsets: ["latin"],
  variable: "--font-average",
  display: "swap",
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talleres Casa Fierros",
  description: "Taller especializado en mecanica en general.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${average.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
