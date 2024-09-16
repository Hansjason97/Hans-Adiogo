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
        primary: '#83C4FF',
        secondary: '#1c1e3a',
        secondaryLight: '#383B5B',
        secondaryDark: '#0E1128',
        secondaryBlack: '#040912',
        blanc: '#E8E9ED',
        blancDark: '#9A9DA7',
        trueBlue: "#3684DB"

      }
    },
  },
  plugins: [],
}