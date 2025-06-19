
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://picsum.photos/seed/sriLankaBeach/1920/1080',
  'https://picsum.photos/seed/sriLankaCulture/1920/1080',
  'https://picsum.photos/seed/sriLankaWildlife/1920/1080',
  'https://picsum.photos/seed/sriLankaTea/1920/1080',
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Images Slideshow */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})`, backgroundAttachment: 'fixed' }} // Parallax-like effect
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Sri Lanka
          <br />
          <span className="text-yellow-400">The Wonder of Asia</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Discover breathtaking landscapes, ancient wonders, vibrant culture, and pristine beaches. Your unforgettable journey starts here.
        </p>
        <div className="mt-10">
          <Link
            to="/destinations"
            className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
       {/* Scroll down indicator - optional */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
    