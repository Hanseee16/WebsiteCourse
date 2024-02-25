/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
      colors: {
        "primary-color": "#f6f8fd",
        "secondary-color": "#dc3545",
        "color-text": "#231942",
        "navbar-color": "#ffffff",
        "navbar-color-text": "#000000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
