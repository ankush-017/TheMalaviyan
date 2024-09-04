/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#de59b1',
        'color-primary-light': '#ca3782',
        'color-primary-dark': '#1e0b36',
        'color-black': '#000',
        'color-gray-dark': '#aaa',
        'color-gray-light': '#943e3e',
        'color-white': '#a05151',
      },
      fontFamily: {
        bungee: ['Bungee Tint', 'sans-serif'],
        head: ["Baskervville SC", 'serif'],
        para: ["Space Grotesk", 'sans-serif'],
        inter: ["Playfair Display", 'serif'],
      },
      screens: {
        'phone': '600px',
      },
      perspective: {
        '200': '200rem',
      },
    },
  },
  plugins: [],
}