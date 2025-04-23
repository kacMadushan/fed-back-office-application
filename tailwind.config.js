const typography = require('./src/lib/utils/typography');
const colors = require('./src/lib/utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        orage: colors.orage,
        blue: {
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
        },
        grey: {
          100: colors.grey[100],
          200: colors.grey[200],
          300: colors.grey[300],
          400: colors.grey[400],
        }
      },
      fontFamily: {
        primary: typography.primaryFont,
        secondary: typography.secondaryFont,
      }
    },
  },
  plugins: [],
}

