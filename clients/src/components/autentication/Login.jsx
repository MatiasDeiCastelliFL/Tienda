import React, { useState } from "react";
import BotonGoogle from "../FireBase/BotonGoogle";
import BotonFaceboock from "../FireBase/BotonFaceboock";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect } from "react";


export default function Login({setValue}) {
  const imgan="https://wallpaperaccess.com/full/2752593.jpg"
  const navigate = useNavigate();
  const [userErroresInicio, setUserErroresInicio] = useState([])
  const [datosSesion, setDatosSesion] = useState(null);
  const DatosEstado = {
    Email: "",
    Pass: "",
  };
  const ErrorUsu=[]




  //Utilizar el hook useEffect para guardar los datos de sesión en una cookie cuando se actualice el estado datosSesion:
  useEffect(() => {
    if (datosSesion) {
      Cookies.set('datosSesion', JSON.stringify(datosSesion), { expires: 365 });
    } else {
      Cookies.remove('datosSesion');
    }
  }, [datosSesion]);



  // const datoCambio=false
  const [user, setUser] = useState(DatosEstado);

  const Iniciar = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const enviar = async (e) => {
    e.preventDefault();
    try {
      if (user.Email !== "" && user.Pass !== "") {
        const usuarioEmpleado= await axios.get(`http://localhost:3004/Empleado/?email=${user.Email}`)
        if(usuarioEmpleado.data !==null){
          const { data } = await axios.get(`http://localhost:3004/Empleado/Comprobar/?email=${user.Email}&pass=${user.Pass}`);

          if(data==="Ingresando"){

            const {email,clave}= usuarioEmpleado?.data;

            const datoSesion={
              email,
              clave
            }
            
            setDatosSesion(datoSesion)

            Cookies.set("DatosAutenticacion",JSON.stringify(datoSesion), { expires: 365 })
            navigate("/home");
          }else{
             ErrorUsu.push("El nombre de usuario o contraseña es incorrecta")
             setUserErroresInicio(ErrorUsu)
          }
        }else{
          const usuarioCliente= await axios.get(`http://localhost:3004/Cliente?email=${user.Email}`)

          if(usuarioCliente.data){
            const { data } = await axios.get(`http://localhost:3004/Cliente/Comprobar?email=${user.Email}&pass=${user.Pass}`);
            if(data==="Ingresando"){
              const {email,clave}= usuarioCliente?.data;
              const datoSesion={
                email,
                clave
              }
              setDatosSesion(datoSesion)
              Cookies.set("DatosAutenticacion",JSON.stringify(datoSesion), { expires: 365 })
              navigate("/Tienda")
            }else{
              ErrorUsu.push("El nombre de usuario o contraseña es incorrecta")
              setUserErroresInicio(ErrorUsu)
            }

          }

        }
        console.log(userErroresInicio)
    } else {
        console.log("no llegue");
    }
} catch (error) {
    console.log(error);
}
};

  const [visibility, setVisibility] = useState(false);
  const ocultar = () => {
    if (visibility === true) {
      setVisibility(false);
      console.log("desactivado");
    } else {
      setVisibility(true);
      console.log("activado");
    }
  };
  return (
    <div className="w-full flex h-screen bg-red-500">
      <div className="w-full hidden md:w-1/2 md:block h-screen">
        <img
          className="w-full h-screen object-cover"
          src="https://wallpaperaccess.com/full/2752593.jpg"
          alt="Foto"
        />
      </div>
    
      <div className="w-full md:w-1/2 h-screen bg-white flex justify-center items-center">
        <form
          id="formulario"
          onSubmit={(e) => enviar(e)}
          className="bg-white flex flex-col justify-center w-[80%] lg:w-[60%] h-3/4"
        >
          <div className='md:hidden justify-center items-center gap-4 flex mb-6'>
            <img
            className="w-full max-w-[100px] h-[100px] rounded-[50%] object-cover"
            src={imgan}
            alt="Foto"
            />
            <h1 className='md:hidden text-center text-[42px] font-[500]'>Tienda de Ropa</h1>
          </div>
          <h1 className="text-center text-[38px] font-[500] mb-6">
            Iniciar Sesion
          </h1>
          <div className="flex gap-4 justify-center items-center w-full mb-4">
           
          <BotonGoogle setValue={setValue}/> 
    
          <BotonFaceboock setValue={setValue} />
   
          </div>
          <div className="w-full h-[80px] flex justify-center items-center">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="w-full text-center text-gray-300">
              <h1>O ingresa con tu email</h1>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>
          <div className="w-full h-[60px] rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4 mb-4">
            <i className="fa-solid fa-envelope text-[20px]"></i>
            <div className="w-full h-full flex-col justify-center py-2">
              <label className="block text-sm">Email</label>

              <input
                type="text"
                onChange={Iniciar}
                value={user.Email}
                name="Email"
                className="text-sm text-black w-full bg-transparent outline-0"
                placeholder="@mail.com"
              />
            </div>
          </div>

          <div className="w-full h-[60px] rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4">
            <i className="fa-solid fa-lock text-[20px]"></i>
            <div className="w-full h-full flex-col justify-center py-2">
              <label className="block text-sm">Contraseña</label>

              <input
                type={visibility ? "text" : "password"}
                name="Pass"
                onChange={Iniciar}
                value={user.Pass}
                className="text-sm text-black w-full bg-transparent outline-0"
                placeholder="*******"
              />
            </div>
            <button onClick={ocultar}>
              {!visibility ? (
                <i className="fa-solid fa-eye-slash text-[20px]"></i>
              ) : (
                <i className="fa-solid fa-eye text-[20px]"></i>
              )}
            </button>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2 w-4 h-4 "
              />
              <label>Recordar contraseña</label>
            </div>
            <a
              href="https://www.pornhub.es"
              className="underline decoration-solid font-semibold"
            >
              ¿No recuerdas tu contraseña?
            </a>
          </div>
          <input
            className="cursor-pointer text-white text-xl font-semibold bg-gradient-to-r from-red-400 via-red-500 py-2 to-red-600 w-full rounded-lg mt-6"
            type="submit"
            value="Iniar Sesión"
          />

          <div className="mt-8 text-center">
            <h1>
              No tienes una cuenta?{" "}
              <NavLink to='/register'>
              <button
                
                className="underline decoration-solid font-semibold"
              >
                Registrate
              </button>
              </NavLink>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
