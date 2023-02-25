import React,{useState} from 'react';
import { useDispatch} from 'react-redux';
import '../Estilos/css.css';
import {useNavigate } from "react-router-dom";
import { getEmpleado } from '../redux/reducers/thunks';
import axios from "axios";
import microsoft from "../imgs/microsoft.png"
import google from "../imgs/google.png"


export default function Login() {

    const [visibility, setVisibility] = useState(false);

    const ocultar = () => {
        if(visibility === true) {
            setVisibility(false);
        console.log('desactivado')}
        else {
            setVisibility(true);
            console.log('activado')
        }
    }

  const navigate= useNavigate()


    const DatosEstado={
        Email:"",
        Pass:""
    }

    // const datoCambio=false
    const [user, setUser] = useState(DatosEstado)
    const dispatch= useDispatch();
    const Iniciar = (e) =>{
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }




    const enviar =  async(e)=>{
        e.preventDefault();
        try {
            
            if(user.Email !== "" && user.Pass!==""){
                console.log("llegue")
                const {data} = await axios.get(`http://localhost:3004/Empleado/Comprobar/?email=${user.Email}&pass=${user.Pass}`)
                console.log(data)
                if(data==="Ingresando"){
                    dispatch(getEmpleado(user))
                    navigate("/home")
                }else{
                    if(data=== "La contraseña no coinciden"){
                        console.log("llegue2")
                    }else{
                        console.log("llegue3")
                    }
                }

            }else{
                console.log("no llegue")
            }
        } catch (error) {
            console.log(error)
        }
    }


    const MostrarTexto=()=>{
        console.log(user)
    }

    return (
        <div className="w-full flex h-screen bg-red-500">

            <div  className='w-full hidden md:w-1/2 md:block h-screen'>
                <img className='w-full h-screen object-cover' src='https://wallpaperaccess.com/full/2752593.jpg' alt='Foto'/>
            </div>

            <div className='w-full md:w-1/2 h-screen bg-white flex justify-center items-center'>
                <form id='formulario' onSubmit={(e)=>enviar(e)} className='bg-white flex flex-col justify-center w-[60%] h-3/4'>
                    <h1 className='text-center text-[38px] font-[500] mb-6'>Iniciar Sesion con</h1>
                    <div className='flex gap-4 justify-center items-center w-full mb-4'>
                        <button onClick={MostrarTexto} className='cursor-pointer bg-[rgb(236,242,247)] w-[70px] h-[50px] rounded-lg grid place-content-center'>
                            <img src={google} className='w-[25px]' alt='Google'/>
                        </button>
                        <button onClick={MostrarTexto} className='cursor-pointer bg-[rgb(236,242,247)] w-[70px] h-[50px] rounded-lg grid place-content-center'>
                            <img src={microsoft} className='w-[25px]' alt='Google'/>
                        </button>
                        <button onClick={MostrarTexto} className='cursor-pointer bg-[rgb(236,242,247)] w-[70px] h-[50px] rounded-lg grid place-content-center'>
                            <i class="fa-brands fa-facebook-f text-[25px] text-blue-800"></i>
                        </button>
                    </div>
                    <div className='w-full h-[80px] flex justify-center items-center'>
                        <div className='w-full h-[1px] bg-gray-300'></div>
                        <div className='w-full text-center text-gray-300'><h1>O ingresa con tu email</h1></div>
                        <div className='w-full h-[1px] bg-gray-300'></div>
                    </div>
                    <div className='w-full h-[60px] rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4 mb-4'>
                        <i class="fa-solid fa-envelope text-[20px]"></i>
                        <div className='w-full h-full flex-col justify-center py-2'>

                            <label className='block text-sm'>Email</label>
                            
                            <input type='text' onChange={Iniciar} value={user.Email} name="Email" className='text-sm text-black w-full bg-transparent outline-0' placeholder='@mail.com'/>
                            
                        </div>
                    </div>

                    <div className='w-full h-[60px] rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4'>

                        <i class="fa-solid fa-lock text-[20px]"></i>
                        <div className='w-full h-full flex-col justify-center py-2'>

                            <label className='block text-sm'>Contraseña</label>
                            
                            <input type={visibility? 'password':'text'} name="Pass"  onChange={Iniciar} value={user.Pass} className='text-sm text-black w-full bg-transparent outline-0' placeholder='*******'/>

                        </div>
                        <button onClick={ocultar}>
                                {!visibility? <i class="fa-solid fa-eye-slash text-[20px]"></i>:<i class="fa-solid fa-eye text-[20px]"></i>}
                        </button>

                    </div>

                    <div className='flex justify-between mt-4'>

                        <div className='flex justify-center items-center'>
                            <input type='checkbox' name="remember" id="remember" className='mr-2 w-4 h-4 '/><label>Recordar contraseña</label>
                        </div>
                        <a href='https://www.pornhub.es' className='underline decoration-solid font-semibold'>¿No recuerdas tu contraseña?</a>

                    </div>
                    <input className='cursor-pointer text-white text-xl font-semibold bg-gradient-to-r from-red-400 via-red-500 py-2 to-red-600 w-full rounded-lg mt-6' type='submit' value='Iniar Sesión'/>


                    <div className='mt-8 text-center'>
                        <h1>No tienes una cuenta? <a href='https://www.pornhub.es' className='underline decoration-solid font-semibold'>Registrate</a></h1>
                    </div>

                </form>
            </div>

        </div>
    );
}

