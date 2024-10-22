document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.querySelector(".theme-toggle");
  const htmlElement = document.documentElement;

  // Check if user has a saved theme preference in localStorage
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
  } 

  // Toggle dark mode
  themeToggle.addEventListener("click", function() {  
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "bright");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  } );
} );
