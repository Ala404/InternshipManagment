/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3A96B4',
        'secondary': '#F59432',
        'tertiary': '#002C46',
      }
    },
  },
 
  plugins: [],
}