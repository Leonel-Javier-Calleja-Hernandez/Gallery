//los odjetos se pueden organisar la informacion
const persona = {
    nombre : 'leonel',//propiedad
    edad : 27,
    correo : 'leocallejs55@gmail.com',
    suscripciones: {
        wed : true,
        correo : true,
    },
    coleresFavoritos : ['negro', 'rojo'],
    saludar: function(p){//metodos
        alert('ho8laaa :D ' + p )
    }
};
console.log(persona['edad']);

let variable = 'correo'
console.log(persona[variable])

console.log(persona.suscripciones.wed)

persona.pais = "Colombia"


persona.pais = "España"
console.log(persona)
persona.saludar(persona.nombre)