/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3762ef",
        secondary: "#e1e8fb",
        ternary: "#b9b9b9",

        text_secondary: "#e1e8fb",
      },
      fontFamily: {
        custom_sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
