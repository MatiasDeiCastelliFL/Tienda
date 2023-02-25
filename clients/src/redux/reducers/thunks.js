import axios from "axios";
import { BuscarUsuario,Cargando } from "./ReducerLogin"


const getEmpleado = (usuario)=>{

    const email= usuario.Email;
    return async(dispatch,getState)=>{
        dispatch(Cargando());
        const respuesta= await axios.get(`http://localhost:3004/Empleado/?email=${email}`);
        const {data}= respuesta
        console.log(data[0].id)
        const DatoUsuarios={
            id: data[0].id,
            nombre: data[0].nombre, 
            apellido: data[0].apellido,
            documento:data[0].documento.nombre,
            nro_Documento: data[0].nro_Documento,
            direccion: data[0].direccion,
            nroDireccion: data[0].nroDireccion,
            telefono:data[0].telefono,
            email:data[0].email,
            role:data[0].role.name,
            nombreUsuario:data[0].nombreUsuario,
            clave:data[0].clave,
            activo:data[0].activo  
        }
        dispatch(BuscarUsuario(DatoUsuarios))
        
    }
}

export{getEmpleado};