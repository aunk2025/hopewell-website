import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2a2119",
        navy: "#3a2f24",
        cyan: "#c8b6a6",
        mint: "#f1dec9",
        sky: "#faf5ef",
        teal: {
          50: "#faf5ef",
          100: "#f6ecdf",
          200: "#f1dec9",
          300: "#dbc7b3",
          400: "#c8b6a6",
          500: "#b6a191",
          600: "#a4907c",
          700: "#624133",
          800: "#4a3126",
          900: "#362419",
          950: "#241810"
        }
      },
      boxShadow: {
        glass: "0 30px 90px rgba(42,33,25,.18)",
        glow: "0 0 50px rgba(164,144,124,.3)"
      }
    }
  },
  plugins: []
};

export default config;
