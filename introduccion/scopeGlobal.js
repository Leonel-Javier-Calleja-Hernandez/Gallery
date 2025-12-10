//variables que son globales 
var nombre = "leonel";// esta es una varible global ya que esta disponible entodo el documento por que no esta dentro de una funcion,if etc...
console.log(nombre);

const saludar = () =>{
    nombre = "arturo"
    console.log("hola :)" + nombre)
}
 saludar()
 
 console.log(nombre)