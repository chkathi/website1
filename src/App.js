import "./App.css";
import { Home } from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import { Resume } from "./pages/Resume.js";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/resume"} element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
