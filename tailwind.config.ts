import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#87CEEB",       // Primária (CTAs, destaques)
          slate: "#708090",     // Secundária
          petroleum: "#18242A", // Neutra escura 1 (grafite petróleo)
          navy: "#191A34",      // Neutra escura 2 (azul-marinho / índigo)
          white: "#FFFFFF",
          "petroleum-card": "#1E2D35",
          "navy-card": "#212242",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #191A34 0%, #87CEEB 100%)",
        "gradient-brand-subtle": "linear-gradient(135deg, #191A34 0%, #18242A 60%, #1e3545 100%)",
        "gradient-petroleum-slate": "linear-gradient(135deg, #18242A 0%, #708090 100%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
