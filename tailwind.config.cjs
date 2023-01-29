/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'yellow': {  DEFAULT: '#FFBF00',  50: '#FFEDB8',  100: '#FFE8A3',  200: '#FFDE7A',  300: '#FFD352',  400: '#FFC929',  500: '#FFBF00',  600: '#C79500',  700: '#8F6B00',  800: '#574100',  900: '#1F1700'},
        'purple': {  DEFAULT: '#692DFF',  50: '#ECE5FF',  100: '#DED0FF',  200: '#C0A7FF',  300: '#A37FFF',  400: '#8656FF',  500: '#692DFF',  600: '#4600F4',  700: '#3600BC',  800: '#260084',  900: '#16004C'},
        'blue': {  DEFAULT: '#5FBCF7',  50: '#E7F5FE',  100: '#D4EDFD',  200: '#ADDDFB',  300: '#86CCF9',  400: '#5FBCF7',  500: '#2AA6F4',  600: '#0B8ADB',  700: '#0868A5',  800: '#064770',  900: '#03253B'},
      }
    },
  },
  plugins: [],
}
