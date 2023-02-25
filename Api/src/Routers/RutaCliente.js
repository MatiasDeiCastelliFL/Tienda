const {Router} = require('express')

const { Crear,Filtrar,Editar,Activar,Desactivar,ActivarUsu,FiltrarCliente,EliminarCliente} = require('../Controllers/Cliente');
const { upload } = require('../utils/multer');



const RouterServer = Router();
RouterServer.post('/',upload,Crear);
RouterServer.get('/',Filtrar);
RouterServer.get("/Clients",FiltrarCliente)
RouterServer.put('/',upload,Editar);
RouterServer.put('/activar',Activar)
RouterServer.get('/activare',ActivarUsu)
RouterServer.put('/desactivar',Desactivar)
RouterServer.delete('/',EliminarCliente);
module.exports= RouterServer

