/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#e83330",
        tertiary: "#E0E0E2",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        sizeTB: "540px",
        full: "100%",
      },
    },
  },
  plugins: [],
};
