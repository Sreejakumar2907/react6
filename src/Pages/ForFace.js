import React  from 'react'

import '../Pages/ForFace.css'
import { FaStar,  } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import data from '../Components/Data/Data'
import { useState } from 'react'
import Cart from '../Components/Cart/Cart';

const ForFace = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <>
    <div className='title'>
     <h3 >Facewash</h3>
    </div>
     <div className='facewash'>
        <div className='line-1'></div>
        <div className='line-2'> </div>
         <RiDoubleQuotesL className='abt-quotes1' size='2em' color='rgb(152, 122, 82)' />
        <p className='abt-para'>Skin is best nourished when its clean !<br/> Lets cleans & glow...!!!</p>
        <RiDoubleQuotesR className='abt-quotes2'  size='2em' color='rgb(152, 122, 82)'/>
        </div>



    <div className='faceWash-items'>
        {data.productDetails.map((product) => (
          <div key={product.id}>
            <img className='image' src={product.Image} alt={product.name} />
            <h4>{product.name}</h4>
            <p className='faceWash-price'>Price: ${product.price}</p>
            <div className='star'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /><br/>
            <button className='addToCart' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>  
        ))}
      </div>

      <div className='faceWash-items-2'>
        {data.product2Details.map((product) => (
          <div key={product.id}>
            <img className='image-2' src={product.Image} alt={product.name} />
            <p className='faceWash-price2'>Price: ${product.price}</p>
            <div className='star-2'>
            <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
            <button className='addToCart' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>  
        ))}
      </div>

   

      <div className='title-2'>
       <h3>FaceCream</h3>
    </div>
     <div className='faceCream'>
        <div className='line-1'></div>
        <div className='line-2'> </div>
         <RiDoubleQuotesL className='abt-quotes1' size='2em' color='rgb(152, 122, 82)' />
         <p className='abt-para'>Your beauty should shine through your skin...!!<br/> Its fine to shine...!!</p>
        <RiDoubleQuotesR className='abt-quotes2'  size='2em' color='rgb(152, 122, 82)' />
     </div>


    <div className='faceCream-items-1'>
        {data.product3Details.map((product) => (
          <div key={product.id}>
            <p className='faceCream-price1'>Price: ${product.price}</p>
            <img className='image-3' src={product.Image} alt={product.name} />
            <div className='star-3'>
            <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
            <button className='addToCart' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div> 
        ))}
    </div>

      <div className='faceCream-items-2'>
        {data.product4Details.map((product) => (
          <div key={product.id}>
            <h3 className='faceCream-name2'>{product.name}</h3>
            <p className='faceCream-price2'>Price: ${product.price}</p>
            <img className='image-4' src={product.Image} alt={product.name} />
            <div className='star-4'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            <button className='addToCart' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div> 
        ))}
      </div>

      <Cart cart={cart}/>
    </>

)
}

export default ForFace;