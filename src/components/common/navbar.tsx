import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-full flex items-center justify-between py-6">


        <div className="flex items-center space-x-3">

          <div className="relative">
            <img
              src="/gulfticket_logo.png"
              alt="Gulf Ticket Logo"
              width="160"
              height="40"
              className=""
            />
          </div>


        </div>


        <div className="text-black ">

          <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
            <a href="#" className="font-semibold text-base tracking-wide">HOUSE</a>
            <a href="#" className="font-semibold text-base tracking-wide">HOW TO PLAY</a>
            <a href="#" className="font-semibold text-base tracking-wide">PROMOTION</a>
            <a href="#" className="font-semibold text-base tracking-wide">ABOUT US</a>
            <a href="#" className="font-semibold text-base tracking-wide">PRIVACY POLICY</a>
            <a href="#" className="font-semibold text-base tracking-wide">SITE MAP</a>
          </div>


          <div className="flex items-center space-x-1  cursor-pointer">
            <span className="font-semibold text-base tracking-wide">BLOG ARTICLES</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>



        <div className="flex flex-col ">

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