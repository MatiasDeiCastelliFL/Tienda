import React, { useState } from "react";

const Paginacion = ({ todoCliente, paginado, totalPagina }) => {
  let paginaNumero = [];
  const [numeracion,setNumeracion]=useState(1)
  for (let index = 0; index < Math.ceil(todoCliente.length/totalPagina); index++) {
    
    paginaNumero.push(index + 1);
  }

  const onfocus = (numero) => {
    console.log(numero)

    const activo = document.getElementById(numero);
    activo.setAttribute('style', 'background-color: #22C55E;');
  }
  const onblur = (numero) => {
    const activo = document.getElementById(numero);
    activo.setAttribute('style', 'background-color: #EF4444;');
  }


  const selectPag =(numero)=>{
    onfocus(numero)
    for (let i = 0; i<paginaNumero.length;i++ ) {
      if (paginaNumero[i] !== numero) {
        onblur(paginaNumero[i])
      }
    } 


  }
 

  const paginadoMover= (numero =1,operacion)=>{
    

    if(operacion===1){
        console.log(numeracion)   
        if(numeracion>1){
          const resultado=numeracion-1
            setNumeracion(resultado)
            paginado(resultado);
            selectPag(resultado);
           
          }    
      }else{
        if(operacion===2){
          setNumeracion(numero)
          paginado(numero)
          selectPag(numero)
        }else{
          if(operacion ===3){
            if(numeracion<paginaNumero.length){
              const resultado=numeracion+1
                setNumeracion(resultado)
                paginado(resultado);
                selectPag(resultado)
            }
          }
        }
      }
  }

  return (
    <div className="my-5 w-[calc(100%)] flex justify-center absolute bottom-0 ">
      <nav aria-label="  Page navigation example">
        <ul className="inline-flex items-center -space-x-px text-lg font-semibold">
        
          <li className="">
            <button onClick={()=>paginadoMover(0,1)}  className="hover:scale-[0.95] mr-2 block px-5 py-2 text-white bg-red-500 hover:bg-red-600 rounded-xl">
                <h1> Anterior </h1>
            </button>
          </li>
          <li className="">
            {paginaNumero &&
              paginaNumero?.map((numero) => (
                <button key={numero} id={numero} onClick={()=>paginadoMover(numero,2)} className={(numero === 1)? 'hover:scale-[0.95] mr-2 px-5 py-2 text-white bg-green-500 hover:bg-red-600 rounded-xl' : 'hover:scale-[0.95] mr-2 px-5 py-2 text-white bg-red-500 hover:bg-red-600 rounded-xl'}>
                  {numero}
                </button>
              ))}
          </li>
          <li></li>
          <li>
            <button onClick={()=>paginadoMover(0,3)} className="hover:scale-[0.95] mr-2 block px-5 py-2 text-white bg-red-500 hover:bg-red-600 rounded-xl ">
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginacion;
