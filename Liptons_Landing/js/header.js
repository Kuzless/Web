window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }