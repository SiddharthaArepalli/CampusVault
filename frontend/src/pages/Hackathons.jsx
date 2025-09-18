
import React from 'react';
import Navbar from '../components/Navbar';

const hackathons = [
  {
    name: 'RevenueCat Shipaton 2025',
    theme: ['Mobile', 'Design'],
    type: ['Online', 'Public'],
    date: 'STARTS 1/10/25',
    link: '#',
  },
  {
    name: 'VJ Hackathon 2025',
    theme: ['Agriculture', 'HealthCare', 'EduTech', 'Industry 4.0'],
    type: ['Offline', 'Closed'],
    date: 'STARTS 17/10/25',
    link: '#',
  },
  {
    name: 'United Hacks V6',
    theme: ['Beginner Friendly', 'Design', 'Education'],
    type: ['Online', 'Public'],
    date: 'STARTS 06/01/26',
    link: '#',
  },
  {
    name: 'HealthTech Sprint',
    theme: ['Healthcare', 'Wearables'],
    type: ['Offline', 'Open'],
    date: 'STARTS 10/11/25',
    link: '#',
  },
  {
    name: 'FinTech Innovators',
    theme: ['Finance', 'Blockchain'],
    type: ['Online', 'Open'],
    date: 'STARTS 05/10/25',
    link: '#',
  },
];

const Hackathons = () => (
  <div className="min-h-screen bg-white text-gray-900 px-4 md:px-10 pb-8" style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif' }}>
    <Navbar />
    {/* Hero Section (copied from Roadmaps) */}
    <section className="w-full flex flex-col items-center justify-center pt-14 pb-10 px-2">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-3">Explore Hackathons</h1>
      <p className="text-lg md:text-xl text-black text-center max-w-2xl mb-2">See upcoming and past hackathons with details.</p>
      <p className="text-base md:text-lg text-gray-700 text-center max-w-xl italic mb-6">Find the perfect hackathon to challenge yourself, collaborate, and innovate—one event at a time.</p>
    </section>
    <div className="flex flex-wrap gap-8 justify-center">
      {hackathons.map((hack, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow border border-gray-100 p-7 flex flex-col w-full max-w-xs min-h-[340px]">
          <a href={hack.link} className="text-lg font-bold text-blue-900 mb-1 hover:underline">{hack.name}</a>
          <span className="text-xs font-semibold text-gray-500 mb-2">HACKATHON</span>
          <div className="mb-2">
            <span className="text-xs font-bold text-gray-700">THEME</span>
            <div className="flex flex-wrap gap-2 mt-1 mb-2">
              {hack.theme.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {hack.type.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <span className="block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full w-fit mb-2">{hack.date}</span>
          </div>
          <div className="mt-auto">
            <button className="bg-black text-white w-full py-2.5 rounded-lg font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-400">APPLY NOW</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Hackathons;
