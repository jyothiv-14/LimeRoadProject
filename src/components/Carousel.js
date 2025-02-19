
import React from 'react';
import images from "../assets/pictures/images";


function Carousel() {
  return (
    <div id="carouselExampleControls"
      className="carousel slide mt-4 d-flex align-items-center justify-content-center"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      style={{ margin: '10px auto', width: '90%', maxWidth: '1200px', overflow: 'hidden' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '2px',height:'200px' }}>
              <img src={images.carousel1} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel2} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '2px',height:'200px' }}>
              <img src={images.carousel2} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel3} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '2px',height:'200px' }}>
              <img src={images.carousel3} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel4} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '2px',height:'200px' }}>
              <img src={images.carousel4} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel5} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '2px',height:'200px' }}>
              <img src={images.carousel5} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
              <img src={images.carousel6} className="d-block w-100" alt="..." style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}/>
          </div>
        </div>
        <div className="carousel-item">
          <div className='carousel-slide-wallpaper' style={{ display: 'flex', width: '100%', gap: '2px',height:'200px' }}>
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
