/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "rb": ['Roboto', 'sans-serif'],
        "pp": ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '100': '25rem',
        '108': '27rem',
        '120': '30rem',
        '300': '75rem',
        '250': '62.5rem',
        '200': '50rem',
      } 
    },
  },
  plugins: [],
}

