// Exportamos una función ANÓNIMA como exportación por defecto (default)
// Esto significa que este archivo solo va a exportar UNA cosa principal.
// La función no tiene nombre porque no lo necesitamos.
// Cuando la importemos en otro archivo, podremos ponerle el nombre que queramos.

export default () => {

    // Esta función devuelve un objeto con datos del usuario.
    // Puedes organizar tu lógica aquí, pedir datos, procesarlos, etc.
    return {
        nombre: 'leonel',
        correo: 'leocallejas565@gmail.com',
    };
};
