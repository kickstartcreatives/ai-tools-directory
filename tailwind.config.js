/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#D81159',
        'camel-rose': '#BE9780',
        'warm-gray': '#DDD4CD',
        'deep-purple': '#2E0C1E',
        'ivory': '#FEFDFB',
      },
    },
  },
  plugins: [],
}
