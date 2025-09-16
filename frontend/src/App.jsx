import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Resources from "./pages/Resources";
import Clubs from "./pages/Clubs";
import Roadmaps from "./pages/Roadmaps";
import Hackathons from "./pages/Hackathons";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col z-10">
        {/* <div className="mesh-background" aria-hidden="true"></div> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
