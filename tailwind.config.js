/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'display': ['Bitter', 'serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    colors: {
      "orange": "#FF6900",
      "black": "#000000",
      "white": "#FFFFFF",
      "gray-900": "#2E2D2D",
      "gray-800": "#3E3D3D",
      "gray-500": "#707070",
      "gray-400": "#959393"
    },
    extend: {},
  },
  plugins: [],
}
