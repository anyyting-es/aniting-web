/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aniting-black': '#0a0a0a',
        'aniting-white': '#f8f8f8',
      },
    },
  },
  plugins: [],
}