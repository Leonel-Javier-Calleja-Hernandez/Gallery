//las variable const o let dentro de { } y solo pueden acceder a ellas dentro del bloque de una funcion, for, if, etc..

const edad = 18;
if (edad >= 18){
    const accesoP = true;//esta variable solo funciona detro de {} la varible accesoP
    console.log(accesoP)

    if(true){
        console.log("if 2 : " + accesoP)
    }
}
