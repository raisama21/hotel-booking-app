/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans serif"],
      },
      maxWidth: {
        xxl: "1764px",
      },
      padding: {
        1.5: "0.375rem",
        4.5: "1.125rem",
      },
      colors: {
        accent: "#DD2F6E",
        dark: "#1D2231",
        text: "#8390A2",
      },
      aspectRatio: {
        "1/1.5": "1 / 1.5",
      },
      screens: {
        xs: "384px",
      },
    },
  },
  plugins: [],
};
