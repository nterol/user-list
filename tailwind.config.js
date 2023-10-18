/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SuisseIntl', 'sans serif'],
      },
      colors: {
        main: '#1C4A47',
        primary: '##E4E4E7',
        secondary: { DEFAULT: '#ED7846', dark: '#D26334', darker: '#C0582B' },
      },
    },
  },
  plugins: [],
};
