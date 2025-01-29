import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-primary': '#224F75',
        'palette-secondary': '#63949E',
        'palette-white': '#d8dde3',
        'palette-black': '#03152D',
        'palette-grey': '#cbcbcb',

        'normal': '#9fa19f',
	      'fire': '#e62928',
        'water': '#2881ef',
        'electric': '#fbc100',
        'grass': '#3ea128',
        'ice': '#3ccef2',
        'fighting': '#ff8000',
        'poison': '#9040cb',
        'ground': '#905120',
        'flying': '#81b8ee',
        'psychic': '#ef4179',
        'bug': '#90a019',
        'rock': '#aea881',
        'ghost': '#714171',
        'dragon': '#5060e1',
        'dark': '#624d4e',
        'steel': '#61a0b8',
        'fairy': '#ee70ee',
        'stellar': '#40b5a5',
        'unknown': '#69a091',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
