document.addEventListener('DOMContentLoaded', () => {

  showDivs(1);

let thumbnails = document.querySelectorAll(".demo");
console.log(thumbnails);
console.log(thumbnails[0]);

thumbnails[0].addEventListener("click", function() {
  currentDiv(1);
});

thumbnails[1].addEventListener("click", function() {
  currentDiv(2);
});

thumbnails[2].addEventListener("click", function() {
  currentDiv(3);
});

thumbnails[3].addEventListener("click", function() {
  currentDiv(4);
});

thumbnails[4].addEventListener("click", function() {
  currentDiv(5);
});

function currentDiv(n) {
    showDivs(n);
  }
  
  function showDivs(n) {
    var slideIndex = n;
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }

});