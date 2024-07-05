/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",],
  theme: {
    extend: {
      borderRadius: {
        '20px-0-0-20px': '20px 0 0 20px',
        '0-20px-20px-0': '0 20px 20px 0',
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'custom-gray': '#ccc',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}

