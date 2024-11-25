/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'], 
        Poppins: ['Poppins', 'sans-serif'],
        Bokor: ['Bokor', 'sans-serif'],
        Lacquer: ['Lacquer', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        LeagueSpartan : ['League Spartan', 'sans-serif']
      },
    },
  },
  plugins: [],
}