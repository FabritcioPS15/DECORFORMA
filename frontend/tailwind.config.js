/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8f0f9',
          100: '#c5d5ee',
          200: '#9fb8e2',
          300: '#789ad6',
          400: '#5a84cd',
          500: '#3b6dc4',
          600: '#2d5aaa',
          700: '#1e4489',
          800: '#122f6a',
          900: '#0B1F4A',
          950: '#061230',
        },
        brand: {
          cyan: '#1A8FBB',
          'cyan-light': '#22BDDD',
          'cyan-dark': '#0F6E95',
          'cyan-pale': '#E8F6FB',
          navy: '#0B2545',
          'navy-light': '#1A3A6B',
        },
      },
      fontFamily: {
        sans: ['Fira Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
