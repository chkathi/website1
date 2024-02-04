import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
};
