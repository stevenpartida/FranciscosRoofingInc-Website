/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        shadowBlack: "#0C0C0C",
        woodsmoke50: "#f7f7f8",
        woodsmoke100: "#ededf1",
        woodsmoke200: "#d8d9df",
        woodsmoke300: "#b5b6c4",
        woodsmoke400: "#8d8fa3",
        woodsmoke500: "#6f7188",
        woodsmoke600: "#595a70",
        woodsmoke700: "#494a5b",
        woodsmoke800: "#3f404d",
        woodsmoke900: "#373743",
        woodsmoke950: "#0f0f12",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
