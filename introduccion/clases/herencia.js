class Usuario{
    constructor(usuario, contrasenna){
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    };
    obtenerPosts(){
        const posts = ['Post1', 'Post2'];
        return posts;
    };
};

//Herencia

class Moderado extends Usuario{
    constructor(usuario,contrasenna,permisos){
        super(usuario,contrasenna);//copian todos los metosdo y propiedades tambien el constructor(son los valores de la clase padre) 
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`el post con el id: ${id} ha sido borrado`)
            this.obtenerPosts().splice(id-1, id)
            }else{
            console.log('no tienes el permiso');
        }

    }
}

const usuario1 = new Usuario('Leonel', '12345');
const moderado = new Moderado('Angel','128912',['borrar','editar']);

console.log(moderado.obtenerPosts())
moderado.borrarPost(1);
console.log(moderado.obtenerPosts())