import React from 'react'
import Cart from '../Components/Cart/Cart';
// import Cart from '../Components/Cart/Cart'
// import { useState } from 'react'
const CartList = ({cart}) => {
 console.log(cart);
  return (
    <>
    <Cart cart={cart}/>
    </>
  //   <div>
  //   <h2>Cart</h2>
  //    {/* {cart.length === 0 ? (
  //     <p>Your cart is empty</p>
  //   ) : ( */}
  //     {/* <ul>
  //       {cart.map((item, index) => (
  //         <li key={index}>
  //           <p>Name: {item.name}</p>
  //           <p>Price: ${item.price}</p>
  //           <img src={item.Image} alt={item.name} />
  //         </li>
  //       ))}
  //     </ul>
  //   )}  */}


  //   <div>
  //     <h2>Cart</h2>
  //     <ul className='cart-items'>
  //       {cart.map((product, index) => (
  //         <li className='cart-li' key={index}>
  //           <img className='cart-images' src={product.Image}/>
  //           <h3 className='cart-price'> {product.price}</h3>
  //           <h3> name</h3>
  //           {/* {product.name} - ${product.price} {product.image} */}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // </div>
  )
}

export default CartList
