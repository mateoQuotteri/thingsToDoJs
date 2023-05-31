const form = document.getElementById("taskForm");
const input = document.getElementById("newTaskInput")
const ul = document.getElementById("taskList")
const  error = document.getElementById("task-error")
window.onload = function(){
    console.log(form);
}
form.onsubmit = function (event) {
    event.preventDefault();

    let tareaAAgregar = input.value;
    
    console.log(tareaAAgregar);
    if (tareaAAgregar.length === 0) {
        error.classList.remove("error-message")
        error.classList.add("error-message-show")
return
    }
    // Crea un nuevo elemento <li>
const newLiElement = document.createElement("li");

// Crea un elemento <input> para la casilla de verificación
const checkboxElement = document.createElement("input");
checkboxElement.type = "checkbox";

// Crea un elemento <span> para el texto de la tarea
const spanElement = document.createElement("span");
spanElement.textContent = tareaAAgregar;

// Crea un botón de eliminación
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
deleteButton.textContent = "X";

newLiElement.appendChild(checkboxElement)
newLiElement.appendChild(spanElement)
newLiElement.appendChild(deleteButton)


ul.appendChild(newLiElement);
}