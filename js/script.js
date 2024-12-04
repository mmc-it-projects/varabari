// ========= javacript for sticky menu========
const navbar = document.querySelector(".navbar");
console.log(navbar);

window.onscroll = () => {
  return stickyNavbar();
};

stickyNavbar = () => {
  if (window.pageYOffset >= 80) {
    navbar.classList.add("sticky-menu");
    if (window.pageXOffset >= 400) {
    }
  } else {
    navbar.classList.remove("sticky-menu");
  }
};

// ========= this code for property details img slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
