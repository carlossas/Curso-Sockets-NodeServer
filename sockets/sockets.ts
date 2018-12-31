import { Socket } from 'socket.io'
import socketIO from 'socket.io';
//CLASES
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new UsuariosLista();

export const conectarCliente = ( cliente: Socket ) =>{
    const usuario = new Usuario ( cliente.id )
    usuariosConectados.agregar( usuario );
}

//Desconexión
export const desconectar = ( cliente: Socket )=>{

    cliente.on('disconnect', ()=>{
        console.log("Cliente desconectado");

        usuariosConectados.borrarUsuario( cliente.id );
        
    });

}

//Esuchar mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server )=>{

    cliente.on('mensaje', ( payload: any )=>{
        console.log("mensaje recibido", payload);
        io.emit('mensaje-nuevo', payload)
    });

}

//Configurar usuario
export const configurarUsuario = ( cliente: Socket, io: socketIO.Server )=>{

    cliente.on('configurar-usuario', ( payload: any, callback: Function )=>{
        
        usuariosConectados.actualizarNombre( cliente.id, payload.nombre );
        
        callback({
            ok: true,
            mensaje: "usuario configurado: " + payload.nombre
        });
        
    });

}

