import React from 'react'
// import Navbar from '../components/Navbar'
import CustomNavbar from '../componentsNew/Navbar'
import ProductSection from '../componentsNew/ProductSection'

function Men() {
  return (
    <div>
      <CustomNavbar/>
      <ProductSection category={'men'}/>
     
    </div>
  )
}

export default Men