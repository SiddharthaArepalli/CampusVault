import React, { act } from 'react';
import { Link } from 'react-router-dom';
import lockOpenIcon from "../assets/lock-open.svg";
const CultclubsData = [
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
    name: "LIT Club",
    activities: ["Reading", "Discussions", "Events"],
    description: "Engage in literary activities and book discussions.",
    link: "https://sreenidhi.edu.in/snist_clubs/lit-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Book_icon.png",
    emoji: "📖"
  },
 
 
  
];

const TechclubsData = [
  {
    name: "SDC Community",
    activities: ["Networking", "Hackathons", "Workshops"],
    description: "Join a community of developers and tech enthusiasts.",
    link: "https://sreenidhi.edu.in/snist_clubs/sdc-community/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Arts_icon.png",
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
    name: "Robotics Club",
    activities: ["Building", "Programming", "Competitions"],
    description: "Design and build robots for various challenges.",
    link: "https://sreenidhi.edu.in/snist_clubs/robotics-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Robot_icon.png",
    emoji: "🤖"
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
  {
    name:"Tech Vision",
    activities: ["Ideathons", "Coding Contests"],
    description:"A platform for innovative and futuristic technology exploration.",
    link: "https://sreenidhi.edu.in/snist_clubs/tech-vision/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Government_icon.png",
    emoji: "💡"
  },
  {
    name:"SPC",
    activities: ["Coding", "Workshops", "Competitions"],
    description:"Sharpen your programming skills with coding challenges and workshops.",
    link: "https://sreenidhi.edu.in/snist_clubs/spc/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Theatre_icon.png",
    emoji: "💻"
  },
  {
    name:"ECA",
    activities: ["Electronics", "Coding", "Workshops"],
    description:"Engage in extracurricular activities focused on electronics and coding.",
    link: "https://sreenidhi.edu.in/snist_clubs/eca/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Robot_icon.png",
    emoji: "🎧"
  },
  {
    name :"Cyber Security Club",
    activities: ["Workshops", "Competitions", "Awareness"],
    description:"Learn about cybersecurity and participate in related events.",
    link: "https://sreenidhi.edu.in/snist_clubs/cyber-security-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Globe_icon.png",
    emoji: "🛡️"
  },
  {
  name :"AI Club",
    activities: ["AI Projects", "Workshops", "Competitions"],
    description:"Explore artificial intelligence through projects and events.",
    link: "https://sreenidhi.edu.in/snist_clubs/ai-club/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Electronics_icon.png",
  },
];



const Clubs = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white px-6 py-8">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 z-10 relative">
            <div className="flex items-center gap-2">
              <img src={lockOpenIcon} alt="open lock" className="h-12 w-12" />
              <span className="text-2xl font-semibold text-gray-800">CampusVault</span>
            </div>
       <nav className="hidden sm:flex items-center gap-8 text-gray-600 text-lg">
              <Link to="/" >Home</Link>
              <Link to="/resources" >Resources</Link>
              <Link to="/clubs" className="font-semibold text-gray-900">Clubs</Link>
              <Link to="/roadmaps">Roadmaps</Link>
              <Link to="/hackathons">Hackathons</Link>
            </nav>
            <div className="hidden sm:flex items-center gap-4">
              <Link to="/login" className="text-gray-700">Sign in</Link>
              <Link to="/signup" className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-gray-900 transition">
                Get Started <span className="text-xl">→</span>
              </Link>
            </div>
            </header>

    

      <div className="flex items-center gap-3 mb-6">
        
        <h2 className="text-4xl font-bold py-4">Cultural Clubs</h2>
        
      </div>

      <div className="flex flex-wrap justify-center items-start gap-6">
        {CultclubsData.map(({ name, activities, description, link, emoji }) => (
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
        
        
        <h2 className="text-4xl font-bold py-4">Technical Clubs</h2>
        
      </div>
        
        <div className="flex flex-wrap justify-center items-start gap-6">
        {TechclubsData.map(({ name, activities, description, link, emoji }) => (
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

        
      </div>
    
  );
};

export default Clubs;
