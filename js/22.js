// Manipulación de elementos HTML con javascript

const heading = document.querySelector(".heading")
heading.textContent = "Un Heading"
console.log(heading.textContent)

const inputNombre = document.querySelector("#nombre")
inputNombre.value = "Un valor por defecto"
console.log(inputNombre)

const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach( enlaces => enlaces.textContent = "Nuevo Enlace")