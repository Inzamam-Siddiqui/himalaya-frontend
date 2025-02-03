import { useState } from "react";
import image1 from "../assets/bgimages/image3.jpg";
import image2 from "../assets/bgimages/image1.jpg";
import image3 from "../assets/bgimages/image5.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CustomCarousel = () => {
  const slides = [
    { image: image1, text: "Welcome to Our Website",description:"We are dedicated to providing you with the best possible experience." },
    { image: image2, text: "Explore Our Features" ,description:"Discover our range of products and services that cater to your needs."},
    { image: image3, text: "Get in Touch with Us",description:"Feel free to reach out to us for any inquiries or assistance." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen m-auto overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-screen">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 pt-[47vh] pl-[20vh] items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-white p-2 rounded-md  text-4xl font-bold">{slide.text}</h2>
              <p className="text-white p-2 rounded-md  text-xl font-medium">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute text-white top-1/2 left-4 transform -translate-y-1/2 bg-teal-500 px-3 py-2 rounded-full shadow-xl hover:bg-gray-300"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute text-white top-1/2 right-4 transform -translate-y-1/2 bg-teal-500 px-3 py-2 rounded-full shadow-xl hover:bg-gray-300"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CustomCarousel;
