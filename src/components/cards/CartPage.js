import React, { useState } from "react";
import "./cart.css"; // Assuming you will define styles in an external CSS file
import images from "../../assets/pictures/images";


const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="cart-container">
      {/* Product Section */}
      <div className="product-section">
        <h1 className="store-title">LimeRoad</h1>
        <div className="product-details">
          <img
            src={images.shirt1}
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
  );
};

export default CartPage;