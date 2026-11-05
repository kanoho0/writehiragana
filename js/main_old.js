"use strict";


console.log("test");

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuIcon = document.querySelectorAll("span");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuIcon.classList.toggle("current");
  console.log("clicked");
});





// document.addEventListener("DOMContentLoader", function () {


// });