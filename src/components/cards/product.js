import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import CustomNavbar from "../Navbar";
import Footer from "../Footer";

const Product = ({ category }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const url = `/api/women.json`; // Fetch the product list
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
        setSimilarProducts(data.slice(0, 3)); // Select 3 similar products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [id, category]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    // Add to cart logic can be implemented here
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading if product is not found
  }

  return (
    <div className="product-container">
      <CustomNavbar />

      <div className="product-content">
        <div className="product-gallery">
          <img
            src={product.image}
            alt={product.title}
            className="main-image"
            onClick={() => setZoomImage(product.image)}
          />
          <div className="thumbnail-container">
            {product?.thumbnails?.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setZoomImage(thumb)}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="brand">Brand: {product.brand || "Unknown"}</p>
          <div className="rating">⭐⭐⭐⭐⭐ (4.5)</div>
          <div className="price">
            <span className="original-price">₹{product.originalPrice || "N/A"}</span>
            <span className="discounted-price">₹{product.price}</span>
            {product.discount && <span className="discount">({product.discount}% OFF)</span>}
          </div>

          <div className="size-selector">
            <p>Select Size:</p>
            <div className="sizes">
              {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>

      {zoomImage && (
        <div className="zoom-overlay" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}

      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-products-container">
          {similarProducts.map((item) => (
            <div key={item.id} className="similar-product">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p className="price">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;





// import React  from "react";
// import "./product.css";
// import images from "../../assets/pictures/images";
// import CustomNavbar from "../Navbar";
// import { Link } from "react-router-dom";
// import Footer from "../Footer";
// import { useState } from "react";

// const Product = () => {

// const [zoomImage, setZoomImage] = useState(null);
// const [selectedSize, setSelectedSize] = useState(null);

// const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert("Please select a size before adding to cart!");
//       return;
//     }
//   };

//   const similarProducts = [
//     { id: 1, name: "Floral Printed Shirt", price: "₹999", image: images.simkurta1 },
//     { id: 2, name: "Casual Blue Shirt", price: "₹1199", image: images.simkurta2 },
//     { id: 3, name: "Tropical Pattern Shirt", price: "₹899", image: images.simkurta3 }
//   ];

//   return (
//     <div className="product-container">
//         <CustomNavbar/>
//       <div className="product-content">
//         <div className="product-gallery">
//           <img
//             src={images.kurta1}
//             alt="Main Product"
//             className="main-image"
//             onClick={() => setZoomImage('images.kurta1')}
//           />
//           <div className="thumbnail-container">
//             <img src={images.kurta1} alt="Thumbnail 1" onClick={() => setZoomImage("images.kurta1")} />
//             <img src={images.kurta22} alt="Thumbnail 2" onClick={() => setZoomImage("images.kurta22")} />
//           </div>
//         </div>

//         <div className="product-details">
//           <h1>Women Full Sleeves Printed Casual Kurta Set</h1>
//           <p className="brand">Brand: SHOWOFF</p>
//           <div className="rating">⭐⭐⭐⭐⭐ (4.5)</div>
//           <div className="price">
//             <span className="original-price">₹2698</span>
//             <span className="discounted-price">₹1079</span>
//             <span className="discount">(60% OFF)</span>
//           </div>

//           <div className="size-selector">
//             <p>Select Size:</p>
//             <div className="sizes">
//               {['S', 'M', 'L', 'XL', '2XL', '3XL'].map(size => (
//                 <button 
//                 key={size} 
//                 className={`size-button ${selectedSize === size ? 'selected' : ''}`}
//                 onClick={() => setSelectedSize(size)}
//                 >{size}</button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <Link to='/cart'>
//             <button className="add-to-cart" onClick={handleAddToCart} >ADD TO CART</button>
//             </Link>
          

//           </div>

          
//           {/* <p className="cart-info">Cart Items: {cartItems}</p> */}
//         </div>
//       </div>
//       { zoomImage && (
//         <div className="zoom-overlay" onClick={() => setZoomImage(null)}>
//           <img src={images.kurta1} alt="Zoomed" className="zoomed-image" />
//         </div>
//       )}

//       <div className="similar-products">
//         <h2>Similar Products</h2>
//         <div className="similar-products-container">
//           {similarProducts.map(product => (
//             <div key={product.id} className="similar-product">
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p className="price">{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Product;
