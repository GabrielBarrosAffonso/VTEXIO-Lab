/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)',
        mockup: 'url(/src/assets/code-mockup.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        gray: {
          900: '#09090A'
        }
      }
    },
  },
  plugins: [],
}
