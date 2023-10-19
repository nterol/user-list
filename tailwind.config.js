/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['SuisseIntl-regular', 'sans-serif'],
    },

    extend: {
      fontFamily: {
        suisse: ['SuisseIntl-regular', 'sans-serif'],
        grotesk: ['Clash-Grotesk', 'sans-serif'],
      },
      colors: {
        main: '#1C4A47',
        'mid-kapptigreen': '#E8EDEA',
        primary: '#E4E4E7',
        secondary: { light: '#fcece5', DEFAULT: '#ED7846', dark: '#D26334', darker: '#C0582B' },
        'text-secondary': '#667085',
      },
    },
  },
  plugins: [],
};
