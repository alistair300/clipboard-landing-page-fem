module.exports = {
  purge: [
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'primary': ['Bai Jamjuree', 'sans-serif']
    },
    screens: {
      'tablet': '768px',
      'laptop': '1124px',
      'desktop': '1440px'
    },
    extend: {
      colors: {
        'cyan': 'hsl(171, 66%, 44%)',
        'blue': 'hsl(233, 100%, 69%)',
        'neutral-dark': 'hsl(210, 10%, 33%)',
        'neutral-light': 'hsl(201, 11%, 66%)'
      },
    },
    container: {
      padding: '2rem',
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
