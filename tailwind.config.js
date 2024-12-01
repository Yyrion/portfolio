/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'background1': "url('/public/backgoundpoly.png')"
    }},
  },
  plugins: [],
}

