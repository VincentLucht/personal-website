/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
      },
      colors: {
        'primary-blue': 'oklch(62.3% 0.214 259.815)',
        'primary-blue-light': 'oklch(72.3% 0.214 259.815)',
        'primary-blue-dark': 'oklch(52.3% 0.214 259.815)',
        'bg-dark': '#1a1a1a',
        'bg-darker': '#0f0f0f',
        'bg-card': '#2a2a2a',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
        'text-muted': '#808080',
        'border-color': '#404040',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.df': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.h2': {
          fontSize: '2rem',
          fontWeight: 'bold',
        },
        '.header': {
          '@apply mb-4 text-center text-[40px] font-semibold text-blue-500': {}
        },
        '.header-line': {
          '@apply w-full border-b-[0.5px] border-blue-500': {}
        },
        '.text-gray-secondary': {
          '@apply text-[#b0b0b0]': {}
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}