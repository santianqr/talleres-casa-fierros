'use client'

import NavbarPage from "@/components/NavbarPage";
import PhotosSection from "@/components/PhotosSection";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default function Home() {
  return (
    <main>
      <NavbarPage />
      <PhotosSection />
    </main>
  );
}
