import React from "react";
import "../App.css";
// import { useState, createContext } from "react";
import { Projects } from "./Projects";
import { Title } from "./Title";

export const Home = (props) => {
  return (
    <div className="home-page">
      <section>
        <Title />
      </section>
      <section id="projects-page">
        <Projects />
      </section>
    </div>
  );
};
