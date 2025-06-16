"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeNav, setActiveNav] = useState<string>("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },

    { label: "Live Draw", href: "#live-draws" },
    { label: " How It Works", href: "#how-it-works" },
    { label: "Winners", href: "#winners" },
    { label: "FAQ's", href: "#faqs" },



  ];

  const mobileItems = [
    { label: "Home", href: "#home" },

    { label: "Live Draw", href: "#live-draws" },
    { label: " How It Works", href: "#how-it-works" },
    { label: "Winners", href: "#winners" },
    { label: "FAQ's", href: "#faqs" },
    // { label: "SITE MAP", href: "#site-map" },
  ];

  return (
    <>
      <div className={`transition-all duration-300 ${isScrolled ? "h-20" : "h-18"}`}></div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
        : "bg-white/90 backdrop-blur-sm py-4"
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
              <img src="/gulfticket_logo.png" alt="Gulf Ticket Logo" className="h-10" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`font-semibold transition-colors duration-200 text-sm tracking-wide
                    ${activeNav === item.label
                      ? "text-[#DF911A]"
                      : "text-gray-800 hover:text-yellow-500"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Action Buttons - only for large screens */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link href="https://gulfticket.com/Register">
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
                {mobileMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4">
            {mobileItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`block font-medium transition-colors duration-200 
                  ${activeNav === item.label
                    ? "text-[#DF911A]"
                    : "text-gray-800 hover:text-yellow-600"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
