import React from "react";
import "./product.css";
import images from "../../assets/pictures/images";
import CustomNavbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Product = () => {
//   const [cartItems, setCartItems] = useState(0);

//   const handleAddToCart = () => {
//     setCartItems(cartItems + 1);
//     alert("Item added to cart!");
//   };

  const similarProducts = [
    { id: 1, name: "Floral Printed Shirt", price: "₹999", image: images.simshirt1 },
    { id: 2, name: "Casual Blue Shirt", price: "₹1199", image: images.simshirt2 },
    { id: 3, name: "Tropical Pattern Shirt", price: "₹899", image: images.simshirt3 }
  ];

  return (
    <div className="product-container">
        <CustomNavbar/>
      <div className="product-content">
        <div className="product-gallery">
          <img
            src={images.shirt1}
            alt="Main Product"
            className="main-image"
          />
          <div className="thumbnail-container">
            <img src={images.shirt1} alt="Thumbnail 1" />
            <img src={images.shirt2} alt="Thumbnail 2" />
          </div>
        </div>

        <div className="product-details">
          <h1>Men Short Sleeves Printed Casual Shirt</h1>
          <p className="brand">Brand: SHOWOFF</p>
          <div className="rating">⭐⭐⭐⭐⭐ (4.5)</div>
          <div className="price">
            <span className="original-price">₹2698</span>
            <span className="discounted-price">₹1079</span>
            <span className="discount">(60% OFF)</span>
          </div>

          <div className="size-selector">
            <p>Select Size:</p>
            <div className="sizes">
              {['S', 'M', 'L', 'XL', '2XL', '3XL'].map(size => (
                <button key={size} className="size-button">{size}</button>
              ))}
            </div>
          </div>

          <div>
            <Link to='/cart'>
            <button className="add-to-cart" >ADD TO CART</button>
            </Link>
          

          </div>

          
          {/* <p className="cart-info">Cart Items: {cartItems}</p> */}
        </div>
      </div>

      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-products-container">
          {similarProducts.map(product => (
            <div key={product.id} className="similar-product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
