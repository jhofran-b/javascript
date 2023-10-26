// Array - operaciones

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

// añadir
// tecnologias.push("GrapQL") // añade al fina y modifica el original
// tecnologias.unshift("GrapQL") // añade al inicio y modifica el original

// const nuevoArray = [...tecnologias, "GrapQL"] // añade al fina y no modifica el original
// const nuevoArray = ["GrapQL", ...tecnologias] // añade al fina y no modifica el original


// eliminar
// tecnologias.pop() // elimina del final
// tecnologias.shift() // elimina del inicio
// tecnologias.splice(2, 1) // elimina de una posición especifica

// const nuevoArray = tecnologias.filter((tech) => (
//     tech !== "HTML"
// )) // esto no modifica el original 


// reemplazar
// tecnologias[0] = "GrapQL" // esto modifica
const nuevoArray = tecnologias.map((tech) => {
    if(tech === "HTML") {
        return "GraphQL"
    } else {
        return tech
    }
})



console.table(tecnologias)
console.table(nuevoArray)