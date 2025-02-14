import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { Heart, Share2 } from "lucide-react";
import { Card, CardContent} from "@mui/material";
// import "./ProductGrid.css";
import './css/wpcss.css'

const products = [
  {
    title: "FRESH FINDS",
    mainImage: "mehendi.png",
    subImages: ["mehendi1.png", "mehendi2.png", "mehendi3.png"],
    likes: 5,
    description: "Mehendi Hai Rachne Vali! Slay in pretty sets",
  },
  {
    title: "PRETTY FINDS ALERT",
    mainImage: "spring.png",
    subImages: ["spring1.png", "spring2.png", "spring3.png"],
    likes: 5,
    description: "Spring's almost here! Pastel Kurtis to the rescue",
  },
  {
    title: "FALL IN LOVE",
    mainImage: "florals.png",
    subImages: ["floral1.png", "floral2.png", "floral3.png"],
    likes: 14,
    description: "Florals for our 'women in love'! #RomanticFemme",
  },
  {
    title: "HOT OFF THE RACK",
    mainImage: "lehenga.png",
    subImages: ["lehenga1.png", "lehenga2.png", "lehenga3.png"],
    likes: 16,
    description: "Get all the 'Lehraake Balkhake' feels! Kurta Sharara Sets",
  },
];

const ProductCard = ({ product }) => {
  return (
    <Card className="p-4 bg-white rounded-xl shadow-md w-full max-w-xs">
      <div className="relative">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg">
          <h3 className="text-lg font-bold">{product.title}</h3>
        </div>
      </div>
      <CardContent>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex gap-2 mt-3">
          {product.subImages.map((img, index) => (
            <img key={index} src={img} alt="" className="w-12 h-12 rounded-md" />
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span>{product.likes} Likes</span>
          </div>
          <Share2 className="w-5 h-5 text-gray-500" />
        </div>
      </CardContent>
    </Card>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;






