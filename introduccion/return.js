//Si no estás dentro de una función, no puedes usar return, ya que este es SOLO PARA FUNCIONES.
const operacion = (tipo, num1, num2) => {
    return;
    if(tipo === "suma"){
        return num1 + num2
    }else if(tipo === 'resta'){
        return num1 - num2
    };
}
const varible = operacion("suma", 2, 5)
console.log(varible)