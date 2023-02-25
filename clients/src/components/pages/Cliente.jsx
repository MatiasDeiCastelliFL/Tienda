import React from 'react';
import TablaClients from '../Crud/client/TablaClients';
import Navegacion from '../panelDueño/Navegador/Navegacion';

export default function Cliente() {
  return (
    <div className='text-white'>
       <div className=' gap-4'>
                <Navegacion nombre="Cliente"/> 
        </div>
        
        <div className=''>
          <TablaClients/>
        </div>

    </div>
  );
}
