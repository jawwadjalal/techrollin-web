import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aapka naya High-Tech Palette
        'dark-core': '#010B12',
        'deep-green': '#0C8900',
        'electric-lime': '#9CFF00',
        'neon-green': '#39FF13',
        'slate-dark': '#1E1F21',
      },
    },
  },
  plugins: [],
};
export default config;