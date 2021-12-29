module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 },
        },
        fadeInRev: {
          "0%": { opacity: 1 },

          "100%": { opacity: 0 },
        },
        translate: {
          "0%": { transform: "translateY(-100px)" },

          "100%": { transform: "translateY(0px)" },
        },
        translateRev: {
          "100%": { transform: "translateY(-100px)" },

          "0%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 700ms ease-in-out forwards",
        translate: "translate 700ms ease-in-out forwards",
        fadeInRev: "fadeInRev 700ms ease-in-out forwards",
        translateRev: "translateRev 700ms ease-in-out forwards",
      },
      height: {
        m: "60vh",
      },
      grayscale: {
        50: "70%",
      },
      // prettier-ignore
      fontFamily: {
      'ubuntu': ["ubuntu"],
      'google': ["google"],
    },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      borderRadius: ["hover"],
      filter: ["hover"],
      height: ["hover"],
      margin: ["hover"],
    },
  },
  plugins: [],
};
