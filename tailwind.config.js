/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)',
        mockup: 'url(/src/assets/code-mockup.png)',
        vtexbg: 'url(/src/assets/test.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        gray: {
          900: '#09090A'
        },
        rebelPink: {
          300: '#FFF3F6',
          500: '#FFE0EF',
          700: '#FFC4DD',
          900: '#F71963'
        },
        vtexBlue: {
          500: '#A1AAB7',
          700: '#5E6E84',
          900: '#142032'
        },
        vtexGray: {
          300: '#e7e9ee'
        }
      },
    },
  },
  plugins: [],
}
