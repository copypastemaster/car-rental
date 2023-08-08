/** @type {import('tailwindcss').Config} */
import heroimg from './src/assets/carcategory/zxc.avif'
import audiCat from './src/assets/carcategory/audi.avif'
import bmwCat from './src/assets/carcategory/bmw.avif'
import mercedesCat from './src/assets/carcategory/mercedes.avif'
import porscheCat from './src/assets/carcategory/porsche.avif'

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