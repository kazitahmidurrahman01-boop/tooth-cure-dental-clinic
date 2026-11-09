/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071D41',
          light: '#0B2A55',
          dark: '#050f22',
        },
        gold: {
          DEFAULT: '#C89B3C',
          light: '#E5C477',
          dark: '#a07820',
        },
        cream: '#F7F9FC',
        'dark-text': '#0B1F3A',
      },
      fontFamily: {
        headline: ['"Playfair Display"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(200, 155, 60, 0.3)',
        'gold-lg': '0 0 60px rgba(200, 155, 60, 0.4)',
        'navy': '0 10px 40px rgba(7, 29, 65, 0.3)',
        'navy-lg': '0 20px 60px rgba(7, 29, 65, 0.4)',
      },
    },
  },
  plugins: [],
}
