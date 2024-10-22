/* Mobile Menu Toggle - implement a hamburger menu for a website's navigation,
* better known as "Hamburger menu" or "Mobile menu".

 * Other:
 * - jshint esversion: 6
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



