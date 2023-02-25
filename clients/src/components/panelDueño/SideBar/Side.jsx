import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Faicons from 'react-icons/fa'

export default function Side() {
  return (
    <div className='bg-slate-700 rounded-2xl w-[300px] h-[calc(100vh-2.5rem)] text-xl text-white fixed'>

        <div className='flex justify-center  gap-4 items-center  h-[100px] border-b-white/70 border-b-[1px]'>
            <img src='https://img.freepik.com/free-vector/hand-drawn-illuminati-illustration_23-2150072814.jpg?w=2000' className='w-[50px] h-[50px]' alt='gaa'/>

            <h1>DASHBOARD</h1>
        </div>

        <ul className='px-3'>
            <li className=''>
                <NavLink to="home" className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-2 focus:bg-primary'} ><Faicons.FaHome className=''/>  Inicio</NavLink>
            </li>
            <li className=''>
                <NavLink to="cliente"  className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-2 focus:bg-primary'}> <Faicons.FaUserAlt className='' /> Cliente</NavLink>
            </li>
            <li className=''>
                <NavLink to="empleado" className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'} > <Faicons.FaUserTie className='' />  Empleado</NavLink>
            </li>
            <li className=''>
                <NavLink to="Proveedor" className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'} ><Faicons.FaHome className=''/>  Proveedor</NavLink>
            </li>
            <li className=''>
                <NavLink to="Venta"  className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'}> <Faicons.FaUserAlt className='' /> Ventas</NavLink>
            </li>
            <li className=''>
                <NavLink to="Ingresos" className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'} > <Faicons.FaUserTie className='' />  Ingresos</NavLink>
            </li>
            <li className=''>
                <NavLink to="Articulo" className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-4 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'} > <Faicons.FaUserTie className='' />  Articulo</NavLink>
            </li>
        </ul>
        <div className='py-5'>
            <h1 className='text-center text-slate-400' >Acoount Settings</h1>
        </div>

        <ul className='px-3'>
            <li className=''>
                <NavLink to="perfil" className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-2 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'} ><Faicons.FaHome className=''/>  Perfil</NavLink>
            </li>
            <li className=''>
                <NavLink to="desconectarse"  className={(navData)=> navData.isActive? 'flex gap-4 p-2 shadow-white/10 rounded-xl my-2 bg-primary shadow-lg' : 'flex gap-4 p-4  hover:bg-black/10 hover:rounded-xl f rounded-xl my-1 focus:bg-primary'}> <Faicons.FaUserAlt className='' /> Desconectarse</NavLink>
            </li>
        </ul>
        
    </div>
  );
}
