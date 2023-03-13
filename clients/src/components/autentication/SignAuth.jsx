import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SignAuth({value}) {

    const [tipo,setTipo] = useState([]);

    const [Error, setError] = useState([])
  
    const navegar= useNavigate()
    const Tipo = async () => {
        const urlTipo = "http://localhost:3004/Documento";
        const respuesta = await axios.get(urlTipo);
        setTipo(respuesta.data);
    };


    useEffect(() => {
        Tipo();
      }, []);



    const EnviarFormulario = async (e)=>{
            e.preventDefault();
            const nombre= document.getElementById("NombreForm").value;
            const apellido= document.getElementById("ApellidoForm").value;
            const NombreUsuario= document.getElementById("NombreUsuarioForm").value;
            const Documento= document.getElementById("DocumentoForm").value
            const Telefono=document.getElementById("TelefonoForm").value.toString();
            const Documentoid= document.getElementById("TipodocumentoId").value;
            



            const DatoEnviar = {
                nombre: nombre,
                apellido: apellido,
                nro_Documento:Documento,
                telefono: Telefono,
                email: value.email,
                imagen: value.photoUrl,
                nombreUsuario: NombreUsuario,
                documentoId:Documentoid || 0,
            };

            


            const ClienteCreado= await axios.post("http://localhost:3004/Cliente/Auntenticate",DatoEnviar)
            const error= ClienteCreado.data.error

            if(error){
                setError(error)
                console.log(Error)
            }else{

               navegar("/home")
            }

      }



  return (
    <div className="w-full flex h-screen bg-red-500">
        <div className="w-full lg:block hidden lg:w-1/2 h-screen">
        <img
            className="w-full h-screen object-cover"
            src="https://wallpaperaccess.com/full/2752593.jpg"
            alt="Foto"
        />
        </div>

        <div className="w-full lg:w-1/2 h-screen bg-white flex justify-center items-center">
            <form onSubmit={(e)=>{EnviarFormulario(e)}}
            id="formularioAuth"

            className="bg-white flex flex-col justify-center items-center xl:w-[60%] w-[80%] h-3/4"
            >
                <h1 className="text-center text-[38px] font-[500]">
                    Completar Registro
                </h1>

                <img src={value.photoUrl} alt='foto' className='w-[100px] rounded-[50%] my-8'/>
                

                <div className="w-full flex flex-col sm:flex-row gap-4 mb-4">
                    <div className='sm:w-1/2 w-full'>
                        <div className='h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 mb-1 flex gap-4 items-center'>
                            
                            <i className="fa-solid fa-envelope text-[20px]"></i>
                            <div className="w-full h-full flex-col justify-center py-2">
                            <label className="block text-sm">Nombre</label>

                            <input
                                type="text"
                                id='NombreForm'
                                defaultValue={value.firstName}
                                name="FirstName"
                                className="text-sm text-black w-full bg-transparent outline-0"
                            />
                            </div>
                        </div>
                        {Error.includes("Complete el campo de nombre") ?
                        <h1 className='text-sm text-red-500'>*Complete el campo de nombre</h1>: null}
                    </div>

                    <div className='sm:w-1/2 w-full'>
                        <div className='h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 mb-1 flex gap-4 items-center'>
                            <i className="fa-solid fa-envelope text-[20px]"></i>
                            <div className="w-full h-full flex-col justify-center py-2">
                            <label className="block text-sm">Apellido</label>

                            <input
                                type="text"
                                defaultValue={value.lastName}
                                id="ApellidoForm"
                                name="LastName"
                                className="text-sm text-black w-full bg-transparent outline-0"
                            />
                            </div>
                        </div>
                        {Error.includes("Complete el campo de apellido") ?
                        <h1 className='text-sm text-red-500'>*Complete el campo de apellido</h1>: null}
                    </div>
                    
                </div>

                <div className="w-full flex flex-col sm:flex-row mb-4 gap-4">
                    <div className='sm:w-1/2 w-full'>
                        <div className='h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 mb-1 flex gap-4 items-center'>
                            <i className="fa-solid fa-id-card text-[20px]"></i>
                            <div className="w-full h-full flex justify-start items-center py-2">

                            <select  name="TipodocumentoId" id="TipodocumentoId" className="text-sm text-start text-black w-full bg-transparent outline-0" defaultValue="0">
                                <option disabled value='0'>
                                    Tipo Documento
                                </option>
                                {
                                tipo.length > 0 && tipo.map((tipo) => (
                                <option key={tipo.id} value={tipo.id}>
                                    {tipo.nombre}
                                </option>
                            ))}
                                
                            </select>

                            </div>
                        </div>
                        {Error.includes("Complete el campo de tipo de documento") ?
                        <h1 className='text-sm text-red-500'>*Complete el campo de tipo de documento</h1>: null}
                    </div>

                    <div className='sm:w-1/2 w-full'>
                        <div className=' h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 mb-1 flex gap-4 items-center'>
                            <i className="fa-solid fa-hashtag text-[20px]"></i>
                            <div className="w-full h-full flex-col justify-center py-2">
                            <label className="block text-sm">Documento</label>
                            <input
                                type="text"
                                id="DocumentoForm"
                                name="DocumentoForm"
                                className="text-sm text-black w-full bg-transparent outline-0"
                            />
                            </div>
                        </div>
                        {Error.includes("Complete el campo de numero de documento") ?
                        <h1 className='text-sm text-red-500'>*Complete el campo de numero de documento</h1>: null}
                    </div>
                
                    
                </div>

                <div className="w-full h-[60px] rounded-xl opacity-[0.8] flex gap-4 items-center bg-[rgb(236,242,247)] px-4 mb-4">
                    <i className="fa-solid fa-envelope text-[20px]"></i>
                    <div className="w-full h-full flex-col justify-center py-2">
                    <label className="block text-sm">Email</label>

                    <input
                        type="text"
                        defaultValue={value.email}
                        disabled
                        id='FormEmail'
                        name="Email"
                        className="text-sm text-black w-full bg-transparent outline-0"
                    />
                    </div>
                </div>

                <div className="w-full h-[60px] rounded-xl flex gap-4 mb-1 items-center bg-[rgb(236,242,247)] px-4">
                    <i className="fa-solid fa-phone text-[20px]"></i>
                    <div className="w-full h-full flex-col justify-center py-2">
                    <label className="block text-sm">Telefono</label>

                    <input
                        type="text"
                        name="telefono"
                        id='TelefonoForm'
                        className="text-sm text-black w-full bg-transparent outline-0"
                        placeholder="+00 123456"
                    />
                    </div>
                    
                </div>
                {Error.includes("Complete el campo de numero de telefono") ?
                    <h1 className='w-full text-start text-sm text-red-500'>* Complete el campo de telefono</h1>: null}
                
                <div className="w-full h-[60px] mb-1 rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4 mt-4">
                    <i className="fa-solid fa-user text-[20px]"></i>
                    <div className="w-full h-full flex-col justify-center py-2">
                    <label className="block text-sm">Nombre de Usuario</label>

                    <input
                        type="text"
                        id='NombreUsuarioForm'
                        name="Username"
                        className="text-sm text-black w-full bg-transparent outline-0"
                    />
                    </div>
                </div>
                {Error.includes("Complete el campo de nombre de usuario") ?
                    <h1 className='w-full text-sm text-start text-red-500'>*Completa el usuario</h1>: null}

                <input
                    className="cursor-pointer text-white text-xl font-semibold bg-gradient-to-r from-red-400 via-red-500 py-2 to-red-600 w-full rounded-lg mt-8"
                    type="submit"
                    value="Registrar"
                />
                
            </form>
        </div>
</div>
  )
}
