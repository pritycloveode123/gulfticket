import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pb-36 sm:pb-20"> {/* 👈 Mobile ke liye extra space */}
      {/* Main Footer Content */}
      <div className="py-6 sm:py-8 flex flex-col items-center justify-center">
        {/* Logo Section */}
        <div className="mb-6 sm:mb-8">
          <Image
            src="/gulfticket_logo.png"
            alt="Gulf Ticket Logo"
            width={250}
            height={200}
            className="object-contain max-w-[180px] sm:max-w-[250px]"
          />
        </div>

        {/* Top Border */}
        <div className="w-full border-t-2 border-[#DF911A] mb-3 sm:mb-4"></div>

        {/* Navigation Links */}
        <div className="w-full flex justify-center">
          <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm text-center">
            <Link
              href="/"
              className="text-white hover:text-orange-400 transition-colors px-2 py-1"
            >
              Contact Info
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="#"
              className="text-white hover:text-orange-400 transition-colors px-2 py-1"
            >
              Support Hotline
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="#"
              className="text-white hover:text-orange-400 transition-colors px-2 py-1"
            >
              Legal
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="#"
              className="text-white hover:text-orange-400 transition-colors px-2 py-1"
            >
              Privacy
            </Link>
          </nav>
        </div>

        {/* Bottom Border */}
        <div className="w-full border-t-2 border-[#DF911A] mt-3 sm:mt-4"></div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center">
        <p className="text-white text-xs sm:text-sm font-semibold">
          © 2025 GULFTICKET ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
