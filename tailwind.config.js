/** @type {import('tailwindcss').Config} */

import * as path from 'path'

import heroImg from '@static/zxc.avif'
import bmwCat from '@static/bmw.avif'
import mercedesCat from '@static/mercedes.avif'
import audiCat from '@static/audi.avif'
import porscheCat from '@static/porsche.avif'

const testImg =  path.resolve(__dirname, './src/assets/carcategory/zxc.avif');
const testImg1 =  path.resolve(__dirname, './src/assets/carcategory/bmw.avif');
const testImg2 =  path.resolve(__dirname, './src/assets/carcategory/audi.avif');
const testImg3 =  path.resolve(__dirname, './src/assets/carcategory/porsche.avif');
const testImg4 =  path.resolve(__dirname, './src/assets/carcategory/mercedes.avif');


export default {
  plugins: [require("daisyui")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img3': testImg,
        'audi': testImg2,
        'bmw': testImg1,
        'mercedes': testImg3,
        'porsche': testImg4,
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