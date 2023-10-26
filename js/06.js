// objetos - destructuring con 2 o más objeto

const producto = {
    nombre: "table",
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: "Juan",
    premiun: true,
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premiun} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premiun)