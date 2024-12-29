/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Nassim: ["nassim-arabic-pro", "sans-serif"],
        Mirza: ["Mirza", "sans-serif"],
        Scheherazade: ["Scheherazade New", "sans-serif"],
        Utile: ["Utile", "sans-serif"],
        Bebas: ["bebas-neue-by-fontfabric", "sans-serif"],
        noto_arabic_secondary: ['"Amiri"', "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 5s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
