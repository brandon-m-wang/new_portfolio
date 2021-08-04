module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: "Futura",
        "open-sans": "Open Sans",
      },
      backgroundColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
      },
      textColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "2.5xl": "1.6875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
