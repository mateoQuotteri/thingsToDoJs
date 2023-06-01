const form = document.getElementById("taskForm");
const input = document.getElementById("newTaskInput")
const ul = document.getElementById("taskList")
const  error = document.getElementById("task-error")

function estaVacio(input) {
    if (input.length === 0) {
        error.classList.remove("error-message")
        error.classList.add("error-message-show")
        return
    }
}

form.onsubmit = function (event) {
    event.preventDefault();

    let tareaAAgregar = input.value;
    
    console.log(tareaAAgregar);
    estaVacio(tareaAAgregar)

    const newLiElement = document.createElement("li");

    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";

    const spanElement = document.createElement("span");
    spanElement.textContent = tareaAAgregar;


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";

    newLiElement.appendChild(checkboxElement)
    newLiElement.appendChild(spanElement)
    newLiElement.appendChild(deleteButton)

    ul.appendChild(newLiElement);
}