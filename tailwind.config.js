/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {  

      colors: {
        "dark": "#193766",
        "primary": "#d4a373",
        "blueLight": "#ffefae0",
        "text-color": "#697B98",
        "buttonC": "rgba(59, 130, 246, 0.1);",
        "textLight": "rgba(255, 255, 255, 0.8)"
      },


      fontFamily:{
        dmsans:  ['DM Sans, sans-serif'],
        cursi: ['Great Vibes, cursive']
      },
      
    },
    
    container: {
      center:true,
      padding :"1.3rem",
      screens:{
        lg: '1124px',
        xl: '1320px',
        "2xl": '1124px'
      }
    },
  },
  plugins: [],
}

