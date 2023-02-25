const {Sequelize, DataTypes} = require('sequelize');

//Establecemos la conexion

const db= new Sequelize('TiendaRopa','matias','matias2495',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
    dialectOptions:{
        bigNumberStrings:false
    }
});

module.exports={db,DataTypes}


