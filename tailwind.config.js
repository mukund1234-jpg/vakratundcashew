/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF6EC',
          dark: '#F2E9D8',
        },
        husk: {
          50: '#FAF3E7',
          100: '#F0E1C2',
          200: '#E2C592',
          300: '#CFA365',
          400: '#B98444',
          500: '#9C6B35',
          600: '#7A5228',
          700: '#5B3D1F',
          800: '#402C16',
          900: '#2B1D0F',
        },
        leaf: {
          50: '#EEF2E7',
          100: '#D7E2C4',
          200: '#B4C899',
          300: '#8FAC6E',
          400: '#6E914E',
          500: '#54753A',
          600: '#425D2E',
          700: '#334923',
        },
        turmeric: {
          400: '#E3A34E',
          500: '#C98A3D',
          600: '#A96E2C',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -10px rgba(64, 44, 22, 0.18)',
      },
      borderRadius: {
        organic: '2rem 1.5rem 2rem 1.5rem',
      },
    },
  },
  plugins: [],
}
