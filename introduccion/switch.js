const usuario = {
    nombre : 'leonel',
    pais : 'colombia',
}

switch(usuario.pais){
    case 'mexico': console.log('El usaurio es de mexico');
    break;
    case 'colombia': console.log('El usuario es de colombia');
    break;
    case 'peru': console.log('El usuario es de peru');
    break;
    default: 
    console.log('El usuario es de otro pais')
}