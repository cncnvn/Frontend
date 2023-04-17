import { axiosConfig } from "../configuration/axiosConfig";

const getInventarios=(estado)=>{
    return axiosConfig.get('inventarios?estado='+estado,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

const crearInventario=(data={})=>{
    return axiosConfig.post('inventarios',data,{
        
        headers:{
            'Content-Type': 'application/json'
        },
      
    })
}

const editarInventario=(idInven,dat)=>{
    return axiosConfig.put(`inventarios/${idInven}`,dat,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export{
    getInventarios,crearInventario,editarInventario
}

