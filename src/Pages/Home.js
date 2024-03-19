
import { RiDoubleQuotesL , RiDoubleQuotesR  } from "react-icons/ri";
import '../Pages/Home.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1 from '../../src/asserts/Image/slide1.jpg'
import Slide2 from '../../src/asserts/Image/slide2.webp'
import Slide3 from '../../src/asserts/Image/slide3.jpg'
import Img1 from '../../src/asserts/Image/img1-nav.jpeg'
import Img2 from '../../src/asserts/Image/img2.nav.jpeg'
import Img3 from '../../src/asserts/Image/img3.nav.jpeg'
import Img4 from '../../src/asserts/Image/img4.nav.jpeg'
import Img5 from '../../src/asserts/Image/img5.nav.jpeg'


import React from 'react'

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  return (
    <div>
        <>
  
  <Carousel className='slider'
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  
 
>
  <img className='slide1' src={Slide1} />
  <img className='slide2' src={Slide2}/>
  <img className='slide3' src={Slide3}/>

</Carousel>
 
<div>
  <img className='nav_img' src='https://5.imimg.com/data5/PI/WZ/EP/SELLER-100670190/herbal-ayurvedic-handmade-soaps-third-party-contract-manufacturing.jpg'/>
</div> 

<div className='nav_div '>
<p className='nav_p'>Treat yourself</p>
<h2 className='nav_h2'>Daily!</h2>
</div>


<div className='soap'>
  <h3 className='naturalSoap' >Natural Soap</h3>
  <img className='img1' src={Img1}/>
  <img className='img2' src={Img2}/>
  <img className='img3' src={Img3}/>
  <img className='img4' src={Img4}/>
  <img className='img5' src={Img5}/>
</div>


<div className='quotes'>
<div className='line1'></div>
<div className='line2'></div>
<RiDoubleQuotesL size="3em" color=' rgb(152, 122, 82)' className='left' />
<p className='quotes-p'>" Being natural is not a statement, it is the closest we can get to being ourself"</p>
<RiDoubleQuotesR size="3em" color=' rgb(152, 122, 82)' className='right' />
</div>

  </>
    </div>
  )
}

export default Home


