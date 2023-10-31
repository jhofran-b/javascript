// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// const consultarAPI = () => {
//     fetch(url)
//         .then( respuest => respuest.json() )
//         .then( resultado => {
//             resultado.forEach( comentario => {
//                 console.log(comentario)
//             });
//         })
// }

// const consultarAPI = async () => {
//     const respuesta = await fetch(url)
//     const resultado = await respuesta.json()
// }

// Multiples
const consultarAPI = async () => {
    const [respuesta1, respuesta2] = await Promise.all([ fetch(url), fetch(url2) ])
    const resultado1 = respuesta1.json()
    const resultado2 = respuesta2.json()

    console.log(respuesta1)
    console.log(respuesta2)
}

consultarAPI()