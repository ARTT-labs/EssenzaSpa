/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esta linha garante que ele leia todos os seus arquivos React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f2626', // marrom escuro
        accent: '#ef8a61',  // laranja CTA
        soft: '#faf1ee',    // fundo rosado claro
        rose: '#f6d9d6'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}