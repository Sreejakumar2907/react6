import React from 'react'
import  '../Pages/ForBody.css'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import bodyWash1 from '../asserts/Image/bodywash1.jpeg'
import bodyWash2 from '../asserts/Image/bodywash2.jpeg'
import bodyWash3 from '../asserts/Image/bodywash3.jpeg'
import bodyWash4 from '../asserts/Image/bodywash4.jpeg'
import bodyWash5 from '../asserts/Image/bodywash5.jpeg'
import bodyWash6 from '../asserts/Image/bodywash6.jpeg'
import bodyWash7 from '../asserts/Image/bodywash-7.jpeg'
import bodyWash8 from '../asserts/Image/bodywash8.webp'
import bodyWash9 from '../asserts/Image/bodywash9.webp'
import bodyWash10 from '../asserts/Image/bodywash10.jpeg'
import bodyCream1 from '../asserts/Image/bodycream1.webp'
import bodyCream2 from '../asserts/Image/bodycream2.webp'
import bodyCream3 from '../asserts/Image/bodycream3.webp'
import bodyCream4 from '../asserts/Image/bodycream4.webp'
import bodyCream5 from '../asserts/Image/bodycream5.jpeg'
import bodyCream6 from '../asserts/Image/bodycream6.jpeg'
import bodyCream7 from '../asserts/Image/bodycream7.webp'
import bodyCream8 from '../asserts/Image/bodycream8.webp'
import bodyCream9 from '../asserts/Image/bodycream9.webp'
import bodyCream10 from '../asserts/Image/bodycream10.jpg'
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

    <div className='bodyWash-items'>
     <div>
     <img className='bodyWash1' src= {bodyWash1}/>
      <button className='bodyWash-btn1'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash2' src= {bodyWash2}/>
      <button className='bodyWash-btn2'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash3' src= {bodyWash3}/>
      <button className='bodyWash-btn3'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash4' src= {bodyWash4}/>
      <button className='bodyWash-btn4'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash5' src= {bodyWash5}/>
      <button className='bodyWash-btn5'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash6' src= {bodyWash6}/>
      <button className='bodyWash-btn6'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash7' src= {bodyWash7}/>
      <button className='bodyWash-btn7'> Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash8' src= {bodyWash8}/>
      <button className='bodyWash-btn8'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash9' src= {bodyWash9}/>
      <button className='bodyWash-btn9'>Add to cart</button>
     </div>
     <div>
     <img  className='bodyWash10' src= {bodyWash10}/>
      <button className='bodyWash-btn10'>Add to cart</button>
     </div>
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


<div className='bodyCream-title'>
  <div>
     <img  className='bodyCream1' src= {bodyCream1}/>
      <button className='bodyCream-btn1'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream2' src= {bodyCream2}/>
      <button className='bodyCream-btn2'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream3' src= {bodyCream3}/>
      <button className='bodyCream-btn3'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream4' src= {bodyCream4}/>
      <button className='bodyCream-btn4'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream5' src= {bodyCream5}/>
      <button className='bodyCream-btn5'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream6' src= {bodyCream6}/>
      <button className='bodyCream-btn6'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream7' src= {bodyCream7}/>
      <button className='bodyCream-btn7'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream8' src= {bodyCream8}/>
      <button className='bodyCream-btn8'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream9' src= {bodyCream9}/>
      <button className='bodyCream-btn9'>Add to cart</button>
  </div>
  <div>
     <img  className='bodyCream10' src= {bodyCream10}/>
      <button className='bodyCream-btn10'>Add to cart</button>
  </div>
</div>
   </>
  )
}

export default ForBody
