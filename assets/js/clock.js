/**
 * Tic-Tac-Toe o'clock
 * 
 * This script manages the functionality of a digital clock.
 *
 * Features:
 * - Show hour, minutes and seconds in format [ HH:MM:SS]
 * - Updates clock every second
 * 
 * Other:
 * - jshint esversion: 6
 */

// jshint esversion: 6

/* Define a function to update the clock.
* This function will be called every second to update the clock.
* Get the current date and time
* Extract , hours, minutes and seconds from current time.
*/
document.addEventListener('DOMContentLoaded', function(){
  function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if hours, minutes and seconds are less than 10
    hours = hours < 10 ? "0" + hours : hours; 
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    // Create time string using template literals
    let timeString = `${hours}:${minutes}:${seconds}`;  

    // Update the clock element on teh page
    document.getElementById("clock").textContent = timeString;  
  }
  
  // Call the updateClock function every 1 second (1000 milliseconds)
  setInterval(updateClock, 1000);

  // Display current time immediately when the page loads
  updateClock();

});
