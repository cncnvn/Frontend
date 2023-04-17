import { axiosConfig } from "../configuration/axiosConfig";

const getTipoEquipos=(estado)=>{
    return axiosConfig.get('tiposequipos?estado='+estado,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

const crearTipoEquipo=(data={})=>{
    return axiosConfig.post('tiposequipos',data,{
        
        headers:{
            'Content-Type': 'application/json'
        },
      
    })
}

const editarEquipo=(tipoId,data)=>{
    return axiosConfig.put(`tiposequipos/${tipoId}`,data,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export{
    getTipoEquipos,crearTipoEquipo,editarEquipo
}

