/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#080D29",
        secondary: "#1D2345",
        hoverColor: "#242A4A",
        boldColor: "#2E72EA",
        backColor: "#0B1A3E",
        filterBg: "#111739",
      }
    },
  },
  plugins: [],
}