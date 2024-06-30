import bg from './public/bg.png'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': `url('/bg.png')`,
        'line': "url('/line.png')",
      },
      fontFamily: {
        'pixel': 'Pixelify Sans',
      },
      colors: {
        'textprimary': '#242245',
        'textsecondary': '#205393',
      },
      listStyleImage: {
        'star': 'url("/star.png")',
        'disc': 'url("/disc2.png")',
      }
    },
  },
  plugins: [],
}