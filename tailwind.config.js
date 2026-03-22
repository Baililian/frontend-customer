/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Libre Baskerville", "serif"],
        sans: [
          "Instrument Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "#0EA5E9",
        secondary: "#0284C7",
        accent: "#38BDF8",
        surface: "#E0F7FF",
        "primary-text": "#0C4A6E",
        "secondary-text": "#334155",
      },
    },
  },
  plugins: [],
};