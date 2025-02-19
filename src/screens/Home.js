
//import ProductSection from '../components/ProductSection'

import Carousel from '../components/Carousel'

//import ProductCard from '../components/ProductCard'
import CustomNavbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'
import ProductDisplay from '../components/cards/ProductCardMain'

function Home(){
  return(<>
              
                <CustomNavbar></CustomNavbar>
                <SubNavbar></SubNavbar>
                <Carousel></Carousel>

          <div className='container' >
              <div className='row'>
                  <ProductDisplay/>
              </div>
          </div>
        
  </>)
}

export default Home
