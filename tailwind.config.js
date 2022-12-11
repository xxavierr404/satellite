/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily:{
      'logo': ['Quicksand', 'sans-serif'],
    },
    extend: {
      keyframes: {
        appear: {
          '0%': {
            transform: 'translateY(100%)',
            bottom: '-100%',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            bottom: '0',
            opacity: '100%'
          }
        }
      },
      animation: {
        appear: 'appear 1s ease 1'
      }
    },
  },
  plugins: [],
}
