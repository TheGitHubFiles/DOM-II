// Your code goes here
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", (event) => {
  logo.style.color = "green";
});
logo.addEventListener("mouseleave", (event) => {
  logo.style.color = "black";
});

const footer = document.querySelector(".footer");

window.addEventListener("load", (event) => {
  footer.style.background = "purple";
});

const nav = document.querySelector(".nav");
nav.addEventListener("focusin", (event) => {
  nav.style.background = "yellow";
});
nav.addEventListener("focusout", (event) => {
  nav.style.background = "green";
});

const begone = document.querySelector(".intro");

begone.addEventListener("dblclick", (event) => {
  begone.removeChild(begone.childNodes[0]);
});

const background = document.querySelector(".content-pick");

background.addEventListener("wheel", (event) => {
  background.style.background = "red";
});

const oops = document.querySelector("body");
oops.addEventListener("keydown", (event) => {
  oops.style.background = "blue";
});
oops.addEventListener("keyup", (event) => {
  oops.style.background = "yellow";
});
oops.addEventListener("click", (event) => {
  oops.style.background = "green";
});
const stopprop = document.querySelector(".content-section");

stopprop.addEventListener("click", (event) => {
  stopprop.style.background = "orange";
  event.stopPropagation();
});

document.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
);
