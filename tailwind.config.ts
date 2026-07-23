import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#061822",
        navy: "#071d2b",
        cyan: "#57e6e6",
        mint: "#b9fff4",
        sky: "#d9f8ff"
      },
      boxShadow: {
        glass: "0 30px 90px rgba(4, 25, 38, .18)",
        glow: "0 0 50px rgba(87, 230, 230, .25)"
      }
    }
  },
  plugins: []
};

export default config;
