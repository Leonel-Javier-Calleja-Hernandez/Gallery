//crear un elemento estos son los paso para crear un elemento
const agregarCajaI = () =>{
    //1.se crea la caja
    nuevaCaja = document.createElement('div')

    //2. el texto y atributos
    nuevaCaja.innerText = 'N caja Izquierda'
    //nuevaCaja.setAttribute('id', 'nueva-Caja') se los id son unicos por lo canto esto queda comentado solo es de ejemplo
    nuevaCaja.setAttribute('class', 'caja activa')

    //agregar el elemento
    //1.contenedor donde se pueda inserta osea donde esta el primer contenedro

    const contenedor = document.getElementById('contenedor1')

    //4.donde ponerlo
    contenedor.appendChild(nuevaCaja)
 }

 const agregarCajaD = () =>{
    nuevaCaja = document.createElement('div')

    nuevaCaja.innerText = 'N caja DERECHA'
    nuevaCaja.setAttribute('class', 'caja derecha')

    const contenedor  = document.getElementById('contenedor2')

    contenedor.appendChild(nuevaCaja)


 }
