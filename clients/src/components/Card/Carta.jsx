import React from 'react';

import * as Faicons from 'react-icons/fa'
export default function Carta({nombre,icono}) {


  return (
    <div className='relative w-[370px] h-[175px] '>
          
          <div className='w-[64px] h-[64px] bg-primary z-10 absolute rounded-2xl left-[16px] shadow-primary/30 shadow-md grid place-content-center'>
            {(icono === "FaUser")&& <Faicons.FaUser className='text-[30px]'/>}
            {(icono === "FaChartLine")&&<Faicons.FaChartLine className='text-[30px]'/>}
            {(icono === "FaCashRegister")&& <Faicons.FaCashRegister className='text-[30px]'/>}
            {(icono === "FaCartPlus")&& <Faicons.FaCartPlus className='text-[30px]'/>}
          </div>

          <div className='bg-white rounded-3xl w-full h-[150px] absolute bottom-0'>
            
              <div className='p-4 flex flex-col items-end h-[100px]'>
                  <h2 className='text-lg text-[#546e7a] font-light'>{nombre}</h2>
                  <h1 className='font-normal text-3xl text-black'>$53k</h1>
              </div>

              <hr className="w-full h-[1px] mx-auto bg-gray-100 border-[1px] rounded"/>

              <div className='flex px-5 h-[48px] items-center'>
                <h1 className='text-green-600 font-bold text-lg'>+55%</h1>
                <h1 className='text-slate-900 font-ligth pl-2 text-lg'>than last week</h1>
              </div>

          </div>    
          
    </div>
  );
}
