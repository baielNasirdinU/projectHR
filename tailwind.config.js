/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "red",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif;"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      wb: "869px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}