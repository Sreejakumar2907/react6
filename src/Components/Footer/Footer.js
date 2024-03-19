import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin,CiTwitter } from "react-icons/ci";
import './Footer.css';
const Footer = () => {
  return (
 
     <>
     <div className='footer'>
     <h3>Care & Fair</h3>
    <div className='div1'> <a href='#'><FaInstagram  className='icon'/></a> </div>
    <div className='div2'> <a href='#'><CiFacebook  className='icon'/></a> </div>
   <div className='div3'> <a href='#'><CiLinkedin   className='icon'/></a> </div>
    <div className='div4'><a href='#'><CiTwitter  className='icon'/></a> </div>
     </div>
     <hr className='hr'/>

     <div className='explore'>
      <h4>Explore</h4>
     <div className='explore-a'>
     <a href='#'>Home</a><br/>
      <a href='#'>About</a><br/>
      <a href='#'>For Face</a><br/>
      <a href='#'>For Body</a><br/>
      <a href='#'>For Hair</a><br/>
      <a href='#'>Contact</a><br/>
     </div>
      </div>
     

     <div className='utility'>
      <h4>Utility Pages</h4>
      <p className='para1'>Privacy Policy</p>
      <p className='para2'>Terms of Use</p>
     </div>

     <div className='address'>
      <h4>Keep in Touch</h4>
      <p className='address-p1'>Address : Kairbetta Hosahatty Donnington Post Kotagiri</p>
      <p className='address-p2'>Mail : sreejakumar2907@gmail.com</p>
      <p className='address-p3'>Phone : 9489738085</p>
     </div>
     </>
  
  )
}

export default Footer;
