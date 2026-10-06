/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Japanese-inspired palette
      colors: {
        washi: "#f5f0e6", // traditional paper
        kinari: "#ebe3d3", // raw silk (soft panel)
        sumi: "#222222", // ink black
        shu: "#c0392b", // vermilion red
        ai: "#2e4a6b", // indigo
      },
    },
  },
  plugins: [],
};
