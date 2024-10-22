/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    "./src/**/*.{html,js}",  // Keep this to watch files inside the 'src' folder
    "./*.html",              // To watch any HTML files in the root directory
    "./projects/**/*.html",  // To watch HTML files in the 'projects' folder and subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


