import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Landingpage from './Landingpage'
import Adminp from './Components/Adminp'
import Userportal from './Components/users/Userportal'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Landingpage/>} path='/' />
        <Route element={<Adminp/>} path='/adminportal/*'/>
        <Route element ={<Userportal/>} path='/userportal/*'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App