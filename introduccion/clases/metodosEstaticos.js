class Usuario{
    static usuarios = []

    constructor(nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
       
        //agregar usuarios array
        Usuario.usuarios.push(nombre)
    }
    borrarUsuario(id){
        console.log('se a borrado el usuario ' + id )
    }
    static verUsuarios(){
        Usuario.usuarios.forEach((i) => {console.log(i)});
    }
    static registrados(){
        console.log(Usuario.usuarios.length);
    }
}

let usuario = new Usuario('leonel','leocallejas565@gmail.com')
let usuario2 = new Usuario('angel')
let usuario3 = new Usuario('daniel')
usuario.borrarUsuario(1)


//Con la palabra static al lado de el metdo se puede usar los metodos sin la necesidad de inicialisar un odjeto 
// osea poder usar los propios metodos de la clase sin la nesecidad de crear uno nuevo

Usuario.verUsuarios()
Usuario.registrados()