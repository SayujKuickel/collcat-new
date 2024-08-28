/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#926e96",
          200: "#805685",
          300: "#6e3d73",
          400: "#5c2562",
          500: "#4a0d50",
          600: "#430c48",
          700: "#3b0a40",
          800: "#340938",
        },
      },
    },
  },
  plugins: [],
};
