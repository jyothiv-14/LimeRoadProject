import React from 'react'
// import Navbar from '../components/Navbar'
import CustomNavbar from '../componentsNew/Navbar'
import ProductSection from '../componentsNew/ProductSection'


function Men() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      

      <ProductSection category={'women'}/>
     
    </div>
  )
}

export default Men