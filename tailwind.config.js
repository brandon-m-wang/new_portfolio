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
      inset: {
        "1/6": "16.67%",
        "1/8": "12.5%",
        "2/7": "28.57%",
        "1/12": "8.88%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
