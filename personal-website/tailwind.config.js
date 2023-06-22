module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cobeHeavy: ["CobeHeavy", "sans-serif"],
        cobeSemiBold: ["CobeSembiBold", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        },
      },
      colors: {
        grey: " #ecda9a",
        peach_two: "#efc47e",
        peach_three: "#f3ad6a",
        peach_four: "#f7945d",
        peach_five: "#f97b57",
        peach_six: "#f66356",
        peach_seven: "#ee4d5a",

        //#ecda9a,#efc47e,#f3ad6a,#f7945d,#f97b57,#f66356,#ee4d5a
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "400px",
      },
      animation: {
        marqueeSlowScrollTop: "marqueeTop 80s linear infinite",
        marqueeSlowScrollBottom: "marqueeBottom 80s linear infinite",
        marqueeFastScrollTop: "marqueeTop 35s linear infinite",
        marqueeFastScrollBottom: "marqueeBottom 35s linear infinite",
        marqueeScrollHorizontal: "marqueeHorizontal linear infinite",
      },
      keyframes: {
        marqueeTop: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marqueeBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        marqueeHorizontal: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
