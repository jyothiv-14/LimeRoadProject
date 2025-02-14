import React from 'react'
// import Navbar from '../components/Navbar'
import CustomNavbar from '../componentsNew/Navbar'
import ProductSection from '../components/ProductSection'
import Sidebar from '../components/Sidebar'

function Men() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <Sidebar></Sidebar>

      <ProductSection category={'women'}/>
     
    </div>
  )
}

export default Men