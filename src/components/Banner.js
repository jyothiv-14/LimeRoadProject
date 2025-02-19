import React from "react";
import images from "../assets/pictures/images";

const Banner = () => {
  return (
    <div 
    style={{ margin: '10px 280px 0px 280px' }} 
    className="banner-container d-flex align-items-center text-white text-center"
    data-bs-ride="banner"
    >
      <div >
        <img style={{width:"100%"}} src={images.banner} alt="banner"/>
      </div> 
      
    </div>
  );
};

export default Banner;
