import { useState } from "react";
import image1 from "../assets/logos/hplogo.png";

const CustomCarousel = () => {
  const images = [
    image1,
    "https://via.placeholder.com/00x200?text=2",
    "https://via.placeholder.com/300x200?text=3",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[60rem] m-auto overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-[1000px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-500 px-3 py-2 rounded-full shadow-xl hover:bg-gray-300"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-teal-500 px-3 py-2 rounded-full shadow-xl hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default CustomCarousel;
