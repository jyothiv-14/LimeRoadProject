import React from 'react';
// import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home'
import MenProducts from "../screens/MenProducts"
import WomenProducts from "../screens/WomenProducts"
import KidsProducts from "../screens/KidsProducts"
import Login from '../components/Login';
import Signup from '../components/Signup';
import Product from '../components/cards/product';
import CartPage from '../components/cards/CartPage';
//import ProductPage from '../components/SingleP';


function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/women' element={<WomenProducts/>}/>
            <Route path='/men' element={<MenProducts/>}/>
            <Route path='/kids' element={<KidsProducts/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default Routers;
