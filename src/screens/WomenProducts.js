import React from 'react'
// import Navbar from '../components/Navbar'
import CustomNavbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'


function Men() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      

      <ProductSection category={'women'}/>
     
    </div>
  )
}

export default Men