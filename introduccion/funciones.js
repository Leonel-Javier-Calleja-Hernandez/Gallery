//funcion 1
function saludo(){
    console.log('hola :D');
};

//funcion 2
function saludo2(){
    return "holaa desde el return saludo";
};
console.log(saludo2());

//funcion 3
const saludarFun = function(){
    console.log("hola desde variable");
};
saludarFun();

//function 4 tipo flecha
const funflecha = () => {
    console.log('holaaa con funcion flecha')
}
funflecha()