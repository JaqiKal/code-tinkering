/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for automatic dark mode detection
  content: [
    "./src/**/*.{html,js}",   // Watch for Tailwind classes in the 'src' folder
    "./*.html",               // Watch HTML files in the root directory (e.g. index.html, about.html, contact.html)
    "./projects/**/*.html",   // Watch all HTML files in 'projects' folder and subfolders
    "./assets/js/**/*.js",    // Watch JavaScript files (for class usage in scripts)
  ],
  theme: {
    extend: {},  // Add custom Tailwind CSS extensions here later if needed
  },
  plugins: [],
};

