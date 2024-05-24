import React, { useEffect, useState } from 'react'
import '../Styles/read.css'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Read = () => {
  let [short, setshort] = useState(true)
  let handleshort=()=>{
    setshort(!short)
  }
  let [long, setlong] = useState(true)
  let handlelong=()=>{
    setlong(!long)
  }

 
 let navigateback=useNavigate(); 


  let params = useParams()
  let bookid = params.id


  let [books, setBooks] = useState([])
  useEffect(() => {
    let fetchBookIdData = async () => {
      let bookResp = await fetch(`http://localhost:4000/books/${bookid}`)
      let bookData = await bookResp.json()
      setBooks(bookData);
    }
    fetchBookIdData()
  }, [])
  let navigate = useNavigate()
  let loc = useLocation()
  let path = loc.pathname.startsWith('/adminportal')
  let goback = () => {
    if (path) {
      navigate('/adminportal/books/')

    }
    else {
      navigate('/userportal/books/')
    }
  }
  let { thumbnailUrl, authors, id, title, isbn, longDescription, publishedDate, pageCount, shortDescription } = books
  return (
    <>
      <div className="read-page">
        <div className="left">
          <div className="box">
            <p>Reg No: <span>{isbn}</span></p>
            <h3>book title : <span>{title}</span></h3>
            <h3>authors: <span>{authors}</span></h3>
            <div className="short">
            <button onClick={handleshort}>short-descripition</button>
            <div className="para">
            {short?'':<><h6>{shortDescription}</h6></>}
            </div>
            </div>
            <div className="long">
              <button onClick={handlelong}>long-Description</button>
              <div className="para">
            {long?'':<><h6>{longDescription}</h6></>}
            </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="box">
            <img src={thumbnailUrl} alt="" />
          </div>
        </div>
        <div className="back">
        <button onClick={goback}> ←BACK </button>
        </div>
      </div>
    </>

  )
}

export default Read