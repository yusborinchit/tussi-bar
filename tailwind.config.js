/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "new-amsterdam": ["New Amsterdam", "sans-serif"],
        schoolbell: ["Schoolbell", "serif"],
      },
    },
  },
  plugins: [],
};
