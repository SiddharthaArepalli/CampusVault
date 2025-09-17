import React from 'react';
import { Link } from 'react-router-dom';
import lockOpenIcon from '../assets/lock-open.svg';

const hackathons = [
  {
    id: 1,
    title: 'RevenueCat Shipaton 2025',
    themes: ['Mobile', 'Design'],
    statuses: ['Online', 'Public'],
    startDate: '1/10/25',
    link: 'https://shorturl.at/i4dsT',
  },
  {
    id: 2,
    title: 'VJ Hackathon 2025',
    themes: ['Agriculture', 'HealthCare', 'EduTech', 'Industry 4.0'],
    statuses: ['Offline', 'Closed'],
    startDate: '17/10/25',
    link: 'https://vnrvjietcsi.com/vjh',
  },
  {
    id: 3,
    title: 'United Hacks V6',
    themes: ['Beginner Friendly', 'Design', 'Education'],
    statuses: ['Online', 'Public'],
    startDate: '06/01/26',
    link: 'https://shorturl.at/bCcrw',
  },
  {
    id: 4,
    title: 'HealthTech Sprint',
    themes: ['Healthcare', 'Wearables'],
    statuses: ['Offline', 'Open'],
    startDate: '10/11/25',
    link: 'https://dummy-link4.com',
  },
  {
    id: 5,
    title: 'FinTech Innovators',
    themes: ['Finance', 'Blockchain'],
    statuses: ['Online', 'Open'],
    startDate: '05/10/25',
    link: 'https://dummy-link5.com',
  },
  {
    id: 1,
    title: 'RevenueCat Shipaton 2025',
    themes: ['Mobile', 'Design'],
    statuses: ['Online', 'Public'],
    startDate: '1/10/25',
    link: 'https://shorturl.at/i4dsT',
  },
  {
    id: 2,
    title: 'VJ Hackathon 2025',
    themes: ['Agriculture', 'HealthCare', 'EduTech', 'Industry 4.0'],
    statuses: ['Offline', 'Closed'],
    startDate: '17/10/25',
    link: 'https://vnrvjietcsi.com/vjh',
  },
  {
    id: 3,
    title: 'United Hacks V6',
    themes: ['Beginner Friendly', 'Design', 'Education'],
    statuses: ['Online', 'Public'],
    startDate: '06/01/26',
    link: 'https://shorturl.at/bCcrw',
  },
  {
    id: 4,
    title: 'HealthTech Sprint',
    themes: ['Healthcare', 'Wearables'],
    statuses: ['Offline', 'Open'],
    startDate: '10/11/25',
    link: 'https://dummy-link4.com',
  },
  {
    id: 5,
    title: 'FinTech Innovators',
    themes: ['Finance', 'Blockchain'],
    statuses: ['Online', 'Open'],
    startDate: '05/10/25',
    link: 'https://dummy-link5.com',
  },
  {
    id: 1,
    title: 'RevenueCat Shipaton 2025',
    themes: ['Mobile', 'Design'],
    statuses: ['Online', 'Public'],
    startDate: '1/10/25',
    link: 'https://shorturl.at/i4dsT',
  },
  {
    id: 2,
    title: 'VJ Hackathon 2025',
    themes: ['Agriculture', 'HealthCare', 'EduTech', 'Industry 4.0'],
    statuses: ['Offline', 'Closed'],
    startDate: '17/10/25',
    link: 'https://vnrvjietcsi.com/vjh',
  },
  {
    id: 3,
    title: 'United Hacks V6',
    themes: ['Beginner Friendly', 'Design', 'Education'],
    statuses: ['Online', 'Public'],
    startDate: '06/01/26',
    link: 'https://shorturl.at/bCcrw',
  },
  {
    id: 4,
    title: 'HealthTech Sprint',
    themes: ['Healthcare', 'Wearables'],
    statuses: ['Offline', 'Open'],
    startDate: '10/11/25',
    link: 'https://dummy-link4.com',
  },
  {
    id: 5,
    title: 'FinTech Innovators',
    themes: ['Finance', 'Blockchain'],
    statuses: ['Online', 'Open'],
    startDate: '05/10/25',
    link: 'https://dummy-link5.com',
  },
];

const Pill = ({ children, className }) => (
  <span
    className={`text-xs font-semibold px-3 py-1 rounded-full border ${className} mr-2 mb-2 inline-block`}
  >
    {children}
  </span>
);

const HackathonCard = ({ title, themes, statuses, startDate, link }) => (
  <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between w-64 m-3">
    <div>
      <h3 className="text-blue-700 font-semibold text-base mb-1">{title}</h3>
      <p className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-widest">
        HACKATHON
      </p>

      <p className="text-xs font-bold uppercase text-gray-400 mb-1">THEME</p>
      <div className="mb-3">
        {themes.map((theme, idx) => (
          <Pill key={idx} className="border-gray-300 text-gray-600">
            {theme}
          </Pill>
        ))}
      </div>

      <div className="mb-3">
        {statuses.map((status, idx) => (
          <Pill
            key={idx}
            className={`border ${
              status === 'Open'
                ? 'border-gray-300 bg-gray-100 text-gray-800'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            {status}
          </Pill>
        ))}
      </div>

      <Pill className="border-gray-300 bg-gray-100 text-gray-800 font-bold mb-4">
        STARTS {startDate}
      </Pill>
    </div>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition duration-300"
    >
      APPLY NOW
    </a>
  </div>
);

const Hackathons = () => (
  <div className="relative min-h-screen flex flex-col bg-white" style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif' }}>
    

    {/* Header */}
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 z-10 relative">
      <div className="flex items-center gap-2">
        <img src={lockOpenIcon} alt="open lock" className="h-12 w-12" />
        <span className="text-2xl font-semibold text-gray-800">CampusVault</span>
      </div>
      <nav className="hidden sm:flex items-center gap-8 text-gray-600 text-lg">
        <Link to="/">Home</Link>
        <Link to="/resources" >Resources</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/roadmaps">Roadmaps</Link>
        <Link to="/hackathons" className="font-semibold text-gray-900">Hackathons</Link>
      </nav>
      <div className="hidden sm:flex items-center gap-4">
        <Link to="/login" className="text-gray-700">Sign in</Link>
        <Link to="/signup" className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-gray-900 transition">
          Get Started <span className="text-xl">→</span>
        </Link>
      </div>
    </header>

    <div className="flex flex-wrap justify-start px-8 pt-4">
      {hackathons.map((hackathon) => (
        <HackathonCard
          key={hackathon.id}
          title={hackathon.title}
          themes={hackathon.themes}
          statuses={hackathon.statuses}
          startDate={hackathon.startDate}
          link={hackathon.link}
        />
      ))}
    </div>
  </div>
);

export default Hackathons;
