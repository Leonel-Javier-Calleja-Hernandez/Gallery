//estructura de una condicional
const usuario = {
    edad : 27,
    pais : 'mexico',
    ticket : false,
};

/*
//Ejemplo 1
if(usuario.edad >= 18){
    console.log('El usuario es mayor de edad y puede ingresar 😌')
}else(){
   console.log('El es menor de edad y no puede ingresar 😔 ')
}

//Ejemplo 2
if(usuario.edad >= 18 && usuario.ticket){
    console.log('el usuario puede ingresar')
}else{
    console.log('el usuario NO puede ingresar')
}


//Ejemplo 3
if(usuario.edad >= 18){
    if(usuario.ticket){
        console.log('el usuario es menor de edad y tiene un ticket')
    }else{
        console.log('el usuario es mayor de edad, Pero no tiene ticket ')
    }
}else{
    console.log('NO TIENE LA EDAD')
}
*/
//Ejemplo 4
if(usuario.pais == 'mexico'){
    console.log('el usuario es de mexico')
}else if(usuario.pais == 'colombia'){
    console.log('el usuario es de colombia')
}else{
    console.log('el usuario es de otro pais')
}