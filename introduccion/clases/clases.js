// ESTRUCTURA BÁSICA DE UNA CLASE EN JAVASCRIPT

// Una clase es como un "molde" para crear objetos.
// Aquí va lo más simple y fácil posible.

class Persona {

  // El constructor se ejecuta cuando creamos un objeto nuevo
  constructor(nombre, edad) {
    this.nombre = nombre; // guardamos el nombre dentro del objeto
    this.edad = edad;     // guardamos la edad dentro del objeto
  }

  // Método: una función dentro de la clase
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// CREAR UN OBJETO (instancia de la clase)

const usuario1 = new Persona("Leonel", 19);

// Ejecutar un método de la clase
usuario1.saludar(); // → "Hola, soy Leonel"



//------------------------------------------------------------------------------------

class Usuario {
    tipo ='usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('nuevo usuario registrado')
    }
    nombreCompleto(){
        console.log('obteniendo datos....')
        return `${this.nombre} ${this.apellido}`;
    }
}

const user = new Usuario('angel', 'callejas');
console.log(user.nombreCompleto())
