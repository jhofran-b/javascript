// Arrow Functions y Array Methods
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

// map
const nuevoArray = tecnologias.map( tech => {
    if(tech === "HTML") {
        return "GraphQL"
    } else {
        return tech
    }
})

// filter
const nuevoArray2 = tecnologias.filter( tech =>  tech !== "React")

const numeros = [12, 30 ,45]

// Comprobar si existe un elemente
// const resultado = tecnologias.includes("GraphQL")

// Devuelve si almenos uno cimple la condición
// const resultado = numeros.some(numero => numero > 15)

// Devuelve el primer elemento que cumpla la condición
// const resultado = numeros.find(numero => numero > 5)

// Devuelve tru o falso si todos cumplen la condición
// const resultado = numeros.every(numero => numero > 15)

// reduce
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 )

// forEach
tecnologias.forEach( (tech, index) => console.log(index, tech))

// console.log(resultado)
