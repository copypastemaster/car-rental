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
        'img3': 'url(./src/assets/zxc.avif)',
        'audi': 'url(./src/assets/carcategory/audi.avif)',
        'bmw': 'url(./src/assets/carcategory/bmw.avif)',
        'mercedes': 'url(./src/assets/carcategory/mercedes.avif)',
        'porsche': 'url(./src/assets/carcategory/porsche.avif)',
      }
    },
  screens: {
    'xs': '500px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
  },
  plugins: [require("daisyui")],
}

