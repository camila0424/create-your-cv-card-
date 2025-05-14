'use strict';

const createCardBtn = document.querySelector('.js-createCardBtn');
const shareSection = document.querySelector('.js_shareSection');


function handleClickcreateCardBtn(ev) {
  ev.preventDefault();

  /*  const colorChecked = document.querySelector('.') */
  // aquí dentro va la info de raquel

  
  const info = {
  "field1": 0,
  "field2": name.value,
  "field3": lastname.value,
  "field4": occupation.value,
  "field5":  email.value,
  "field6": phone.value,
  "field7": linksocial.value,
  "field8":  gitsocial.value,
  "field9": "",
  "photo": profilePhoto.value,
};

  shareSection.innerHTML = "Enviando información";

  fetch("https://dev.adalab.es/api/info/data", {
      metod: "POST",
      Headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(info),
    })
    .then((res) => res.JSON())
    .then((data) => {
      console.log(data);
      if (data.success === false) {
        shareSection.innerHTML =
          "No se ha podido guardar la información porque faltan campos por rellenar";
      } else {
        shareSection.innerHTML = `
            <p>
                Se ha guardado la información de tu Curriculum. Puedes verla en el siguiente enlace <a href="http://localhost:5173/card.html?id=${data.info}">http://localhost:5173/card.html?id=${data.info}</a>
            </p>`;
      }
    });
}

createCardBtn.addEventListener('click', handleClickcreateCardBtn);