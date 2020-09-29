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