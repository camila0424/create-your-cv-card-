"use strict";

console.log(">> Ready :)");

// form-fill
const form = document.querySelector(".formAdaCurri");
const nameCard = document.querySelector(".js-preview_name");
const lastNameCard = document.querySelector(".js-preview_lastname");
const occupationCard = document.querySelector(".js-preview_occupation");
const emailCard = document.querySelector(".js-preview_email");
const phoneCard = document.querySelector(".js-preview_phone");
const linkSocialCard = document.querySelector(".js-preview_linksocial");
const moreAboutCard = document.querySelector(".js-preview_moreAbout");
const gitSocialCard = document.querySelector(".js-preview_gitsocial")

const inputFile = document.querySelector('#profilePhoto');
const photoProfileCard = document.querySelector(".js-preview_photoProfile");

const data = {
  name: '',
  lastname: '',
  profilePhoto: '',
  occupation: '',
  email: '',
  phone: '',
  linksocial: '',
  gitsocial: '',
  moreAbout: ''
};

form.addEventListener("input", (event) => {
  const idInput = event.target.id;
  const valueInput = event.target.value;

  data[idInput] = valueInput;

  console.log(data);
  

  if (idInput === "name") {
    nameCard.textContent = valueInput;
  } else if (idInput === "lastname") {
    lastNameCard.textContent = valueInput;
  } else if (idInput === "occupation") {
    occupationCard.textContent = valueInput;
  } else if (idInput === "email") {
    emailCard.textContent = valueInput;
  } else if (idInput === "phone") {
    phoneCard.textContent = valueInput;
  } else if (idInput === "linksocial") {
    linkSocialCard.textContent = valueInput;
  } else if (idInput === "gitsocial") {
    gitSocialCard.textContent = valueInput;
  } else if (idInput === "moreAbout") {
    moreAboutCard.textContent = valueInput;
  } else if (idInput === "profilePhoto") {
    photoProfileCard.src = URL.createObjectURL(file);
  } 
});

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  if (!file) return;  // si no hay nada seleccionado, salimos

  // 3) leemos el fichero como data URL
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    // 4) al cargarse, ponemos la URL resultante como background
    photoProfileCard.style.backgroundImage = `url(${reader.result})`;
  });
  reader.readAsDataURL(file);
});



// HEADER

const navcontainer = document.querySelector(".nav_container")
function showmenu() {
  navcontainer.classList.remove("collapsed");
}

function hidemenu() {
  navcontainer.classList.add("collapsed");
}

function handlemenu(event) {
  if (newForm.classList.contains("collapsed")) {
    showmenu();
  } else {
    hidemenu();
  }
}