module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "OpenSauceTwoSemiBold"],
        "open-sans": "Open Sans",
      },
      backgroundColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
        highlight: "#668394",
        eggshell: "#F5F5F5",
      },
      textColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
        highlight: "#668394",
      },
      borderColor: {
        primary: "#597788",
        secondary: "#EEF3F5",
        highlight: "#668394",
      },
      fontSize: {
        "semi-sm": "0.925rem",
        "semi-lg": "1.1rem",
        "1.25xl": "1.215rem",
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
        profile: "181px",
        "profile-sm": "186px",
        project: "256px",
        "project-sm": "192px",
        "image-sm": "150px",
        card: "410px",
        "card-m": "360px",
      },
      width: {
        profile: "175px",
        "profile-sm": "120px",
        project: "320px",
        "project-sm": "240px",
        image: "325px",
        "image-m": "240px",
        "image-sm": "150px",
        card: "860px",
        "card-m": "660px",
        "card-sm": "520px",
        "card-tn": "330px",
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
