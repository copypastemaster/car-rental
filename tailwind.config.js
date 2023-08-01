/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img': 'url(./src/assets/hero-pic.avif)',
        'img2': 'url(./src/assets/test-hero-pic.avif)',
        'img3': 'url(./src/assets/zxc.avif)'
      }
    },
  },
  plugins: [require("daisyui")],
}

