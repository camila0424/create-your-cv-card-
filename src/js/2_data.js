"use strict";

const btnCollapsedData = document.querySelectorAll(".btnCollapsedData");
const collapsedData = document.querySelectorAll(".js_dataSection");

btnCollapsedData.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    collapsedData[index].classList.toggle("collapsed");
  });
});