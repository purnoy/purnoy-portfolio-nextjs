/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      padding:{
        DEFAULT: '15px'
      }
    },
    screens:{
      sm: '560px',
      md: '768px',
      lg: '1000px',
      xl: '1200px',
    },
    extend: {
      color:{
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024'
      },
      backgroundImage:{
        explosion: 'url("/public/bg-explosion.png)',
        cirlces: 'url("/public/circles.png")',
        circleStar: 'url("/public/circle-star.svg")',
        site: 'url("/public/site-bg.svg")',
      },
      animation:{
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily:{
        // poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif']
      }
    },
  },
 
  plugins: [require('tailwind-scrollbar')],
}
