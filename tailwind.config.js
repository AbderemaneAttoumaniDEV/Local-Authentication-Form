/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ['"Roboto"', 'sans-serif'],  // Police personnalisée
      },
      colors:{
        gray:{
          950:'#1a1a1a',  // Grise très foncée
        }
      },
      spacing: {
        '128' : "32rem", // Ajoute d'un nouvel espacement de 32rem
      }
    },
  },
  plugins: [],
}

