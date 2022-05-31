/* 
Desafío n°1:
Crear una función que reciba dos parámetros que representan las notas de un alumno y calcular el promedio. La función debe retornar el mensaje correspondiente de acuerdo al promedio obtenido del alumno. 
    menor 6 --> Insuficiente
    menor igual a 8 --> Aprobado
    menor igual a 10 --> Sobresaliente
    en caso de que algun parametro no fuese numerico, retornar un msj para informarle al usuario
*/

let promedioGeneral = (nota1 , nota2) => {

    let promedio = (nota1 + nota2) / 2;

    if(typeof(promedio) === "Number" && promedio <=20 && promedio <=0) {

        if(promedio < 6) {
            return "Insuficiente"
        } else if( promedio <= 8) {
            return "Aprobado"
        } else {
            return "Sobresaliente"
        }

    } else {
        return "Debe ingresar datos numericos"
    }
   
}

console.log(promedioGeneral(10, "kasmdkamfkm"))

