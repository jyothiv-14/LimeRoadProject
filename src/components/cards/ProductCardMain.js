import React from 'react';
import './productmain.css';

import images from "../../assets/pictures/images";
import {  CardContent, Button } from "@mui/material";
import { Heart, MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'FRESH FINDS',
    image: images.kurtas,
    description: 'Mehendi Hai Rachne Vali',
    likes: 5,
    extraCount: 13
  },
  {
    title: 'PRETTY FINDS ALERT',
    image: images.tops,
    description: "Spring's almost here!",
    likes: 5,
    extraCount: 17
  },
  {
    title: 'FALL IN LOVE',
    image: images.ethnicSets,
    description: 'Florals for our women in love!',
    likes: 14,
    extraCount: 18
  },
  {
    title: 'HOT OFF THE RACK',
    image: images.dresses,
    description: 'Get all the Lehraake Balkhake feels!',
    likes: 16,
    extraCount: 20
  },
  {
    title: 'GET SET READY',
    image: images.suits,
    description: 'Florals for our women in love!',
    likes: 14,
    extraCount: 18
  },
];

const ProductDisplay = () => {
  return (
    <div className="product-container" style={{display:"inline-block", width:"100%"}}>
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <h6>{product.title}</h6>
          <img src={product.image} alt={product.title} className="product-image" />
          <p>{product.description}</p>
          <div className="actions">
            <span>❤️ {product.likes} Likes</span>
            <span>+{product.extraCount}</span>
          </div>
          <CardContent className="content">
                       
                        <div className="thumbnails">
                        <img src={images.dresses} alt="" className="thumbnail" />
                        <img src={images.sarees} alt="" className="thumbnail" />
                        <div className="thumbnail more">
                            <Link to='/women'>
                                <button>+17</button>
                            </Link>
                            
                        </div>
                        </div>
                        <div className="info">
                        <span className="expert">By Trend Experts</span>
                        <span className="followers">6K Followers</span>
                        </div>
                        <div className="buttons">
                        <Button className="btn">
                            <Heart className="icon" /> Like
                        </Button>
                        <Button className="btn">
                            <MessageCircle className="icon" /> Share
                        </Button>
                        </div>
                    </CardContent>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
