const form = document.querySelector("form");
const input = document.querySelector("input");
const saveButton = document.querySelector("#save");
const deleteButton = document.querySelector("#delete");
const section = document.querySelector("section");

input.setAttribute("autocomplete", "off");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", saveName);

// Manejar el evento de borrar el nomre de localStorage
deleteButton.addEventListener("click", deleteName);

// Función para guardar el nombre en localStorage
function saveName(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const name = data.get("name");

  localStorage.setItem("name", name);

  input.value = "";

  showName();
}

// // Función para mostrar el nombre guardado en localStorage
function showName() {
  const showName = localStorage.getItem("name");

  if (showName.length === 0) {
    text = "No hay datos";
    section.textContent = showName;
  } else {
    text = showName;
    section.textContent = showName;
  }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
  localStorage.removeItem("name");
}
