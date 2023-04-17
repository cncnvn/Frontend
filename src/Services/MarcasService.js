import { axiosConfig } from "../configuration/axiosConfig";

const getMarcas=(estado)=>{
    return axiosConfig.get('marcas?estado='+estado,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

const crearMarca=(data={})=>{
    return axiosConfig.post('marcas',data,{
        
        headers:{
            'Content-Type': 'application/json'
        },
      
    })
}

const editarMarca=(idMarca,dat)=>{
    return axiosConfig.put(`marcas/${idMarca}`,dat,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export{
    getMarcas,crearMarca,editarMarca
}

