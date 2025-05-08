"use strict";

// HEADER

const navheader = document.querySelector(".nav_header");
const hamburguer = document.querySelector(".hamburguer_header")
hamburguer.addEventListener('click', () => {
  if (navheader.classList.contains("nav_collapsed")) {
    navheader.classList.remove("nav_collapsed");
    hamburguer.classList.add('nav_collapsed')
  } else {
    navheader.classList.add("nav_collapsed");
  }
});

