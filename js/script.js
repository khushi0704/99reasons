/* window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("image8");
    image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}*/
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 500) {
    navbar.classList.add("sticky")
  }
   else {
    navbar.classList.remove("sticky");
  }
}