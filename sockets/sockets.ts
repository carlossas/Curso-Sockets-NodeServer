import { Socket } from 'socket.io'
import socketIO from 'socket.io';

//Desconexión
export const desconectar = ( cliente: Socket )=>{

    cliente.on('disconnect', ()=>{
        console.log("Cliente desconectado");
        
    })

}

//Esuchar mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server )=>{

    cliente.on('mensaje', ( payload: any )=>{
        console.log("mensaje recibido", payload);
        io.emit('mensaje-nuevo', payload)
    })

}

//Configurar usuario
export const configurarUsuario = ( cliente: Socket, io: socketIO.Server )=>{

    cliente.on('configurar-usuario', ( payload: any, callback: Function )=>{
        console.log("configurando usuario server: ", payload.nombre);

        callback({
            ok: true,
            mensaje: "usuario configurado: " + payload.nombre
        });
    })

}

