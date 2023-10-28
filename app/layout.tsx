import type { Metadata } from "next";
import { Average, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  description: "Taller de mecánica en general ubicado en Bogotá, Colombia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${average.variable} ${outfit.variable} dark`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
