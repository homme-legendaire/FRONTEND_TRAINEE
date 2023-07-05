/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "var(--color1-color)",
        color2: "var(--color2-color)",
        color3: "var(--color3-color)",
      },
    },
  },
  plugins: [],
};
