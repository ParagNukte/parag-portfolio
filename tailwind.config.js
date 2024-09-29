/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        
        glow: "0 0 10px rgba(255, 255, 255, 1)",
      },
      animation: {
        runn: "runn 2s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        borderRotate: "borderRotate 4s linear infinite",
      },
      keyframes: {
        runn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        borderRotate: {
          "0%": { borderColor: "red" },
          "25%": { borderColor: "blue" },
          "50%": { borderColor: "green" },
          "75%": { borderColor: "yellow" },
          "100%": { borderColor: "red" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        brunoace: ['"Bruno Ace"'],
        inter: ["Inter", "sans-serif"],
        librebaskerville: ["Libre Baskerville", "serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '1rem',
      
    }
  },
  plugins: [],
};
