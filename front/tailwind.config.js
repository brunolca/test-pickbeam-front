const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Axiforma", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      md: "600px",
      lg: "960px",
    },
    colors: {
      "primary-100": "#B2E1FF",
      "primary-200": "#60ADFF",
      "primary-300": "#3C82FF",
      "primary-400": "#2C55FF",
      "primary-500": "#000F61",
      "primary-600": "#000068",
      "primary-700": "#000054",
      "primary-800": "#00072E",
      "accent-100": "#8AEED2",
      "accent-200": "#67F2CB",
      "accent-300": "#5DE8C1",
      white: "white",
      black: "black",
      "gray-100": "#F8F4F1",
      "gray-200": "#E9DCD4",
      "gray-300": "#F3F3F3",
      transparent: "transparent",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal" }],
      sm: ["0.875rem", { lineHeight: "normal" }],
      base: ["1rem", { lineHeight: "normal" }],
      lg: ["1.125rem", { lineHeight: "normal" }],
      xl: ["1.25rem", { lineHeight: "normal" }],
      "2xl": ["1.5rem", { lineHeight: "normal" }],
      "3xl": ["1.875rem", { lineHeight: "normal" }],
      "4xl": ["2.25rem", { lineHeight: "normal" }],
      "5xl": ["3rem", { lineHeight: "normal" }],
      "6xl": ["3.75rem", { lineHeight: "normal" }],
      "7xl": ["4.5rem", { lineHeight: "normal" }],
      "8xl": ["6rem", { lineHeight: "normal" }],
      "9xl": ["8rem", { lineHeight: "normal" }],
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};
