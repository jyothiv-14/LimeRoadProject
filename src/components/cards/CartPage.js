import React, { useState } from "react";
import "./cart.css"; // Assuming you will define styles in an external CSS file
import images from "../../assets/pictures/images";
import CustomNavbar from "../Navbar";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
    <CustomNavbar/>
    <div className="cart-container">
       
      {/* Product Section */}
      <div className="product-section">
       
        <div className="product-details">
          <img
            src={images.kurta1}
            alt="Product"
            className="product-image"
          />
          <div>
            <h2 className="product-title">Men Blue Solid T-Shirt & Short Set</h2>
            <p className="product-brand">BY TECHFEEL</p>
            <p className="product-stock">In 173 carts</p>
            <p className="product-price">₹449 <span className="original-price">₹1799</span></p>
            <p className="product-size">Size: L</p>
            <div className="quantity-control">
              <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            </div>
          </div>
        </div>
        <button className="wishlist-btn">Move to Wishlist</button>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <h2 className="summary-title">Apply Coupon Code</h2>
        <p className="coupon-text">Login to Find Coupons</p>
        <hr className="divider" />
        <h2 className="summary-title">Summary</h2>
        <div className="summary-item">
          <span>Total Price</span>
          <span>₹{449 * quantity}</span>
        </div>
        <div className="summary-item">
          <span>Shipping Charges</span>
          <span className="free-text">FREE</span>
        </div>
        <div className="summary-item">
          <span>Handling Charges</span>
          <span>₹{29}</span>
        </div>
        <hr className="divider" />
        <div className="total-amount">
          <span>Amount Payable</span>
          <span>₹{449 * quantity + 29}</span>
        </div>
        <button className="buy-now-btn">BUY NOW</button>
      </div>
    </div>
    </>
  );
};

export default CartPage;



// import React, { useState } from "react";
// import "./cart.css"; // Assuming styles are defined in an external CSS file
// import images from "../../assets/pictures/images";

// const CartPage = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Men Blue Solid T-Shirt & Short Set",
//       brand: "BY TECHFEEL",
//       price: 449,
//       originalPrice: 1799,
//       size: "L",
//       image: images.kurta1,
//       stock: 173,
//     },
//     {
//       id: 2,
//       name: "Men Black T-Shirt",
//       brand: "Nike",
//       price: 599,
//       originalPrice: 1299,
//       size: "M",
//       image: images.tShirt,
//       stock: 210,
//     },
//   ];

//   const [cartItems, setCartItems] = useState(
//     products.map((product) => ({ ...product, quantity: 1 }))
//   );

//   const handleQuantityChange = (id, action) => {
//     setCartItems((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity:
//                 action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
//             }
//           : item
//       )
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="cart-container">
//       <h1 className="store-title">LimeRoad</h1>

//       {/* Product Section */}
//       {cartItems.map((item) => (
//         <div key={item.id} className="product-section">
//           <div className="product-details">
//             <img src={item.image} alt={item.name} className="product-image" />
//             <div>
//               <h2 className="product-title">{item.name}</h2>
//               <p className="product-brand">{item.brand}</p>
//               <p className="product-stock">In {item.stock} carts</p>
//               <p className="product-price">
//                 ₹{item.price} <span className="original-price">₹{item.originalPrice}</span>
//               </p>
//               <p className="product-size">Size: {item.size}</p>
//               <div className="quantity-control">
//                 <button
//                   className="quantity-btn"
//                   onClick={() => handleQuantityChange(item.id, "decrease")}
//                 >
//                   -
//                 </button>
//                 <span className="quantity-value">{item.quantity}</span>
//                 <button
//                   className="quantity-btn"
//                   onClick={() => handleQuantityChange(item.id, "increase")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//           <button className="wishlist-btn">Move to Wishlist</button>
//         </div>
//       ))}

//       {/* Summary Section */}
//       <div className="summary-section">
//         <h2 className="summary-title">Apply Coupon Code</h2>
//         <p className="coupon-text">Login to Find Coupons</p>
//         <hr className="divider" />
//         <h2 className="summary-title">Summary</h2>
//         <div className="summary-item">
//           <span>Total Price</span>
//           <span>₹{getTotalPrice()}</span>
//         </div>
//         <div className="summary-item">
//           <span>Shipping Charges</span>
//           <span className="free-text">FREE</span>
//         </div>
//         <div className="summary-item">
//           <span>Handling Charges</span>
//           <span>₹{29}</span>
//         </div>
//         <hr className="divider" />
//         <div className="total-amount">
//           <span>Amount Payable</span>
//           <span>₹{getTotalPrice() + 29}</span>
//         </div>
//         <button className="buy-now-btn">BUY NOW</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





// import React, { useState } from "react";
// import "./cart.css"; // Assuming you will define styles in an external CSS file
// import images from "../../assets/pictures/images";


// const CartPage = () => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   return (
//     <div className="cart-container">
//       {/* Product Section */}
//       <div className="product-section">
//         <h1 className="store-title">LimeRoad</h1>
//         <div className="product-details">
//           <img
//             src={images.kurta1}
//             alt="Product"
//             className="product-image"
//           />
//           <div>
//             <h2 className="product-title">Men Blue Solid T-Shirt & Short Set</h2>
//             <p className="product-brand">BY TECHFEEL</p>
//             <p className="product-stock">In 173 carts</p>
//             <p className="product-price">₹449 <span className="original-price">₹1799</span></p>
//             <p className="product-size">Size: L</p>
//             <div className="quantity-control">
//               <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
//               <span className="quantity-value">{quantity}</span>
//               <button className="quantity-btn" onClick={increaseQuantity}>+</button>
//             </div>
//           </div>
//         </div>
//         <button className="wishlist-btn">Move to Wishlist</button>
//       </div>

//       {/* Summary Section */}
//       <div className="summary-section">
//         <h2 className="summary-title">Apply Coupon Code</h2>
//         <p className="coupon-text">Login to Find Coupons</p>
//         <hr className="divider" />
//         <h2 className="summary-title">Summary</h2>
//         <div className="summary-item">
//           <span>Total Price</span>
//           <span>₹{449 * quantity}</span>
//         </div>
//         <div className="summary-item">
//           <span>Shipping Charges</span>
//           <span className="free-text">FREE</span>
//         </div>
//         <div className="summary-item">
//           <span>Handling Charges</span>
//           <span>₹{29}</span>
//         </div>
//         <hr className="divider" />
//         <div className="total-amount">
//           <span>Amount Payable</span>
//           <span>₹{449 * quantity + 29}</span>
//         </div>
//         <button className="buy-now-btn">BUY NOW</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;