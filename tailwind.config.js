/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#515DB1",
        secondary: "#3C49A5",
        tertiary: "#292A2F",
        "black-100": "#100d25",
        "black-700": "#090325",
        "blue-500": "#0A638F",
        "white-100": "#9BA3AB",
        "primary-one": "#0A638F",
        "primary-two": "#0F0F0F",
        "primary-four": "#0271B1",
        "navbar-bg": "#1B1F2D",
        "courses-bg": "#121212",
        "jobs-bg": "#F8F9FB"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xxs: "375px",
        xxxs: "280px",
        mdd: "840px",
        mddd: "410px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
  ],
};