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
      'bg-blue': "#042db1",
      'bg-black': "#030712",
    },
    extend: {},
  },
  plugins: [],
}