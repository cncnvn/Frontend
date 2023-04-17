import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import {crearInventario, editarInventario, getInventarios } from '../Services/InventariosService'
import ModalEditInventario from './ui/ModalEditInventario'
import ModalInventario from './ui/ModalInventario'

export default function Inventarios() {
  const[inventarios, setInventarios]= useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const[inventario, setInventario]=useState({
    serial:'',
    Modelo:'',
    Descripcion:'',
    FotoEquipo:'',
    Color:'',
    FechaCompra:'',
    precio:'',
    usuario:'',
    marca:'',
    estado:'',
    tipoEquipo:'',
  })

  const [loadinSave,setLoadingSave]=useState(false)
  const[id, setId] =useState("")

    const listInventarios= async ()=>{
      try {
        setLoading(true)
        setError(false)
        const {data}=await getInventarios(query)
        console.log(data)
        setTimeout(()=>{
          setLoading(false)
        },500)
        setInventarios(data)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    useEffect(()=>{
      listInventarios()
      
    }, [query])

    const changeSwitch=()=>{
      setQuery(!query)
    }
   const  handleChange=(e)=>{
  
     setInventario({
      ...inventario,
      [e.target.serial]:e.target.value,
      [e.target.Modelo]:e.target.value,
      [e.target.Descripcion]:e.target.value,
      [e.target.FotoEquipo]:e.target.value,
      [e.target.Color]:e.target.value,
      [e.target.FechaCompra]:e.target.value,
      [e.target.precio]:e.target.value,
      [e.target.usuario]:e.target.value,
     
      [e.target.marca]:e.target.value,
     
      [e.target.estado]:e.target.value,
     
      [e.target.tipoEquipo]:e.target.value,

     })
   }

   const saveInventario= async()=>{
    try {
      setLoadingSave(true)
      setError(false)
      const {respues}=await crearInventario(inventario)
      console.log(respues)
      setInventario({serial:'',Modelo:'', Descripcion:'',FotoEquipo:'',Color:'',FechaCompra:'',precio:'', usuario:'',marca:'',estado:'',tipoEquipo:''})
      listInventarios()
     
      
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
    setInventario({serial:'',Modelo:'', Descripcion:'',FotoEquipo:'',Color:'',FechaCompra:'',precio:'', usuario:'',marca:'',estado:'',tipoEquipo:''})

  }

  const selectInventario=(evt)=>{
    evt.preventDefault();
    setId(evt.target.id)
    const invt=inventarios.filter((inventario)=>inventario.id===evt.target.id)
    setInventario({...invt[0]})
  }

  const editInventario = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await editarInventario(id, inventario);
      console.log(response);
      setInventarios({ serial: "",Modelo:"", Descripcion:"", FotoEquipo:"",Color:"", FechaCompra:"",precio:"",usuario:"",marca:"",estado:"",tipoEquipo:""});
      listInventarios();
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
    <h1>Inventarios</h1>

    <ModalEditInventario
    closeModal={closeModal}
    handleChange={handleChange}
    inventario={inventario}
    loadingSave={loadinSave}
    editInventario={editInventario}
    />

    <ModalInventario
    closeModal={closeModal}
    handleChange={handleChange}
    inventario={inventario}
    loadinSave={loadinSave}
    saveInventario={saveInventario}

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
      <th scope="col">Serial</th>
      <th scope="col">Modelo</th>
      <th scope="col">Descripcion</th>
      <th scope="col">FotoEquipo</th>
      <th scope="col">Color</th>
      <th scope="col">FechaCompra</th>
      <th scope="col">Precio</th>
      <th scope="col">Usuario</th>
      <th scope="col">Marca</th>
      <th scope="col">Estado</th>
      <th scope="col">TipoEquipo</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    {
      inventarios.map((invent, index)=>{
        return(
          <tr key={inventarios._id} inventarios={inventarios}>
          <th scope="row">{index+1}</th>
          <td>{invent.serial}</td>
          <td>{invent.Modelo}</td>
          <td>{invent.Descripcion}</td>
          <td>{invent.FotoEquipo}</td>
          <td>{invent.Color}</td>
          <td>{dayjs(invent.FechaCompra).format('DD/MM/YYYY')}</td>
          <td>{invent.precio}</td>
          
          <td>{invent.usuario.nombre}</td>
          <td>{invent.marca}</td>
        
          <td>{invent.estado}</td>
          
          <td>{invent.tipoEquipo}</td>
          <td><button  onClick={selectInventario} type="button" className='btn btn-success'
          data-bs-toggle="modal"
          data-bs-target="#exampleModalEdit"
          id={inventario.id}

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

  
  
  

