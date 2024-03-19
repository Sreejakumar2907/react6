import React from 'react'
import '../Pages/About.css'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import Soap from '../asserts/Image/natural-soap.webp'
import bgNaturals from '../asserts/Image/bg-natural.jpg'
const About = () => {
  return (
   <>
   <div className='about-sec1'>
    <div className='about-div1'></div>
    <div className='about-div2'></div>
    <RiDoubleQuotesL size="2em" color='rgb(152, 122, 82)' className='l-quote' />
    <p className='about-para'>Get the happiness in your hands...!!!<br/>Fresh from farm , '0' chemicals '0' fragrance<br/>Feel it ! Love it !</p>
    <RiDoubleQuotesR  size="2em" color='rgb(152, 122, 82)' className='r-quote' />
   </div>

   <img className='ing-image' src={bgNaturals} width= '100%' height='750px'/> 
   <div className='ingredients'>

    <h3>Ingredients involved</h3>
    <div className='ing1'> <p className='ing1-p'> AVOCADO OIL</p></div>
    <div className='ing2'><p className='ing2-p'>ALMOND SWEET OIL</p> </div>
    <div className='ing3'><p className='ing3-p'>COCOA BUTTER</p></div>
    <div className='ing4'><p className='ing4-p'>OLIVE OIL</p></div>
    <div className='ing5'><p className='ing5-p'>CASTRO OIL</p></div>
   </div>

   <div className='intro'>
    <div><img src= {Soap}  className='soap'/></div>
    <p className='naturalPrd-intro'>Natural products and their structural analogues have historically made a major contribution to pharmacotherapy, especially for cancer and infectious diseases. Nevertheless, natural products also present challenges for drug discovery, such as technical barriers to screening, isolation, characterization and optimization, which contributed to a decline in their pursuit by the pharmaceutical industry from the 1990s onwards. In recent years, several technological and scientific developments — including improved analytical tools, genome mining and engineering strategies, and microbial culturing advances — are addressing such challenges and opening up new opportunities. Consequently, interest in natural products as drug leads is being revitalized, particularly for tackling antimicrobial resistance. Here, we summarize recent technological developments that are enabling natural product-based drug discovery, highlight selected applications and discuss key opportunities.</p>
   <div className='love'>
   <p>- MADE WITH LOVE...!!!</p>
    <p>- MADE WITH CARE...!!!</p>
    <p>- MADE JUST FOR YOU...!!!</p>
   </div>
   </div>
   </>
  )
}

export default About
