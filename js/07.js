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

const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente},
}
console.log(nuevoObjeto)