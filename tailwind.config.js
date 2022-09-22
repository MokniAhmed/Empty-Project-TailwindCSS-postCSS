module.exports = {
  content: ["./*.{php,js,html}"],
  theme: {
    extend: {
      height: {
        128: "45rem",
      },
      backgroundImage: {
        bgImg: "url('/taxicover.jpg')",
      },
      colors: {
        primary: "#efb34a",
      },
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
