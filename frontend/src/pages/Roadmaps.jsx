import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
 // ✅ Make sure Navbar exists & adjust path
// import lockOpenIcon from "../assets/lock-open.svg"; // ❌ Not used, remove if unnecessary

const ROADMAPS = [
  { label: 'Frontend', url: 'https://roadmap.sh/frontend' },
  { label: 'Backend', url: 'https://roadmap.sh/backend' },
  { label: 'Full Stack', url: 'https://roadmap.sh/full-stack' },
  { label: 'DevOps', url: 'https://roadmap.sh/devops' },
  { label: 'Data Analyst', url: 'https://roadmap.sh/data-analyst' },
  { label: 'AI Engineer', url: 'https://roadmap.sh/ai-engineer' },
  { label: 'AI and Data Scientist', url: 'https://roadmap.sh/ai-data-scientist' },
  { label: 'Data Engineer', url: 'https://roadmap.sh/data-engineer', new: true },
  { label: 'Android', url: 'https://roadmap.sh/android' },
  { label: 'Machine Learning', url: 'https://roadmap.sh/machine-learning', new: true },
  { label: 'PostgreSQL', url: 'https://roadmap.sh/postgresql' },
  { label: 'iOS', url: 'https://roadmap.sh/ios' },
];

const Roadmaps = () => (
  <div
    className="min-h-screen gap-4 bg-none text-black flex flex-col px-2 pb-16"
    style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif' }}
  >
    <div className="w-full"><Navbar /></div>

    {/* Hero Section */}
    <section className="w-full flex flex-col items-center justify-center pt-14 pb-10 px-2">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-3">
        Explore Developer Roadmaps
      </h1>
      <p className="text-lg md:text-xl text-black text-center max-w-2xl mb-2">
        Structured learning paths for every ambition.
      </p>
      <p className="text-base md:text-lg text-gray-700 text-center max-w-xl italic mb-6">
        Resources on CampusVault help you discover, plan, and master your journey—one roadmap at a time.
      </p>
    </section>

    <div className="flex justify-center mb-10">
      <button className="px-6 py-2 rounded-full bg-white text-black font-semibold border border-black shadow text-base hover:bg-black hover:text-white transition">
        Role-based Roadmaps
      </button>
    </div>

    {/* Roadmap Grid */}
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto justify-center">
      {ROADMAPS.map((roadmap) => (
        <a
          key={roadmap.label}
          href={roadmap.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-white border border-black rounded-xl px-6 py-6 flex items-center justify-between text-lg font-medium hover:bg-black hover:text-white transition group shadow"
        >
          <span>{roadmap.label}</span>
          {roadmap.new && (
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-black text-white font-bold animate-pulse border border-white">
              New
            </span>
          )}
          <span className="absolute top-2 right-2 text-black group-hover:text-white">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default Roadmaps;
