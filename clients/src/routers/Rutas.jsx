import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Panel from '../components/panelDueño/Panel';
import Register from '../components/autentication/Register'
import { useState } from 'react';
import Login from '../components/autentication/Login';
import SignAuth from '../components/autentication/SignAuth';

export default function Rutas() {
  const [value, setValue]=useState(null);

  return (

    <div className='font-Robote'>
  
    <Routes>
        
        <Route path='/' element={<Login setValue={setValue} value={value}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/register/:id" element={<SignAuth value={value}/>}/>
        <Route path='/*' element={<Panel/>}/>

    </Routes>
    </div>
    
  );
}


