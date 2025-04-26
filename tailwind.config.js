const typography = require('./src/app/utils/typography');
const colors = require('./src/app/utils/colors');

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
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        clr_white: colors.clr_white,
        clr_blue: {
          100: colors.clr_blue[100],
          200: colors.clr_blue[200],
          300: colors.clr_blue[300],
          400: colors.clr_blue[400],
          500: colors.clr_blue[500],
        },
        clr_neutral: {
          100: colors.clr_neutral[100],
          200: colors.clr_neutral[200],
          300: colors.clr_neutral[300],
          400: colors.clr_neutral[400],
          500: colors.clr_neutral[500],
        }
      },
      fontFamily: {
        primary: typography.primaryFontFamily,
        secondary: typography.secondaryFontFamily,
      }
    },
  },
  plugins: [],
}

