//operadores logicas
//ejemplo 1
const nombre = "leonel";
const edad = 18;
const tieneEntrada = true
const permisoPadres = true

mayorEdad = edad >= 18

vigilante = (mayorEdad && tieneEntrada) || (permisoPadres) ; // Si est condicion no se cumple que cumpla la siguiente.
console.log(vigilante)


//ejemplo 2

let variable = true

console.log(!variable)

//operador ternario
const comprobacion = 7 > 1? 'es mayor' : 'es menor';
console.log(comprobacion)