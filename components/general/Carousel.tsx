
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  items: { imageUrl: string; caption?: string; title?: string }[];
  autoPlayInterval?: number; // in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ items, autoPlayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  }, [items.length]);

  useEffect(() => {
    if (autoPlayInterval) {
      const timer = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [autoPlayInterval, goToNext]);

  if (!items || items.length === 0) {
    return <div className="text-center p-4">No items to display in carousel.</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden">
      <div className="relative h-64 md:h-96 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.imageUrl} alt={item.caption || `Slide ${index + 1}`} className="w-full h-full object-cover" />
            {(item.title || item.caption) && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                {item.title && <h3 className="text-xl font-bold">{item.title}</h3>}
                {item.caption && <p className="text-sm mt-1">{item.caption}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-75 transition-opacity duration-200 z-10"
        aria-label="Previous image"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-75 transition-opacity duration-200 z-10"
        aria-label="Next image"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

    