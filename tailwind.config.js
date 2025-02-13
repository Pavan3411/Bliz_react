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
        fbiRed: '#bf1e2e',
        blackShade: '#0a0b18',
        blackHeading:'#121212',
        grayShade: '#55555e',
        fadeRed: '#f748591c',
        buttonRed: '#990F16',
        SlightRed:'#B70A10',
        RedText:'#CF000E',
        grayText:'#545454',
        grayTitle:'#383838',
        grayBorder1:'#494949',
        grayIcon1:'#373737',
        grayHeading:'#1C1C1C',
        whiteIcon:'#F1F1F1',
        grayIcon:'#707070',
        grayBg:'#E0E0E0',
        grayHr:'#D9D9D9',
        grayCard:'#212529',
        grayBorder:'#8C8C8C',
        grayContent:'#5B5B5B',
        graybox:'#A4A4A4',
        lightBlue:'#A1C2F95E',
        lightGreen:'#34A85333',
        dimRed:'#D22F2733',
      },
      screens: {
        'custom': '768px', 
        'custom1': '850px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-45deg, #f74550, #bf3039)',
      },
      keyframes: {
        'bounce-five': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      },
      animation: {
        'bounce-five': 'bounce-five 1s 4'  // Runs for 5 iterations
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],

}





