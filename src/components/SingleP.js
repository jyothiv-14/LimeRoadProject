import { useState } from "react";
import { Star } from "lucide-react";
import images from "../assets/pictures/images";
import CustomNavbar from "./Navbar";

import Footer from "./Footer";

const ProductPage = () => {
  const product = {
    title: "Men Short Sleeves Printed Casual Shirt",
    brand: "SHOWOFF",
    rating: 4.5,
    price: 1079,
    originalPrice: 2698,
    discount: 60,
    images: [
      images.shirt1, // Replace with actual image URLs
      images.shirt2,
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  };

  const similarProducts = [
    {
      title: "Men Printed Casual Shirt",
      price: 999,
      image: images.simshirt1,
    },
    {
      title: "Men Cotton Printed Shirt",
      price: 1099,
      image: images.simshirt2,
    },
    {
      title: "Floral Printed Casual Shirt",
      price: 1199,
      image: images.simshirt3,
    },
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  return (

    <div>
        <CustomNavbar/>
    <div style={{ padding: "16px", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "16px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
          ))}
        </div>
        <div style={{ flex: 1, padding: "16px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>{product.title}</h2>
          <p style={{ color: "#555" }}>Brand: {product.brand}</p>
          <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
            <span style={{ color: "#f4b400", display: "flex", alignItems: "center" }}>
              <Star size={16} /> {product.rating}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>₹{product.price}</span>
            <span style={{ textDecoration: "line-through", marginLeft: "8px", color: "#888" }}>₹{product.originalPrice}</span>
            <span style={{ color: "red", marginLeft: "8px" }}>({product.discount}% OFF)</span>
          </div>
          <div style={{ marginTop: "16px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "bold" }}>Select Size:</h3>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid #000",
                    background: selectedSize === size ? "#000" : "#fff",
                    color: selectedSize === size ? "#fff" : "#000",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button style={{ width: "100%", marginTop: "16px", padding: "12px", background: "green", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}>
            ADD TO CART
          </button>
        </div>
      </div>

      <h2 style={{ marginTop: "24px", fontSize: "20px", fontWeight: "bold" }}>Similar Products</h2>
      
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        {similarProducts.map((product, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "8px", borderRadius: "8px", textAlign: "center" }}>
            <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
            <p style={{ fontSize: "14px", fontWeight: "bold", marginTop: "8px" }}>{product.title}</p>
            <p style={{ fontSize: "14px", color: "green" }}>₹{product.price}</p>
          </div>
        ))}
        
      </div>
      
    </div>

    <Footer/>
    </div>
  );
};

export default ProductPage;
