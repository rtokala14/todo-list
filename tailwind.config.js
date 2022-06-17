module.exports = {
  purge: [
    './*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '50%': '50%',
        '100%': '100%',
      },
      colors: {
        'primary-dark': '#006d77',
        'secondary-dark': '#83c5be',
        'primary-light': '#edf6f9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}