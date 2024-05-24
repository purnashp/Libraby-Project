import React, { useRef } from 'react'
import '../Styles/addbooks.css'
const Aaddbooks = () => {
  let btitle=useRef()
  let brgno=useRef()
  let bauthor=useRef()
  let bimg=useRef()
  let bsde=useRef()
  let blde=useRef()

  let HandleSubmit=(e)=>{
    e.preventDefault()

    let newBookData ={
      title:btitle.current.value,
      thumbnailUrl:bimg.current.value,
      authors:bauthor.current.value,
      isbn:brgno.current.value ,
      longDescription:bsde.current.value,
      shortDescription:blde.current.value
    }
   fetch('http://localhost:4000/books',{
    method : 'POST',
    headers : {'Content-Type':'application/json'},
    body : JSON.stringify(newBookData)
   })

  }

  return (
    <>
    <div className="addbooks">
      <h1>Add new Books</h1>
      <div className="form">
        <form onSubmit={HandleSubmit}>
          <input type="text" ref={btitle} placeholder='enter title name ' />
          <input type="text"  ref={brgno}placeholder='enter book reg no' />
          <input type="text"  ref={bauthor} placeholder='enter authors name'/>
          <input type="text"  ref={bimg} placeholder='enter image address'/>
          <input type="text"  ref={bsde}placeholder='enter short descripiituon'/>
          <input type="text" ref={blde} placeholder='enter long description' />
          <button>Add book</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Aaddbooks