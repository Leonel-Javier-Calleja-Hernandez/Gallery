const user = {
    nombre : 'leonel',
    edad : 19,
    amigos : ['Alejandro', 'Cesar', 'Manuel'],
    saludo : () => {
        console.log (`holaa`)
    }
}

// METODOS PARA OBJETOS (los más usados y fáciles de entender)

// 1. user.saludo() 
// Ejecuta el método (función) que está dentro del objeto.
user.saludo(); // → "holaa"


// 2. Object.keys(obj)
// Devuelve un array con los nombres de las propiedades.
console.log( Object.keys(user) );
// → ['nombre', 'edad', 'amigos', 'saludo']


// 3. Object.values(obj)
// Devuelve un array SOLO con los valores.
console.log( Object.values(user) );
// → ['leonel', 19, ['Alejandro','Cesar','Manuel'], ƒ saludo()]


// 4. Object.entries(obj)
// Devuelve todo en pares [clave, valor].
console.log( Object.entries(user) );
// → [['nombre','leonel'], ['edad',19], ...]


// 5. Object.assign(destino, fuente)
// Copia propiedades de un objeto a otro.
const copiaUser = Object.assign({}, user);
console.log(copiaUser);


// 6. Object.freeze(obj)
// Congela el objeto para que NO se pueda modificar.
Object.freeze(user);
// user.edad = 20; // ❌ ya no se puede cambiar
// user.pais = 'Colombia'; // ❌ tampoco agregar


// 7. Object.hasOwn(obj, 'propiedad')
// Verifica si el objeto tiene esa propiedad.
console.log( Object.hasOwn(user, 'edad') ); // true
console.log( Object.hasOwn(user, 'altura') ); // false


// 8. delete obj.propiedad
// Elimina una propiedad del objeto.
delete copiaUser.edad;
console.log(copiaUser);
