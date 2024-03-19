
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../Router/Routers'
import data from '../Data/Data'


const Layout = () => {
const {productDetail}=data
console.log(productDetail);
  return (
   <>
   <Header/>
   <div>
    <Routers productDetails={productDetail}/>
   </div>
   <Footer/>
   </>
  )
}

export default Layout
