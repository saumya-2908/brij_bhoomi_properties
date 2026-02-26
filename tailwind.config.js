/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#1E5A3C",
          gold: "#C89B3C",
          blue: "#1F4E8C",
          lightBg: "#F8F6F1",
          darkBg: "#0F1C18",
          darkCard: "#162824",
        },
      },
    },
  },
  plugins: [],
};
