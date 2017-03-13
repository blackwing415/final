
var parallax = document.getElementById("outer");
var speed = -1;

window.onscroll = function() {
  var yOffset = window.pageYOffset;
  parallax.style.backgroundPosition = "0px " + (yOffset / speed) + "px";
}
