/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#f6f6f6',
        darkBg: '#110028',
        primaryAccent: '#3e0098',
        secondaryAccent: '#03DAC6',
        textHigh: '#1A1A1A',
        textDark: '#E5E5E5',
        textMedium: '#B0B0B0',
      },
      gradientColorStops: {
        darkStart: '#25005b',
        darkEnd: '#100021',
      },
    },
  },
  plugins: [],
}
