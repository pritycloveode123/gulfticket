"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 1, image: "/hero1.jpg" },
    { id: 2, image: "/hero2.jpg" },
    { id: 3, image: "/hero3.jpg" },
    { id: 4, image: "/hero4.jpg" },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={`Slide ${slide.id}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 bg-black/30 hover:bg-black/50 rounded-full z-20"
      >
        <ChevronLeft size={24} className="sm:size-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 bg-black/30 hover:bg-black/50 rounded-full z-20"
      >
        <ChevronRight size={24} className="sm:size-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-white shadow-lg scale-125"
              : "bg-white/50 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
