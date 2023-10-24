// objetos

const producto = {
    nombre: "table",
    precio: 300,
    disponible: true,
}

console.log(producto) 
console.table(producto)

console.log(producto.nombre)

// Destructuring
const {nombre, precio, disponible} = producto
console.log(nombre)

// object literal enhacement
const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {
    autenticado,
    usuario,
}