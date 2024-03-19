import{Routes, Route, Navigate} from 'react-router-dom'
import React from 'react';
import Home from '../Pages/Home'
import About from '../Pages/About'
import ForFace from '../Pages/ForFace'
import ForBody from '../Pages/ForBody'
import ForHair from '../Pages/ForHair';
import Contact from '../Pages/Contact';





const Routers = ({productDetails}) => {
  return (
    <>
   <Routes>
     <Route path='/' element={<Navigate to="home"/>} /> 
    <Route path="home" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path='forFace' element= {<ForFace  productDetails={productDetails} />}/>
    <Route path='forBody' element= {<ForBody/>}/>
    <Route path='forHair' element= {<ForHair/>}/>
    <Route path="contact" element={<Contact/>} />
   </Routes>
   </>
  )
}

export default Routers;



