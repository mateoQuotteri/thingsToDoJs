const form = document.getElementById("taskForm");
const input = document.getElementById("newTaskInput")
const ul = document.getElementById("taskList")
const  error = document.getElementById("task-error")
const deleteButtons = document.querySelectorAll(".delete-button")
const checkedButtons = document.querySelectorAll(".checkbox")
const allP = document.querySelectorAll("p")



window.addEventListener("load", function (params) {
    checkedButtons.forEach(function (button) {
       button.checked === false
    })
    /*
    allP.forEach(function (p) {
        console.log(p.textContent);
     })*/
})


deleteButtons.forEach(function (button) {
    button.addEventListener("click" , function (event) {
        console.log(event);
        let parentElement = button.parentElement;
        parentElement.classList.add("none")
    })
})



checkedButtons.forEach(function (button) {
    button.addEventListener("click" , function (event) {
        let broElement = button.nextElementSibling;
        console.log(checkedButtons);
        broElement.classList.toggle("completed")
    })
})
function estaVacio(input) {
    if (input.length === 0) {
        return true
    }
}


form.onsubmit = function (event) {
    event.preventDefault();

    let tareaAAgregar = input.value;
    
    if (estaVacio(tareaAAgregar)) {
        error.classList.remove("error-message")
            error.classList.add("error-message-show")
            return
    }
    

    const newLiElement = document.createElement("li");

    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.classList.add("checkbox")

    const p = document.createElement("p");
    p.textContent = tareaAAgregar;


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Eliminar";

    newLiElement.appendChild(checkboxElement)
    newLiElement.appendChild(p)
    newLiElement.appendChild(deleteButton)

    ul.appendChild(newLiElement);

    deleteButton.addEventListener("click", function () {
        let parentElement = deleteButton.parentElement;
        parentElement.remove();
    });
    checkboxElement.addEventListener("click" , function (event) {
        let broElement = checkboxElement.nextElementSibling;
        broElement.classList.toggle("completed")
    })

    input.value = ""
    localStorage.setItem("tareas" , tareaAAgregar)
}


