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
  "field1": "1",
  "field2": data.name,
  "field3": data.lastname,
  "field4": data.occupation,
  "field5": data.email,
  "field6": data.linksocial,
  "field7": data.gitsocial,
  "field8": data.phone,
  "photo": data.profilePhoto,
  };
  console.log ("esta es la info",info)
  console.log (nameCard)
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
  else if (photoProfileCard.value === null ){
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
            
            <h3 class="card-created">La tarjeta ha sido creada:</h3>
           <h5>
                Se ha guardado la información de tu Curriculum. Puedes verla en el siguiente enlace 
            </h5>    
                <a  href="https://patri-gl.github.io/pw-project-Promo-53-Module-2-Team-1/card.html?id=${data.infoID}"
             >https://patri-gl.github.io/pw-project-Promo-53-Module-2-Team-1/card.html?id=${data.infoID}</a>
            
            <a class="share-btn" href="https://x.com/?lang=es"
              ><i class="fa-brands fa-twitter" style="color: #ffffff"></i>Compartir en
              twitter</a>`            
      }
    });
}


console.log ('después de fetch')

//--------EVENTO----------
createCardBtn.addEventListener('click', handleClickcreateCardBtn );



