import React from 'react'
import Navbar from '../Navbar'
import { Route,Routes} from 'react-router-dom'
import Ahome from './Ahome'
import Abooks from './Abooks'
import Aaddbooks from './Aaddbooks'
import Aaddusers from './Aaddusers'
import Ausers from './Ausers'
import Read from './Read'

const Adminp = () => {
  return (
   <div>
    <Navbar/>
      <Routes>
           <Route element={<Ahome/>} path='/'/>
           <Route element={<Abooks/>} path='/books'/>
           <Route element={<Aaddbooks/>} path='/addbooks'/>
           <Route element={<Ausers/>} path='/users'/>
           <Route element={<Aaddusers/>} path='/addusers'/>
           <Route element={<Read/>} path='/read/:id'/>
           
      </Routes>
   </div>
  )
}

export default Adminp