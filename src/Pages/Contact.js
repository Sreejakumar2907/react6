import React from 'react'
import '../Pages/Contact.css'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='contact-line1'></div>
      <div className='contact-line2'></div>
      <RiDoubleQuotesL className='contact-quote1' size= '2em' color='rgb(152, 122, 82)' />
      <p className='contact-para'>Nature is our best and biggest teacher, and there is so much healthy and beauty magic we can learn from her<br/>Loving your skin isn't vanity, it's sanity...!!!<br/>Being natural is a journey, Enjoy the process...!!!</p>
      <p className='contact-para-2'>LIVE IT!!! <br/> LOVE IT...!!!</p>
      <RiDoubleQuotesR className='contact-quote2' size= '2em' color='rgb(152, 122, 82)'  />
    </div>
    <div className='connect'>
      <h3>Let's get connected</h3>
    </div>
    <div className='informations'>
      <p className='contact-para1'>Address: Kairbetta Hosahatty Donnington Kotagiri.</p>
      <p className='contact-para2'>Email : sreejakumar2907@gmail.com</p>
      <p className='contact-para3'>Phone number : 9489738085</p>
    </div>
    </>
  )
}

export default Contact
