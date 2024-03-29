/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container: {
      center : true,
    },

    screens:{
      md: "768px",
      lg: "1140px",
      xl: "1140px",
      "2xl": "1140px"
    },

    extend: {
      fontFamily : {
        gemunu : ['Gemunu Libre', "sans-serif"],
        openSans : ['Open Sans', "sans-serif"]
      },

      colors:{
        'gega-red' : '#BC1A45',
        "gega-melon" : "#FFD369",
        "gega-gery" : "#DDDDDD",
        "gega-white" : "#F7F7F7"
      },

      spacing:{
        "128": "32rem"
      }
    },
  },
  plugins: [],
}

