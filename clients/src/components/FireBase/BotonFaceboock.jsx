import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { auth, provider } from './ConfigFaceboock';

export default function BotonFaceboock({setValue}) {

   const navigate = useNavigate();
   
    const InciarFaceboock=()=>{
        signInWithPopup(auth,provider).then(async data=>{
          const urlBuscar=`http://localhost:3004/Cliente/FiltrarAuntenticado?email=${data._tokenResponse.email}`
          const respuestaPeticion= await axios.get(urlBuscar)
          const Ingresar= respuestaPeticion.data.Ingresar

          if(Ingresar === true){
              
              navigate("/home")
          }else{
              setValue(data._tokenResponse)
              navigate(`/register/${data._tokenResponse.idToken}`)
          }
        }).catch(error=>console.log(error))
    }

  return (
    <>
      <button
              onClick={InciarFaceboock}
              className="cursor-pointer bg-[rgb(236,242,247)] w-[70px] h-[50px] rounded-lg grid place-content-center"
            >
              <i className="fa-brands fa-facebook-f text-[25px] text-blue-800"></i>
            </button> 
    </>
  );
}
