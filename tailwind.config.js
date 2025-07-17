/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: {
          50: '#fef9ee',
          100: '#fdf3dd',
          200: '#fbe7bb',
          300: '#f9db99',
          400: '#f8cf77',
          500: '#f8e2ad',
          600: '#c6b58a',
          700: '#948868',
          800: '#625a45',
          900: '#312d23',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffe1cc',
          200: '#ffc399',
          300: '#ffa566',
          400: '#ff8733',
          500: '#ff7300',
          600: '#cc5c00',
          700: '#994500',
          800: '#662e00',
          900: '#331700',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 0% 0%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};