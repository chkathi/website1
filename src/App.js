import "./App.css";
import { Home } from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.js";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>

        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
