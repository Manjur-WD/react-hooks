/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rakkas: ["Rakkas", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
