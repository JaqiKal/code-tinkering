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
 * The script handles both Tailwind CSS (`hidden` class) and vanilla CSS (`active` class) 
 * to control the visibility of navigation links, ensuring compatibility across different pages.
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
     // Check if Tailwind CSS class "hidden" is used
     if (navLinks.classList.contains("hidden")) {
      navLinks.classList.remove("hidden");
    } else {  
      // Otherwise, toggle the "active" class for Vanilla
      navLinks.classList.toggle("active");
    }

    // Animate burger icon      
    burgerMenu.classList.toggle("open"); 

    // Update aria-expanded attribute for accessibility
    const expanded = burgerMenu.getAttribute("aria-expanded") === "true" || false;
    burgerMenu.setAttribute("aria-expanded", !expanded);
  });
  
  // Add an event listener for window resizing to handle nav visibility
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      // Ensure nav links are visible on larger screens
      navLinks.classList.remove("hidden");
      navLinks.classList.remove("active");     // When vanilla CSS is in use 
    } else {
      // Ensure nav links are hidden on smaller screens unless burger is open
      if (!burgerMenu.classList.contains("open")) {
        if (navLinks.classList.contains("hidden")) {
          navLinks.classList.add("hidden");
        } else {
          navLinks.classList.add("active");
        }
      }
    }
  });
});
