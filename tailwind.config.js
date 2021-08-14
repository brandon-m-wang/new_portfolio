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
        highlight: "#ffc296",
      },
      textColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
        highlight: "#ffc296",
      },
      borderColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
        highlight: "#ffc296",
      },
      fontSize: {
        "semi-sm": "0.925rem",
        "1.5xl": "1.375rem",
        "2.5xl": "1.6875rem",
      },
      inset: {
        "1/6": "16.67%",
        "1/8": "12.5%",
        "2/7": "28.57%",
        "1/12": "8.88%",
      },
      borderWidth: { 3: "3px" },
      height: {
        profile: "362px",
        "profile-sm": "272px",
        project: "256px",
        "project-sm": "192px",
      },
      width: {
        profile: "350px",
        "profile-sm": "240px",
        project: "320px",
        "project-sm": "240px",
      },
      margin: {
        33: "8.25rem",
        15: "3.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
