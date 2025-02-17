import React from 'react'
import CustomNavbar from '../components/Navbar'
import ProductDisplay from '../components/cards/ProductCardMain'


function HomeProducts() {
  return (
    <div >
      <CustomNavbar/>
      <div className='container' ><ProductDisplay/></div>
      
      
     
    </div>
  )
}

export default HomeProducts