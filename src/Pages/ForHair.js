import React from 'react'
import '../Pages/ForHair.css'
import { RiDoubleQuotesL , RiDoubleQuotesR} from "react-icons/ri";
import hairOil1 from '../asserts/Image/hairoil1.webp'
import hairOil2 from '../asserts/Image/hairoil2.webp'
import hairOil3 from '../asserts/Image/hairoil3.webp'
import hairOil4 from '../asserts/Image/hairoil4.jpeg'
import hairOil5 from '../asserts/Image/hairoil5.jpg'
import hairOil6 from '../asserts/Image/hairoil6.webp'
import hairOil7 from '../asserts/Image/hairoil7.webp'
import hairOil8 from '../asserts/Image/hairoil8.webp'
import hairOil9 from '../asserts/Image/hairoil9.jpg'
import hairOil10 from '../asserts/Image/hairoil10.webp'
import shampoo1 from '../asserts/Image/shampoo1.jpg'
import shampoo2 from '../asserts/Image/shampoo2.webp'
import shampoo3 from '../asserts/Image/shampoo3.webp'
import shampoo4 from '../asserts/Image/shampoo4.jpg'
import shampoo5 from '../asserts/Image/shampoo5.jpg'
import shampoo6 from '../asserts/Image/shampoo6.webp'
import shampoo7 from '../asserts/Image/shampoo7.jpg'
import shampoo8 from '../asserts/Image/shampoo8.webp'
import shampoo9 from '../asserts/Image/shampoo9.jpg'
import shampoo10 from '../asserts/Image/shampoo10.jpg'
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

    <div className='hairOil-items'>
        <div>
            <img className='hairOil1' src= {hairOil1}/>
            <button className='hairOil-btn1'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil2' src= {hairOil2}/>
            <button className='hairOil-btn2'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil3' src= {hairOil3}/>
            <button className='hairOil-btn3'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil4' src= {hairOil4}/>
            <button className='hairOil-btn4'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil5' src= {hairOil5}/>
            <button className='hairOil-btn5'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil6' src= {hairOil6}/>
            <button className='hairOil-btn6'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil7' src= {hairOil7}/>
            <button className='hairOil-btn7'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil8' src= {hairOil8}/>
            <button className='hairOil-btn8'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil9' src= {hairOil9}/>
            <button className='hairOil-btn9'>Add to cart</button>
        </div>
        <div>
            <img className='hairOil10' src= {hairOil10}/>
            <button className='hairOil-btn10'>Add to cart</button>
        </div>
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
    <div className='shampoo-items'>
        <div>
            <img className='shampoo1' src={shampoo1} />
            <button className='shampoo-btn1'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo2' src={shampoo2} />
            <button className='shampoo-btn2'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo3' src={shampoo3} />
            <button className='shampoo-btn3'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo4' src={shampoo4} />
            <button className='shampoo-btn4'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo5' src={shampoo5} />
            <button className='shampoo-btn5'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo6' src={shampoo6} />
            <button className='shampoo-btn6'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo7' src={shampoo7} />
            <button className='shampoo-btn7'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo8' src={shampoo8} />
            <button className='shampoo-btn8'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo9' src={shampoo9} />
            <button className='shampoo-btn9'>Add to cart</button>
        </div>
        <div>
            <img className='shampoo10' src={shampoo10} />
            <button className='shampoo-btn10'>Add to cart</button>
        </div>
    </div>

    </>
  )
}

export default ForHair
