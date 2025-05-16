"use strict";

// form-fill
const form = document.querySelector(".formAdaCurri");
const nameCard = document.querySelector(".js-preview_name");
const lastNameCard = document.querySelector(".js-preview_lastname");
const occupationCard = document.querySelector(".js-preview_occupation");
const emailPreview = document.querySelector(".js-emailPreview");
const whatsappPreview = document.querySelector(".js-whatsappPreview");
const linkPreview = document.querySelector(".js-preview_linksocial");
const gitPreview = document.querySelector(".js-preview_gitsocial");

const inputFile = document.querySelector("#profilePhoto");
const photoProfileCard = document.querySelector(".js-preview_photoProfile");
const originalBg = window.getComputedStyle(photoProfileCard).backgroundImage;

const refreshCardBtn = document.querySelector(".js-refreshCardBtn");

let data = {
  name: "",
  lastname: "",
  occupation: "",
  profilePhoto: "",
  email: "",
  phone: "",
  linksocial: "",
  gitsocial: "",
};

form.addEventListener("input", (event) => {
  const idInput = event.target.id;
  const valueInput = event.target.value;

  data[idInput] = valueInput; // Actualiza data

  localStorage.setItem("info", JSON.stringify(data));

  if (idInput === "name") {
    nameCard.textContent = valueInput;
  } else if (idInput === "lastname") {
    lastNameCard.textContent = valueInput;
  } else if (idInput === "occupation") {
    occupationCard.textContent = valueInput;
  } else if (idInput === "email") {
    emailPreview.href = `https:// ${valueInput}`;
  } else if (idInput === "whatsapp") {
    whatsappPreview.href = `https://wa.me/${valueInput}`;
  } else if (idInput === "linksocial") {
    linkPreview.href = `https:// ${valueInput}`;
  } else if (idInput === "gitsocial") {
    gitPreview.href = `https:// ${valueInput}`;
  }

  if (data.name === "" && data.lastname === "" && data.occupation === "") {
    nameCard.textContent = "Nombre";
    lastNameCard.textContent = `Apellido`;
    occupationCard.textContent = `Ocupación`;
  } else {
    nameCard;
    lastNameCard;
    occupationCard;
  }
});

inputFile.addEventListener("change", () => {
  const file = inputFile.files[0];
  if (!file) return; // si no hay nada seleccionado, salimos

  // 3) leemos el fichero como data URL
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    // 4) al cargarse, ponemos la URL resultante como background
    photoProfileCard.style.backgroundImage = `url(${reader.result})`;
    data.profilePhoto = reader.result;
    localStorage.setItem("info", JSON.stringify(data));
  });
  reader.readAsDataURL(file);
});

refreshCardBtn.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();

  // const resetValues = {
  //   nameCard.textContent: "Nombre",
  //   lastNameCard: "Apellido",
  //   occupationCard: "Ocupación",
  //   photoProfileCard: originalBg,
  //   emailPreview: "",
  //   whatsappPreview: "",
  //   linkPreview: "",
  //   gitPreview: "",
  // };

  Object.entries(resetValues).forEach(([key, value]) => {
    if (key === "photoProfileCard") {
      photoProfileCard.style.backgroundImage = value;
    } else {
      document.querySelector(`#${key}`).textContent = value;
    }
  });
  Object.keys(resetValues).forEach((key) => {
    localStorage.removeItem(key);
  });
});
