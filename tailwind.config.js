module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        panel: '#111116',
        accent: '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
  variants: { extend: {} },
  plugins: [],
}
