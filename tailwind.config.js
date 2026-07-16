module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      scale: { 102: '1.02' },
      colors: {
        ink: '#050508',
        panel: '#0d0d12',
        accent: '#22d3ee',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
  variants: { extend: {} },
  plugins: [],
}
