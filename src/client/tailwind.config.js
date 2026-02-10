module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'portfolio-navy': '#0a192f',
        'portfolio-blue': '#112240',
        'portfolio-tech': '#64ffda',
        'portfolio-black': '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
