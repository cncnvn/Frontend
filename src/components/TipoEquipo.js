import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import {crearTipoEquipo, editarEquipo, getTipoEquipos } from '../Services/TipoEquipoService'
import Modal from './ui/Modal'
import ModalEdit from './ui/ModalEdit'

export default function TipoEquipo() {
  const[tipoEquipo, setTipoEquipo]= useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const[tipoEquip, setTipoEquip]=useState({
    nombre:''
  })

  const [loadingSave,setLoadingSave]=useState(false)

  const[id,setId]=useState('')

    const listTipoEquipos= async ()=>{
      try {
        setLoading(true)
        setError(false)
        const {data}=await getTipoEquipos(query)
        console.log(data)
        setTipoEquipo(data)

        setTimeout(()=>{
          setLoading(false)
        },500)

      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    useEffect(()=>{
      listTipoEquipos()
    }, [query])

    const changeSwitch=()=>{
      setQuery(!query)
    }
   const  handleChange=(e)=>{
  
     setTipoEquip({
      ...tipoEquip,
      [e.target.name]:e.target.value
     })
    }

   const saveTipoEquipo= async()=>{
    try {
      setLoadingSave(true)
      setError(false)
      const {respues}=await crearTipoEquipo(tipoEquip)
      console.log(respues)
      setTipoEquip({nombre:''})
      
      listTipoEquipos()
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
    setTipoEquip({nombre:''})
   if(id)setId('')
  }

  const selectTiEquip=(e)=>{
    e.preventDefault()
    setId(e.target.id)
    const tipE=tipoEquipo.filter(tipoEquip=>tipoEquip._id===e.target.id)
    setTipoEquip({...tipE[0]})
  }

  const editTipEquipo=async()=>{
    try {
      setError(false)
    setLoadingSave(true)
    const respons = await editarEquipo(id, tipoEquip)
    console.log(respons)
    setTipoEquip({nombre: ''})
    listTipoEquipos()
    setTimeout(() => {
      setLoadingSave(false)
    }, 500)
    } catch (error) {
      console.log()
      setError(true)
      setLoadingSave(false)
    }
  }
   
  return (
    <>
    <h1>Equipos</h1>

    <ModalEdit 
          
          closeModal={closeModal}
          handleChange={handleChange}
          tipoEquip={tipoEquip}
          loadingSave={loadingSave}
          editTipoEquipo={editTipEquipo}
        />
        <Modal 
      
          closeModal={closeModal}
          handleChange={handleChange}
          tipoEquip={tipoEquip}
          loadingSave={loadingSave}
          saveTipoEquipo={saveTipoEquipo}
        />

   



        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckChecked"
            checked={query} 
            onClick={changeSwitch}
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

        <div className='table-responsive'>

          {loading
          ?(
            <div className='spinner-border' role="status">
              <span className="visually-hidden">Loading...</span>
              </div>
          )
          :
          (
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
      tipoEquipo.map((tipEquipo, index)=>{
        return(
          <tr key={tipoEquipo._id}>
          <th scope="row">{index+1}</th>
          <td>{tipEquipo.nombre}</td>
          <td>{tipEquipo.estado ? 'Activo':'Inactivo'}</td>
          <td>{dayjs(tipEquipo.fechaCreacion).format('DD/MM/YYYY')}</td>
          <td>{dayjs(tipEquipo.fechaActualizacion).format('DD/MM/YYYY')}</td>
         <td>
         <button 
          onClick={selectTiEquip}
          type="button"
          className="btn btn-outline-primary"
          data-bs-toggle="modal" 
          data-bs-target="#exampleModalEdit" 
          id={tipoEquip._id}
        >
          Editar
        </button>

        {
          error && (
            <div className="alert alert-danger" role="alert">
            Ha ocurrido un error
          </div>
          )
        }
        </td>
        </tr>
        
        )
      })
    }
  </tbody>
  
</table>
          )
  }

    </div>
    </>
    
  )

  }
  
