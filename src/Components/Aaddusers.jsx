import React, { useRef } from 'react'
import '../Styles/addusers.css'
import img1 from '../images/form.avif'
const Aaddusers = () => {
  let user = useRef()
  let gen = useRef()
  let dob = useRef()
  let email = useRef()
  let password = useRef()
  let address = useRef()
  let contact = useRef()

 let handlesubmit=(e)=>{
  e.preventDefault()
  
  let userdeatils={
    username:user.current.value,
    gender:gen.current.value,
    dateofbirth:dob.current.value,
    emailadd:email.current.value,
    password:password.current.value,
    address:address.current.value,
    contact:contact.current.value

  }
  fetch('http://localhost:4000/users',{
    method : 'POST',
    headers : {'Content-Type':'application/json'},
    body : JSON.stringify(userdeatils)
   })

 }

  return (
    <div className="addusers">
      <div className="left">
        <div className="form">
          <form onSubmit={handlesubmit}>
            <input ref={ user} type="text" placeholder='enter user name' />
            <input ref={gen } type="text" placeholder='enter gen' />
            <input ref={ dob} type="text" placeholder='enter dob' />
            <input ref={ email} type="text" placeholder='enter email address' />
            <input ref={ password} type="text" placeholder='enter password' />
            <input ref={address } type="text" placeholder='enter address' />
            <input ref={contact } type="text" placeholder='enter contact number' />
            <button>Login</button>
          </form>
        </div>
      </div>
      <div className="rigt">
        <h1>user details</h1>
        <img src={img1} alt="" />
      </div>
    </div>
  )
}

export default Aaddusers