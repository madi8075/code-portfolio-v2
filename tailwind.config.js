/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'green-glow': '0 0 5px rgba(0, 255, 0, 1)',
      'green-glow1': '0 4px 6px -1px rgba(255, 0, 0, 0.5)',
    },
  },
  plugins: [],
}

