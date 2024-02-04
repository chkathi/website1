import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Routes path="/"></Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
