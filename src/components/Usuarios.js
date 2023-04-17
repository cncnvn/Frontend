import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import {crearUsuario, editarUsuario, getUsuarios } from '../Services/UsuarioService'
import ModalEditUsuario from './ui/ModalEditUsuario'
import ModalUsuario from './ui/ModalUsuario'

export default function Usuarios() {
  const[usuarios, setUsuarios]= useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const[usuario, setUsuario]=useState({
    nombre:'',
    email:''
  })

  const [loadinSave,setLoadingSave]=useState(false)

  const [id,setId]= useState('')

    const listUsuarios= async ()=>{
      try {
        setLoading(true)
        setError(false)
        const {data}=await getUsuarios(query)
        console.log(data)
        setTimeout(()=>{
          setLoading(false)
        },500)
        setUsuarios(data)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    useEffect(()=>{
      listUsuarios()
    }, [query])

    const changeSwitch=()=>{
      setQuery(!query)
    }
   const  handleChange=(e)=>{
  
     setUsuario({
      ...usuario,
      [e.target.name]:e.target.value,
      [e.target.email]:e.target.value
     })
   }

   const saveUsuario= async()=>{
    try {
      setLoadingSave(true)
      setError(false)
      const {respues}=await crearUsuario(usuario)
      console.log(respues)
      setUsuario({nombre:'', email:''})
      listUsuarios()
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
    setUsuario({nombre:'',email:''})
    if(id) setId('');
  }

  const selectUsuarios =(ev)=>{
    ev.preventDefault();
    setId(ev.target.id);
    const usu=usuarios.filter((usuario)=>usuario.id===ev.target.id);
    setUsuario({...usu[0]});
  }

  const editUsuario = async()=>{
    try {
      setError(false);
      setLoadingSave(true);
      const response = await editarUsuario(id, usuario);
      console.log(response);
      setUsuarios({ nombre: "", email:"" });
      listUsuarios();
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
    <h1>Usuarios</h1>

    <ModalEditUsuario
    closeModal={closeModal}
    handleChange={handleChange}
    usuario={usuario}
    loadingSave={loadinSave}
    editUsuario={editUsuario}
    />

    <ModalUsuario
    closeModal={closeModal}
    handleChange={handleChange}
    usuario={usuario}
    loadinSave={loadinSave}
    saveUsuario={saveUsuario}
    />

        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckChecked"
            checked={query} 
            onChange={changeSwitch}
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
      <th scope="col">Email</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha creacion</th>
      <th scope="col">Fecha Actualizacion</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    {
      usuarios.map((users, index)=>{
        return(
          <tr key={usuarios._id} usuarios={usuarios}>
          <th scope="row">{index+1}</th>
          <td>{users.nombre}</td>
          <td>{users.email}</td>
          <td>{users.estado ? 'Activo':'Inactivo'}</td>
          <td>{dayjs(users.fechaCreacion).format('DD/MM/YYYY')}</td>
          <td>{dayjs(users.fechaActualizacion).format('DD/MM/YYYY')}</td>

          
          <td><button 
          onClick={selectUsuarios}
          type="button" className='btn btn-success'
          data-bs-toggle="modal"
          data-bs-target="#exampleModalEdit"
          id={usuario._id}
          >Editar
          
   
          </button>
          </td>

          
    
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


