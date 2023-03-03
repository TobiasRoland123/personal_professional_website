"use strict";

// variabler til burger menu
const burger = document.querySelector("nav button");
const menu = document.querySelector(".nav-menu");

window.addEventListener("load", start);

function start() {
  burger.addEventListener("click", activeteBurgerMenu);
}

function activeteBurgerMenu() {
  console.log("activeteBurgerMenu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
