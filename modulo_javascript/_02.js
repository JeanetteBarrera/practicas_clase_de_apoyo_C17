/*Desafío n°2:
Teniendo en cuenta el siguiente array de Strings, que representa un arreglo de usuarios autorizados.
Crear una funcion expresada que verifique si el nombre del usuario ingresado esta autorizado ó no. 

La función debe retornar el mensaje correspondiente:
Si se encuentra autorizado: "Bienvenid@ de vuelta!"
Si no se encuentra autorizado : "Lo siento, no esta autorizado!"

let usuarios = ["Mauricio", "Horacio", "Saul", "Cora"];
*/
let usuarios = ["Mauricio", "Horacio", "Saul", "Cora"];

function verificacion(nombre){
    let usuarios = ["Mauricio", "Horacio", "Saul", "Cora"];
    if (nombre === usuarios[0] || nombre === usuarios[1] || nombre === usuarios[2] || nombre === usuarios[3]){
        return "Bienvenid@ de vuelta"
    } else {
        return "Lo siento, no esta autorizado"
    }
}

console.log(verificacion("Cora"))


//Otras formas de resolverlo(propuesta en la clase)
let authorized = (name) => usuarios.includes(name) ? console.log("Bienvenid@ de vuelta!") : console.log("Lo siento, no esta autorizado!");
console.log(authorized("Cora"))
