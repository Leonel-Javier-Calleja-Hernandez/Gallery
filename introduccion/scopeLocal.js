//son variables creadas dentro de funciones osea se crean y se destruyen dentro de esta funcion
let num1 = 1
const numeroLetras = (n) =>{
    let num1 = 11;//variable local 
   var numLetras = n.length;//la variable numLetras es una variable local
   
    //funcion anidada
    var funAnidad = (nL) => {
        return nL[0]
    }
    var primeraLetra = funAnidad(n)

    return `${n} tiene ${numLetras} Letras :D y la primera letra es la ( ${primeraLetra} )`;


};//la funcion primero busca las variables locales y despues las globales 

console.log(numeroLetras("leonel"));
