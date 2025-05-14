"use strict";

//CONST: PREVI
const decorationCard = document.querySelector(".decoration");
const iconCard = document.querySelector(".js-preview_photoProfile");
const personCard = document.querySelector(".dataSheet__preview");
const backgroundCard = document.querySelector(".target__preview");

//CONST: TEMAS
const modeZero = document.querySelector(".mode_0");
const modeOne = document.querySelector(".mode_1");
const modeTwo = document.querySelector(".mode_2");
const modeZeroB = document.querySelector(".mode_0B");
const modeOneB = document.querySelector(".mode_1B");
const modeTwoB = document.querySelector(".mode_2B");
const modeOneBB = document.querySelector("mode_1BB_on");
const modeTwoBB = document.querySelector("mode_2BB_on");

// FUNCT: LIMPIAR CLASES DE TEMAS
function limpiarTemas(){
    personCard.classList.remove("mode_1_on");
    personCard.classList.remove("mode_2_on");
    personCard.classList.remove("mode_3_on");
    iconCard.classList.remove("mode_1_on");
    iconCard.classList.remove("mode_2_on");
    iconCard.classList.remove("mode_3_on");
    decorationCard.classList.remove("mode_1B_on");
    decorationCard.classList.remove("mode_2B_on");
    decorationCard.classList.remove("mode_3B_on");
    backgroundCard.classList.remove("mode_2BB_on");
    backgroundCard.classList.remove("mode_1BB_on");
}

// FUNCT: TEMAS
function aplicarTema0(){
    console.log("Tema 0");
    personCard.classList.add("mode_0_on");
    iconCard.classList.add("mode_0_on");
    decorationCard.classList.add("mode_0B_on");
}

function aplicarTema1(){
    console.log("Tema 1");
    personCard.classList.add("mode_1_on");
    iconCard.classList.add("mode_1_on");
    decorationCard.classList.add("mode_1B_on");
    backgroundCard.classList.add("mode_1BB_on"); 
}

function aplicarTema2(){
    console.log("Tema 2");
    decorationCard.classList.add("mode_2_on");
    personCard.classList.add("mode_2_on");
    decorationCard.classList.add("mode_2B_on");
    backgroundCard.classList.add("mode_2BB_on"); 
}

//ESCUCHADORES DE TEMAS
modeZero.addEventListener ("click", () => {
    limpiarTemas();
    aplicarTema0();
});

modeOne.addEventListener ("click", () => {
    limpiarTemas();
    aplicarTema1();
});

modeTwo.addEventListener ("click", () => {
    limpiarTemas();
    aplicarTema2();
});
