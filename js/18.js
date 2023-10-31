 const saldo = 600
 const pagar = 700
 const tarjeta = false

/*
    || - Al menos una debe cumplirse
    && - Todas deben cumplirse
*/ 

 if(saldo > pagar || tarjeta) {
    console.log("Puedes pagar")
 } else {
    console.log("No puedes pagar")
 }