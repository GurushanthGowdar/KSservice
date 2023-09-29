/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // orange: colors.orange,
      'header': {
        'main': '#F3FAFF',
        'secondary': '#1E1E1E'
      },
      'home': {
        'main': '#C61616'
      }
    },
    extend: {

    },
  },
  plugins: [],
};
