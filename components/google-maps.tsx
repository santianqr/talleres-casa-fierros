import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function GoogleMaps() {
  return (
    <div className="w-[90%] sm:w-[40%] flex justify-center">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        height={400}
        width={400}
        mode="place"
        q="Talleres Casa Fierros, Calle 161a, Bogotá"
        allowfullscreen
        loading="lazy"
        style="border-radius:1rem; max-width: 100%; max-height: 100%;"
      />
    </div>
  );
}
