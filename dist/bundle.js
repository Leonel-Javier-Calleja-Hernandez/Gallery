(function () {
    'use strict';

    //forma 1 export
    const nombre = 'leonel';

    const obtenerPost = ( ) =>{
        return ['port1', 'post2','post3']
    };

    //forma 2 exporta al final

    let numeros = [1,2,3,5,6,6,7,55,3];
    let cosa = 'Zapato';
    function sumar(a, b) {
        return a + b
    }

    // Exportamos una función ANÓNIMA como exportación por defecto (default)
    // Esto significa que este archivo solo va a exportar UNA cosa principal.
    // La función no tiene nombre porque no lo necesitamos.
    // Cuando la importemos en otro archivo, podremos ponerle el nombre que queramos.

    var usuarioLeonel = () => {

        // Esta función devuelve un objeto con datos del usuario.
        // Puedes organizar tu lógica aquí, pedir datos, procesarlos, etc.
        return {
            nombre: 'leonel',
            correo: 'leocallejas565@gmail.com',
        };
    };

    console.log("codigo completo de js, Pero ls variables y funciones NO");

    //----nameExports.js


    console.log('MI nombre es: ' + nombre);
    console.log(obtenerPost());
    console.log(numeros);

    console.log(cosa);

    console.log(sumar(3,4));

    console.log(usuarioLeonel());

})();
//# sourceMappingURL=bundle.js.map
