let colors = ['red', 'blue', 'white']

//transformarlo a texto y madarlo a el body
document.body.innerHTML = `<button>${colors.toString()}</button>`

// lo transforma a texto y separa el arreglo a un texto
console.log(colors.join(' - '))

//ordenar el arreglo de furma alfadetica
let arrayOrdenado = colors.sort();
console.log(arrayOrdenado.join(' -- '))

//funtar dos arreglosen uno
const arreglo1 = ['a', 'b', 'c', 'd']
const arreglo2 = [1, 2, 3, 4]

arregloJuntos = arreglo1.concat(arreglo2)
console.log(arregloJuntos)

//Agregar un elemento a el arreglo
console.log(arreglo1.push('e'))

//elimina el ultimo
arreglo1.pop()
console.log(arreglo1)

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

//eliminar el primero
const EliminarPrimerDia = dias.shift()
console.log(EliminarPrimerDia)

//agregar al principio
const agregarDiaInicio = dias.unshift(EliminarPrimerDia)
console.log(`Se agrego el dia eliminado ${agregarDiaInicio} , ${dias[0]}`)

//eliminar desde o agregar a la vez
const amigos = ['daniel', 'carlos', 'diego', 'angel']
amigos.splice(2,0, 'felipe', 'orlando')
console.log(amigos)

//copiar elementos de un array
const frutas = ['manzana', 'mango', 'fresa', 'pera'];
const frutasFavoritas = frutas.slice(1,3);
console.log(frutasFavoritas)

//buscar elementos por su nombre y buscar e index y si no esta da -1
console.log("mango esta en la posision = " + frutas.indexOf('mango'))

//buscar del ultimo
console.log(frutas.lastIndexOf('mango'))

//recorre todos los elemetos de un arreglos
amigos.forEach((amigo, i) =>{
    console.log(`holaa ${amigo} y mi index = ${i}`)
})

//recorre y puede retornar el primer elemento
const nombres = [
  "Leonel",
  "Lucia",
  "Lorena",
  "Luis",
  "Angel",
  "Daniel",
  "Carlos",
  "Miguel",
  "Sara",
  "Valentina",
  "Jorge",
  "Andres",
  "Kevin",
  "Diana",
  "Camila",
  "Mateo",
  "Sebastian",
  "Julian",
  "Natalia",
  "Brayan"
];

//busca 1 elemento y crear una funcion
const resultado = nombres.find((nombre) =>{ if(nombre[0] === 'L'){ return nombre } });
console.log(resultado)

//map() Crea un nuevo arreglo
nombreMAYUSCULAS = nombres.map((nom) => nom.toUpperCase());//forma corta de esta funcion
console.log(nombreMAYUSCULAS)

//Permite filtrar o buscar varios elementos dentro de el arreglo
const nombresL = nombres.filter((n)=>{
    if(n[0] == 'L'){
    return n;
    }
})
console.log(nombresL)