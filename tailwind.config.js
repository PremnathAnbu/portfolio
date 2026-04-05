/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1A1A1B",
        accent: "#08FDD8",
        "primary-text": "#FFFFFF",
        "secondary-text": "#C2C2C2",
        border: "#2A2A2B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
