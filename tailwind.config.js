/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl2': {'max':'1350px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'lg2': {'max': '850px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xsm': {'max': '450px'}
    },
    extend: {},
  },
  plugins: [],
}