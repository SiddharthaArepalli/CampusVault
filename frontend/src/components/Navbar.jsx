import React from "react";
import { Link } from "react-router-dom";
import lockOpenIcon from "../assets/lock-open.svg";

const Navbar = () => (
  <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-black bg-white z-10 relative">
    <div className="flex items-center gap-2">
      <img src={lockOpenIcon} alt="open lock" className="h-12 w-12" />
      <span className="text-2xl font-semibold text-black">CampusVault</span>
    </div>
  <nav className="flex items-center gap-8 text-black text-lg">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/resources" className="font-semibold hover:underline">Resources</Link>
      <Link to="/clubs" className="hover:text-gray-400">Clubs</Link>
      <Link to="/roadmaps" className="hover:text-gray-400">Roadmaps</Link>
      <Link to="/hackathons" className="hover:text-gray-400">Hackathons</Link>
    </nav>
    <div className="hidden sm:flex items-center gap-4">
      <Link to="/login" className="text-black hover:text-gray-400">Sign in</Link>
      <Link to="/signup" className="bg-black text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-gray-800 transition">
        Get Started <span className="text-xl">→</span>
      </Link>
    </div>
  </header>
);

export default Navbar;
