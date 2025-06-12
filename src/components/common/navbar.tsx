"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const blogItems = [
    { title: 'WHAT IS A LOTTERY AND HOW DOES IT WORK?', href: '#' },
    { title: "I CAN'T ACCESS THAILOTTO. WHAT SHOULD I DO NEXT?", href: '#' },
    { title: 'WHEEL888 – THE MOST POPULAR WHEEL OF FORTUNE GAME, EASY TO PLAY, REAL MONEY', href: '#' }
  ];

  return (
    <nav
      className="w-full sticky top-0 z-90 backdrop-blur bg-white/90"
    >
      <div className="container mx-auto flex items-center justify-between py-4 ">
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/gulfticket_logo.png"
            alt="Gulf Ticket Logo"
            width="160"
            height="40"
          />
        </div>

        {/* Middle - Nav Items */}
        <div className="text-black relative">
          <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="font-semibold text-base tracking-wide">HOUSE</Link>
            <Link href="#" className="font-semibold text-base tracking-wide">HOW TO PLAY</Link>
            <Link href="#" className="font-semibold text-base tracking-wide">PROMOTION</Link>
            <Link href="#" className="font-semibold text-base tracking-wide">ABOUT US</Link>
            <Link href="#" className="font-semibold text-base tracking-wide">PRIVACY POLICY</Link>
            <Link href="#" className="font-semibold text-base tracking-wide">SITE MAP</Link>
          </div>

          {/* BLOG ARTICLES Dropdown */}
          <div
            className="flex items-center space-x-1 cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="font-semibold text-base tracking-wide">BLOG ARTICLES</span>
            <ChevronDown className="w-4 h-4" />

            {/* Dropdown */}
            {isHovered && (
              <div className="absolute top-full left-0 w-[270px] bg-white shadow-xl border-t-4 border-b-4"
                style={{ borderColor: '#F59E0B' }}>
                <ul className="flex flex-col p-6 space-y-6">
                  {blogItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-black font-bold text-sm leading-snug "
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right - Buttons */}
        <div className="flex flex-col ">
          <button className=" bg-gradient-to-b from-[#5faaff] to-[#003775] hover:from-[#003775] hover:to-[#5faaff] text-white font-bold text-sm py-2 px-2 rounded-md shadow-md uppercase">
            login
          </button>
          <button className=" bg-gradient-to-b from-[#f9d324] to-[#e7a900] hover:from-[#e7a900] hover:to-[#f9d324] text-white font-bold text-sm py-2 px-8 rounded-md shadow-md uppercase">
            register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
