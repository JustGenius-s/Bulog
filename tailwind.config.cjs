/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3.5xl': '1.75rem',
      },
      boxShadow: {
        '0.5': '0px 0.5px 1.5px 0px #9e9e9f',
      },
      lineHeight: {
        '16': '3.5rem',
        '24': '6rem',
      }
    },
  },
  plugins: [],
}
