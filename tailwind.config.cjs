/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 6px rgba(255,115,0,0.4))' },
          '50%': { filter: 'drop-shadow(0 0 12px rgba(255,115,0,0.8))' },
        },
      },
    },
  },
  plugins: [],
}
