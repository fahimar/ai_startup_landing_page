import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1908px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1908px",
    },
    extend: {
      colors: {
        black: "#000000",
      },
      backgroundColor: {
        black: "#000000",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  plugins: [],
};
export default config;
