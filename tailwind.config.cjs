/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "#1db954",
      white: "#ffffff",
      Spotifyblack: "#161616",
      black: "#000",
      gray: "#b3b3b3",
    },
    fontFamily: {
      sans: [
        "CircularSP",
        "sans-serif",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
      ],
    },
  },
  plugins: [],
};
