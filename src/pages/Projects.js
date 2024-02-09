import { React, useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

export const Projects = () => {
  // const [projects, setProjects] = useState([{}]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      href="#projects"
    >
      <div className="project-section">
        <div className="project">Project 1</div>

        <div className="project">Project 2</div>

        <div className="project">Project 3</div>
      </div>
    </motion.div>
  );
};
