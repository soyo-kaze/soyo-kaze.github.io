// prettier-ignore
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        l: "96vh",
        m: "60vh",
      },
      grayscale: {
        50: "70%",
      },
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
