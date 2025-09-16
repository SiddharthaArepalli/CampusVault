import React, { act } from 'react';
import { Link } from 'react-router-dom';
import lockOpenIcon from "../assets/lock-open.svg";
const clubsData = [
  {
    name: "Arts Club",
    activities: ["Dance", "Sing", "Act"],
    description: "Participate in dance, singing, and acting activities with the Arts Club.",
    link: "https://sreenidhi.edu.in/snist_clubs/arts-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Arts_icon.png",
    emoji: "🎨"
  },
  {
    name: "Sports Club",
    activities: ["Play", "Train", "Compete"],
    description: "Participate in sports and stay active.",
    link: "https://sreenidhi.edu.in/snist_clubs/sports/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Theatre_icon.png",
    emoji: "⚽"
  },
  {
    name: "IEEE Club",
    activities:["Workshops", "Projects", "Competitions"],
    description: "Work on tech projects and connect with professionals.",
    link: "https://sreenidhi.edu.in/snist_clubs/ieee/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Music_icon.png",
    emoji: "💡"
  },
  {
    name: "ISTE Club",
    activities: ["Workshops", "Competitions", "Networking"],
    description: "Join tech events and enhance engineering skills.",
    link: "https://sreenidhi.edu.in/snist_clubs/iste/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Book_icon.png",
    emoji: "🛠️"
  },
  {
    name: "Bachpan-Prayas Club",
    activities: ["Volunteering", "Events", "Donations"],
    description: "Support children’s welfare and community initiatives.",
    link: "https://sreenidhi.edu.in/snist_clubs/bachpan-prayas-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Globe_icon.png",
    emoji: "🧸"
  },
  {
    name:"Civil Services Aspirants",
    activities: ["Study Groups", "Mock Tests", "Discussions"],
    description: "Prepare for civil services exams with peer support.",
    link: "https://sreenidhi.edu.in/snist_clubs/civil-services-aspirants-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Government_icon.png",
    emoji: "📚"
  },
  {
    name: "Robotics Club",
    activities: ["Building", "Programming", "Competitions"],
    description: "Design and build robots for various challenges.",
    link: "https://sreenidhi.edu.in/snist_clubs/robotics-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Robot_icon.png",
    emoji: "🤖"
  },
  {
    name: "LIT Club",
    activities: ["Reading", "Discussions", "Events"],
    description: "Engage in literary activities and book discussions.",
    link: "https://sreenidhi.edu.in/snist_clubs/lit-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Book_icon.png",
    emoji: "📖"
  },
  {
    name: "Electronix Club",
    activities: ["Circuits", "Projects", "Workshops"],
    description: "Explore electronics through hands-on projects.",
    link: "https://sreenidhi.edu.in/snist_clubs/electronix-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Electronics_icon.png",
    emoji: "🔌"
  },
  {
    name:"SAE",
    activities: ["Design", "Build"],
    description: "Participate in automotive design and racing events.",
    link: "https://sreenidhi.edu.in/snist_clubs/sae/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Car_icon.png",
    emoji: "🏎️"
  },
];

const Clubs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col px-6 py-8" style={{ fontFamily: 'Gilroy, Inter, Segoe UI, Arial, sans-serif' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 mb-8">
        <div className="flex items-center gap-2">
          <img src={lockOpenIcon} alt="open lock" className="h-12 w-12" />
          <span className="text-2xl font-semibold text-gray-800">CampusVault</span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-gray-600 text-lg">
          <Link to="/">Home</Link>
          <Link to="/resources" >Resources</Link>
          <Link to="/clubs" className="font-semibold text-gray-900">Clubs</Link>
          <Link to="/roadmaps">Roadmaps</Link>
          <Link to="/hackathons">Hackathons</Link>
        </nav>
      </header>

      <h1 className="text-4xl font-bold mb-4">Clubs</h1>
      <p className="mb-6 text-gray-700">Browse different clubs and their activities.</p>

      <div className="flex items-center gap-3 mb-6">
        
        <h2 className="text-2xl font-semibold">Cultural Clubs</h2>
        
      </div>

      <div className="flex flex-wrap justify-center items-start gap-6">
        {clubsData.map(({ name, activities, description, link, emoji }) => (
          <div
            key={name}
            className="relative rounded-2xl shadow p-6 border border-gray-200 flex flex-col gap-4 min-w-[240px] max-w-[260px] min-h-[320px] bg-white"
          >
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-black text-2xl border border-gray-200">
                  {emoji}
                </span>
                <span className="block text-gray-900 font-bold text-base">{name}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activities.map(activity => (
                  <span key={activity} className="bg-gray-100 text-gray-800 rounded px-2 py-1 text-xs font-medium">{activity}</span>
                ))}
              </div>

              <div className="text-gray-600 text-sm mt-2 flex-1">{description}</div>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto mt-auto flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition text-sm"
            >
              Know More <span className="text-lg">&#8599;</span>
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mb-6">
        
        <h2 className="text-2xl font-semibold">Technical Clubs</h2>
        
      </div>
    </div>
  );
};

export default Clubs;
