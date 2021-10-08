module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple' : '#4845D2',
      },
      letterSpacing: {
        '08': '0.08em',
      },
      borderWidth: {
        '1.5': '1.5px',
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
