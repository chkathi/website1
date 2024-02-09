import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.js";
import { AnimatedRoutes } from "./components/AnimatedRoutes.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
