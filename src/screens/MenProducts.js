import React from 'react'
// import Navbar from '../components/Navbar'
import CustomNavbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'

function Men() {
  return (
    <div>
      <CustomNavbar/>
      <ProductSection category={'men'}/>
     
    </div>
  )
}

export default Men