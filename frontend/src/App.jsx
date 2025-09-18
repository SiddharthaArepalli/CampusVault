import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Resources from "./pages/Resources";
import ResourcesView from "./pages/ResourcesView";
import ResourcesAdd from "./pages/ResourcesAdd";
import Clubs from "./pages/Clubs";
import Roadmaps from "./pages/Roadmaps";
import Hackathons from "./pages/Hackathons";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ViewAcademic from "./pages/ViewAcademic";
import ViewDomain from "./pages/ViewDomain";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col z-10">
        {/* <div className="mesh-background" aria-hidden="true"></div> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/view" element={<ResourcesView />} />
          <Route path="/resources/add" element={<ResourcesAdd />} />
            <Route path="/view/academic" element={<ViewAcademic />} />
            <Route path="/view/domain" element={<ViewDomain />} />
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
