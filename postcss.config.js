/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', ...defaultTheme.fontFamily.serif],
        antonio: ['"Antonio"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
