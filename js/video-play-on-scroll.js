/*jshint esversion: 6 */
// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body



const projects = document.querySelectorAll(".project");
const videos = document.querySelectorAll("video");

document.addEventListener("scroll", function() {

  let projectCount = 0;

  projects.forEach(project => {
    // Find out how far from the top the scroll bar is
    let distanceFromTop = window.scrollY;
    // Log this out
    console.log(distanceFromTop);

    // Find out how far from the top the project is
    let projectHeight = $(project).offset().top;

    // if the scrollbar reaches the project, play the video
    if (distanceFromTop > (projectHeight - 50)) {
      // play the video
      videos[projectCount].play();
      projectCount = projectCount + 1;
    } else {
      console.log("not reached video");
    }
  });

});