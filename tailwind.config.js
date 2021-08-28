module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        l: "96vh",
      },
      grayscale: {
        50: "70%",
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
