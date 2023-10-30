// Funciones - Function Declaeation

// function sumar() {
//     console.log( 2 + 2 )
// }

// sumar()

function restar(minuendo=0, sustraendo=0) {
    diferencia = minuendo - sustraendo
    console.log(diferencia)
}

restar(30, 20)
restar(30)
restar()

// function sumar(sumando1=0, sumando2=0) {
//     return sumando1 + sumando2
// }

// const total = sumar(23, 45)


// function sumar(sumando1=0, sumando2=0) {
//     return [sumando1 + sumando2, "hola mundo"]
// }

// const [total, holaMundo] = sumar(23, 45)

function sumar(sumando1=0, sumando2=0) {
    return {
        total: sumando1 + sumando1,
        mensaje: "Hola mundo",
    }
}

const {total, mensaje} = sumar(23, 45)

console.log(total, mensaje)
