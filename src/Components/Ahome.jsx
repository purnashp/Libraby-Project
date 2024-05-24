import React from 'react'
import '../Styles/ahome.css'
import img1 from '../images/librabym.png'
import img2 from './../images/b1.jpg'
import img3 from './../images/b2.jpg'
import img4 from './../images/b3.jpg'
const Ahome = () => {
  return (
    <>
      <div className="ahome">
        <div className="right"><img src={img1} /></div>
        <h1>meet yout next <br />favorite book</h1>
        <div className="card">
          <img src={img2} alt="" />
        </div>
        <div className="card1">
          <img src={img3} alt="" />
        </div>
        <div className="card2">
          <img src={img4} alt="" />
        </div>
      </div>
     
    </>
  )
}

export default Ahome