

import React from "react";
import { Link } from "react-router-dom";
import campusVaultLogo from "../assets/campusvault-logo.svg";
import lockOpenIcon from "../assets/lock-open.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";

const Landing = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
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
          <div className="bg-white rounded-2xl shadow p-8 border border-gray-200 flex flex-col gap-6 min-w-[240px] max-w-[260px] mx-auto min-h-[320px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1">
                <span className="block text-gray-900 font-extrabold text-xl mb-4 mt-2">Study Resources</span>
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
              <div className="flex-1">
                <span className="block text-gray-900 font-extrabold text-xl mb-4 mt-2">Clubs</span>
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
              <div className="flex-1">
                <span className="block text-gray-900 font-extrabold text-xl mb-4 mt-2">Learning Roadmaps</span>
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
              <div className="flex-1">
                <span className="block text-gray-900 font-extrabold text-xl mb-4 mt-2">Hackathons</span>
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
      <Footer />
    </div>
  );
};

export default Landing;
