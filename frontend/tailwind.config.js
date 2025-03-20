/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, ts}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'bg-blue': "#000061",
      'bg-black': "#030712",
      'red': {
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      'blue': {
        100: '#eff6ff',
        200: '#dbeafe',
        300: '#bfdbfe',
        400: '#93c5fd',
        500: '#60a5fa',
        600: '#3b82f6',
        700: '#2563eb',
        800: '#1d4ed8',
        900: '#1e40af',
      },

    },
    extend: {},
  },
  plugins: [],
}