import { useState } from "react";
import { Link } from "react-router-dom";
import { ConciergeBell, Search, Menu, X } from "lucide-react";
import files from "../../constants/index";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed z-2000 py-4 px-6 bg-[#FCE7EF] flex items-center justify-between">
      {/* Logo */}
      <div className="flex lg:block items-center gap-2">
        <Link to="/" className="flex items-center">
          <img
            src={files.logo}
            alt="Lazeez Events Logo"
            className="hidden lg:block w-[283px] h-[58px]"
          />
          <img
            src={files.logo2}
            alt="Lazeez Events Logo"
            className="block lg:hidden w-[80px]"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex Poppins items-center space-x-8">
        <Link to="/" className="text-[#E91E63] font-medium hover:text-[#C2185B]">
          Home
        </Link>
        <Link
          to="/Lazeez-Packages"
          className="text-[#E91E63] font-medium hover:text-[#C2185B]"
        >
          Lazeez Packages
        </Link>
        <Link
          to="/vendor-page"
          className="text-[#E91E63] font-medium hover:text-[#C2185B]"
        >
          Become a Vendor
        </Link>
        <Link to="/about" className="text-[#E91E63] font-medium hover:text-[#C2185B]">
          About Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Search & Notification (Desktop Only) */}
      <div className="hidden lg:flex items-center bg-white rounded-full gap-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC054D] h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 focus:outline-none w-[200px]"
          />
          <div className="bg-[#948C8C] w-[2px] h-6"></div>
          <button className="relative mr-4 ml-1">
            <ConciergeBell className="h-6 w-6 text-[#E91E63]" fill="#ED004F" />
            <span className="absolute -top-1 -right-1 bg-[#E91E63] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute z-10 top-16 left-0 w-full bg-[#FCE7EF] md:hidden flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Lazeez-Packages"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            Lazeez Packages
          </Link>
          <Link
            to="/vendor-page"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Vendor
          </Link>
          <Link
            to="/about"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}
