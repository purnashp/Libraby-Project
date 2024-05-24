import React from 'react'
import Navbar from '../../Navbar'
import { Route, Routes } from 'react-router-dom'
import Ahome from '../Ahome'
import Abooks from '../Abooks'
import Ufavbooks from './Ufavbooks'
import Read from '../Read'


const Userportal = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Ahome />} path='/' />
        <Route element={<Abooks />} path='/books/' />
        <Route element={<Read/>} path='/read/:id'/>

        <Route element={<Ufavbooks/>} path='/favbooks'/>
      </Routes>
    </>
  )
}

export default Userportal