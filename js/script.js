"use strict";

// variabler til burger menu
const burger = document.querySelector("nav button");
const toTop = document.querySelector(".to_top");
const menu = document.querySelector(".nav-menu");

window.addEventListener("load", start);

function start() {
  burger.addEventListener("click", activeteBurgerMenu);
  toTop.addEventListener("click", scrollToTop);
}

function activeteBurgerMenu() {
  console.log("activeteBurgerMenu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
