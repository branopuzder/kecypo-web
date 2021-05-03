module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "kp-purple": {
          DEFAULT: "#5C1D6B",
        },
        "kp-yellow": {
          DEFAULT: "#FDD602",
        },
        "kp-orange": {
          DEFAULT: "#FF6F39",
        },
        "kp-pink": {
          DEFAULT: "#FF3179",
        },
        "kp-purple-light": {
          DEFAULT: "#B41EB2",
        },
        "kp-blue": {
          DEFAULT: "#38A6F3",
        },
        "kp-green": {
          DEFAULT: "#23D10C",
        },
        "kp-red": {
          DEFAULT: "#D51636",
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
