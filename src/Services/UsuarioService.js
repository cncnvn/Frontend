import { axiosConfig } from "../configuration/axiosConfig";

const getUsuarios=(estado)=>{
    return axiosConfig.get('usuarios?estado='+estado,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

const crearUsuario=(data={})=>{
    return axiosConfig.post('usuarios',data,{
        
        headers:{
            'Content-Type': 'application/json'
        },
      
    })
}

const editarUsuario=(idUSua,dat)=>{
    return axiosConfig.put(`usuarios/${idUSua}`,dat,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export{
    getUsuarios,crearUsuario,editarUsuario
}

