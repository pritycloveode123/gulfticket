import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-full flex items-center justify-between px-6 py-3">
        
        {/* Logo Section - Left Side */}
        <div className="flex items-center space-x-3">
          {/* Logo Image */}
          <div className="relative">
            <img 
              src="/gulfticket_logo.png" 
              alt="Gulf Ticket Logo"
              width="180"
              height="40"
              className=""
            />
          </div>
          
         
        </div>

        {/* Center Navigation Menu */}
        <div className="flex items-center space-x-8 ">
          <a 
            href="#"
            className="font-semibold text-base tracking-wide hover:opacity-80"
            style={{ color: '#374151' }}
          >
            HOUSE
          </a>
          <a 
            href="#"
            className="font-semibold text-base tracking-wide hover:opacity-80"
            style={{ color: '#374151' }}
          >
            HOW TO PLAY
          </a>
          <a 
            href="#"
            className="font-semibold text-base tracking-wide hover:opacity-80"
            style={{ color: '#374151' }}
          >
            PROMOTION
          </a>
          <a 
            href="#"
            className="font-semibold text-base tracking-wide hover:opacity-80"
            style={{ color: '#374151' }}
          >
            ABOUT US
          </a>
          <a 
            href="#"
            className="font-semibold text-base tracking-wide hover:opacity-80"
            style={{ color: '#374151' }}
          >
            PRIVACY POLICY
          </a>
          <a 
            href="#"
            className="font-semibold text-base tracking-wide hover:opacity-80"
            style={{ color: '#374151' }}
          >
            SITE MAP
          </a>
          
          {/* Blog Articles with Dropdown */}
          <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80">
            <span
              className="font-semibold text-base tracking-wide"
              style={{ color: '#374151' }}
            >
              BLOG ARTICLES
            </span>
            <ChevronDown className="w-3 h-3" style={{ color: '#374151' }} />
          </div>
        </div>

        {/* Right Side - Stacked Login/Register Buttons */}
        <div className="flex flex-col ">
          {/* LOGIN Button - Top */}
          <button 
            className="px-8 py-1.5 rounded text-white font-bold text-xs tracking-wide hover:opacity-90"
            style={{ backgroundColor: '#3B82F6' }}
          >
            LOGIN
          </button>
          
          {/* REGISTER Button - Bottom */}
          <button 
            className="px-6 py-1.5 rounded text-white font-bold text-xs tracking-wide hover:opacity-90"
            style={{ backgroundColor: '#EAB308' }}
          >
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;