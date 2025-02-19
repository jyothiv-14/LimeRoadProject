import React from 'react';
import { Link } from 'react-router-dom';

let ProductItem = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
      <div className="product"> 
        <Link to={`/product/${product.id}`}> {/* Pass product ID in the URL */}
          <img style={{ height: "40vh" }} src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className="title pt-4 pb-1">{product.title}</div>
      <div className="d-flex align-content-center justify-content-center">
        <span className="fas fa-star"></span> 
        <span className="fas fa-star"></span> 
        <span className="fas fa-star"></span> 
        <span className="fas fa-star"></span> 
        <span className="fas fa-star"></span> 
      </div>
      <div className="price">Rs. {product.price}</div>
    </div>
  );
};

export default ProductItem;




// import React from 'react'
// import { Link } from 'react-router-dom'

// let ProductItem = ({product}) => {
//   return (
//     <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
//             <div className="product"> 
//               <Link to='/product'>
//               <img style={{height:"40vh"}} src={product.image} alt={product.title}/>
//               </Link>
                

//             </div>
//                 <div className="title pt-4 pb-1">{product.title}</div>
//                 <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
//                 <div className="price">Rs. {product.price}</div>
//     </div>
        
    
//   )
// }

// export default ProductItem