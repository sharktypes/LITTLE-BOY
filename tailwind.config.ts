import type { Config } from "tailwindcss";
import { slateDark, blueDark } from "@radix-ui/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...slateDark,
        ...blueDark,
      },
    },
  },
  plugins: [],
};
export default config;
