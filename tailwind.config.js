/** @type {import('tailwindcss/types').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        xs: ["14px", { lineHeight: "20px", letterSpacing: "0.04em" }],
        sm: ["16px", { lineHeight: "22px", letterSpacing: "0.04em" }],
        lg: ["18px", { lineHeight: "24px", letterSpacing: "0.04em" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "0.04em" }],
        h3: ["24px", { lineHeight: "32px", letterSpacing: "0.04em" }],
        h2: ["28px", { lineHeight: "36px", letterSpacing: "0.04em" }],
        h1: ["32px", { lineHeight: "40px", letterSpacing: "0.04em" }],
      },

      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },

      fontFamily: {
        typo: "'Exo 2'",
        title: "'Montserrat'",
        jet: "'JetBrains Mono'",
      },

      container: {
        padding: "1rem",
        center: true,
        screens: {
          xs: "320px",
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1312px",
        },
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#87CBE1",
          DEFAULT: "#41b5db",
          dark: "#1C4C5C",
        },
        secondary: {
          light: "#F7CADF",
          DEFAULT: "#f47fb6",
          dark: "#753D57",
        },
        bgcolor: {
          DEFAULT: "#ffffff",
        },
        typo: {
          DEFAULT: "#000000",
        }
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
