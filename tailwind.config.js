const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['_site/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'up-to-sm': {'max': '639px'},
      'up-to-md': {'max': '767px'},
      'up-to-lg': {'max': '1023px'},
      'up-to-xl': {'max': '1279px'},
      'up-to-2xl': {'max': '1535px'},
      'dark': {'raw': '(prefers-color-scheme: dark)'},
    },
    extend: {
      colors: {
        'cool-gray': colors.coolGray,
        primary: {
          50: 'hsl(253, 84%, 97%)',
          100: 'hsl(253, 84%, 89%)',
          200: 'hsl(253, 84%, 79%)',
          300: 'hsl(253, 84%, 55%)',
          400: 'hsl(253, 84%, 49%)',
          500: 'hsl(253, 84%, 39%)', 
          600: 'hsl(253, 84%, 34%)',
          700: 'hsl(253, 84%, 29%)',
          800: 'hsl(253, 84%, 24%)',
          900: 'hsl(253, 84%, 19%)',
        },
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
