const transporter  = require("../utils/mailer");


const recibirEmail= async(email)=>{
    console.log(email)
    await transporter.sendMail({
        from: '<tiendar135@gmail.com>',
        to :email,
        subject: "Tienda Ropa",
        html: `<div>
        <a href="http://localhost:3004/Empleado/activare?email=${email}" target="_blank">Activar Cuenta</a>      
        </div>`,
    });
}

const recibirEmailCliente= async(email)=>{
    console.log(email)
    await transporter.sendMail({
        from: '<tiendar135@gmail.com>',
        to :email,
        subject: "Tienda Ropa",
        html: `<div>
        <a href="http://localhost:3004/Cliente/activare?email=${email}" target="_blank">Activar Cuenta</a>      
        </div>`,
    });
}


const recibirEmailProveedor= async(email)=>{
    console.log(email)
    await transporter.sendMail({
        from: '<tiendar135@gmail.com>',
        to :email,
        subject: "Tienda Ropa",
        html: `<div>
        <a href="http://localhost:3004/Proveedor/activare?email=${email}" target="_blank">Activar Cuenta</a>      
        </div>`,
    });
}


module.exports={recibirEmail,recibirEmailCliente,recibirEmailProveedor}