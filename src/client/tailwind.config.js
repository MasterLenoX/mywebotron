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
        'gaming-neon': '#00f3ff',
        'gaming-green': '#39ff14',
        'gaming-obsidian': '#0d0d0d',
        'gaming-card': '#1a1a1a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
