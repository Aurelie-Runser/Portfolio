/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "mon-black": "#1f1f1f",
        "mon-black-dd": "#1f1f1fdd",
        // "texte": "#dddddd",
        //   -> stone-300
        // "claire": "#ffedd5",
        //  -> orange-100
        // "glitch_1": "#d946ef",
        //     -> fuchsia-500
        // "glitch_2": "#22d3ee"
        //   -> cyan-400
      },
      fontSize: {
        "sm": "1rem",
        "base": "1.25rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3.25rem",
        "4xl": "4rem",
        "5xl": "5.5rem",
        "6xl": "7rem",
        "7xl": "8rem",
        "8xl": "9rem",
        "9xl": "11rem",
      },
      fontFamily: {
        "oswald": "Oswald",
        "darker-grotesque": "Darker Grotesque"
      },
    },
  },
});