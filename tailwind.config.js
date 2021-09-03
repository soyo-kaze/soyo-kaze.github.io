module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
