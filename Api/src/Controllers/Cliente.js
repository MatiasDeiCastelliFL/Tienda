
const path = require("path");
const { recibirEmailCliente } = require("../middleware/enviarCorreo");
const { Clientes } = require("../Models/Cliente");
const { Documentos } = require("../Models/Documento");
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
const { AltaBdCliente,FiltrarBD,UpdateBdCliente,ActivarBd,DesactivarBd,ActivarBdcuenta,FiltrarBDId,BuscarNameUsuario,BuscarEmailUsuario,
   BuscarTelefonoUsuario,
   BuscarDocumentoUsuario,UpdateBdClienteSinImg,DeleteBd} = require("../Services/DatoBd");

const Crear= async (req,res) =>{

   const {nombre,apellido,nro_Documento,direccion,nroDireccion,telefono,email,nombreUsuario,clave,palabraSecreta,documentoId}=req.body

   
   const Error = [];
   
   if(nombre  && apellido  && nro_Documento  && direccion  && nroDireccion  && telefono  && email  && nombreUsuario  && clave  && palabraSecreta  && documentoId ){
      
      const existeDocumento= await Clientes.findOne({where:{
         nro_Documento: nro_Documento
      }});

      const existeCorreo = await Clientes.findOne({where:{
        email:email
      }});

      const existeTelefono= await Clientes.findOne({
        where:{
            telefono:telefono
        }
      })

      const existeNombreUsuario= await Clientes.findOne({
        where:{
            nombreUsuario:nombreUsuario
        }
      })
   
      if(existeDocumento !== null || existeTelefono!=null || existeCorreo !=null || existeNombreUsuario != null){

         if(existeDocumento != null){
            Error.push("El numero de documento ya existe");
         }

         if(existeTelefono != null){
            Error.push("El numero de telefono ya existe");
         }


         if(existeCorreo != null){
            Error.push("la direccion de correo ya existe")
         }

         if(existeNombreUsuario != null){
            Error.push("El nombre de usuario ya existe")
         }
         res.json({error:Error})
      }else{
         try {
          
            const path =req.file?.path
            const ContraseñaEncriptada=CryptoJS.AES.encrypt(JSON.stringify(clave),palabraSecreta).toString();
      

            const objetoaCrear={
               nombre:nombre,
               apellido:apellido,
               nro_Documento:nro_Documento,
               direccion:direccion,
               nroDireccion:nroDireccion,
               telefono:telefono,
               email:email,
               nombreUsuario:nombreUsuario,
               clave:ContraseñaEncriptada,
               palabraSecreta:palabraSecreta,
               documentoId:documentoId,
            }

            const DatoAlta= await AltaBdCliente(objetoaCrear, Clientes,path)
           
           
            recibirEmailCliente(email);
           
            if(DatoAlta){
               res.status(201).json(DatoAlta)
            }else{
               res.status(400).json('Error al crear la cuenta')
            }
         } catch (error) {
            console.log(error)
         }
      }    
   }else{
    
      if(!nombre){
         Error.push("Complete el campo de nombre")
      }

      if(!apellido){
         Error.push("Complete el campo de apellido")
      }
      if(!nro_Documento){
        Error.push("Complete el campo de numero de documento")
     }

     if(!direccion){
        Error.push("Complete el campo de direccion")
     }
     if(!nroDireccion){
        Error.push("Complete el campo de numero de direccion")
     }
    
    if(!telefono){
       Error.push("Complete el campo de numero de telefono")
    }

    if(!email){
       Error.push("Complete el campo de email")
    }
    if(!nombreUsuario){
        
        Error.push("Complete el campo de nombre de usuario")
     }

     if(!clave){
        Error.push("Complete el campo de la contraseña")
     }

      if(!palabraSecreta){
         Error.push("Ingrese una palabra secreta")
      }
     if(!documentoId){
        Error.push("Complete el campo de tipo de documento")
     }
      res.json({error:Error})
   }
  
}

const Filtrar = async (req,res)=>{

   const {nro_Documento,email,id}=req.query
   let DatosFiltrar;

   console.log(id)
   if(nro_Documento){
      
      DatosFiltrar= await FiltrarBD(Clientes,Documentos,"nro_Documento",nro_Documento)
   }else{

      if(email){
        DatosFiltrar = await FiltrarBD(Clientes,Documentos,"email",email)
      }else{
         if(id){
            DatosFiltrar = await FiltrarBD(Clientes,Documentos,"id",id)
         }
        DatosFiltrar = await FiltrarBD(Clientes,Documentos)
      }
   }
   res.status(200).json(DatosFiltrar)
}

const FiltrarCliente = async (req, res)=>{
   console.log("llegue")
   let datosFiltrar 

   let {id}= req.query
   console.log(id)
   if(id){
      datosFiltrar = await FiltrarBDId(Clientes,Documentos,id)

      res.status(200).json(datosFiltrar)
   }

   return datosFiltrar
}

const Editar = async (req,res)=>{

   const {nombre,apellido,documentoId,nro_Documento,nombreUsuario,email,telefono,direccion,nroDireccion,nroDocumentoAnt,emailAnt,telefonoAnt,nombreUsuarioAnt}=req.body
   
   const {id}= req.query

   const path =req.file?.path
   const Error=[];
   
   if(path){
      if(nombre && apellido && documentoId && nro_Documento && nombreUsuario && email && telefono && direccion && nroDireccion && nroDocumentoAnt && emailAnt && telefonoAnt && nombreUsuarioAnt){
         
         
         if(nombreUsuario === nombreUsuarioAnt && email === emailAnt && telefono === telefonoAnt && nro_Documento === nroDocumentoAnt ){
            let DatoActualizado = await UpdateBdCliente(Clientes,req.body,path,id)

            res.status(200).json("Actualizado Correctamente")
         }else{
            
            if(nombreUsuario !== nombreUsuarioAnt){
              let buscarNombreUsuario= await BuscarNameUsuario(Clientes,nombreUsuario);
               if(buscarNombreUsuario){
                  Error.push("El nombre de usuario ya existe");
               }
            }

            if(email !== emailAnt){
               let buscarEmailUsuario= await BuscarEmailUsuario(Clientes,email);
               if(buscarEmailUsuario){
                  Error.push("la direccion de correo ya existe");
               }
            }

            if(telefono !== telefonoAnt){
               let buscarTelefonoUsuario= await BuscarTelefonoUsuario(Clientes,telefono);

               console.log(buscarTelefonoUsuario)
               if(buscarTelefonoUsuario){
                  Error.push("El numero de telefono ya existe");
               }
            }

            if(nro_Documento !== nroDocumentoAnt){
               let buscardocUsuario= await BuscarDocumentoUsuario(Clientes,nro_Documento);
               console.log(buscardocUsuario)
               if(buscardocUsuario){
                  Error.push("El numero de documento ya existe");
               }
            }

            if(Error.length === 0){
               await UpdateBdCliente(Clientes,req.body,path,id)
               res.status(200).json("Actualizado Correctamente")
            }else{
               res.json({error:Error})
            }
         }
      }else{
         if(!nombre){
            Error.push("Complete el campo de nombre")
         }
   
         if(!apellido){
            Error.push("Complete el campo de apellido")
         }
         if(!nro_Documento){
           Error.push("Complete el campo de numero de documento")
         }
   
        if(!direccion){
           Error.push("Complete el campo de direccion")
        }
        if(!nroDireccion){
           Error.push("Complete el campo de numero de direccion")
        }
       
       if(!telefono){
          Error.push("Complete el campo de numero de telefono")
       }
   
       if(!email){
          Error.push("Complete el campo de email")
       }
       if(!nombreUsuario){
           
           Error.push("Complete el campo de nombre de usuario")
        }
   
        if(!clave){
           Error.push("Complete el campo de la contraseña")
        }
   
         if(!palabraSecreta){
            Error.push("Ingrese una palabra secreta")
         }
        if(!documentoId){
           Error.push("Complete el campo de tipo de documento")
        }
         res.json({error:Error})
      }
   }else{
      if(nombre && apellido && documentoId && nro_Documento && nombreUsuario && email && telefono && direccion && nroDireccion && nroDocumentoAnt && emailAnt && telefonoAnt && nombreUsuarioAnt){
         
         
         if(nombreUsuario === nombreUsuarioAnt && email === emailAnt && telefono === telefonoAnt && nro_Documento === nroDocumentoAnt ){
            let DatoActualizado = await UpdateBdClienteSinImg(Clientes,req.body,id)

            res.status(200).json("Actualizado Correctamente")
         }else{
            
            if(nombreUsuario !== nombreUsuarioAnt){
              let buscarNombreUsuario= await BuscarNameUsuario(Clientes,nombreUsuario);
               if(buscarNombreUsuario){
                  Error.push("El nombre de usuario ya existe");
               }
            }

            if(email !== emailAnt){
               let buscarEmailUsuario= await BuscarEmailUsuario(Clientes,email);
               if(buscarEmailUsuario){
                  Error.push("la direccion de correo ya existe");
               }
            }

            if(telefono !== telefonoAnt){
               let buscarTelefonoUsuario= await BuscarTelefonoUsuario(Clientes,telefono);

               console.log(buscarTelefonoUsuario)
               if(buscarTelefonoUsuario){
                  Error.push("El numero de telefono ya existe");
               }
            }

            if(nro_Documento !== nroDocumentoAnt){
               let buscardocUsuario= await BuscarDocumentoUsuario(Clientes,nro_Documento);
               console.log(buscardocUsuario)
               if(buscardocUsuario){
                  Error.push("El numero de documento ya existe");
               }
            }

            if(Error.length === 0){
               await UpdateBdClienteSinImg(Clientes,req.body,id)
               res.status(200).json("Actualizado Correctamente")
            }else{
               res.json({error:Error})
            }
         }
      }else{
         if(!nombre){
            Error.push("Complete el campo de nombre")
         }
   
         if(!apellido){
            Error.push("Complete el campo de apellido")
         }
         if(!nro_Documento){
           Error.push("Complete el campo de numero de documento")
         }
   
        if(!direccion){
           Error.push("Complete el campo de direccion")
        }
        if(!nroDireccion){
           Error.push("Complete el campo de numero de direccion")
        }
       
       if(!telefono){
          Error.push("Complete el campo de numero de telefono")
       }
   
       if(!email){
          Error.push("Complete el campo de email")
       }
       if(!nombreUsuario){
           
           Error.push("Complete el campo de nombre de usuario")
        }
   
        if(!clave){
           Error.push("Complete el campo de la contraseña")
        }
   
         if(!palabraSecreta){
            Error.push("Ingrese una palabra secreta")
         }
        if(!documentoId){
           Error.push("Complete el campo de tipo de documento")
        }
         res.json({error:Error})
      }
   }
}

const EliminarCliente = async(req,res)=>{
   
   const {id}= req.query

   if(id){
      const DatoEliminado = await DeleteBd(id,Clientes)
      if(DatoEliminado){
         res.status(200).json({mensaje:'La cuenta se elimino Correctamente'})
      }else{
         res.status(400).json({mensaje:'No se encontro el cliente a eliminar'})
      }
    }else{
       res.status(400).json({mensaje:'Ingrese una id'})
    }
}

const Activar = async (req,res)=>{
   const {id} = req.query
   if(id){
     const DatoActualizado = await ActivarBd(id,Clientes)
     if(DatoActualizado){
        res.status(200).json({mensaje:'La cuenta se activado con exito'})
     }else{
        res.status(400).json({mensaje:'Error la cuenta ya se encuentra activada'})
     }
   }else{
      res.status(400).json({mensaje:'Ingrese una id'})
   }
}

const ActivarUsu = async (req,res)=>{
   const {email} = req.query
   if(email){
    
     const DatoActualizado = await ActivarBdcuenta(email,Clientes)
     if(DatoActualizado){
        res.status(200).json({mensaje:'La cuenta del empleado se a activado con exito'})
     }else{
        res.status(400).json({mensaje:'Error la cuenta del empleado ya se encuentra activada'})
     }
   }else{
      res.status(400).json({mensaje:'Ingrese una correo'})
   }
}


const Desactivar = async (req,res)=>{
   const {id} = req.query
   if(id){
      const DatoActualizado = await DesactivarBd(id,Clientes)
      if(DatoActualizado){
         res.status(200).json({mensaje:'La cuenta fue desactivada con exito'})
      }else{
         res.status(400).json({mensaje:'Error la cuenta se encuentra desactivada'})
      }
    }else{
       res.status(400).json({mensaje:'Ingrese una id'})
    }

}

// const Desactivar = async (req,res)=>{
//    const {id} = req.query
//    if(id){
//       const DatoActualizado = await DesactivarBd(id,Clientes)
//       if(DatoActualizado){
//          res.status(200).json({mensaje:'La cuenta fue desactivada con exito'})
//       }else{
//          res.status(400).json({mensaje:'Error la cuenta se encuentra desactivada'})
//       }
//     }else{
//        res.status(400).json({mensaje:'Ingrese una id'})
//     }

// }


module.exports={Crear ,Filtrar,Editar,Activar,Desactivar,ActivarUsu, FiltrarCliente,EliminarCliente}