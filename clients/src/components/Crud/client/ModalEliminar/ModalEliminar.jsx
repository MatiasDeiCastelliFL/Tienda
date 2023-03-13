import React, { useState} from "react";
import axios  from "axios";
const ModalEliminar = ({eliminarModal, setEliminarModal,eliminarCliente}) => {
    const tipo="Cliente eliminado correctamente"
    const [clientsEliminado, setClientsEliminado] = useState(false);
    const mensajeMostrar = () => {
        setTimeout(() => {
          setClientsEliminado(false)
          setEliminarModal(false)
          window.location.reload();
        }, 3000);
      };


    const EliminarCliente=async(id)=>{
        let urlEliminar=`http://localhost:3004/Cliente?id=${id}`
        const respuesta=await axios.delete(urlEliminar);
        if(respuesta.data.mensaje==="La cuenta se elimino Correctamente"){
            setClientsEliminado(true)
            mensajeMostrar()
        }

    
        
    }

    return (
        <div className='fixed z-50 top-0 left-0 flex justify-center items-center w-full h-screen text-black'>
            
            <div className='w-full relative z-10 top-0 left-0 h-screen bg-black/40'>               
            </div>    
            
            <div className={clientsEliminado? 'absolute z-20 py-8 px-12 bg-white rounded-b-xl flex flex-col justify-center items-center': 'absolute z-20 py-8 px-12 bg-white rounded-xl flex flex-col justify-center items-center'}>
            {clientsEliminado && (
            <h4 className="absolute z-10 h-[60px] rounded-t-xl w-full top-[-60px] flex justify-center items-center font-semibold text-2xl bg-green-500 text-white">
              {tipo}
            </h4>
          )}
                
            <div className="border-4 mb-6 border-red-500 rounded-[50%] w-[80px] h-[80px] grid place-content-center">
                    <h1 className="text-red-500 text-[52px] font-semibold">!</h1>
            </div>
                <h1 className="text-[42px] mb-4">¿Estas seguro?</h1>
                <h1 className="text-gray-400 text-xl font-light">El cliente {eliminarCliente.name} será eliminado y no podrá ser recuperado.</h1>
                <div className="text-white flex justify-center gap-4 mt-6">
            
                    <button onClick={ (e)=>EliminarCliente(eliminarCliente.id)} className="text-xl rounded-md px-4 py-2 bg-green-500">
                        Sí, borrar ahora!
                    </button>

                    <button className="text-xl rounded-md px-4 py-2 bg-red-500" onClick={() => {
                    setEliminarModal(false)
                }}>
                        Cancelar
                </button>
                </div>
            </div>
        </div>
    )
}
export default ModalEliminar