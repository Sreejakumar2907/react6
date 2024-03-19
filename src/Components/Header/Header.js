import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import './Header.css';
import {Link} from "react-router-dom";



const Header = () => {

  return (

  <>
  <div className='navBar'>
    <div className='nav_title'>
      <h3>Care & Fair</h3>
    </div>
  <div className='nav'>
  <ul className='nav_ul'>
      <Link to='/home'> Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/forFace'> ForFace </Link>
      <Link to='/forBody'> ForBody </Link>
      <Link to='/forHair'> ForHair </Link>
      <Link to='/contact'> Contact </Link>
      <Link to='/login'> <CgProfile /> Login </Link>
      <Link to='/cart'> <MdOutlineShoppingBag />  Cart </Link>
     
    </ul>
  </div>


  
</div>


 





  </>
  )
}

export default Header;
