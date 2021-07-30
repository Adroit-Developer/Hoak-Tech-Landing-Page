$(document).ready(function () {
  $(".sidenav").sidenav({
    edge: "right",
  });
  $(".materialboxed").materialbox();
  $(".slider").slider();
  $(".parallax").parallax();
  $("#subject,#username, textarea#textarea2").characterCounter();
  $(".scrollspy").scrollSpy();
  $("select").formSelect();
});

let btn = document.querySelector(".scroll-up");
let body = document.querySelector("#body");
let logo = document.querySelector(".brand-logo");
let submitBtn = document.querySelector(".submit");
let counters = document.querySelectorAll(".count");
const speed = 8;
let form = document.querySelector(".form");
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

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const inc = target / speed;
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 5000);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
