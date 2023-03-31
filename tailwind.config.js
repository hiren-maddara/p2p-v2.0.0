/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...require("tailwindcss/colors"),
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
