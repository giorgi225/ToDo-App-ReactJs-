/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#00AECB',
        'black': '#707C80',
      },
      backgroundColor: {
        'white':'#FFFFFF',
        'white-500':'#FEFEFE',
        'white-600':'#F8F8F8',
      },
      backgroundImage: {
        'linear': 'linear-gradient(180deg, #00A4D8 0%, #00CDA8 100%)',
      }
    },
  },
  plugins: [],
}
