import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home'
import MenProducts from "../screens/MenProducts"
import WomenProducts from "../screens/WomenProducts"
import KidsProducts from "../screens/KidsProducts"
import Login from '../components/Login';
import Signup from '../components/Signup';
import Product from '../components/cards/product';
import CartPage from '../components/cards/CartPage';
import HomeProducts from '../screens/HomeProducts';
import ProductSection from "../components/ProductSection";



function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            {/* <Route path='/product' element={<Product/>}/> */}


            <Route path="/products/:category" element={<ProductSection />} />
            <Route path="/product/:id" element={<Product />} /> {/* Product detail page */}
            

            <Route path='/women' element={<WomenProducts/>}/>
            <Route path='/men' element={<MenProducts/>}/>
            <Route path='/kids' element={<KidsProducts/>}/>
            <Route path='/homeproducts' element={<HomeProducts/>}/>
            
            
            
        </Route>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      <Outlet/>
      </BrowserRouter>
  );
}

export default Routers;
