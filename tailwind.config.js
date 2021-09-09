// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ["Poppins", "sans-serif"]
    },
    extend: {},
  },
  variants: {
    extend: {
      borderColor:["focus-visible"],
      borderWidth:["focus-visible","focus"]
    },
  },
  plugins: [],
}
