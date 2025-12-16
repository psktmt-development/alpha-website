import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni': ['Bodoni Moda', 'serif'],
      },
      colors: {
        brand: "#af2324",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

