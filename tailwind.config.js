/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'input-magnifier': "url('./assets/icons/Magnifier.png')"
      }
    },
  },
  plugins: [],
}

