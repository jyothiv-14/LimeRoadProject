// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import images from "../assets/images";

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//   };

//   const slides = [
//     {
//       image: images.carousel1, 
//       title: "Explore top picks under",
//       price: "₹999",
//       brand: "By Fashion2Wear",
//       buttonText: "Shop Now",
//     },
//     {
//       image: images.carousel2,
//       title: "Stay Stylish, Stay Comfortable",
//       discount: "UP TO 85% OFF",
//       brand: "BY UNAONE",
//     },
//     {
//         image: images.carousel3,
//         title: "Stay Stylish, Stay Comfortable",
//         discount: "UP TO 85% OFF",
//         brand: "BY UNAONE",
//       },
//       {
//         image: images.carousel4, 
//         title: "Explore top picks under",
//         price: "₹999",
//         brand: "By Fashion2Wear",
//         buttonText: "Shop Now",
//       },
//       {
//         image: images.carousel5, 
//         title: "Explore top picks under",
//         price: "₹999",
//         brand: "By Fashion2Wear",
//         buttonText: "Shop Now",
//       },
//       {
//         image: images.carousel6,
//         title: "Stay Stylish, Stay Comfortable",
//         discount: "UP TO 85% OFF",
//         brand: "BY UNAONE",
//       },
//       {
//         image: images.carousel7,
//         title: "Stay Stylish, Stay Comfortable",
//         discount: "UP TO 85% OFF",
//         brand: "BY UNAONE",
//       },
//   ];

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-auto rounded-lg"
//             />
//             <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-black/60 to-transparent text-white">
//               <h2 className="text-2xl font-bold">{slide.title}</h2>
//               {slide.price && <p className="text-xl">Under <strong>{slide.price}</strong></p>}
//               {slide.discount && <p className="text-lg">{slide.discount}</p>}
//               <p className="text-sm mt-2">{slide.brand}</p>
//               {slide.buttonText && (
//                 <button className="mt-4 bg-white text-black px-4 py-2 rounded-md font-semibold">
//                   {slide.buttonText}
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;




import React from 'react';
import images from "../assets/images";

function Carousel() {
  return (
    <div id="carouselExampleControls"
      className="carousel slide mt-4"
      data-bs-ride="carousel"
      data-bs-interval="1000"
      style={{ margin: '10px auto', width: '90%', maxWidth: '1200px', overflow: 'hidden' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <img src={images.carousel1} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel2} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <img src={images.carousel2} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel3} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <img src={images.carousel3} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel4} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <img src={images.carousel4} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel5} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <img src={images.carousel5} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel6} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <img src={images.carousel6} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel7} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
