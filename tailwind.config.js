/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      '2xl': {'max' : '1536px'},
      'xl': {'max' : '1280px'},
      'lg': {'max' : '1024px'},
      'md': {'max': '768px'},
      'sm': {'max' : '640px'},
      'xs': {'max' : '475px'},
    },
    extend: {
      maxWidth: {
        xl2: "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "475px",
      },

      colors: {
        "soft-blue": "#3498DB",
        "dark-blue": "#24283B",
      },

      fontFamily: {
        "opensans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

