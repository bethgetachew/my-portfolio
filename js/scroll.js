/*jshint esversion: 6 */
// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body

const bodyTag = document.querySelector("body");

document.addEventListener("scroll", function() {

  // Find out how far from the top the scroll bar is
  let distanceFromTop = window.scrollY;
  // Log this out
  console.log(distanceFromTop);

  // Change the background color according to where we are on the page

  if (distanceFromTop > 1900) {
    bodyTag.classList.add("background1");
  } else {
    bodyTag.classList.remove("background1");
  }


  if (distanceFromTop > 3000) {
    bodyTag.classList.add("background2");
  } else {
    bodyTag.classList.remove("background2");
  }

});