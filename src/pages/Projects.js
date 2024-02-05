import { React, useState } from "react";
import "../App.css";

export const Projects = () => {
  const [projects, setProjects] = useState([{}]);
  return (
    <div className="projects-section" href="#projects">
      <div>
        <h1>Project 1</h1>
      </div>

      <div>
        <h1>Project 2</h1>
      </div>
      <div>
        <h1>Project 3</h1>
      </div>
    </div>
  );
};
