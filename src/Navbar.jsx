import React from 'react'
import './Styles/navbar.css'
import img1 from './images/logon.png'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation } from 'react-router-dom';
const Navbar = () => {
  let loc=useLocation()
  let path=loc.pathname.startsWith('/adminportal')
  return (
    <div className="navbar">
        <div className="header">
            <div className="logo"><img src={img1} alt="" /><h1>digital <br /><span>libraby....</span></h1></div>
            <div className="lists">
              {path? 
              <>
              <ul>
                    <Link to='/adminportal/'>home <HomeIcon/></Link>
                    <Link to='/adminportal/books'>books<LibraryBooksIcon/></Link>
                    <Link to='/adminportal/addbooks'>addbooks<MenuBookIcon/></Link>
                    <Link to='/adminportal/users'>users<PersonOutlineIcon/></Link>
                    <Link to='/adminportal/addusers'>addusers<PersonAddAltIcon/></Link>
                    <Link to='/'><LogoutIcon/></Link>
                </ul>

              </>
              :
              <>
              <ul>
                    <Link to='/userportal/'>home <HomeIcon/></Link>
                    <Link to='/userportal/books'>books<LibraryBooksIcon/></Link>
                    <Link to='/'><LogoutIcon/></Link>
                </ul></>}
            </div>
        </div>
    </div>
  )
}

export default Navbar