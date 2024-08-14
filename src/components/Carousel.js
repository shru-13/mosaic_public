import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Carousel = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="carousel slide" className="carousel-image" />
      <div className="carousel-overlay">
        Welcome to Mosaic.
      </div>
    </div>
  );
};

export default Carousel;
