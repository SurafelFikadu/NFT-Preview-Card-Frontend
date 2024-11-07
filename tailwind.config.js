/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      colors: {
        primary: {
          SoftBlue: 'hsl(215, 51%, 70%)',
          Cyan: 'hsl(178, 100%, 50%)',
        },
        neutral: {
          mainBG: 'hsl(217, 54%, 11%)',
          cardBG: 'hsl(216, 50%, 16%)',
          line: 'hsl(215, 32%, 27%)',
        },
        balck: '#000',
        white: '#fff',
      },
      fontSize: {
        50: ".9rem",
        100: "1rem",
        200: "1.125rem",
        300: "1.25rem",
        400: "1.375rem",
        500: "1.5rem",
        600: "2rem",
        650: " 2.25rem",
        700: "2.5rem",
        800: "3rem",
        900: "3.5rem",
        1000: "4.5rem",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      width: {
        350: "350px",
        375: "375px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        650: "650px",
        700: "700px",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
  
      screens: {
        sm: "36rem",
        md: "48rem",
        lg: "64rem",
        xl: "68.75rem",
        "2xl": "90rem",
      },
    },
  },
  plugins: [],
}