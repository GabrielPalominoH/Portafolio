const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        display: ['Archivo Black', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#FFF000",
          foreground: "#000000",
        },
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FFF000",
              foreground: "#000000",
            },
            background: "#ffffff",
            foreground: "#000000",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFF000",
              foreground: "#000000",
            },
            background: "#0a0a0a",
            foreground: "#ffffff",
          },
        },
      },
    }),
  ],
};
