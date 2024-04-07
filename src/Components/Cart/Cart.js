import React from 'react'
import '../Cart/Cart.css'

const Cart = ({cart}) => {
  return (
    
      <div>
      <h2>Cart</h2>
      <ul className='cart-items'>
        {cart.map((product, index) => (
          <li className='cart-li' key={index}>
            <img className='cart-images' src={product.Image}/>
            <h3 className='cart-price'> {product.price}</h3>
            <h3> {product.name}</h3>
            {/* {product.name} - ${product.price} {product.image} */}
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Cart
