import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Main Footer Content */}
      <div className="px-4 py-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            {/* Use your actual logo image here */}
            <Image
              src="/gulfticket_logo.png" // Replace with your actual logo path
              alt="Gulf Ticket Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center">
          <nav className="flex items-center space-x-1 text-sm">
            <Link 
              href="/" 
              className="text-orange-500 hover:text-orange-400 transition-colors px-3 py-1"
              style={{ color: '#D97706' }}
            >
              HOUSE
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              href="/how-to-play" 
              className="text-white hover:text-orange-400 transition-colors px-3 py-1"
            >
              HOW TO PLAY
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              href="/promotion" 
              className="text-white hover:text-orange-400 transition-colors px-3 py-1"
            >
              PROMOTION
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              href="/about-us" 
              className="text-white hover:text-orange-400 transition-colors px-3 py-1"
            >
              ABOUT US
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              href="/privacy-policy" 
              className="text-white hover:text-orange-400 transition-colors px-3 py-1"
            >
              PRIVACY POLICY
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              href="/site-map" 
              className="text-white hover:text-orange-400 transition-colors px-3 py-1"
            >
              SITE MAP
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-orange-500" style={{ borderColor: '#D97706' }}></div>

      {/* Copyright Section */}
      <div className="py-4 text-center">
        <p className="text-white text-sm font-medium">
          © 2025 GULFTICKET ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;