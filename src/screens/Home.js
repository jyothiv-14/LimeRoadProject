// import Navbar from '../components/Navbar'
import ProductSection from '../componentsNew/ProductSection'
// import SubNavbar from '../components/SubNavbar'
import Carousel from '../componentsNew/Carousel'
import Banner from '../componentsNew/Banner'
// import ProductCard from '../components/ProductCard'
import CustomNavbar from '../componentsNew/Navbar'
import SubNavbar from '../componentsNew/SubNavbar'

import ProductGrid from '../componentsNew/WomenProductCard'


function Home(){
  return(<>


              <div className='container-fluid bg-white mt-5 pt-3'>
                <CustomNavbar></CustomNavbar>
                <SubNavbar></SubNavbar>
                
                
                <Carousel/>
              
                <Banner/>
              </div>

        

        {/* <div className='container-fluid bg-white mt-5 pt-3'>
          <Navbar></Navbar>
          
          <SubNavbar/>
          <Carousel/>
        
          <Banner/>
        </div> */}

        <div className='container bg-white '>
          <div className='row'>
            <ProductGrid/>
            
          </div>
        </div>





        <div className='container bg-white '>
          <div className='row'>
            <ProductSection category={'women'}/>
          </div>
        </div>
  </>)
}

export default Home
