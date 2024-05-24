import React, { useRef, useState } from 'react'
import './Styles/landingpage.css'
import img1 from './images/img1-removebg-preview.png'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {

  let [bool, setbool] = useState(true)
  let handlesubmit = () => {
    setbool(!bool)
  }
  //!---------------------admin

  let getName = useRef()
    let getPass = useRef()
    let navigate=useNavigate()

    let handleAdmin= (e) => {
        e.preventDefault()

        let adminCredential = {
            admin: 'purnashgrish',
            password: '112518'
        }
        let { admin, password } = adminCredential

        if (getName.current.value === admin && getPass.current.value === password) {
            navigate('/adminportal')
           
        }
    } 
    //! ----------------------------user

    let getuName = useRef()
    let getuPass = useRef()
    let unavigate=useNavigate()

    let handleuser= (e) => {
        e.preventDefault()

        let userCredential = {
            user: 'purnashgrish',
            upassword: '112518'
        }
        let { user, upassword } = userCredential

        if (getuName.current.value === user && getuPass.current.value === upassword) {
            unavigate('/userportal')
            // alert('hello user')
           
        }
    } 
  return (
    <>
      <div className="landing-page">
        <div className="right">
          <img src={img1} alt="" />

        </div>
        <div className="left">
          <h1>digital <span>libraby</span></h1>
          <p>A digital library is an online database of digital objects that can include text, still images, audio, video, digital documents, or other digital media formats or a library accessible through the interne</p>
          <div className="form">
            <div className="box">
              <button className={bool ? "left-btn" : "right-btn"} onClick={handlesubmit}>
                {bool ? <>admin<PersonPinIcon /></> : <>user<SupervisedUserCircleIcon /></>}
              </button>
            </div>
            <div className="login-form">
              {bool ? <>
                {/* ---------------ADMIN PAGE------------------------- */}
               
                <form onSubmit={handleAdmin}>
                  <input ref={getName} type="text" placeholder='Enter Admin Name' />
                  <input ref={getPass} type="Password" placeholder='Enter Password' />
                  <button >Login</button>
                  <h3>Forget Password ?</h3>
                </form>



              </> : <>
               {/* ---------------ADMIN PAGE------------------------- */}
               
               <form onSubmit={handleuser}>
                  <input ref={getuName} type="text" placeholder='Enter User Name' />
                  <input ref={getuPass} type="Password" placeholder='Enter Password' />
                  <button >Login</button>
                  <h3>Forget Password ?</h3>
                </form>

              </>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landingpage