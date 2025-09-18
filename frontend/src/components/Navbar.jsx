
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import lockOpenIcon from "../assets/lock-open.svg";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
  <header className="flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 border-b border-gray-100 bg-none z-10 relative">
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
        <Link to="/" className={location.pathname === '/' ? "font-semibold text-gray-900 border-b-2 border-gray-900" : "font-semibold text-gray-900"}>Home</Link>
        <Link to="/resources" className={location.pathname === '/resources' ? "font-semibold text-gray-900 border-b-2 border-gray-900" : ""}>Resources</Link>
        <Link to="/clubs" className={location.pathname === '/clubs' ? "font-semibold text-gray-900 border-b-2 border-gray-900" : ""}>Clubs</Link>
        <Link to="/roadmaps" className={location.pathname === '/roadmaps' ? "font-semibold text-gray-900 border-b-2 border-gray-900" : ""}>Roadmaps</Link>
        <Link to="/hackathons" className={location.pathname === '/hackathons' ? "font-semibold text-gray-900 border-b-2 border-gray-900" : ""}>Hackathons</Link>
      </nav>
      <div className="hidden sm:flex items-center gap-4">
        {/* <a
          href="https://github.com/SiddharthaArepalli/CampusVault"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-black bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          Star on GitHub
        </a> */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-gray-900 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="text-gray-700">Sign in</Link>
            <Link to="/signup" className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-gray-900 transition">
              Get Started <span className="text-xl">→</span>
            </Link>
          </>
        )}
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <>
          {/* Opaque overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[998] sm:hidden animate-fade-in"></div>
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl rounded-b-2xl flex flex-col items-center py-6 px-4 z-[999] sm:hidden animate-fade-in">
            <nav className="w-full max-w-xs mx-auto flex flex-col gap-2">
              <Link to="/" className={`py-3 w-full text-center font-semibold rounded-lg transition ${location.pathname === '/' ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-100' : 'text-gray-900 hover:bg-gray-100'}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/resources" className={`py-3 w-full text-center rounded-lg transition ${location.pathname === '/resources' ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setMenuOpen(false)}>Resources</Link>
              <Link to="/clubs" className={`py-3 w-full text-center rounded-lg transition ${location.pathname === '/clubs' ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setMenuOpen(false)}>Clubs</Link>
              <Link to="/roadmaps" className={`py-3 w-full text-center rounded-lg transition ${location.pathname === '/roadmaps' ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setMenuOpen(false)}>Roadmaps</Link>
              <Link to="/hackathons" className={`py-3 w-full text-center rounded-lg transition ${location.pathname === '/hackathons' ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setMenuOpen(false)}>Hackathons</Link>
            </nav>
            <div className="w-full max-w-xs mx-auto flex flex-col gap-2 mt-4">
              {isLoggedIn ? (
                <button
                  onClick={() => { setMenuOpen(false); handleLogout(); }}
                  className="py-3 w-full text-center text-white bg-black rounded-lg font-semibold shadow hover:bg-gray-900 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="py-3 w-full text-center text-gray-700 rounded-lg hover:bg-gray-100 transition" onClick={() => setMenuOpen(false)}>Sign in</Link>
                  <Link to="/signup" className="py-3 w-full text-center text-white bg-gray-800 rounded-lg font-semibold shadow hover:bg-gray-900 transition" onClick={() => setMenuOpen(false)}>
                    Get Started <span className="text-xl">→</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
