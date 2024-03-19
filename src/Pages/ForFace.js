import React from 'react'
import '../Pages/ForFace.css'
import { FaStar,  } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
// import faceWash1 from '../asserts/Image/facewash1.jpeg'
// import faceWash2 from '../asserts/Image/facewash2.jpeg'
// import faceWash3 from '../asserts/Image/facewash3.jpeg'
// import faceWash4 from '../asserts/Image/facewash4.jpeg'
// import faceWash5 from '../asserts/Image/facewash5.jpeg'
// import faceWash6 from '../asserts/Image/facewash6.jpeg'
// import faceWash7 from '../asserts/Image/facewash7.jpeg'
// import faceWash8 from '../asserts/Image/facewash8.jpeg'
// import faceWash9 from '../asserts/Image/facewash9.jpeg'
// import faceWash10 from '../asserts/Image/facewash10.jpeg'
// import faceCream1 from '../asserts/Image/facecream1.jpg'
// import faceCream2 from '../asserts/Image/facecream2.webp'
// import faceCream3 from '../asserts/Image/facecream3.webp'
// import faceCream4 from '../asserts/Image/facecream4.jpeg'
// import faceCream5 from '../asserts/Image/facecream5.webp'
// import faceCream6 from '../asserts/Image/facecream6.jpeg'
// import faceCream7 from '../asserts/Image/facecream7.jpg'
// import faceCream8 from '../asserts/Image/facecream8.webp'
// import faceCream9 from '../asserts/Image/facecream9.webp'
// import faceCream10 from '../asserts/Image/facecream10.webp'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
const ForFace = ({productDetails}) => {
console.log(productDetails);
  return (
    
    <>
    {/* <div className='products' >
    {productDetails.Map((productDetail)=>{
      // <div className='card'>
      //   <div className='image' > <img src= {productDetail.Image} /></div>
      // </div>
      console.log(productDetail);
    })}
    </div> */}
    </>

    
//     <>
//     <div className='title'>
//     <h3 >Facewash</h3>
//     </div>
//     <div className='facewash'>
//         <div className='line-1'></div>
//         <div className='line-2'> </div>
//         <RiDoubleQuotesL className='abt-quotes1' size='2em' color='rgb(152, 122, 82)' />
//         <p className='abt-para'>Skin is best nourished when its clean !<br/> Lets cleans & glow...!!!</p>
//         <RiDoubleQuotesR className='abt-quotes2'  size='2em' color='rgb(152, 122, 82)' />
//     </div>
//     <div className='items'>
//       <div>
//       <img className='faceWash1' src= {faceWash1}/>
//       <button className='btn1'>Add to Cart</button>
//       <div className='star1'><FaStar className='rating1' color='beige' /><FaStar  className='rating2' color='beige' /><FaStar  className='rating3' color='beige' /><FaStar  className='rating4' color='beige' /><FaStar className='rating5' color='beige' /></div>
//       <div className='faceWash1-rs'>Rs.899/- </div>
//       </div>
//     <div>
//     <img className='faceWash2' src= {faceWash2}/>
//     <button className='btn2'>Add to Cart</button>
//     <div className='star2'><FaStar className='star2-rating1' color='beige' /><FaStar  className='star2-rating2' color='beige' /><FaStar  className='star2-rating3' color='beige' /><FaRegStar  className='star2-rating4' color='beige' /><FaRegStar className='star2-rating5' color='beige' /></div>
//     </div>
//     <div>
//     <img className='faceWash3' src= {faceWash3}/>
//     <button className='btn3'>Add to Cart</button>
//     <div className='star3'><FaStar className='star3-rating1' color='beige' /><FaStar  className='star3-rating2' color='beige' /><FaStar  className='star3-rating3' color='beige' /><FaStar  className='star3-rating4' color='beige' /><FaRegStar className='star3-rating5' color='beige' /></div>
//     </div>
//     <div>
//     <img className='faceWash4' src= {faceWash4}/>
//     <button className='btn4'>Add to Cart</button>
//     <div className='star4'><FaStar className='star4-rating1' color='beige' /><FaStar  className='star4-rating2' color='beige' /><FaStar  className='star4-rating3' color='beige' /><FaStar  className='star4-rating4' color='beige' /><FaStar className='star4-rating5' color='beige' /></div>
//     </div>
//       <div>
//       <img className='faceWash5' src= {faceWash5}/>
//       <button className='btn5'>Add to Cart</button>
//       <div className='star5'><FaStar className='star5-rating1' color='beige' /><FaStar  className='star5-rating2' color='beige' /><FaStar  className='star5-rating3' color='beige' /><FaRegStar  className='star5-rating4' color='beige' /><FaRegStar className='star5-rating5' color='beige' /></div>
//       </div>

//       <div>
//       <img className='faceWash6' src= {faceWash6}/>
//       <button className='btn6'>Add to Cart</button>
//       <div className='star6'><FaStar className='star6-rating1' color='beige' /><FaStar  className='star6-rating2' color='beige' /><FaStar  className='star6-rating3' color='beige' /><FaRegStar  className='star6-rating4' color='beige' /><FaRegStar className='star6-rating5' color='beige' /></div>
//       </div>
//       <div>
//       <img className='faceWash7' src= {faceWash7}/>
//       <button className='btn7'>Add to Cart</button>
//       <div className='star7'><FaStar className='star7-rating1' color='beige' /><FaStar  className='star7-rating2' color='beige' /><FaStar  className='star7-rating3' color='beige' /><FaStar  className='star7-rating4' color='beige' /><FaRegStar className='star7-rating5' color='beige' /></div>
//       </div>
//       <div>
//       <img className='faceWash8' src= {faceWash8}/>
//       <button className='btn8'>Add to Cart</button>
//       <div className='star8'><FaStar className='star8-rating1' color='beige' /><FaStar  className='star8-rating2' color='beige' /><FaRegStar  className='star8-rating3' color='beige' /><FaRegStar  className='star8-rating4' color='beige' /><FaRegStar className='star8-rating5' color='beige' /></div>
//       </div>
//       <div>
//       <img className='faceWash9' src= {faceWash9}/>
//       <button className='btn9'>Add to Cart</button>
//       <div className='star9'><FaStar className='star9-rating1' color='beige' /><FaStar  className='star9-rating2' color='beige' /><FaStar  className='star9-rating3' color='beige' /><FaStar  className='star9-rating4' color='beige' /><FaRegStar className='star9-rating5' color='beige' /></div>
//       </div>
//       <div>
//       <img className='faceWash10' src= {faceWash10}/>
//       <button className='btn10'>Add to Cart</button>
//       <div className='star10'><FaStar className='star10-rating1' color='beige' /><FaStar  className='star10-rating2' color='beige' /><FaStar  className='star10-rating3' color='beige' /><FaStar  className='star10-rating4' color='beige' /><FaStar className='star10-rating5' color='beige' /></div>
//       </div>
//     </div>


//     <div className='title-2'>
//       <h3>FaceCream</h3>
//     </div>
//     <div className='faceCream'>
//         <div className='line-1'></div>
//         <div className='line-2'> </div>
//         <RiDoubleQuotesL className='abt-quotes1' size='2em' color='rgb(152, 122, 82)' />
//         <p className='abt-para'>Your beauty should shine through your skin...!!<br/> Its fine to shine...!!</p>
//         <RiDoubleQuotesR className='abt-quotes2'  size='2em' color='rgb(152, 122, 82)' />
//     </div>

//     <div className='items-2'>
//    <div>
//    <img className='faceCream1' src= {faceCream1}/>
//     <button className='btn11'>Add to Cart</button>
//     <div className='star11'><FaStar className='star11-rating1' color='beige' /><FaStar  className='star11-rating2' color='beige' /><FaStar  className='star11-rating3' color='beige' /><FaStar  className='star11-rating4' color='beige' /><FaStar className='star11-rating5' color='beige' /></div>
//    </div>
//    <div>
//    <img className='faceCream2' src= {faceCream2}/>
//     <button className='btn12'>Add to Cart</button>
//     <div className='star12'><FaStar className='star12-rating1' color='beige' /><FaStar  className='star12-rating2' color='beige' /><FaStar  className='star12-rating3' color='beige' /><FaStar  className='star12-rating4' color='beige' /><FaStar className='star12-rating5' color='beige' /></div>
//    </div>
//    <div>
//    <img className='faceCream3' src= {faceCream3}/>
//     <button className='btn13'>Add to Cart</button>
//     <div className='star13'><FaStar className='star13-rating1' color='beige' /><FaStar  className='star13-rating2' color='beige' /><FaStar  className='star13-rating3' color='beige' /><FaStar  className='star13-rating4' color='beige' /><FaStar className='star13-rating5' color='beige' /></div>
//    </div>
//    <div>
//    <img className='faceCream4' src= {faceCream4}/>
//     <button className='btn14'>Add to Cart</button>
//     <div className='star14'><FaStar className='star14-rating1' color='beige' /><FaStar  className='star14-rating2' color='beige' /><FaStar  className='star14-rating3' color='beige' /><FaStar  className='star14-rating4' color='beige' /><FaStar className='star14-rating5' color='beige' /></div>
//    </div>
//    <div>
//    <img className='faceCream5' src= {faceCream5}/>
//     <button className='btn15'>Add to Cart</button>
//     <div className='star15'><FaStar className='star15-rating1' color='beige' /><FaStar  className='star15-rating2' color='beige' /><FaStar  className='star15-rating3' color='beige' /><FaStar  className='star15-rating4' color='beige' /><FaStar className='star15-rating5' color='beige' /></div>
//    </div>
//    <div>
//    <img className='faceCream6' src= {faceCream6}/>
//     <button className='btn16'>Add to Cart</button>
//     {/* <div className='star13'><FaStar className='star13-rating1' color='beige' /><FaStar  className='star13-rating2' color='beige' /><FaStar  className='star13-rating3' color='beige' /><FaStar  className='star13-rating4' color='beige' /><FaStar className='star13-rating5' color='beige' /></div> */}
//    </div>
//    <div>
//    <img className='faceCream7' src= {faceCream7}/>
//     <button className='btn17'>Add to Cart</button>
//     {/* <div className='star13'><FaStar className='star13-rating1' color='beige' /><FaStar  className='star13-rating2' color='beige' /><FaStar  className='star13-rating3' color='beige' /><FaStar  className='star13-rating4' color='beige' /><FaStar className='star13-rating5' color='beige' /></div> */}
//    </div>
//    <div>
//    <img className='faceCream8' src= {faceCream8}/>
//     <button className='btn18'>Add to Cart</button>
//     {/* <div className='star13'><FaStar className='star13-rating1' color='beige' /><FaStar  className='star13-rating2' color='beige' /><FaStar  className='star13-rating3' color='beige' /><FaStar  className='star13-rating4' color='beige' /><FaStar className='star13-rating5' color='beige' /></div> */}
//    </div>
//    <div>
//    <img className='faceCream9' src= {faceCream9}/>
//     <button className='btn19'>Add to Cart</button>
//     {/* <div className='star13'><FaStar className='star13-rating1' color='beige' /><FaStar  className='star13-rating2' color='beige' /><FaStar  className='star13-rating3' color='beige' /><FaStar  className='star13-rating4' color='beige' /><FaStar className='star13-rating5' color='beige' /></div> */}
//    </div>
//    <div>
//    <img className='faceCream10' src= {faceCream10}/>
//     <button className='btn20'>Add to Cart</button>
//     {/* <div className='star13'><FaStar className='star13-rating1' color='beige' /><FaStar  className='star13-rating2' color='beige' /><FaStar  className='star13-rating3' color='beige' /><FaStar  className='star13-rating4' color='beige' /><FaStar className='star13-rating5' color='beige' /></div> */}
//    </div>
//     </div>
    //  </>
   )
 }

export default ForFace;
