import { Usuario } from './usuario';


export class UsuariosLista{
    private lista: Usuario[] = [];

    constructor(){

    }

    //AGREGAR USUARIOS A LA LISTA
    public agregar( usuario: Usuario ){
        this.lista.push(usuario);
        console.log("nuevo usuario en lista: ", this.lista);
        return usuario;
        
    }

    //ACTUALIZAR EL NOMBRE DEL USUARIO
    public actualizarNombre ( id: string, nombre: string ){

        for ( let usuario of this.lista ){
            if (usuario.id === id){
                usuario.nombre= nombre;
                break;
            }
        }

        console.log("Actualizando usuario....", this.lista);
    }

    //OBTENER LA LISTA ACTUAL DE USUARIO
    public getLista(){
        return this.lista;
    }


    //OBTENER USUARIO POR ID
    public getUsuario (id: string){
        return this.lista.find( usuario =>{
            return usuario.id === id;
        })
    }

    //OBTENER USUARIOS DE UNA SALA EN PARTICULAR
    public getUsuariosEnSala( sala: string){
        return this.lista.filter( usuario=>{
           return usuario.sala === sala;
        })
    }

    //BORRAR UN USUARIO
    public borrarUsuario( id: string ){
        const tempUser = this.getUsuario ( id );

        this.lista = this.lista.filter( usuario =>{
            return usuario.id !== id;
        });

        return tempUser;
    }

}