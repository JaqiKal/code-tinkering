/* Mobile Menu Toggle - implement a hamburger menu for a website's navigation,
* better known as "Hamburger menu" or "Mobile menu".

 * Other:
 * - jshint esversion: 6
 */

// jshint esversion: 6


function toggleMenu() {
const navLinks = document.querySelector(".nav-links");
navLinks.classList.toggle("active"); // Toggle the 'active' class
}
