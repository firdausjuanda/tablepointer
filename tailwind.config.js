/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['madetommy'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#000000',
        'white': '#ffffff',
        'grey': '#D4D4D4',
        'light-grey': '#F5F5F5',
        'tp-blue-1': '#1367C6',
        'tp-blue-2': '#147CFC',
        'tp-blue-3': '#43A4FD',
        'tp-dark-blue': '#1A237E',
        'tp-orange': '#FF6F00',
      },
    },
  },
  plugins: [],
}