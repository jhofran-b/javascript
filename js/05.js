// objetos manipulación

const producto = {
    nombre: "table",
    precio: 300,
    disponible: true,
}


// Reescribir valro
producto.nombre = "Monitor"

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

// Eliminar
delete producto.disponible

// No se puede cambiar el objeto
Object.freeze(producto)

// No se puede agregar un nuevo atributo
Object.seal(producto)

console.table(producto)