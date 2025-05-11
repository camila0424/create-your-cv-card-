"use strict";

const btnCollapsedData = document.querySelector(".btnCollapsedData")
const collapsedData = document.querySelector(".js_dataSection");

btnCollapsedData.addEventListener("click", (event) => {
event.preventDefault();
collapsedData.classList.toggle("collapsed");
})