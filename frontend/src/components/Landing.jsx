
import React, { useState } from "react";
import { Link } from "react-router-dom";
import campusVaultLogo from "../assets/campusvault-logo.svg";
import lockOpenIcon from "../assets/lock-open.svg";
import "../App.css";

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen flex flex-col">
    {/* Header */}
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 z-10 relative">
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
      {/* Hero Section */}
  <main className="flex-1 flex flex-col items-center justify-center px-4 pt-8 pb-16 z-10 relative">
        <div className="flex flex-col items-center gap-4 mb-4">
          <img src={lockOpenIcon} alt="open lock" className="h-12 w-12" />
          <h1 className="text-6xl font-bold text-gray-900 leading-tight text-center">Welcome to CampusVault</h1>
        </div>
        <p className="mt-4 text-2xl text-gray-700 max-w-2xl text-center italic">
          Your all-in-one platform for campus resources, clubs, learning roadmaps, and hackathons.<br/>
        </p>
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          <Link to="/resources" className="px-6 py-3 bg-black text-white font-semibold rounded shadow hover:bg-gray-900 transition">Resources</Link>
          <Link to="/clubs" className="px-6 py-3 bg-black text-white font-semibold rounded shadow hover:bg-gray-900 transition">Clubs</Link>
          <Link to="/roadmaps" className="px-6 py-3 bg-black text-white font-semibold rounded shadow hover:bg-gray-900 transition">Roadmaps</Link>
          <Link to="/hackathons" className="px-6 py-3 bg-black text-white font-semibold rounded shadow hover:bg-gray-900 transition">Hackathons</Link>
        </div>
      {/* What CampusVault Offers Section */}
      <section className="w-full flex flex-col items-center py-12 px-4 bg-transparent mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What CampusVault Offers?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {/* Resources Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 flex flex-col gap-4 min-w-[240px] max-w-[260px] mx-auto min-h-[320px]">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-black text-2xl border border-gray-200">📚</span>
              <div className="flex-1">
                <span className="block text-gray-800 font-semibold text-base">Study Resources</span>
                <div className="flex gap-2 mt-1">
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Upload</span>
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Filter</span>
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Access</span>
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-sm mt-2 mb-4">Upload, access, and filter study materials by year, semester, branch, and subject.</div>
            <Link to="/resources" className="ml-auto mt-auto flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition text-sm">
              Explore <span className="text-lg">&#8599;</span>
            </Link>
          </div>
          {/* Clubs Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 flex flex-col gap-4 min-w-[240px] max-w-[260px] mx-auto min-h-[320px]">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-black text-2xl border border-gray-200">🎉</span>
              <div className="flex-1">
                <span className="block text-gray-800 font-semibold text-base">Clubs</span>
                <div className="flex gap-2 mt-1">
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Browse</span>
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Join</span>
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Connect</span>
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-sm mt-2 mb-4">Browse and join campus clubs. Discover activities and connect with peers.</div>
            <Link to="/clubs" className="ml-auto mt-auto flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition text-sm">
              Explore <span className="text-lg">&#8599;</span>
            </Link>
          </div>
          {/* Roadmaps Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 flex flex-col gap-4 min-w-[240px] max-w-[260px] mx-auto min-h-[320px]">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-black text-2xl border border-gray-200">🗺️</span>
              <div className="flex-1">
                <span className="block text-gray-800 font-semibold text-base">Learning Roadmaps</span>
                <div className="flex gap-2 mt-1">
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Milestones</span>
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Paths</span>
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-sm mt-2 mb-4">Follow structured learning paths with milestones to achieve your academic goals.</div>
            <Link to="/roadmaps" className="ml-auto mt-auto flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition text-sm">
              Explore <span className="text-lg">&#8599;</span>
            </Link>
          </div>
          {/* Hackathons Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 flex flex-col gap-4 min-w-[240px] max-w-[260px] mx-auto min-h-[320px]">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-black text-2xl border border-gray-200">💡</span>
              <div className="flex-1">
                <span className="block text-gray-800 font-semibold text-base">Hackathons</span>
                <div className="flex gap-2 mt-1">
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Participate</span>
                  <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">Showcase</span>
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-sm mt-2 mb-4">Find upcoming and past hackathons. View details and participate to showcase your skills.</div>
            <Link to="/hackathons" className="ml-auto mt-auto flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition text-sm">
              Explore <span className="text-lg">&#8599;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex flex-col items-center py-16 px-4 bg-transparent">
        <div className="max-w-6xl w-full flex flex-col items-center">
          {/* Images grid */}
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gray-100 text-gray-900 text2xl md:text-xl font-bold">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-2">Trusted by Students<br className="hidden md:block"/> Across Campus</h2>
          <p className="text-lg md:text-2xl text-gray-500 text-center mb-8 max-w-2xl">See how CampusVault is helping students achieve more in academics, clubs, and beyond.</p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center overflow-hidden p-0 max-w-[220px] mx-auto">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Aarav Sharma" className="w-full h-32 object-cover filter grayscale" />
              <div className="w-full bg-white p-3 flex flex-col items-start">
                <span className="font-semibold text-gray-900 text-base">Aarav Sharma</span>
                <span className="text-gray-500 text-sm mb-1">3rd Year, B.Tech CSE</span>
                <span className="text-gray-700 text-sm italic">“CampusVault made it so easy to find previous year papers and upload my own notes. The resource filters save me so much time!”</span>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center overflow-hidden p-0 max-w-[220px] mx-auto">
              <img src="https://randomuser.me/api/portraits/women/66.jpg" alt="Priya Verma" className="w-full h-32 object-cover filter grayscale" />
              <div className="w-full bg-white p-3 flex flex-col items-start">
                <span className="font-semibold text-gray-900 text-base">Priya Verma</span>
                <span className="text-gray-500 text-sm mb-1">2nd Year, BBA</span>
                <span className="text-gray-700 text-sm italic">“I joined two new clubs through CampusVault and made great friends. The clubs section is super organized and easy to browse.”</span>
              </div>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center overflow-hidden p-0 max-w-[220px] mx-auto">
              <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Rahul Mehta" className="w-full h-32 object-cover filter grayscale" />
              <div className="w-full bg-white p-3 flex flex-col items-start">
                <span className="font-semibold text-gray-900 text-base">Rahul Mehta</span>
                <span className="text-gray-500 text-sm mb-1">1st Year, MBA</span>
                <span className="text-gray-700 text-sm italic">“The learning roadmaps helped me plan my semester and track my progress. I love the milestone features!”</span>
              </div>
            </div>
            {/* Testimonial Card 4 */}
            <div className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center overflow-hidden p-0 max-w-[220px] mx-auto">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Sneha Patil" className="w-full h-32 object-cover filter grayscale" />
              <div className="w-full bg-white p-3 flex flex-col items-start">
                <span className="font-semibold text-gray-900 text-base">Sneha Patil</span>
                <span className="text-gray-500 text-sm mb-1">4th Year, B.Sc Physics</span>
                <span className="text-gray-700 text-sm italic">“CampusVault keeps me updated on all hackathons and events. I found my first hackathon team here!”</span>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition flex items-center gap-2">
            Read Success Stories <span className="text-lg">&#8594;</span>
          </button>
        </div>
      </section>
      </main>
      {/* Footer */}
        {/* Footer */}
        <footer className="w-fullbg-opacity-90 border-0 mt-5pt-10 pb-4 px-4 font-gilroy">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
            {/* Logo only */}
            <div className="flex-1 min-w-[220px] mb-8 md:mb-0 flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight">CampusVault</span>
            </div>
            {/* Links */}
            <div className="flex-[2] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="font-bold text-gray-900 mb-2 text-sm">PRODUCTS</div>
                <ul className="space-y-1 text-sm">
                  <li><a href="#resources" className="text-gray-600 hover:text-black">Resources</a></li>
                  <li><a href="#clubs" className="text-gray-600 hover:text-black">Clubs</a></li>
                  <li><a href="#roadmaps" className="text-gray-600 hover:text-black">Roadmaps</a></li>
                  <li><a href="#hackathons" className="text-gray-600 hover:text-black">Hackathons</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-2 text-sm">RESOURCES</div>
                <ul className="space-y-1 text-sm">
                  <li><a href="#blog" className="text-gray-600 hover:text-black">Blog</a></li>
                  <li><a href="#newsletter" className="text-gray-600 hover:text-black">Newsletter</a></li>
                  <li><a href="#community" className="text-gray-600 hover:text-black">Community</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-2 text-sm">QUICK LINKS</div>
                <ul className="space-y-1 text-sm">
                  <li><a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a></li>
                  <li><a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a></li>
                  <li><a href="#merch" className="text-gray-600 hover:text-black">Merch</a></li>
                  <li><a href="#support" className="text-gray-600 hover:text-black">Support</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-2 text-sm">LEGAL</div>
                <ul className="space-y-1 text-sm">
                  <li><a href="#terms" className="text-gray-600 hover:text-black">Terms</a></li>
                  <li><a href="#privacy" className="text-gray-600 hover:text-black">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          {/* <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t text-xs text-gray-500 gap-2">
            <div>© 2025 CampusVault. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Contact</span>
              <a href="mailto:contact@campusvault.com" className="inline-flex items-center gap-1 px-2 py-1 border border-gray-200 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>contact@campusvault.com</a>
            </div>
          </div> */}
        {/* <div>© 2025 CampusVault. All rights reserved.</div> */}
        </footer>
    </div>
  );
};

export default Landing;
