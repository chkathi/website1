import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar.js";
import { Home } from "./pages/Home.js";
import { Resume } from "./pages/Resume.js";
import { Projects } from "./pages/Projects.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<h1>404: Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
