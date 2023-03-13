import React from 'react';
import { auth,provider } from './Config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import google from "../../imgs/google.png";
import axios from 'axios';

const BotonGoogle = ({setValue}) => {
    const navigate = useNavigate();
    const InciarGoogle=()=>{
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
       
        <div>
            <button onClick={InciarGoogle} className="cursor-pointer bg-[rgb(236,242,247)] w-[70px] h-[50px] rounded-lg grid place-content-center">
              <img src={google} className="w-[25px]" alt="Google" />
            </button>
        </div>
    );
}

export default BotonGoogle;
