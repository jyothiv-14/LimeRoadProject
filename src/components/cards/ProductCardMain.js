import React from 'react';
import './productmain.css';

const products = [
  {
    title: 'FRESH FINDS',
    image: 'mehendi.jpg',
    description: 'Mehendi Hai Rachne Vali',
    likes: 5,
    extraCount: 13
  },
  {
    title: 'PRETTY FINDS ALERT',
    image: 'spring.jpg',
    description: "Spring's almost here!",
    likes: 5,
    extraCount: 17
  },
  {
    title: 'FALL IN LOVE',
    image: 'florals.jpg',
    description: 'Florals for our women in love!',
    likes: 14,
    extraCount: 18
  },
  {
    title: 'HOT OFF THE RACK',
    image: 'lehenga.jpg',
    description: 'Get all the Lehraake Balkhake feels!',
    likes: 16,
    extraCount: 20
  }
];

const ProductDisplay = () => {
  return (
    <div className="product-container" style={{display:"flex", width:"100%"}}>
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} className="product-image" />
          <p>{product.description}</p>
          <div className="actions">
            <span>❤️ {product.likes} Likes</span>
            <span>+{product.extraCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
