/* Mobile Menu Toggle - implement a hamburger menu for a website's navigation,
* better known as "Hamburger menu" or "Mobile menu".

 * Other:
 * - jshint esversion: 6
 */

// jshint esversion: 6


document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function() {
    navLinks.classList.toggle("active"); // Toggle the 'active' class to show/hide menu
  });
});
