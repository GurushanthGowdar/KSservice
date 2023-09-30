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
    extend: {

    },
  },
  plugins: [],
};
