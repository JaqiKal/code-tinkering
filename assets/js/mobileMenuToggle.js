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
    navLinks.classList.toggle("hidden"); // Toggles the 'hidden' class for Tailwind CSS to show/hide the menu
    navLinks.classList.toggle("active"); // Toggles the 'active' class for Vanilla CSS to show/hide the menu
    burgerMenu.classList.toggle("open"); // Animate burger icon

    // Update aria-expanded attribute for accessibility
    const expanded = burgerMenu.getAttribute("aria-expanded") === "true" || false;
    burgerMenu.setAttribute("aria-expanded", !expanded);
  });
  
  // Add an event listener for window resizing to handle nav visibility
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      // Ensure nav links are visible on larger screens
      navLinks.classList.remove("hidden");
      navLinks.classList.remove("active");
    } else {
      // Ensure nav links are hidden on smaller screens unless burger is open
      if (!burgerMenu.classList.contains("open")) {
        navLinks.classList.add("hidden");
      }
    }
  } );
});
