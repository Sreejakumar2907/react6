import React from 'react'
import '../Pages/ForHair.css'
import { RiDoubleQuotesL , RiDoubleQuotesR} from "react-icons/ri";
import data from '../Components/Data/Data';
import { FaStar,  } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const ForHair = () => {
  return (
    <>
    <div className='forHair-title'>
       <h3>HairOil</h3>
    </div>
    <div className='forHair-div'>
        <div className='forHair-line1'></div>
        <div className='forHair-line2' ></div>
        <RiDoubleQuotesL className='forHair-quotes1' size='2em' color='rgb(152, 122, 82)' />
        <p className='forHair-para'>Its okay to be a little OBSESSED with your HAIR...!!!<br/>Straight,wavy, or curly, if its healthy, its BEAUTIFUL...!!!<span className='hair'> <br/>-GOOD HAIR..!!!<br/>-GOOD MOOD...!!!<br/>-GOOD DAY...!!! </span></p>
        <RiDoubleQuotesR className='forHair-quotes2'  size='2em' color='rgb(152, 122, 82)' />
    </div>

    <div className='hairOil-item1' >
        {data.product5Details.map((product) => (
          <div key={product.id}>
            <img className='hairOil-img' src={product.Image} alt={product.name} />
            <p className='hairOil-price1' >Price: ${product.price}</p>
            <div className='star-9'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>

      <div className='hairOil-item2' >
        {data.product6Details.map((product) => (
          <div key={product.id}>
            <img className='hairOil-img2'  src={product.Image} alt={product.name} />
            <p className='hairOil-price2' >Price: ${product.price}</p>
            <div className='star-10'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>


    <div className='shampoo-title'>
        <h3>Shampoo</h3>
    </div>
    <div className='forHair-div-2'>
        <div className='forHair-line1'></div>
        <div className='forHair-line2' ></div>
        <RiDoubleQuotesL className='forHair-quotes1' size='2em' color='rgb(152, 122, 82)' />
        <p className='forHair-para'>A healthy scalp essential is for healthy hairgrowth. if you want fast healthy growing hair, exfoliate your scalp once in a while...!!!<br/>Be good to your Hair. You wear it EVERYDAY...!!!</p>
        <RiDoubleQuotesR className='forHair-quotes2'  size='2em' color='rgb(152, 122, 82)' />
    </div>

    <div className='shampoo-item1' >
        {data.product7Details.map((product) => (
          <div key={product.id}>
            <img className='shampoo-img'  src={product.Image} alt={product.name} />
            <p className='shampoo-price1' >Price: ${product.price}</p>
            <div className='star-11'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>

      <div className='shampoo-item2' >
        {data.product8Details.map((product) => (
          <div key={product.id}>
            <img className='shampoo-img2'  src={product.Image} alt={product.name} />
            <p className='shampoo-price2' >Price: ${product.price}</p>
            <div className='star-12'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
          </div>  
        ))}
      </div>
    
    </>
  )
}

export default ForHair
