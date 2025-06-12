"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "texting",
      subtitle: "PREMIUM GAMING EXPERIENCE",
      bgGradient: "from-green-400 via-green-500 to-green-600"
    },
    {
      id: 2,
      title: "MEGA JACKPOT WINNER",
      subtitle: "WIN BIG TODAY",
      bgGradient: "from-purple-400 via-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "SPECIAL BONUS OFFER",
      subtitle: "LIMITED TIME DEAL",
      bgGradient: "from-red-400 via-red-500 to-red-600"
    },
    {
      id: 4,
      title: "DAILY REWARDS",
      subtitle: "CLAIM YOUR PRIZE",
      bgGradient: "from-blue-400 via-blue-500 to-blue-600"
    }
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
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Main Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full h-full bg-gradient-to-br ${slide.bgGradient} flex items-center justify-between px-8 relative overflow-hidden`}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating Coins */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`coin-${i}`}
                  className="absolute w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-yellow-800 font-bold text-lg animate-bounce shadow-lg"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${20 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '3s'
                  }}
                >
                  $
                </div>
              ))}

              {/* Billiard Balls */}
              <div className="absolute left-12 top-16 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                  8
                </div>
              </div>

              <div className="absolute left-32 top-32 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-xl animate-pulse"
                style={{ animationDelay: '1s' }}></div>

              <div className="absolute left-20 top-48 w-18 h-18 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-xl animate-pulse text-white font-bold"
                style={{ animationDelay: '2s' }}>
                4
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-20 top-12 w-6 h-6 bg-yellow-400 transform rotate-45 animate-spin"
                style={{ animationDuration: '4s' }}></div>
              <div className="absolute right-32 top-40 w-4 h-4 bg-white transform rotate-45 animate-ping"></div>
            </div>

            {/* Content Section */}
            <div className="flex-1 z-10">
              {/* Brand Logo */}
              <div className="mb-6">
                <div className="text-orange-400 text-2xl font-bold italic transform -skew-x-12">
                  Gulf Ticket
                </div>
                <div className="text-white text-sm opacity-80">
                  PREMIUM GAMING EXPERIENCE
                </div>
              </div>

              {/* Main Title */}
              <div className="mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-white text-lg opacity-90">
                  {slide.subtitle}
                </p>
              </div>

              {/* Action Button */}
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                PLAY NOW
              </button>
            </div>

            {/* Model Section */}
            <div className="flex-1 flex justify-end items-center z-10">
              <div className="relative">
                {/* Model Image Placeholder */}
                <div className="w-64 h-80 bg-gradient-to-b from-transparent to-black/20 rounded-lg flex flex-col items-center justify-end p-4">
                  <div className="w-48 h-64 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg mb-4 flex items-end justify-center relative overflow-hidden">
                    {/* Model silhouette */}
                    <div className="w-32 h-48 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full"></div>
                    {/* Hair */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-36 h-16 bg-gradient-to-b from-amber-900 to-amber-700 rounded-full"></div>
                  </div>

                  {/* Money Fan */}
                  <div className="absolute right-4 top-12 transform rotate-12">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-16 h-8 bg-green-600 border border-green-700 transform origin-bottom"
                        style={{
                          transform: `rotate(${i * 15 - 30}deg) translateY(-${i * 2}px)`,
                          zIndex: 5 - i
                        }}
                      >
                        <div className="text-xs text-white text-center pt-2">$100</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white shadow-lg scale-125'
              : 'bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;