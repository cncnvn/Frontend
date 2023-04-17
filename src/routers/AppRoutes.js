import React from 'react'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import EstadoEquipo from '../components/EstadoEquipo'
import Inventarios from '../components/Inventarios'
import Marcas from '../components/Marcas'
import TipoEquipo from '../components/TipoEquipo'
import Footer from '../components/ui/Footer'
import NavBar from '../components/ui/NavBar'
import NotFound from '../components/ui/NotFound'
import Usuarios from '../components/Usuarios'



export default function AppRoutes() {
    const title='Tipo Equipo'
  return (
    <div>
        <NavBar/>
        <div className='container'>
        <Routes>
            <Route path='/' element={<TipoEquipo title={'TipoEquipo'}/>}/>
            <Route path='/estados' element={<EstadoEquipo title={'EstadoEquipo'}/>}/>
            <Route path='/Usuarios' element={<Usuarios title={'Usuarios'}/>}/>
            <Route path='/Marcas' element={<Marcas title= {'Marcas'}/>}/>
            <Route path='/Inventarios' element={<Inventarios title={'Inventarios'}/>}/>
            <Route path='*' element={<NotFound title={''}/>}/>

        </Routes>
        </div>
        <Footer/>
    </div>
  )

}
