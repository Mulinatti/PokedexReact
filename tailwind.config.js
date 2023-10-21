/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '1px 2px 5px #00000080',
      }
    },
  },
  plugins: [],
}

