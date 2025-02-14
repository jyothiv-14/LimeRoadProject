import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'


function ProductSection({category}) {
  let [products, setProducts]= useState([]);

  const url = `/api/${category}.json`;

  useEffect (()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=> setProducts(data))
  },[url])

  


  return (
  <div className="container bg-white">
      <div className="row">
        
          
          { products.map(product => <ProductItem key={product.id} product={product}/> )}
        
        
      </div>
  </div>

  )
}

export default ProductSection