
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // Get category from URL
// import ProductItem from "./ProductItem";

// function ProductSection() {
//   const { category } = useParams(); // Get the category (men, women, kids, home)
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const url = `/api/${category}.json`; // Load JSON based on category

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, [category]); // Runs when category changes

//   return (
//     <div className="container bg-white">
//       <div className="row">
//         {products.map((product) => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductSection;



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