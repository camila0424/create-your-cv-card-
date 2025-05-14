"use strict";

//CONST: DECORACION Y FONDO
const decorationCard = document.querySelector(".decoration");
const iconCard = document.querySelector("#fa_icon");
const personCard = document.querySelector(".dataSheet__preview");
// const backgroundCard = document.querySelector(".target__preview");
// //CONST: PERSONAL
// const nameCard = document.querySelector(".js-preview_name");
// const lastNameCard = document.querySelector(".js-preview_lastname");
// const occupationCard = document.querySelector(".js-preview_occupation");
// //CONST: REDES
// const emailPreview = document.querySelector(".js-emailPreview");
// const whatsappPreview = document.querySelector(".js-whatsappPreview");
// const linkPreview = document.querySelector(".js-preview_linksocial");
// const gitPreview = document.querySelector(".js-preview_gitsocial");
//CONST: TEMAS
const modeZero = document.querySelector(".mode_0");
const modeOne = document.querySelector(".mode_1");
const modeTwo = document.querySelector(".mode_2");

//ESCUCHADORES DE TEMAS
modeZero.addEventListener ("click", () => {
    console.log("Tema 0");
    decorationCard.classList.add("mode_0_on");
    iconCard.classList.add("mode_0_on");
        decorationCard.classList.remove("mode_1_on");
        decorationCard.classList.remove("mode_2_on");
        iconCard.classList.remove("mode_1_on");
        iconCard.classList.remove("mode_2_on");
});
modeOne.addEventListener ("click", () => {
    console.log("Tema 1");
    decorationCard.classList.add("mode_1_on");
    iconCard.classList.add("mode_1_on");
        decorationCard.classList.remove("mode_0_on");
        decorationCard.classList.remove("mode_2_on");
        iconCard.classList.remove("mode_0_on");
        iconCard.classList.remove("mode_2_on");
});
modeTwo.addEventListener ("click", () => {
    console.log("Tema 2");
    decorationCard.classList.add("mode_2_on");
    iconCard.classList.add("mode_2_on");
        decorationCard.classList.remove("mode_1_on");
        decorationCard.classList.remove("mode_0_on");
        iconCard.classList.remove("mode_1_on");
        iconCard.classList.remove("mode_0_on");
});

console.log(decorationCard);
console.log(modeZero);
console.log("Este log es de Rachel");
