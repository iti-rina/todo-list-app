/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#becab1',
        'bg-2': '#a46b79',
        'bg-3': '#a12d14',
      },
    },
  },
  plugins: [],
}