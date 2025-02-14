// import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'
// import SubNavbar from '../components/SubNavbar'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import CustomNavbar from '../componentsNew/Navbar'
import SubNavbar from '../componentsNew/SubNavbar'


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
            <ProductCard/>
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
