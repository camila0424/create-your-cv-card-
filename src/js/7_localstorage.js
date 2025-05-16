const dataFromLS = JSON.parse(localStorage.getItem("info"));
//falta añadir la parte de Raquel y borrar la localstorage con el reset
if (dataFromLS !== null) {
  data = dataFromLS;

  const allInputs = form.querySelectorAll("input");

  for (const eachInput of allInputs) {
    if (eachInput.type !== "file") {
      eachInput.value = dataFromLS[eachInput.id];
    }
  }

  nameCard.textContent = data.name;
  lastNameCard.textContent = data.lastname;

  occupationCard.textContent = data.occupation;

  emailPreview.href = `https:// ${data.email}`;

  whatsappPreview.href = `https://wa.me/${data.phone}`;

  linkPreview.href = `https:// ${data.linksocial}`;

  gitPreview.href = `https:// ${data.gitsocial}`;

  photoProfileCard.style.backgroundImage = `url(${data.profilePhoto})`;
}
