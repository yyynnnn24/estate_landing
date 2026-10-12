/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EDF5',
          100: '#C9D5E8',
          200: '#93AAD1',
          300: '#5E80BA',
          400: '#2E5696',
          500: '#0F2B5B',
          600: '#0D2752',
          700: '#0A1F42',
          800: '#071732',
          900: '#050F22',
        },
        gold: {
          50: '#FBF6EC',
          100: '#F5EAD0',
          200: '#EBD5A0',
          300: '#E0C071',
          400: '#D6AB48',
          500: '#C8A462',
          600: '#B89250',
          700: '#9A7740',
          800: '#7C5F33',
          900: '#5E4726',
        },
        bg: {
          base: '#F7F9FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
