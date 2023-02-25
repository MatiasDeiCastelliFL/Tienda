import React from 'react';


import "../../Estilos/css.css"
import Side from './SideBar/Side';
import { Route, Routes } from 'react-router-dom';
import Empleado from '../pages/Empleado';
import Cliente from '../pages/Cliente';
import Home from '../pages/Home';
import Venta  from '../pages/Venta';
// import Side from './SideBar/Side';
// import { Route, Routes } from 'react-router-dom';


export default function Panel() {
  return (
    <div className='bg-gray-200 min-h-screen p-5 box-border'>
      { <Side/> }
      
          
          
        <div className='ml-[300px]'>
        <Routes>
            <Route path='empleado'  element={<Empleado /> }/>
            <Route path='cliente' element={<Cliente />}/>
            <Route path='home' element={<Home/>}/> 
            <Route path='Venta' element={<Venta/>}/> 
        </Routes>
        </div>

      
     
    </div>
  );
}
