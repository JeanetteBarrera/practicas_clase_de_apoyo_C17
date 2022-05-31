/*
Desafio n°4:

let remeras = [
    { color: "rojo", talle: "L", stock: 20 },
    { color: "rojo", talle: "M", stock: 3 },
    { color: "rojo", talle: "S", stock: 18 },
    { color: "azul", talle: "L", stock: 10 },
    { color: "azul", talle: "M", stock: 13 },
    { color: "rojo", talle: "XL", stock: 3 },
    { color: "azul", talle: "S", stock: 1 },
    { color: "beige", talle: "L", stock: 40 },
    { color: "fucsia", talle: "M", stock: 15 }
]

Considerando el siguiente array/lista de objetos:

1- Crear una función que devuelva la *cantidad* de remeras con talle "L";

2- Crear una funcion que devuelva todos los productos(remeras) de color "rojo" y que tengan un stock mayor a 5;

*/
// Pregunta: Como modificarían el codigo para que la función sea reutilizable y funcione para cualquier talle?


let remeras = [
    { color: "rojo", talle: "L", stock: 20 },
    { color: "rojo", talle: "M", stock: 3 },
    { color: "rojo", talle: "S", stock: 18 },
    { color: "azul", talle: "L", stock: 10 },
    { color: "azul", talle: "M", stock: 13 },
    { color: "rojo", talle: "XL", stock: 3 },
    { color: "azul", talle: "S", stock: 1 },
    { color: "beige", talle: "L", stock: 40 },
    { color: "fucsia", talle: "M", stock: 15 }
]

/*=================================
************    1   ***************
===================================*/

// 1ERA FORMA DE RESOLUCIÓN
function cantidadDeRemerasTalleL() {
    let count = 0;
    remeras.forEach(remera => {
        if(remera.talle === "L") {
            //console.log(count)
            count += remera.stock;
        }
    })
    return count;
}
//console.log(cantidadDeRemerasTalleL())


// 2DA FORMA DE RESOLUCIÓN

let cantidad = remeras.reduce((total, remera) => {
    return total + (remera.talle === "L" ? remera.stock : 0)
}, 0)
//console.log(cantidad)


// 3RA FORMA DE RESOLUCIÓN(propuesta en clase)
let remerasL = remeras.filter( L => L.talle === "L" )

console.log(remerasL.length);

let remerasRojas = remeras.filter( remera => remera.color === "rojo" && remera.stock > 5 )

console.log(remerasRojas);


/*EXTRA -> Creamos una función que puede ser reutilizable, recibe dos parametros: talle y color. Retorna todas las remeras que coincidan con las condiciones*/

function buscarPorTalleYColor(talle, color) {

    let remerasFiltradasPorTalle = remeras.filter(remera => remera.talle === talle && remera.color === color);
    return remerasFiltradasPorTalle;
}
console.log(buscarPorTalleYColor("L", "rojo"))
