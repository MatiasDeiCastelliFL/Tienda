import React from 'react';
import Navegacion from '../panelDueño/Navegador/Navegacion';
import Carta from '../Card/Carta';
import Cookies from 'js-cookie';

import Grafics from '../Grafico/Grafics';
export default function Home() {
  const valorDeLaCookie = Cookies.get('DatosAutenticacion');
  console.log(valorDeLaCookie)
  return (
    <div className='text-white'>

      <div className=''>
          <Navegacion nombre="Home"/> 
      </div>

      <div className='pl-16 pr-11 py-5 gap-y-8 grid grid-cols-3 justify-items-center'>
        
        {<Carta nombre="Cliente" icono="FaUser"/>}
        {<Carta nombre="Empleado" icono="FaUser"/>}
        {<Carta nombre="Proveedor" icono="FaUser"/>}
        {<Carta nombre="Venta" icono="FaChartLine"/>}
        {<Carta nombre="Gastos" icono="FaCashRegister"/>}
        {<Carta nombre="Articulo" icono="FaCartPlus"/>}
        
      </div>

       <div className='grid grid-cols-3 justify-items-center'>
        <Grafics tip="line" color="primary"/> 
        <Grafics tip="bar" color="secundary"/>
        <Grafics tip="area" color="tersary"/>
       </div>

    </div>
  );
}
