/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f4f4f4",
        dark: "#111111",
      },
    },
  },
  plugins: [],
};
