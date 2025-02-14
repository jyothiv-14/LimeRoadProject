import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, Button } from "@mui/material";
import { Heart, MessageCircle } from "lucide-react";
import "./pro.css"; // Import CSS file for styling
import images from "../assets/images";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div>
                    <Card className="product-card">
                    <div className="image-container">
                        <img
                        src={images.kurtas}
                        alt="Pastel Kurtis"
                        className="main-image"
                        />
                        <div className="alert-label">PRETTY FINDS ALERT</div>
                    </div>
                    <CardContent className="content">
                        <h2 className="title">Spring's Almost Here!</h2>
                        <p className="description">Pastel Kurtis to the rescue</p>
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
                    </Card>
    </div>
  );
};

export default ProductCard;
