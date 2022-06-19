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
        'primary': '#ff6700',
        'primary-variant': '#ff9248',
        'secondary': '#ffb38a',
        'secondary-variant': '#ffd7b5',
        'base': '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}