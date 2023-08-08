/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img': 'url(./src/assets/hero-pic.avif)',
        'img2': 'url(./src/assets/test-hero-pic.avif)',
        'img3': 'url(/Users/enoch/OneDrive/Desktop/projects/car-rental/public/zxc.avif)',
        'audi': 'url(/Users/enoch/OneDrive/Desktop/projects/car-rental/public/audi.avif)',
        'bmw': 'url(/Users/enoch/OneDrive/Desktop/projects/car-rental/public/bmw.avif)',
        'mercedes': 'url(/Users/enoch/OneDrive/Desktop/projects/car-rental/public/mercedes.avif)',
        'porsche': 'url(/Users/enoch/OneDrive/Desktop/projects/car-rental/public/porsche.avif)',
        'trendPorsche': 'url(./src/assets/porsche/porsche-911.avif)',
        'trendAudi': 'url(./src/assets/audi/rs-7.avif)',
        'trendBmw': 'url(./src/assets/bmw/bmw-xm.avif)',
        'trendMercedes': 'url(./src/assets/mercedes/sl-final.avif)'
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
}

