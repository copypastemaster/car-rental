/** @type {import('tailwindcss').Config} */
import heroimg from './public/zxc.avif'
import audiCat from './public/audi.avif'
import bmwCat from './public/bmw.avif'
import mercedesCat from './public/mercedes.avif'
import porscheCat from './public/porsche.avif'

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
        'img3': heroimg,
        'audi': audiCat,
        'bmw': bmwCat,
        'mercedes': mercedesCat,
        'porsche': porscheCat,
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

//