import type { Metadata } from "next";
import { Average, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import HeaderPage from "@/components/header";
import Footer from "@/components/footer";

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
        </Providers>
      </body>
    </html>
  );
}
