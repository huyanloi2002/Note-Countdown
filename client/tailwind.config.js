/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#4cb69f",
        red: "#c53211",
        "gray-transparent": "#0008",
        white: "#ffffff",
        "light-orange": "#f0b74c",
      },
    },
  },
  plugins: [],
};
