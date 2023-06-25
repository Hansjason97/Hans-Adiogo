/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
      mono: ['Fira Code', 'ui-monospace']
    },
    extend: {
      colors:{
        primary: '#CD1D32',
        secondary: '#172137',
        secondaryLight: '#2A354B',
        secondaryDark: '#0E1626',
        secondaryBlack: '#040912',
        blanc: '#E8E9ED',
        blancDark: '#9A9DA7'

      }
    },
  },
  plugins: [],
}