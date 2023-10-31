const autenticado = true

!autenticado 
?
    console.log("Autenticado") 
: 
    console.log("no autenticado")

// Doble ternario
const saldo = 600
const pagar = 700
const tarjeta = false

saldo > pagar
?
    console.log("Puedes pagar")
:
    tarjeta
    ?
        console.log("Puedes pagar")
    :
        console.log("No puedes pagar")