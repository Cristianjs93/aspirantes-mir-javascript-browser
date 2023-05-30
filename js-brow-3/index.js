const form = document.querySelector("form");
const textInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const saveButton = document.querySelector("#save");
const deleteButton = document.querySelector("#delete");
const section = document.querySelector("section");

textInput.setAttribute("autocomplete", "off");
emailInput.setAttribute("autocomplete", "off");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", saveName);

// Manejar el evento de borrar el nomre de localStorage
deleteButton.addEventListener("click", deleteName);

// Función para guardar el nombre en localStorage
function saveName(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const name = data.get("name");
  const email = data.get("email");
  const user = {
    name: name,
    email: email,
  };
  var objJSON = JSON.stringify(user);

  localStorage.setItem("user", objJSON);

  textInput.value = "";
  emailInput.value = "";

  showName();
}

// // Función para mostrar el nombre guardado en localStorage
function showName() {
  const user = localStorage.getItem("user");
  const userJS = JSON.parse(user);
  const showName = userJS.name;
  const showEmail = userJS.email;

  if (showName.length === 0) {
    text = "No hay datos";
    section.textContent = text;
  } else {
    text = showName;
    section.textContent = "Nombre: " + showName + " Email: " + showEmail;
  }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
  localStorage.clear();
}
