//----nameExports.js

//Exportar uno por uno Normal
import {nombre, obtenerPost, numeros} from './src/namedExports'

console.log('MI nombre es: ' + nombre);
console.log(obtenerPost());
console.log(numeros)

//Exportar con alias con as
import { cosa as objeto } from './src/namedExports';

console.log(objeto)

//Importar todas las variables importadas algo asi como que convertir el documento en un objeto.
import * as datos from './src/namedExports'

console.log(datos.sumar(3,4))



//----defaultExport.js

//defaul Import se le puede poer el nombre que uno quiera
import usuarioLeonel from './src/defaultExport'//no Se usan {}

console.log(usuarioLeonel())

//----Empy Export
//Cargar codigo que no son variables o funciones.. osea if etc..

import './src/emptyExport'