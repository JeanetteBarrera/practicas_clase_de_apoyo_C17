/*
Desafio n°6:

Teniendo en cuenta la siguiente lista de productos:

let productos = [
    { 
        categoria: "remeras",
        precio: 1200,
        cantidad: 2,
        color: "azul",
        talle: "L"
    },
    { 
        categoria: "remeras",
        precio: 1500,
        cantidad: 1,
        color: "negro",
        talle: "L"
    },
    { 
        categoria: "buzo",
        precio: 2100,
        cantidad: 1,
        color: "bordo",
        talle: "M"
    },
    { 
        categoria: "buzo",
        precio: 4000,
        cantidad: 1,
        color: "bordo",
        talle: "M"
    }

]

1- Crear una función que reciba dos parametros: un array de productos y un codigo(cupon de descuento);

Debemos tener en cuenta que:
    - el cupón tiene que estar activo(debe tener en su propiedad active : true).
    - el cupon tiene fecha de caducidad.

La función debe retornar el total de la compra, aplicando el descuento correspondiente si el cupon es valido, caso contrario se retorna el total sin ningun descuento.

*/

// funcion que calcule el total de la compra
// funcion que verifique si el cupon es valido(existe)
// funcion que verifique la fecha de caducidad

// funcion que integradora - dos parametros 
// 1 - array de producto, codigo

let productos = [
    { 
        categoria: "remeras",
        precio: 1200,
        cantidad: 2,
        color: "azul",
        talle: "L"
    },
    { 
        categoria: "remeras",
        precio: 1500,
        cantidad: 1,
        color: "negro",
        talle: "L"
    },
    { 
        categoria: "buzo",
        precio: 2100,
        cantidad: 1,
        color: "bordo",
        talle: "M"
    },
    { 
        categoria: "buzo",
        precio: 4000,
        cantidad: 1,
        color: "bordo",
        talle: "M"
    }

]


// funcion que calcule el total de la compra
function totalDeCompra(productos) {
    let resultado = 0;

    productos.forEach(producto => {
        resultado += producto.precio * producto.cantidad
        //resultado = resultado + (producto.precio * producto.cantidad)
    });
     return resultado
}

console.log(totalDeCompra(productos))




// funcion que verifique si el cupon es valido(existe)
let cupones = require("./data/cupones.json")

function verificarCodigo(codigo) {

    let cuponValido = cupones.find(cupon => cupon.codigo === codigo)
    //console.log(cuponValido)
    if(cuponValido) {
        return true
    } else {
        return false
    }

}
console.log(verificarCodigo("SFUT4D"))
//console.log(cupones)


function verificarFecha(codigo) {
    
    

}
let fecha_actual = new Date("2022-06-1")
//let fecha_caducidad = new Date(cuponValido.fecha_caducidad)
console.log(fecha_actual)