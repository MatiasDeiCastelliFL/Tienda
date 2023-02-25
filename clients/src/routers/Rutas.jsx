import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Login from '../components/Login';
import Panel from '../components/panelDueño/Panel';

export default function Rutas() {
  return (
    <div className='font-Robote'>

   
    <Routes>  
        <Route path='/Login' element={<Login/>}/>
        <Route path='/*' element={<Panel/>}/>

    </Routes>
    </div>
    
  );
}


