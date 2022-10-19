/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '0.5': '0.5rem 0.5rem 0 black',
        '1': '1rem 1rem 0 black',
        '1.5': '1.5rem 1.5rem 0 black',
      }
    },
  },
  plugins: [],
}