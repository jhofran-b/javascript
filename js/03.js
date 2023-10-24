// tipo de datos

// undefined
let cliente
console.log(typeof cliente) // undefined


// boolean
const descuento = true

console.log(descuento) // true
console.log(typeof descuento) // boolean

// number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1) // number
console.log(typeof numero2) // number
console.log(typeof numero3) // number

// string o cadena de texto
const alumno = 'Juan'
let producto = "Monitor 22"
const numero = '30'
const numeroDos = 2

console.log(typeof numero)  // string
console.log(typeof numeroDos) // number

// bitInt
// no se puede mesclar con otro tipo de datos
const numeroGrande = 342614362143612361253346143261243
console.log(typeof numeroGrande) // number

const numeroGrandeDos = BigInt(342614362143612361253346143261243)
const numeroGrandeTres = 342614362143612361253346143261243n
console.log(typeof numeroGrandeDos) // bigInt
console.log(typeof numeroGrandeTres) // bigInt
// Paraq poder convinarlo con otro valor hay que convertirlo
console.log(numeroDos + Number(numeroGrandeDos))

// symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol) // false
console.log(primerSymbol.valueOf()) // symbol(30)

// null
const descuentos = null

console.log(descuentos) // null
console.log(typeof descuentos) // object