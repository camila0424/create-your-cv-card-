"use strict";
 const createCardBtn = ('.js-createCardBtn');
 const shareSection = ('.js_shareSection');

const handleClickcreateCardBtn = (ev) =>{
    ev.preventDefault();

   /*  const colorChecked = document.querySelector('.') */  // aquí dentro va la info de raquel
    const info ={
        "field1": "",
        "field2": "",
        "field3": "",   
    }
   shareSection.innerHTML = "Enviando información"

 //------enviar info---------
    fetch{
        'https://dev.adalab.es/api/info/data',
        {   metod:'POST',
            Headers:{'content-Type': 'application/json'},
            body: JSON.stringify(info)
        }
   }
   .then( res => res.JSON () )
   .then( data => {console.log (data);
        if(data.success ===false){
           shareSection.innerHTML = "No se ha podido guardar la información porque faltan campos por rellenar";
        }
        else(shareSection.innerHTML = `se ha guardado la información de tu Curriculum. Puedes verla en el siguiente enlace <a href= "http://localhost:5173/card.html?id=${data.info}"> http://localhost:5173/card.html?id=${data.info}</a>`;
           
        )

   })

}

createCardBtn.addEventListener('click', handleClickcreateCardBtn)