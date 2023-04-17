import { axiosConfig } from "../configuration/axiosConfig";

const getEstadoEquipos=(estado)=>{
    return axiosConfig.get('estadosequipos?estado='+estado,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

const crearEstadoEquipo=(data={})=>{
    return axiosConfig.post('estadosequipos',data,{
        
        headers:{
            'Content-Type': 'application/json'
        },
      
    })
}

const editarEstado=(estadoId,dat)=>{
    return axiosConfig.put(`estadosequipos/${estadoId}`,dat,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export{
    getEstadoEquipos,crearEstadoEquipo,editarEstado
}

