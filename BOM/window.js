console.log(window)

window.alert("holaaa")

console.log('la ventana mide : ' + window.innerWidth + ' y tiene de alto : ' + window.innerHeight)

//poder abrir ventanas de el navegador

let ventana;

const abrirVentana = () => {
    ventana = window.open('','nuevaVentana', 'width=500 height=500');
    ventana.document.write('<h1>HOLAAAAAAA<h1>')
} 

const cerrarVentana = () => {
    ventana.close
}

