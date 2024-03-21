import{Routes, Route, Navigate} from 'react-router-dom'
import React from 'react';
import Home from '../Pages/Home'
import About from '../Pages/About'
import ForFace from '../Pages/ForFace'
import ForBody from '../Pages/ForBody'
import ForHair from '../Pages/ForHair';
import Contact from '../Pages/Contact';
// import CartList from '../Pages/CartList';
// import Cart from '../Components/Cart/Cart';
 import { useState } from 'react'
import Cart from '../Components/Cart/Cart';





const Routers = ({productDetails}) => {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState([]); 
  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    <>
   <Routes>
     <Route path='/' element={<Navigate to="home"/>} /> 
    <Route path="home" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path='forFace' element= {<ForFace  productDetails={productDetails} addToCart={addToCart} />}/>
    <Route path='forBody' element= {<ForBody  productDetails={productDetails} />}/>
    <Route path='forHair' element= {<ForHair/>}/>
    <Route path="contact" element={<Contact/>} />
    <Route path="cart" element={<Cart cart={cart} />} />
   </Routes>
   </>
  )
}

export default Routers;



