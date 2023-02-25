import { createSlice } from '@reduxjs/toolkit';



export const LoginSlice = createSlice({
    name:"login",
    initialState:{
        DatoUsuario:{},
        Cargando:false
    },
    reducers:{
        BuscarUsuario:(state, action)=>{
            state.Cargando=false;
            state.DatoUsuario= action.payload
        },
        Cargando:(state)=>{
            state.Cargando=true
        }
    }
})

export const {BuscarUsuario,Cargando} = LoginSlice.actions

// export const {BuscarUsuarios} = LoginSlice.actions

export default LoginSlice.reducer