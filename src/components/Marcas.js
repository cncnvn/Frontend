import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import {crearMarca, editarMarca, getMarcas } from '../Services/MarcasService'
import ModalEditMarca from './ui/ModalEditMarca'
import ModalMarca from './ui/ModalMarca'

export default function Marcas() {
  const[marcas, setMarcas]= useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const[marca, setMarca]=useState({
    nombre:''
  })

  const [loadinSave,setLoadingSave]=useState(false)

  const [id, setId]=useState("")

    const listMarcas= async ()=>{
      try {
        setLoading(true)
        setError(false)
        const {data}=await getMarcas(query)
        console.log(data)
        setTimeout(()=>{
          setLoading(false)
        },500)
        setMarcas(data)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    useEffect(()=>{
      listMarcas()
    }, [query])

    const changeSwitch=()=>{
      setQuery(!query)
    }
   const  handleChange=(e)=>{
  
     setMarca({
      ...marca,
      [e.target.nombre]:e.target.value,
     })
   }

   const saveMarca= async()=>{
    try {
      setLoadingSave(true)
      setError(false)
      const {respues}=await crearMarca(marca)
      console.log(respues)
      setMarca({nombre:''})
      listMarcas()
      setTimeout(()=>{
        setLoadingSave(false)
      },500)
    } catch (error) {
      console.log(error)
      setLoadingSave(false)
      setError(true)
    }
  }

  const closeModal=()=>{
    setMarca({nombre:''})
    if(id) setId("")

  }

  const selectMarcas=(eve)=>{
    eve.preventDefault();
    setId(eve.target.id)
    const mar=marcas.filter((marca)=>marca.id===eve.target.id)
    setMarca({...mar[0]})
  }

  const editMarca=async()=>{
    try {
      setError(false);
      setLoadingSave(true);
      const response = await editarMarca(id, marca);
      console.log(response);
      setMarcas({ nombre: "" });
      listMarcas();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  
   
  return (
    <>
    <h1>Marcas</h1>

    <ModalEditMarca
    closeModal={closeModal}
    handleChange={handleChange}
    marca={marca}
    loadingSave={loadinSave}
    editMarca={editMarca}
    />

    <ModalMarca
    closeModal={closeModal}
    handleChange={handleChange}
    marca={marca}
    loadinSave={loadinSave}
    saveMarca={saveMarca}

    />
        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckChecked"
            onClick={changeSwitch}
            checked={query} 
          />
          <label className="form-check-label" for="flexSwitchCheckChecked">
           Activos
          </label>
        </div>
        <button 
          type="button"
          className="btn btn-outline-primary"
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal" 
          data-bs-whatever="@mdo"
        >
          Agregar
        </button>
        {
          error && (
            <div className="alert alert-danger" role="alert">
            Ha ocurrido un error
          </div>
          )
        }

   
    <div className='bd-example'>
    <table className="table table-dark table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha creacion</th>
      <th scope="col">Fecha Actualizacion</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    {
      marcas.map((marcs, index)=>{
        return(
          <tr key={marcas._id} marcas={marcas}>
          <th scope="row">{index+1}</th>
          <td>{marcs.nombre}</td>
          <td>{marcs.estado ? 'Activo':'Inactivo'}</td>
          <td>{dayjs(marcs.fechaCreacion).format('DD/MM/YYYY')}</td>
          <td>{dayjs(marcs.fechaActualizacion).format('DD/MM/YYYY')}</td>
          <td><button 
          onClick={selectMarcas} type="button" className='btn btn-success'
          data-bs-toggle="modal"
          data-bs-target="#exampleModalEdit"
          id={marca.id}

          >Editar
          
   
          </button></td>

          
    
        </tr>
        
        )
      })
    }
  </tbody>
  
</table>

    </div>
    </>
    
  )

  }

 

