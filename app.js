$(document).ready(function () {
  $(".sidenav").sidenav({
    edge: "right",
  });
  $(".materialboxed").materialbox();
  $(".slider").slider();
  $(".parallax").parallax();
  $("#subject,#first_name, textarea#textarea2").characterCounter();
  $(".scrollspy").scrollSpy();
  $("select").formSelect();
});

let btn = document.querySelector(".scroll-up");
let body = document.querySelector("#body");
let logo = document.querySelector(".brand-logo");
btn.addEventListener("click", scrollUp);

function scrollUp() {
  document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
    logo.style.display = "none";
  } else {
    btn.style.display = "none";
    logo.style.display = "block";
  }
}