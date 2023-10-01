/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // orange: colors.orange,
      'white': colors.white,
      'gray': colors.gray,
      'themeColor': {
        'main': '#016DA2',
        'secondary': '000000'
      },
      'header': {
        'main': '#F3FAFF',
        'secondary': '#1E1E1E'
      },
      'home': {
        'main': '#C61616'
      },
      'services': {
        'main': '#D9D9D9'
      }
    },
    screens: {

      'xs': { 'max': '395px' },
      'sm': {
        'max': '640px'
      },
      // => @media (min-width: 640px) { ... }

      'md': { 'max': '768px' },
      // => @media (min-width: 768px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (min-width: 1280px) { ... }

      '2xl': { 'max': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

    },
  },
  plugins: [],
};
