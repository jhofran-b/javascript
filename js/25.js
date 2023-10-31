// Eventis del DOM - SUbmit

const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", e => {
    e.preventDefault()

    const nombre = document.querySelector(".nombre").value
    const password = document.querySelector(".password").value

    if (nombre === "" || password === "") {
        console.log("todo los campos son obligatorio")
    } else {
        console.log("todo bien, enviando...")
    }
})