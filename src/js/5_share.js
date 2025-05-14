'use strict';

const createCardBtn = document.querySelector('.js-createCardBtn');
const shareSection = document.querySelector('.js_shareSection');


function handleClickcreateCardBtn(ev) {
  ev.preventDefault();

  /*  const colorChecked = document.querySelector('.') */
  // aquí dentro va la info de raquel


  /* "name": nameCard.value,
    "lastName": lastNameCard.value,
    "occupation": occupationCard.value,
    "email": emailPreview.value,
    "whatsapp": whatsappPreview.value,
    "linkedin": linkPreview.value,
    "gitHub": gitPreview.value,
    "photo": photoProfileCard.value, */
  
  const info = {
  "field1": 0,
  "field2": nameCard.value,
  "field3": lastNameCard.value,
  "field4": occupationCard.value,
  "field5": emailPreview.value,
  "field6": whatsappPreview.value,
  "field7": linkPreview.value,
  "field8": gitPreview.value,
  "photo": photoProfileCard.value,
};
  if (nameCard.value === ''){
    shareSection.innerHTML = "Falta por rellenar el nombre";
  }
  else if (lastNameCard.value === ''){
    shareSection.innerHTML = "Falta por rellenar el apellido";
  }
  else if (occupationCard.value === ''){
    shareSection.innerHTML = "Falta por rellenar el ocupación";
  }
  else if (emailPreview.value === ''){
    shareSection.innerHTML = "Falta por rellenar el email";
  }
  else if (whatsappPreview.value === ''){
    shareSection.innerHTML = "Falta por rellenar el whatsapp";
  }
  else if (linkPreview.value === ''){
    shareSection.innerHTML = "Falta por rellenar el Linkedin";
  }
  else if (gitPreview.value === ''){
    shareSection.innerHTML = "Falta por rellenar el GitHub";
  }
  else if (photoProfileCard.value === ''){
    shareSection.innerHTML = "Falta por adjuntar la foto";
  }

  /*   shareSection.innerHTML = "Enviando información"; */

      console.log ("antes del fetch")

  fetch("https://dev.adalab.es/api/info/data", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(info),
    })
    .then((res) => res.json())
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


console.log ('después de fetch')

//--------EVENTO----------
createCardBtn.addEventListener('click', handleClickcreateCardBtn );



