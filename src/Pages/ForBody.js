import React from 'react'
import  '../Pages/ForBody.css'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import data from '../Components/Data/Data';
import { FaStar,  } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const ForBody = () => {
  return (
   <>
   <div className='forBody-title'>
   <h3>BodyWash</h3>
   </div>
   <div className='forBody-div'>
    <div className='forBody-line1'></div>
    <div className='forBody-line2' ></div>
    <RiDoubleQuotesL className='forBody-quote1' size= '2em' color='rgb(152, 122, 82)' />
    <p className='forBody-p'>I love how when my soap runs out in the shower , my shampoo magically transformed into BODY WASH...!!</p>
    <RiDoubleQuotesR className='forBody-quote2' size= '2em' color='rgb(152, 122, 82)' />
   </div>



   <div className='bodyWash-item1' >
        {data.product5Details.map((product) => (
          <div key={product.id}>
            <img className='image-5' src={product.Image} alt={product.name} />
            <p className='bodyWash-price1' >Price: ${product.price}</p>
            <div className='star-5'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>

      <div className='bodyWash-item2' >
        {data.product6Details.map((product) => (
          <div key={product.id}>
            <img className='image-6'  src={product.Image} alt={product.name} />
            <p className='bodyWash-price2' >Price: ${product.price}</p>
            <div className='star-6'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>

   

    <div className='bodyCream'>
      <h3>BodyCream</h3>
    </div>
    <div className='forBody-div-1'>
    <div className='forBody-line1'></div>
    <div className='forBody-line2' ></div>
    <RiDoubleQuotesL className='forBody-quote1' size= '2em' color='rgb(152, 122, 82)' />
    <p className='forBody-p'>Your beauty should shine through your skin..!!Give your body a little love, it deserves it..!!!</p>
    <RiDoubleQuotesR className='forBody-quote2' size= '2em' color='rgb(152, 122, 82)' />
   </div>

   <div className='bodyCream-item1' >
        {data.product7Details.map((product) => (
          <div key={product.id}>
            <img className='bodyCream-img'  src={product.Image} alt={product.name} />
            <p className='bodyCream-price1' >Price: ${product.price}</p>
            <div className='star-7'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>

      <div className='bodyCream-item2' >
        {data.product8Details.map((product) => (
          <div key={product.id}>
            <img className='image-8'  src={product.Image} alt={product.name} />
            <p className='bodyCream-price2' >Price: ${product.price}</p>
            <div className='star-8'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>





   </>
  )
}

export default ForBody
