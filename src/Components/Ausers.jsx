import React, { useEffect, useState } from 'react'
import '../Styles/ausers.css'
import DeleteIcon from '@mui/icons-material/Delete';
const Ausers = () => {
  let [users, setusers] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      let usersdata = await fetch('http://localhost:4000/users')
      let data = await usersdata.json()
      setusers(data)
    }
    fetchdata()
  }, [users])
  
  return (
    <div className="users">
       <div className="card">
         <table >
          <thead>
             <tr>
              <th>S.NO</th>
              <th>username</th>
              <th>gender</th>
              <th>dob</th>
              <th>age</th>
              <th>email</th>
              <th>address</th>
              <th>contact</th>
              <th>id</th>
              <th>delete</th>
             </tr>
          </thead>
          <tbody>
            {users.map((elem,index)=>{
              let {username,id,gender,address,contact,emailadd,dateofbirth}=elem;
              let age= new Date()
              let agecal=age.getFullYear()-dateofbirth
              return(
                <tr>
                  <td>
                     {index+1}
                  </td>
                  <td>
                     {username}
                  </td>
                  <td>
                     {gender}
                  </td>
                  <td>
                     {dateofbirth}
                  </td>
                  <td>
                     {agecal}
                  </td>
                  <td>
                     {emailadd}
                  </td>
                  <td>
                     {address}
                  </td>
                  <td>
                     {contact}
                  </td>
                  <td>
                     {id}
                  </td>
                  <td>
                     <button><DeleteIcon/></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
         </table>
       </div>
    </div>
  )
}

export default Ausers

