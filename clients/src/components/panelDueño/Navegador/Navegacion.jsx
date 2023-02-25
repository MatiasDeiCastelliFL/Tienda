
// FaRegSun ,FaUserCog
import * as Faicons from 'react-icons/fa'

function Navegacion({nombre}) {

  return (
    <div className='pl-5  h-[100px] text-black flex justify-between flex-wrap'>

      <div className="py-2  flex items-center w-[300px] h-[100px]">

        <h2 className="text-slate-500 text-xl">Pagina /</h2>
        <h2 className="px-2 text-black text-xl">{nombre}</h2>
       
      </div>

      <div className="py-2  w-[600px] h-[100px] flex justify-end gap-3 items-center">

        <input type='text' className="border-black/20 placeholder-slate-400  border-[0.8px] rounded-lg px-3 py-2 w-[250px] h-[50px] bg-transparent" placeholder="Type here"/>
        <button className='bg-red-500 p-2 rounded-lg shadow-lg'>
          <Faicons.FaSistrix className='text-3xl text-white' />
        </button>
     
      
      </div>

    </div>
    
  );
}

export default Navegacion;