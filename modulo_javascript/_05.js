/*
Desafio n°5: 

Teniendo en cuenta el siguiente array/lista:

1- Crear una funcion que busque todos los nombres que contengan la letra "s".
2- Como hariamos si ademas de lo anterior tambien tuvieramos en cuenta las Mayusculas?

let nombres = ["Soraya", "Nicolas","Nnnnnnnn", "Samuel", "Alice", "Santiago", "Alonso"];

*/

let nombres = ["Soraya", "Nicolás","Nnnnnnnn", "Samuel", "Alice", "Santiago", "Alonso"];

function filtrar() {
    let newArray = []
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i].toLowerCase().includes("s")) {
            newArray.push(nombres[i])
        }
    }
    return newArray
}
console.log(filtrar())

// 2DA FORMA DE RESOLUCIÓN(propuesta en clase)

let nombreSelecionado = nombres.filter( nombre => {
    let b = nombre.toLocaleLowerCase()
    return b.includes("s")
})
console.log(nombreSelecionado);