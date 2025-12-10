nombre = ['leonel', 'carlos', 'dayana'];

const saludo = (nombre = 'amigoo') => {//argumentos
    console.log(`holaa ${nombre[0]}`);
    console.log(`holaa ${nombre[1]}`);
    console.log(`holaa ${nombre[2]}`);
};

saludo(nombre);//parametros

//Calculadora

const operador = (tipo, num , num2) =>{ //pasando num y num2 por argumento
    switch(tipo){
        case 'suma' : 
        return num + num2
        
        case 'resta' : 
        return num - num2;
    }
}
console.log(operador('suma', 2, 5))//pasando los numero de forma dinamica por parametros
console.log(operador('resta', 32, 232))