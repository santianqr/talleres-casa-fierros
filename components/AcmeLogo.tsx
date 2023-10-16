import React from "react";
import Image from "next/image";
import logo from "@/public/favicon.webp";

export const AcmeLogo = () => (
  <Image alt="logo" src={logo} width={50} height={50} />
);
