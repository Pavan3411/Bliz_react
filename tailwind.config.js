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
        filson: ['FilsonProRegular', 'sans-serif'], 
      },
      colors:{
        lightYellow: 'rgb(245, 245, 239)', 
        lightRed: '#be1f2e',
        darkRed: '#7C0A02',
        blackShade: '#0a0b18',
        grayShade: '#55555e',
        fadeRed: '#f748591c',
        buttonRed: '#990F16',
      },
      screens: {
        'custom': '768px', 
        'custom1': '850px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-45deg, #f74550, #bf3039)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],

}





