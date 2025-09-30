/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        // Base
        bg: "var(--color-bg)",
        black: "var(--color-black)",
        text: "var(--color-text)",
        text1: "var(--color-text-1)",

        // Primary
        primary: "var(--color-primary)",

        // Secondary
        secondary: "var(--color-secondary)",
        secondary1: "var(--color-secondary-1)",
        secondary2: "var(--color-secondary-2)",

        // Buttons / Cards
        btn1: "var(--color-btn-1)",
        btn2: "var(--color-btn-2)",
        btnHover1: "var(--color-btn-hover-1)",
        btnHover2: "var(--color-btn-hover-2)",
      },
    },
  },
  plugins: [],
};
