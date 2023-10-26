import Providers from "./providers";
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talleres Casa Fierros",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
