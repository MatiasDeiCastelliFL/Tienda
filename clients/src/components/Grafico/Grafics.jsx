import React from 'react';
import Grafic from '../Card/Grafic';

export default function Grafics({tip,color}) {

  return (
    <div className='relative w-[500px] h-[400px] flex place-content-center flex-wrap ml-5 mt-5 rounded-3xl'>
      <div className='bg-white rounded-3xl w-full h-[350px] absolute bottom-0 mt-[100px]'>
            <h1 className='mt-[200px] text-black text-center'>Rendimiento de la ultima venta</h1>
      </div>

    {(color==="primary")&&<div className='bg-gradient-to-tr  bg-primary from-blue-400 text-white rounded-xl absolute top-0 w-[calc(100%-52px)] '><Grafic tip={tip}/></div>}
    {(color==="secundary")&&<div className='bg-gradient-to-tr  bg-primary from-yellow-400 text-white rounded-xl absolute top-0 w-[calc(100%-52px)] '><Grafic tip={tip}/></div>}
    {(color==="tersary")&&<div className='bg-gradient-to-tr  bg-primary from-fuchsia-700 text-white rounded-xl absolute top-0 w-[calc(100%-52px)] '><Grafic tip={tip}/></div>}

  </div>
  );
}
