import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#fffee7",
              100: "#fffdc1",
              200: "#fff886",
              300: "#ffeb41",
              400: "#ffdb0d",
              500: "#ffcb00",
              600: "#d19400",
              700: "#a66902",
              800: "#74430f",
              900: "#442304",
            },
          },
        },
      },
    }),
  ],
};
export default config;
