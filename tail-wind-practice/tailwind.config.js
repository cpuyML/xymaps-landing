module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
      padding: '7rem',
      margin: '1rem'
    },
    extend: {
      animation: {
        'slide': 'slide 7s ease infinite'
      },
      keyframes: {
        slide: {
          "0%": {transform: "rotate(0)"},
          "100%": {transform: "rotate(360deg)"}
        }
      }
    }
  }
}
