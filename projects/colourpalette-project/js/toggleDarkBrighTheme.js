/**
 * This JavaScript file handles the theme toggle functionality, 
 * switching between light and dark mode when the user clicks 
 * the "Toggle Dark/Light Mode" button.
 *
 * Key functionalities:
 * - Toggles the 'dark-mode' class on relevant elements.
 * - Uses a loop to avoid repetition and make the code cleaner.
 * - Optionally, this structure could be extended to save the user's 
 *   theme preference using localStorage.
 */

// Get references to key elements
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const mainContent = document.getElementById("main-content");
const footer = document.getElementById("footer");

// Elements that should respond to theme toggle
const elementsToToggle = [body, mainContent, footer];

/**
 * Toggles the dark mode class on all relevant elements.
 */
function toggleDarkMode() {
  elementsToToggle.forEach(element => element.classList.toggle("dark-mode"));
}

// Add click event listener to the toggle button
toggleButton.addEventListener("click", toggleDarkMode);