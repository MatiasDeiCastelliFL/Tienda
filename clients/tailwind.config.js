/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      Robote:["Roboto Slab", "sans-serif"],

    },
    extend: {colors:{
      primary:"#e91e63",
      secundary:{
        900:"#343a40",
        100:"#1E1F25",

      },
      tersary:"#2f051f"
    }},
  },
  plugins: [],
  mode: 'jit',
}
