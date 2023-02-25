const {db,DataTypes}=require('../utils/database')

 

const Ventas = db.define("ventas",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fechaVenta:{
        type:DataTypes.DATEONLY,
        defaultValue:DataTypes.NOW
    },
    total:{
        type:DataTypes.DOUBLE
    },
    codigoVenta:{
        type:DataTypes.STRING
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})


module.exports= {Ventas};