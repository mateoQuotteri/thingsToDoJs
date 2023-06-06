const form = document.getElementById("taskForm");
const input = document.getElementById("newTaskInput")
const ul = document.getElementById("taskList")
const error = document.getElementById("task-error")
const deleteButtons = document.querySelectorAll(".delete-button")
const checkedButtons = document.querySelectorAll(".checkbox")
const allP = document.querySelectorAll("p")
const notThingsToDo = document.getElementById("not-things-todo")


function generarTareas(array) {
    array.forEach(function(elemento) {
    // Crea un elemento <li> para cada elemento del array
    const newLiElement = document.createElement("li");   
      
    // Agrega el <li> al <ul> en tu página HTML
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.classList.add("checkbox")

    const p = document.createElement("p");
    p.textContent = elemento;


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


            //eliminando elemento del local storage
        let brotherElement = deleteButton.previousElementSibling;
        let thingToDelete = brotherElement.textContent;
    
        let tareasPrevias = localStorage.getItem("tareas");
            // Convierte el valor en un array
        let tareasPreviasJSON = JSON.parse(tareasPrevias);
         
        // Elimina esa tarea del array 
        tareasActualizadas = tareasPreviasJSON.filter(tarea => tarea != thingToDelete )
        console.log(tareasActualizadas);
        // Vuelve a guardar el array actualizado en localStorage
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
    
    });

    checkboxElement.addEventListener("click" , function (event) {
        let broElement = checkboxElement.nextElementSibling;
        broElement.classList.toggle("completed")
    })
        
      });
}

window.addEventListener("load", function (params) {
    checkedButtons.forEach(function (button) {
       button.checked === false
    })

    //creo lis por cada tarea almacenada en el local sotrage
    let tareasPrevias = localStorage.getItem("tareas");
    // Convierte el valor en un array
    let tareasPreviasJSON = JSON.parse(tareasPrevias);
    
        if (tareasPreviasJSON === null) {
            notThingsToDo.classList.remove("none")
            return
        }

    generarTareas(tareasPreviasJSON)
})


deleteButtons.forEach(function (button) {
    button.addEventListener("click" , function (event) {


        //eliminando elemento de las vistas

        let parentElement = button.parentElement;
        parentElement.classList.add("none")
    


        //eliminando elemento del local storage
        let brotherElement = button.previousElementSibling;
        let thingToDelete = brotherElement.textContent;

        let tareasPrevias = localStorage.getItem("tareas");
        // Convierte el valor en un array
        let tareasPreviasJSON = JSON.parse(tareasPrevias);
     
        // Elimina esa tarea del array 
        tareasActualizadas = tareasPreviasJSON.filter(tarea => tarea != thingToDelete )
        console.log(tareasActualizadas);
        // Vuelve a guardar el array actualizado en localStorage
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
        console.log("LOL");


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


        //eliminando elemento del local storage
        let brotherElement = deleteButton.previousElementSibling;
        let thingToDelete = brotherElement.textContent;
    
        let tareasPrevias = localStorage.getItem("tareas");
        // Convierte el valor en un array
        let tareasPreviasJSON = JSON.parse(tareasPrevias);
         
        // Elimina esa tarea del array 
        tareasActualizadas = tareasPreviasJSON.filter(tarea => tarea != thingToDelete )
        console.log(tareasActualizadas);
        // Vuelve a guardar el array actualizado en localStorage
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
    
    });
    checkboxElement.addEventListener("click" , function (event) {
        let broElement = checkboxElement.nextElementSibling;
        broElement.classList.toggle("completed")
    })

    input.value = "";

    let tareasYaAlmacenadas = localStorage.getItem("tareas");
    if (tareasYaAlmacenadas === null) {
        let tareasPorRealizar = [tareaAAgregar]
        let tareasPorRealizarAJSON = JSON.stringify(tareasPorRealizar)
        localStorage.setItem("tareas" , tareasPorRealizarAJSON)
    }else{
        var tareasPrevias = localStorage.getItem("tareas");
        // Convierte el valor en un array
        var tareasPreviasJSON = JSON.parse(tareasPrevias);
        // Agrega un nuevo dato al array
        tareasPreviasJSON.push(tareaAAgregar);
        // Vuelve a guardar el array actualizado en localStorage
        localStorage.setItem("tareas", JSON.stringify(tareasPreviasJSON));
    }


}





/*
const resultado = animales.filter(animal => animal != 'oso');
console.log(resultado);
*/