/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url('/images/flower-bg.jpg')",
      },
    },
  },
  plugins: [],
};
