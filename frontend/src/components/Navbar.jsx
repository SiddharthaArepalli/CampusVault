
import React, { useState } from "react";
import { Link } from "react-router-dom";
import lockOpenIcon from "../assets/lock-open.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 bg-white z-10 relative">
      <div className="flex items-center gap-2">
        <img src={lockOpenIcon} alt="open lock" className="h-12 w-12" />
        <span className="text-2xl font-semibold text-gray-800">CampusVault</span>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="sm:hidden">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-8 text-gray-600 text-lg">
        <Link to="/" className="font-semibold text-gray-900">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/roadmaps">Roadmaps</Link>
        <Link to="/hackathons">Hackathons</Link>
      </nav>
      <div className="hidden sm:flex items-center gap-4">
        <Link to="/login" className="text-gray-700">Sign in</Link>
        <Link to="/signup" className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-gray-900 transition">
          Get Started <span className="text-xl">→</span>
        </Link>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md flex flex-col items-center py-4 z-[999] sm:hidden animate-fade-in">
          <Link to="/" className="py-2 w-full text-center font-semibold text-gray-900 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/resources" className="py-2 w-full text-center text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link to="/clubs" className="py-2 w-full text-center text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Clubs</Link>
          <Link to="/roadmaps" className="py-2 w-full text-center text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Roadmaps</Link>
          <Link to="/hackathons" className="py-2 w-full text-center text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Hackathons</Link>
          <Link to="/login" className="py-2 w-full text-center text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Sign in</Link>
          <Link to="/signup" className="py-2 w-full text-center text-white bg-gray-800 rounded-lg font-semibold shadow hover:bg-gray-900 transition mt-2" onClick={() => setMenuOpen(false)}>
            Get Started <span className="text-xl">→</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
