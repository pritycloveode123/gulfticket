"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogOpenMobile, setBlogOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogItems = [
    {
      title: "WHAT IS A LOTTERY AND HOW DOES IT WORK?",
      href: "#",
    },
    {
      title: "I CAN'T ACCESS THAILOTTO. WHAT SHOULD I DO NEXT?",
      href: "#",
    },
    {
      title: "WHEEL888 – THE MOST POPULAR WHEEL OF FORTUNE GAME, EASY TO PLAY, REAL MONEY",
      href: "#",
    },
  ];

  return (
    <>
      <div className={`transition-all duration-300 ${isScrolled ? "h-20" : "h-18"}`}></div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
              <img src="/gulfticket_logo.png" alt="Gulf Ticket Logo" className="h-10" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {["HOUSE", "HOW TO PLAY", "PROMOTION", "ABOUT US", "PRIVACY POLICY", "SITE MAP"].map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-200 text-sm tracking-wide"
                >
                  {item}
                </Link>
              ))}

              {/* Blog Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <button className="flex items-center space-x-1 font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-200 text-sm tracking-wide">
                  <span>BLOG ARTICLES</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isHovered ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Desktop Dropdown */}
                <div
                  className={`absolute top-full left-0 w-80 bg-white shadow-2xl border-t-4 border-yellow-500 rounded-b-lg overflow-hidden transition-all duration-300 ${isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <ul className="py-4">
                    {blogItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="block px-6 py-3 text-gray-800 font-medium text-sm leading-tight hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons - only for large screens */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/login">
                <button
                  className={`bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold text-sm px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase ${isScrolled ? "text-xs px-4 py-1.5" : ""
                    }`}
                >
                  LOGIN
                </button>
              </Link>

              <Link href="https://gulfticket.com/Register">
                <button
                  className={`bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold text-sm px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 uppercase ${isScrolled ? "text-xs px-4 py-1.5" : ""
                    }`}
                >
                  REGISTER
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4">
            {["HOUSE", "HOW TO PLAY", "PROMOTION", "ABOUT US", "PRIVACY POLICY", "SITE MAP"].map(
              (item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="block font-medium text-gray-800 hover:text-yellow-600"
                >
                  {item}
                </Link>
              )
            )}

            {/* Mobile Blog Dropdown */}
            <div>
              <button
                onClick={() => setBlogOpenMobile(!blogOpenMobile)}
                className="w-full flex items-center justify-between font-medium text-gray-800 hover:text-yellow-600"
              >
                BLOG ARTICLES
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${blogOpenMobile ? "rotate-180" : ""
                    }`}
                />
              </button>
              {blogOpenMobile && (
                <ul className="mt-2 space-y-2 pl-4 border-l border-yellow-500">
                  {blogItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-yellow-600"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
