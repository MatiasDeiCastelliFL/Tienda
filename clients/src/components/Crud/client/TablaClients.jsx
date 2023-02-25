import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./ModalAgregar/Modal";
import Paginacion from "../../paginado/Paginacion";
import ModalEliminar from "./ModalEliminar/ModalEliminar";

const TablaClients = () => {
  const url = "http://localhost:3004/Cliente/";
  const [showModal, setShowModal] = useState(false);
  const [eliminarModal, setEliminarModal] = useState(false);
  const [cliente, setClientes] = useState([]);
  useEffect(() => {
    getCliente();
  }, []);



  const [eliminarCliente,setEliminarCLiente]=useState({
    name:null,
    id:null
  })


  const getCliente = async () => {
    const respuesta = await axios.get(url);
    setClientes(respuesta.data);
  };

  // obtenemos la pagina actual

  const [paginaActual, setPaginaActual] = useState(1);
  const [Operations, setOperations] = useState({
    nombre:"",
    id:null
  })

  // Declaramos cuanto registro por pagina queremos

  const CantidaXPagina = 8;

  //Obtenemos el indice del primer cleinte

  const primerCliente = (paginaActual - 1) * CantidaXPagina;

  // obtenemos el indice del ultimo

  const UltimoCliente = paginaActual * CantidaXPagina;

  const ArregloCliente = cliente.slice(primerCliente, UltimoCliente);

  

const AbrirModal=(nombre,id=null)=>{
 
  setOperations({
    nombre:nombre,
    id:id
  })
  setShowModal(true)

}


const AbrirModalEliminar=(nombre,id)=>{

    setEliminarCLiente({
      name:nombre,
      id:id
    })
    setEliminarModal(true)
}


  const actualizarEstado = async (estado, client) => {
    if (estado === true) {
      const Desactivar = `http://localhost:3004/Cliente/desactivar?id=${client.id}`;
      await axios.put(Desactivar);
      window.location.reload();
    } else {
      const urlActivar = `http://localhost:3004/Cliente/activar?id=${client.id}`;
      await axios.put(urlActivar);
      window.location.reload();
    }
  };

  const paginado=(numeroPAgina=>{return setPaginaActual(numeroPAgina)});
  return (
    <div className="relative h-[858px] flex box-content ml-5 shadow-lg ">
      <div className="bg-gradient-to-br  to-red-500 from-primary  h-[90px] mx-auto rounded-2xl p-5 shadow-xl shadow-primary/50] z-40 w-[97%] justify-between flex items-center">
        <h1 className="text-2xl font-bold">Panel Cliente</h1>
        <button onClick={()=> AbrirModal("Guardar")}>
          <i className="fa-solid fa-user-plus text-3xl"></i>
        </button>
      </div>

      <div className="h-[84px]  top-[40px] rounded-t-2xl z-20 w-full bg-white rounded-y-2xl absolute"></div>
      <div className="bg-white bottom-0 absolute h-[742px] overflow-x-auto px-8 w-full rounded-2xl">
        <table className="w-full min-w-[640px] table-auto text-black  ">
          <thead>
            <tr className="">
              <td className="py-3 px-5">Cliente</td>
              <td className="py-3 px-5">Documento</td>
              <td className="py-3 px-5 text-center">Direccion</td>
              <td className="py-3 px-5 text-center">Contacto</td>
              <td className="py-3 px-5 text-center">Estado</td>
              <td className="py-3 px-5 text-center">Funciones</td>
            </tr>
          </thead>
          <tbody>
            {ArregloCliente.map((cliente, id) => (
              <tr className="border-y-2" key={cliente.id}>
                <td className="py-3 px-5 flex">
                  <div className="flex gap-4 items-center">
                    <img
                      className="rounded-lg min-w-[50px] w-[50px] object-cover h-[50px]"
                      src={cliente.imagen}
                      alt="perfil"
                    />
                    <div>
                      <h1>{cliente.nombre + " " + cliente.apellido}</h1>
                      <span className="text-slate-400 text-sm">
                        {cliente.nombreUsuario}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="py-3 px-5">
                  <div className="flex gap-2 items-center">
                    <h1 className="inline py-1 text-white font-semibold px-2 bg-green-400 rounded-lg">
                      {cliente.documento.nombre}
                    </h1>
                    <h1 className="">{cliente.nro_Documento}</h1>
                  </div>
                </td>

                <td className="py-3 px-5 text-center">
                  {cliente.direccion + " " + cliente.nroDireccion}
                </td>

                <td className="py-3 px-5">
                  <div className="text-center">
                    <h1>
                      <i className="fa-solid fa-envelope"></i>
                      {" " + cliente.email}
                    </h1>
                    <h1>
                      <i className="fa-solid fa-phone"></i>
                      {" " + cliente.telefono}
                    </h1>
                  </div>
                </td>

                <td className="py-3 px-5">
                  <div className="flex gap-2 items-center justify-center">
                    <h1
                      className={
                        cliente.activo
                          ? "text-center py-1 text-white font-semibold px-2 bg-green-400 rounded-lg "
                          : "text-center py-1 text-white font-semibold px-2 bg-red-400 rounded-lg ]"
                      }
                    >
                      {cliente.activo ? "Activado" : "Desasctivado"}
                    </h1>
                    <button
                      className="bg-blue-400 rounded-lg px-2 py-1"
                      onClick={(e) => actualizarEstado(cliente.activo, cliente)}
                    >
                      <i className="fa-solid fa-rotate text-white"></i>
                    </button>
                  </div>
                </td>

                <td className="py-3 px-5">
                  <div className="flex gap-x-2 justify-center text-white text-md items-center">
                    <button onClick={() => {
                      AbrirModalEliminar(cliente.nombre,cliente.id);
                    }} className="bg-red-400 rounded-xl w-[120px] px-3 py-2">
                      <i className="fa-solid fa-trash"></i>
                      <h1 className="inline">Eliminar</h1>
                    </button>

                    <button onClick={()=>AbrirModal("Modificar",cliente.id)} className="bg-green-400  rounded-xl w-[120px] px-3 py-2">
                      <i className="fa-solid fa-edit"></i>
                      <h1 className="inline">Editar</h1>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      
      </div>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} Operations={Operations}/>
      ) : null}
      {eliminarModal ? (
        <ModalEliminar eliminarModal={eliminarModal} setEliminarModal={setEliminarModal} eliminarCliente={eliminarCliente}/>
      ) : null}
      <Paginacion todoCliente={cliente} paginado={paginado} totalPagina={CantidaXPagina}/>
    </div>
  );
};

export default TablaClients;
