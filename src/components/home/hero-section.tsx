"use client";
import React from "react";

const HeroImage = () => {
  return (
    <div className="bg-black">
      <div className="relative container mx-auto w-full h-[700px] sm:h-[700px] md:h-[750px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroImage;
