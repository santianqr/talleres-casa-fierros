"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { FC, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Providers: FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
