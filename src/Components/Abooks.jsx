import React, { useEffect, useState } from 'react'
import '../Styles/abooks.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Abooks = () => {
  let [bookData, setBookdata] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      let booksdata = await fetch('http://localhost:4000/books')
      let data = await booksdata.json()
      setBookdata(data)
    }
    fetchdata()
  }, [bookData])

  //!---------
  let navigate=useNavigate()
  let loc=useLocation()
  let path =loc.pathname.startsWith('/adminportal')
  let readbook=(id)=>{
    if(path){
    navigate(`/adminportal/read/${id}`)
    }
    else{
      navigate(`/userportal/read/${id}`)
    }
  } 
  return (
    <div className="books">
      {bookData.map((elem,index) => {
        let { id, title, isbn, authors, thumbnailUrl } = elem
        return (
          <>
            <div className="card">
              <div className="cards">
                <div className="i"><img src={thumbnailUrl} alt="Image Deleted." /> <span>{index+1}</span></div>
                <div className="t">
                  <div className="tt">{title}</div>
                  <div className="no">Regno:<span>{isbn}</span></div>
                  <div className="a">Authors:<span>{authors}</span></div>
                  
                  <div className="but">
                    <span className='r'><button  onClick={() => readbook(id)}>READ</button></span>
                    <span className='d'><button>DELETE</button></span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Abooks