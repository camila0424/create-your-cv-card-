const dataFromLS = JSON.parse(localStorage.getItem("info"));
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
} else {
  const allInputs = form.querySelectorAll("input");

  for (const eachInput of allInputs) {
    if (eachInput.type !== "file") {
      eachInput.value = dataFromLS[eachInput.id];
    }
  }

  nameCard.textContent = "";
  lastNameCard.textContent = "";

  occupationCard.textContent = "";

  emailPreview.href = "";

  whatsappPreview.href = "";

  linkPreview.href = "";

  gitPreview.href = "";

  photoProfileCard.style.backgroundImage = "";
}
