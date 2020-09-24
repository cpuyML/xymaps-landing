module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      
      animation: {
        'slide': 'slide 10s ease-in-out infinite alternate'
      },

      keyframes: {
        slide: {
          "0%": {transform: "rotate(65deg)"},
          "50%": {transform: "rotate(0)"},
          "100%": {transform: "rotate(-65deg)"},
        }
      }
    }
  }
}
