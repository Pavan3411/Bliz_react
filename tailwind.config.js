/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors:{
        lightYellow: 'rgb(245, 245, 239)',
      },
      screens: {
        'custom': '768px', 
        'custom1': '850px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-45deg, #4481eb, #04befe)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],

}





