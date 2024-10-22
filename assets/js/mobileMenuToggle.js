/* 
 * Mobile Menu Toggle Script
 * -------------------------
 * This script implements a hamburger menu toggle for a website's navigation.
 * The "hamburger" button allows users to show or hide the navigation links
 * on smaller screens (mobile or tablet). This is commonly referred to as a 
 * "Hamburger Menu" or "Mobile Menu".
 *
 * The script also manages accessibility by updating the `aria-expanded` 
 * attribute to indicate whether the menu is currently expanded or collapsed.
 * 
 * Additional Notes:
 * - jshint esversion: 6 (This ensures the script follows ES6 standards.)
 * - Clicking on the hamburger icon will toggle the `hidden` and `active` classes 
 *   to control the visibility of the navigation links and toggle any related styles.
 * - The `open` class is used to animate the hamburger icon when toggled.
 */

// jshint esversion: 6


document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector("#hamburger");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("hidden"); // Toggles the 'hidden' class to show/hide the menu
    navLinks.classList.toggle("active"); // Optionally, add an 'active' class if needed for additional styling
    // Toggle burger menu animation
    burgerMenu.classList.toggle("open");

    // Update aria-expanded attribute for accessibility
    const expanded = burgerMenu.getAttribute("aria-expanded") === "true" || false;
    burgerMenu.setAttribute("aria-expanded", !expanded);
  });
});



