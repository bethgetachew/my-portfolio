/* jshint esversion:6 */

const h1Tag = document.querySelector(".big-title");
const fixedNavTag = document.querySelector(".fixed");
const hiddenTextTag = document.querySelector(".hidden-text");
const navTag = document.querySelector("nav");

const fadeInTitle = function() {
  h1Tag.style.top = "50%";
};

window.onload = fadeInTitle();

document.addEventListener("scroll", function() {

  let distanceFromTop = window.scrollY;



  if (distanceFromTop > 0) {
    h1Tag.style.opacity = "0";
    navTag.style.opacity = "0";


  } else {
    h1Tag.style.opacity = "1";
    navTag.style.opacity = "1";

  }


  if (distanceFromTop > 4000) {
    hiddenTextTag.style.opacity = "1";
  } else {
    hiddenTextTag.style.opacity = "0";
  }

});