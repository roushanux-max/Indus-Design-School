/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#e3461a',
          dark: '#111111',
          cream: '#f5f0eb',
          gray: '#767676',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Urbanist', 'sans-serif'],
        heading: ['Khand', 'Outfit', 'sans-serif'],
        body: ['Hind', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111 0%, #1a1a1a 50%, #2c1810 100%)',
      },
    },
  },
  plugins: [],
}
