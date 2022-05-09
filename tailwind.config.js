module.exports = {
  content: ['./apps/frontend/src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#151a21',
          900: '#0b0e11'
        }
      }
    },
    fontFamily: {
      body: ['"Be Vietnam"', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
