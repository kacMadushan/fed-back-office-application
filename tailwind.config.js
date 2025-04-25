const typography = require('./src/lib/utils/typography');
const colors = require('./src/lib/utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        clr_white: colors.clr_white,
        clr_zinc: {
          50: colors.clr_zinc[50],
          100: colors.clr_zinc[100],
          200: colors.clr_zinc[200],
          300: colors.clr_zinc[300],
          400: colors.clr_zinc[400],
          500: colors.clr_zinc[500],
          600: colors.clr_zinc[600],
          700: colors.clr_zinc[700],
          800: colors.clr_zinc[800],
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

