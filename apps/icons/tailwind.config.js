const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter-font)", ...fontFamily.sans],
        serif: ["var(--inter-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("@perseus/tailwindcss")],
};

module.exports = config;
